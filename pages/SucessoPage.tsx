import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileText, Download, Printer } from "lucide-react";
import { Helmet } from "react-helmet-async";
import confetti from "canvas-confetti";
import { useLocation } from "react-router-dom";

const SucessoPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get("plan") || "Hospedagem Hero - Plano Pro";
  const domain = queryParams.get("domain") || "Nenhum";
  const domainYears = parseInt(queryParams.get("domainYears") || "0");
  const total = queryParams.get("total") || "0.00";
  const discount = queryParams.get("discount") || "0.00";
  const simulated = queryParams.get("simulated") === "true";

  useEffect(() => {
    // Dispara confetes ao carregar a página de sucesso
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const dataAtual = new Date().toLocaleDateString('pt-BR');
  const numeroFatura = Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
            background: white !important;
            color: black !important;
          }
          #printable-receipt, #printable-receipt * {
            visibility: visible;
          }
          #printable-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 40px;
            box-sizing: border-box;
            background: white;
            color: #1a1a1a;
            font-family: Arial, sans-serif;
          }
          .no-print {
            display: none !important;
          }
          .print-border {
            border: 1px solid #ddd;
          }
          .print-bg-gray {
            background-color: #f9fafb !important;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden no-print">
        <Helmet>
          <title>Pedido Confirmado | Hero Hospedagem</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-glow-radial opacity-30 mix-blend-multiply blur-3xl"></div>
        </div>

        <motion.div
          className="w-full max-w-lg bg-white rounded-3xl border border-border shadow-2xl p-8 sm:p-12 text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logohero.png"
            alt="Hero Hospedagem Logo"
            className="w-auto h-12 mx-auto mb-8 object-contain"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10" />
          </motion.div>

          <h1 className="text-3xl font-display font-bold text-text mb-4">
            Pedido Realizado!
          </h1>
          <p className="text-text-secondary text-lg mb-4">
            Obrigado por escolher a Hero Hospedagem. Seu pagamento está em processamento.
          </p>

          {simulated && (
            <div className="bg-orange-100 text-orange-800 text-sm px-4 py-2 rounded-xl mb-6 inline-block font-medium">
              Modo de Simulação (Chave da API não configurada)
            </div>
          )}

          <div className="bg-background-secondary rounded-2xl p-6 text-left border border-border mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-text flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" /> Resumo
              </h3>
              <button 
                onClick={handlePrint}
                className="text-accent hover:text-accent/80 flex items-center gap-1 text-sm font-medium transition-colors"
              >
                <Printer className="w-4 h-4" /> Baixar Recibo
              </button>
            </div>
            <ul className="space-y-3 text-sm text-text-secondary border-t border-border pt-4">
              <li className="flex justify-between">
                <span>Plano:</span>
                <span className="font-medium text-text">{plan}</span>
              </li>
              <li className="flex justify-between">
                <span>Domínio {domainYears > 0 ? `(${domainYears} anos)` : ''}:</span>
                <span className="font-medium text-text">{domain}</span>
              </li>
              {parseFloat(discount) > 0 && (
                <li className="flex justify-between text-green-600">
                  <span>Desconto:</span>
                  <span className="font-medium">- R$ {discount.replace('.', ',')}</span>
                </li>
              )}
              <li className="flex justify-between border-t border-border pt-3 mt-1 text-base">
                <span className="font-bold">Total Pago:</span>
                <span className="font-bold text-text">R$ {total.replace('.', ',')}</span>
              </li>
            </ul>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full bg-text text-white font-medium py-4 rounded-xl hover:bg-black transition-all shadow-md active:scale-[0.98]"
          >
            Voltar para a página inicial <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Printable Receipt (Hidden on Screen, Visible on Print) */}
      <div id="printable-receipt" className="hidden print:block bg-white text-black p-8 max-w-3xl mx-auto">
        <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <img src="/logohero.png" alt="Hero Hospedagem" className="h-12" />
            <div>
              <h1 className="text-2xl font-black text-gray-900 leading-tight mb-0.5">HERO HOSPEDAGEM</h1>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wide">Parceiro Oficial: Fehari Studio LTDA</p>
              <p className="text-gray-400 text-[10px]">CNPJ: 54.604.258/0001-26 | contato@feharistudio.com.br</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-1">Recibo / Fatura</h2>
            <p className="font-bold text-gray-900">Nº {numeroFatura}</p>
            <p className="text-gray-500 text-sm mt-1">Emissão: {dataAtual}</p>
          </div>
        </div>

        <div className="flex justify-between mb-10 bg-gray-50 p-4 border border-gray-200 rounded">
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Sacado (Cliente)</h3>
            <p className="font-bold text-gray-900">Cliente Hero Hospedagem</p>
            <p className="text-gray-600 text-sm">Status: <span className="font-bold">PAGO (Abacate Pay)</span></p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Método de Pagamento</h3>
            <p className="font-bold text-gray-900">Transação Digital</p>
          </div>
        </div>

        <table className="w-full mb-10 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-800 text-left bg-gray-100">
              <th className="py-3 px-4 font-bold text-gray-800 text-sm uppercase">Descrição do Serviço / Produto</th>
              <th className="py-3 px-4 text-center font-bold text-gray-800 text-sm uppercase w-24">Qtd</th>
              <th className="py-3 px-4 text-right font-bold text-gray-800 text-sm uppercase w-40">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4 text-gray-800">{plan}</td>
              <td className="py-4 px-4 text-center text-gray-800">1</td>
              <td className="py-4 px-4 text-right font-medium text-gray-900">
                {parseFloat(discount) > 0 ? `R$ ${(parseFloat(total) + parseFloat(discount)).toFixed(2).replace('.', ',')}` : `R$ ${total.replace('.', ',')}`}
              </td>
            </tr>
            {domain && domain !== "Nenhum" && (
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 text-gray-800">Registro de Domínio ({domain}) {domainYears > 0 ? `- ${domainYears} Ano(s)` : ''}</td>
                <td className="py-4 px-4 text-center text-gray-800">1</td>
                <td className="py-4 px-4 text-right font-medium text-gray-900">
                  {domainYears > 0 ? (
                    `R$ ${({1: 40, 2: 76, 3: 112, 4: 148, 5: 184}[domainYears as keyof {1: 40, 2: 76, 3: 112, 4: 148, 5: 184}] || 40).toFixed(2).replace('.', ',')}`
                  ) : "Incluso"}
                </td>
              </tr>
            )}
            {parseFloat(discount) > 0 && (
              <tr className="border-b border-gray-200 print-bg-gray">
                <td className="py-4 px-4 text-gray-600 italic">Desconto Aplicado</td>
                <td className="py-4 px-4 text-center text-gray-600">-</td>
                <td className="py-4 px-4 text-right font-medium text-gray-900">- R$ {discount.replace('.', ',')}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-80">
            <div className="flex justify-between items-center border-t-2 border-gray-800 pt-4 pb-2">
              <span className="font-bold text-sm text-gray-600 uppercase">Subtotal</span>
              <span className="font-medium text-gray-900">
                R$ {parseFloat(discount) > 0 ? (parseFloat(total) + parseFloat(discount)).toFixed(2).replace('.', ',') : total.replace('.', ',')}
              </span>
            </div>
            {parseFloat(discount) > 0 && (
              <div className="flex justify-between items-center pb-2">
                <span className="font-bold text-sm text-gray-600 uppercase">Descontos</span>
                <span className="font-medium text-gray-900">- R$ {discount.replace('.', ',')}</span>
              </div>
            )}
            <div className="flex justify-between items-center border-t-4 border-gray-900 pt-4">
              <span className="font-black text-xl text-gray-900 uppercase">Total Pago</span>
              <span className="font-black text-2xl text-gray-900">R$ {total.replace('.', ',')}</span>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t-2 border-dashed border-gray-300 text-center text-xs text-gray-500">
          <p className="font-bold text-gray-700 mb-1">Este é um documento de recibo de pagamento com validade de comprovação.</p>
          <p>Obrigado por escolher a Hero Hospedagem! Dúvidas? Entre em contato pelo nosso suporte via WhatsApp.</p>
          <p className="mt-2">Emitido eletronicamente em {dataAtual}</p>
        </div>
      </div>
    </>
  );
};

export default SucessoPage;
