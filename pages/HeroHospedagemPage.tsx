import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap, Globe, Tag, Loader2, Info, Search, XCircle, CheckCircle, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HeroHospedagemPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [years, setYears] = useState(1);
  const [domain, setDomain] = useState("");
  const [registerDomain, setRegisterDomain] = useState(false);
  
  // Domain Check States
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);
  const [domainAvailable, setDomainAvailable] = useState<boolean | null>(null);
  const [domainSearchError, setDomainSearchError] = useState("");
  const [domainYears, setDomainYears] = useState(1);

  // Customer Data
  const [customerName, setCustomerName] = useState("");
  const [customerDocument, setCustomerDocument] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const monthlyPrice = 49.9;
  const annualPrice = 347.9;

  const domainPriceTable: Record<number, number> = {
    1: 40.0,
    2: 76.0,
    3: 112.0,
    4: 148.0,
    5: 184.0,
  };

  const validCoupons: Record<string, number> = {
    "HERO10": 0.10, // 10% discount
    "HERO20": 0.20, // 20% discount
  };

  const handleApplyCoupon = () => {
    if (validCoupons[coupon.toUpperCase()]) {
      setAppliedCoupon(coupon.toUpperCase());
      setError("");
    } else {
      setError("Cupom inválido.");
      setAppliedCoupon("");
    }
  };

  const handleCheckDomain = async () => {
    if (!domain.trim()) {
      setDomainSearchError("Digite um domínio para pesquisar.");
      return;
    }

    const cleanDomain = domain.trim().toLowerCase();
    
    // Validar se termina em .br
    if (!cleanDomain.endsWith(".br")) {
      setDomainSearchError("A verificação automática suporta apenas domínios terminados em .br (ex: .com.br).");
      setDomainAvailable(null);
      setRegisterDomain(false);
      return;
    }

    setIsCheckingDomain(true);
    setDomainSearchError("");
    setDomainAvailable(null);
    setRegisterDomain(false);

    try {
      const response = await fetch(`https://rdap.registro.br/domain/${cleanDomain}`);
      
      if (response.status === 404) {
        // 404 significa que não foi encontrado no banco, logo está disponível
        setDomainAvailable(true);
        setRegisterDomain(true); // Auto-seleciona para registro
        setDomainYears(1); // Reset para 1 ano
      } else if (response.ok) {
        // Se retornar OK (200), o domínio já está registrado
        setDomainAvailable(false);
      } else {
        throw new Error("Erro ao consultar o Registro.br");
      }
    } catch (err: any) {
      setDomainSearchError("Não foi possível verificar o domínio agora. Tente novamente.");
    } finally {
      setIsCheckingDomain(false);
    }
  };

  // Resetar a busca se o usuário alterar o domínio após buscar
  const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    setDomainAvailable(null);
    setDomainSearchError("");
    setRegisterDomain(false);
  };

  const totals = useMemo(() => {
    let hostingTotal = 0;
    let discount = 0;
    let domainTotal = 0;

    if (isAnnual) {
      hostingTotal = annualPrice * years;
      if (appliedCoupon && validCoupons[appliedCoupon]) {
        discount = hostingTotal * validCoupons[appliedCoupon];
      }
    } else {
      hostingTotal = monthlyPrice;
    }

    if (registerDomain && domainAvailable) {
      domainTotal = domainPriceTable[domainYears] || 40.0;
    }

    const subtotal = hostingTotal + domainTotal;
    const finalTotal = subtotal - discount;

    return {
      hostingTotal,
      domainTotal,
      discount,
      subtotal,
      finalTotal,
    };
  }, [isAnnual, years, registerDomain, appliedCoupon, domainAvailable, domainYears]);

  const handleCheckout = async () => {
    if (registerDomain && !domainAvailable) {
      setError("Por favor, pesquise e selecione um domínio disponível primeiro.");
      return;
    }

    if (!customerName.trim() || !customerDocument.trim() || !customerEmail.trim() || !customerPhone.trim()) {
      setError("Por favor, preencha todos os campos da seção 'Dados do Titular'.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isAnnual,
          years: isAnnual ? years : 1,
          domain: domain.trim(),
          registerDomain,
          domainYears: registerDomain ? domainYears : 0,
          coupon: appliedCoupon,
          customer: {
            name: customerName.trim(),
            document: customerDocument.trim(),
            email: customerEmail.trim(),
            phone: customerPhone.trim()
          }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao processar o checkout.');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('URL de pagamento não retornada.');
      }
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro inesperado.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 sm:p-12">
      <Helmet>
        <title>Hero Hospedagem | Alta Performance</title>
        <meta name="description" content="Hospedagem de alta performance para sites exigentes. Planos mensais e anuais." />
      </Helmet>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-glow-radial opacity-30 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logohero.png"
            alt="Hero Hospedagem Logo"
            className="w-auto h-16 mx-auto mb-6 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-4">
            Monte seu Plano Pro
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Configure sua hospedagem de alta performance. Infraestrutura premium para sites que exigem velocidade.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Configurator Left Side */}
        <div className="md:col-span-3 space-y-6">
          {/* Cycle Selection */}
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" /> 1. Ciclo de Pagamento
            </h3>
            
            <div className="flex bg-background-secondary border border-border rounded-xl p-1 mb-6">
              <button
                onClick={() => setIsAnnual(false)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                  !isAnnual ? "bg-white shadow-sm text-text" : "text-text-secondary hover:text-text"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  isAnnual ? "bg-white shadow-sm text-text" : "text-text-secondary hover:text-text"
                }`}
              >
                Anual
                <span className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Melhor Custo
                </span>
              </button>
            </div>

            {isAnnual && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-text-secondary">Quantidade de anos (Hospedagem)</label>
                <div className="flex gap-3">
                  {[1, 2, 3].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                        years === y ? "border-accent bg-accent/5 text-text font-bold" : "border-border hover:border-accent/30 text-text-secondary"
                      }`}
                    >
                      {y} {y === 1 ? "Ano" : "Anos"}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Domain Selection */}
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" /> 2. Pesquisa de Domínio
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-secondary block mb-2">Qual domínio você deseja registrar?</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ex: meusite.com.br"
                    value={domain}
                    onChange={handleDomainChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheckDomain()}
                    className="flex-1 px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                  <button
                    onClick={handleCheckDomain}
                    disabled={isCheckingDomain || !domain.trim()}
                    className="bg-text text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                  >
                    {isCheckingDomain ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {domainSearchError && (
                <div className="text-sm text-red-500 flex items-center gap-1 mt-2">
                  <Info className="w-4 h-4" /> {domainSearchError}
                </div>
              )}

              {domainAvailable === false && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-start gap-3 mt-4">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Domínio Indisponível</p>
                    <p className="text-sm mt-1">O domínio <strong>{domain}</strong> já está registrado por outra pessoa. Tente outro nome.</p>
                  </div>
                </div>
              )}

              {domainAvailable === true && (
                <div className="bg-green-50 border border-green-100 text-green-700 p-5 rounded-xl mt-4">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-bold text-green-800">Domínio Disponível!</p>
                      <p className="text-sm mt-1">Ótima notícia! <strong>{domain}</strong> está livre para registro.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-green-200/50">
                    <label className="text-sm font-bold text-green-800 block mb-3">Por quantos anos deseja registrar este domínio?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((y) => (
                        <button
                          key={y}
                          onClick={() => {
                            setDomainYears(y);
                            setRegisterDomain(true);
                          }}
                          className={`py-2 px-1 rounded-lg border-2 text-xs font-medium transition-all ${
                            domainYears === y && registerDomain
                              ? "border-green-600 bg-green-600 text-white shadow-sm" 
                              : "border-green-200 bg-white text-green-700 hover:border-green-400"
                          }`}
                        >
                          <div className="text-sm font-bold mb-0.5">{y} {y === 1 ? "Ano" : "Anos"}</div>
                          <div className={domainYears === y && registerDomain ? "text-green-100" : "text-green-600/70"}>
                            R$ {domainPriceTable[y]}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Customer Form */}
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-accent" /> 3. Dados do Titular
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-text-secondary block mb-1">Nome Completo / Razão Social</label>
                <input
                  type="text"
                  placeholder="Seu nome ou nome da empresa"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary block mb-1">CPF ou CNPJ</label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  value={customerDocument}
                  onChange={(e) => setCustomerDocument(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary block mb-1">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(00) 90000-0000"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-text-secondary block mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
            <p className="text-xs text-text-secondary mt-3 flex items-start gap-1">
              <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
              Estes dados serão utilizados para o registro do domínio e criação da sua conta na Hero Hospedagem.
            </p>
          </div>
        </div>

        {/* Order Summary Right Side */}
        <div className="md:col-span-2">
          <div className="bg-text text-white p-6 rounded-2xl shadow-xl sticky top-6">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Plano Pro ({isAnnual ? `${years} Ano${years > 1 ? 's' : ''}` : 'Mensal'})</span>
                <span className="font-medium">R$ {totals.hostingTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              
              {registerDomain && domainAvailable && (
                <div className="flex justify-between">
                  <span className="text-gray-300">Domínio ({domainYears} {domainYears === 1 ? 'Ano' : 'Anos'})</span>
                  <span className="font-medium">R$ {totals.domainTotal.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              {totals.discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Desconto ({appliedCoupon})</span>
                  <span className="font-medium">- R$ {totals.discount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="text-gray-300">Total a pagar</span>
                <div className="text-right">
                  <span className="text-3xl font-display font-bold">R$ {totals.finalTotal.toFixed(2).replace('.', ',')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isAnnual ? 'pagamento único' : 'por mês'}</div>
                </div>
              </div>
            </div>

            {/* Coupon Code */}
            {isAnnual && (
              <div className="mb-6">
                <label className="text-xs text-gray-400 mb-2 block flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Possui cupom de desconto?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Código do cupom"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-sm uppercase"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-sm p-3 rounded-lg mb-6 flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processando...
                </>
              ) : (
                "Finalizar Compra"
              )}
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Ao assinar, você concorda com nossos <a href="/termos-hero" target="_blank" className="underline hover:text-white transition-colors">Termos de Serviço</a>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Features List Below */}
      <div className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { text: "Servidores Cloud Premium (100% NVMe)", icon: Zap },
          { text: "Nós cuidamos de tudo (Gerenciada)", icon: Shield },
          { text: "Migração Gratuita do seu site", icon: Check },
          { text: "Backups Diários e Anti-DDoS", icon: Shield },
          { text: "Certificado SSL Grátis", icon: Check },
          { text: "Suporte Especializado WhatsApp", icon: Zap },
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-4 h-4 text-accent" />
            </div>
            <span className="text-text-secondary text-sm font-medium">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroHospedagemPage;
