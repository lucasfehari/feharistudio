// ==========================================
// SCRIPT DE INTEGRAÇÃO - HERO HOSPEDAGEM
// ==========================================
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // ----------------------------------------------------------------
    // CASO 1: WEBHOOK DO ABACATE PAY (PAGAMENTO APROVADO)
    // ----------------------------------------------------------------
    // O Abacate Pay envia eventos como "payment.paid" ou "checkout.paid"
    
    // DEBUG: Escreve o último webhook recebido na célula Z1 para a gente ver o que chegou
    sheet.getRange("Z1").setValue(JSON.stringify(data));

    if (data.event && (data.event === "payment.paid" || data.event === "checkout.paid" || data.event === "payment.confirmed" || data.event === "billing.paid" || data.event === "checkout.completed")) {
      
      // Tenta pegar o e-mail do cliente para achar a linha na planilha
      var emailCliente = "";
      if (data.data && data.data.metadata && data.data.metadata.cliente_email) {
        emailCliente = data.data.metadata.cliente_email;
      } else if (data.data && data.data.customer && data.data.customer.email) {
        emailCliente = data.data.customer.email;
      }
      
      if (emailCliente) {
        var dadosPlanilha = sheet.getDataRange().getValues();
        
        // Procura a linha que tem o e-mail do cliente (Assumindo que Email está na Coluna D)
        // Array no Google Scripts começa no índice 0. Coluna D = Índice 3.
        for (var i = 1; i < dadosPlanilha.length; i++) {
          if (dadosPlanilha[i][3] === emailCliente) {
            // Se achou, atualiza a Coluna B (Status) para "Implementação..."
            // getRange(linha, coluna). i+1 porque a planilha começa no 1
            sheet.getRange(i + 1, 2).setValue("Implementação...");
          }
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({ "status": "sucesso", "mensagem": "Status atualizado para Implementação...!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ----------------------------------------------------------------
    // CASO 2: REQUISIÇÃO DO NOSSO SITE (CRIANDO O PEDIDO PENDENTE)
    // ----------------------------------------------------------------
    // Evita que outros webhooks aleatórios criem linhas vazias
    if (data.source !== "fehari_backend") {
      return ContentService.createTextOutput(JSON.stringify({ "status": "ignorado", "mensagem": "Evento ignorado." }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    var dataHora = new Date();
    
    // ATENÇÃO À ORDEM DAS COLUNAS: 
    // Mudei a ordem para bater EXATAMENTE com os cabeçalhos que você criou na imagem!
    
    var novaLinha = [
      dataHora, // A: Data do Pedido
      "Pendente (Verificar PIX)", // B: Status
      data.cliente_nome || "", // C: Nome Cliente
      data.cliente_email || "", // D: Email (Na imagem estava o CPF aqui, ajustei para o Email)
      data.cliente_whatsapp || "", // E: Telefone
      data.plano_nome || "", // F: Plano
      data.dominio_nome || "Nenhum", // G: Domínio
      data.vencimento_hospedagem || "", // H: Vencimento (Hospedagem)
      data.vencimento_dominio || "-", // I: Vencimento (Domínio) - Crie essa coluna!
      data.valor_total || "" // J: Valor Total (Crie essa coluna também se quiser)
    ];
    
    sheet.appendRow(novaLinha);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "sucesso", "mensagem": "Nova linha pendente adicionada!" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (erro) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "erro", "detalhe": erro.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Servidor Google Script da Fehari Studio rodando corretamente e aguardando pagamentos!");
}
