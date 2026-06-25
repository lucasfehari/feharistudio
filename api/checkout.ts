export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { isAnnual, years, domain, registerDomain, domainYears, coupon, customer } = req.body;

    const monthlyPrice = 49.9;
    const annualPrice = 347.9;
    
    const domainPriceTable: Record<number, number> = {
      1: 40.0,
      2: 76.0,
      3: 112.0,
      4: 148.0,
      5: 184.0,
    };

    let hostingTotal = 0;
    let discount = 0;
    let domainTotal = 0;

    const validCoupons: Record<string, number> = {
      "HERO10": 0.10,
      "HERO20": 0.20,
    };

    if (isAnnual) {
      hostingTotal = annualPrice * years;
      if (coupon && validCoupons[coupon.toUpperCase()]) {
        discount = hostingTotal * validCoupons[coupon.toUpperCase()];
      }
    } else {
      hostingTotal = monthlyPrice;
    }

    if (registerDomain && domainYears) {
      domainTotal = domainPriceTable[domainYears] || 40.0;
    }

    const subtotal = hostingTotal + domainTotal;
    const finalTotal = subtotal - discount;

    const priceInCents = Math.round(finalTotal * 100);

    // Cálculo de Vencimentos
    const dataAtual = new Date();
    
    let vencimentoHospedagem = new Date(dataAtual);
    if (isAnnual) {
      vencimentoHospedagem.setFullYear(vencimentoHospedagem.getFullYear() + years);
    } else {
      vencimentoHospedagem.setMonth(vencimentoHospedagem.getMonth() + 1);
    }

    let vencimentoDominioData = "-";
    if (registerDomain && domainYears) {
      const d = new Date(dataAtual);
      d.setFullYear(d.getFullYear() + domainYears);
      vencimentoDominioData = d.toLocaleDateString('pt-BR');
    }

    const description = `Plano Pro ${isAnnual ? `(${years} ano${years > 1 ? 's' : ''})` : '(Mensal)'}${registerDomain ? ` + Domínio: ${domain} (${domainYears} anos)` : ''}${discount > 0 ? ` [Cupom ${coupon} aplicado]` : ''}`;

    const baseUrl = req.headers.origin || "https://www.feharistudio.com.br";

    const successParams = new URLSearchParams({
      plan: `Plano Pro ${isAnnual ? `(${years} ano${years > 1 ? 's' : ''})` : '(Mensal)'}`,
      domain: registerDomain ? domain : 'Nenhum',
      domainYears: registerDomain ? domainYears.toString() : '0',
      total: finalTotal.toFixed(2),
      discount: discount.toFixed(2)
    });
    
    const successUrlWithParams = `${baseUrl}/sucesso?${successParams.toString()}`;

    const apiKey = process.env.ABACATE_PAY_API_KEY;

    if (!apiKey) {
      console.warn("ABACATE_PAY_API_KEY não definida. Simulando pagamento.");
      return res.status(200).json({ url: `${successUrlWithParams}&simulated=true` });
    }

    const externalProductId = `hero-pro-${Date.now()}`;

    // 1. Criar o Produto na Abacate Pay (obrigatório na V2)
    const productPayload = {
      externalId: externalProductId,
      name: "Hero Hospedagem - Plano Pro",
      description: description,
      price: priceInCents,
      currency: "BRL"
    };

    const productResponse = await fetch("https://api.abacatepay.com/v2/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(productPayload)
    });

    const productData = await productResponse.json();

    if (!productResponse.ok) {
      console.error("Abacate Pay Product Error:", productData);
      return res.status(500).json({ error: "Erro ao criar produto no Abacate Pay.", details: productData });
    }

    // Pega o ID gerado pelo Abacate Pay. Se não vier, tenta usar o externalId
    const abacateProductId = productData.data?.id || productData.data?.productId || productData.data?._id || externalProductId;

    // 2. Criar o Checkout usando o ID do Produto
    const abacatePayData: any = {
      frequency: "ONE_TIME",
      methods: ["PIX"],
      items: [
        {
          id: abacateProductId,
          quantity: 1
        }
      ],
      returnUrl: successUrlWithParams,
      completionUrl: successUrlWithParams
    };

    if (customer) {
      abacatePayData.customer = {
        name: customer.name,
        cellphone: customer.phone,
        email: customer.email,
        taxId: customer.document
      };
      
      abacatePayData.metadata = {
        cliente_nome: customer.name,
        cliente_documento: customer.document,
        cliente_email: customer.email,
        cliente_whatsapp: customer.phone,
        dominio_nome: domain,
        dominio_anos: domainYears.toString(),
        plano_anos: isAnnual ? years.toString() : "Mensal"
      };
    }

    const response = await fetch("https://api.abacatepay.com/v2/checkouts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(abacatePayData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Abacate Pay Error:", data);
      return res.status(500).json({ error: "Erro ao gerar cobrança no Abacate Pay." });
    }

    // A estrutura da resposta da API do Abacate Pay geralmente é { data: { url: "..." } }
    const url = data.data?.url || data.url;

    if (!url) {
      return res.status(500).json({ error: "URL de pagamento não retornada pela API." });
    }

    // Integração com Google Planilhas (via Google Apps Script)
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (googleScriptUrl) {
      const webhookPayload = {
        source: "fehari_backend",
        cliente_nome: customer?.name || "",
        cliente_documento: customer?.document || "",
        cliente_whatsapp: customer?.phone || "",
        cliente_email: customer?.email || "",
        plano_nome: `Plano Pro ${isAnnual ? `(${years} ano${years > 1 ? 's' : ''})` : '(Mensal)'}`,
        vencimento_hospedagem: vencimentoHospedagem.toLocaleDateString('pt-BR'),
        dominio_nome: registerDomain ? domain : "Nenhum",
        vencimento_dominio: vencimentoDominioData,
        valor_total: finalTotal.toFixed(2)
      };

      try {
        await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload)
        });
      } catch (err) {
        console.error("Erro ao enviar dados para Google Apps Script:", err);
      }
    }

    return res.status(200).json({ url });

  } catch (error) {
    console.error("Checkout Error:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}
