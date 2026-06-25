import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Globe, 
  Server, 
  User, 
  CreditCard, 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  HelpCircle,
  Hash,
  MessageSquare,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface CustomItem {
  id: string;
  desc: string;
  qty: number;
  price: string;
}

// Prices tables based on user request (puxar valores do Registro.br e planos de hospedagem)
const HOSTING_PRICES: Record<string, { mensal: number, anual: number }> = {
  'Hospedagem Hero - Plano Start': { mensal: 29.90, anual: 199.00 },
  'Hospedagem Hero - Plano Pro': { mensal: 49.90, anual: 347.90 },
  'Hospedagem Hero - Plano Turbo': { mensal: 89.90, anual: 699.00 },
  'Hospedagem Customizada - Plano Estúdio': { mensal: 149.90, anual: 1199.00 },
  'Hospedagem Dedicada VPS': { mensal: 299.90, anual: 2999.00 },
};

// Registro.br standard domain registration table
const DOMAIN_PRICES: Record<number, number> = {
  1: 40.0,
  2: 76.0,
  3: 112.0,
  4: 148.0,
  5: 184.0,
  10: 364.0,
};

// Helper function to add months or years to a YYYY-MM-DD date string
const addTimeToDate = (dateStr: string, amount: number, unit: 'months' | 'years') => {
  if (!dateStr) return '';
  // Append noon time to avoid local timezone changes during date manipulation
  const date = new Date(dateStr + 'T12:00:00');
  if (isNaN(date.getTime())) return '';
  
  if (unit === 'months') {
    date.setMonth(date.getMonth() + amount);
  } else if (unit === 'years') {
    date.setFullYear(date.getFullYear() + amount);
  }
  
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const AdminPage: React.FC = () => {
  // Provider settings
  const [provider, setProvider] = useState<'hero' | 'fehari'>('hero');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [issueDate, setIssueDate] = useState<string>('');
  const [issueTime, setIssueTime] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('Pix');
  const [paymentStatus, setPaymentStatus] = useState<'Pago' | 'Pendente' | 'Atrasado'>('Pago');
  
  // Client details
  const [clientName, setClientName] = useState<string>('');
  const [clientDocument, setClientDocument] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  // Hosting details
  const [hostingEnabled, setHostingEnabled] = useState<boolean>(true);
  const [hostingPlan, setHostingPlan] = useState<string>('Hospedagem Hero - Plano Pro');
  const [hostingDomain, setHostingDomain] = useState<string>('');
  const [hostingPrice, setHostingPrice] = useState<string>('49.90');
  const [hostingCycle, setHostingCycle] = useState<string>('Mensal');
  const [hostingStartDate, setHostingStartDate] = useState<string>('');
  const [hostingDueDate, setHostingDueDate] = useState<string>('');

  // Domain details
  const [domainEnabled, setDomainEnabled] = useState<boolean>(false);
  const [domainName, setDomainName] = useState<string>('');
  const [domainPrice, setDomainPrice] = useState<string>('40.00');
  const [domainYears, setDomainYears] = useState<number>(1);
  const [domainStartDate, setDomainStartDate] = useState<string>('');
  const [domainDueDate, setDomainDueDate] = useState<string>('');

  // Custom items list
  const [customItems, setCustomItems] = useState<CustomItem[]>([]);
  const [discount, setDiscount] = useState<string>('0.00');

  // Interactive state
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = (import.meta as any).env.VITE_ADMIN_PASSWORD || 'fehariadmin';
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  };

  // Initialize dates and invoice number
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setIssueDate(`${yyyy}-${mm}-${dd}`);

    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    setIssueTime(`${hours}:${minutes}`);

    setHostingStartDate(`${yyyy}-${mm}-${dd}`);
    setDomainStartDate(`${yyyy}-${mm}-${dd}`);

    // Generate random invoice number
    setInvoiceNumber(String(Math.floor(100000 + Math.random() * 900000)));
  }, []);

  // Automatically recalculate hosting price and due date when key factors change
  useEffect(() => {
    if (!hostingStartDate) return;
    const planPrices = HOSTING_PRICES[hostingPlan];
    if (!planPrices) return;

    let price = 0;
    let dueDate = '';

    switch (hostingCycle) {
      case 'Mensal':
        price = planPrices.mensal;
        dueDate = addTimeToDate(hostingStartDate, 1, 'months');
        break;
      case 'Trimestral':
        price = planPrices.mensal * 3;
        dueDate = addTimeToDate(hostingStartDate, 3, 'months');
        break;
      case 'Semestral':
        price = planPrices.mensal * 6;
        dueDate = addTimeToDate(hostingStartDate, 6, 'months');
        break;
      case 'Anual - 1 Ano':
        price = planPrices.anual;
        dueDate = addTimeToDate(hostingStartDate, 1, 'years');
        break;
      case 'Anual - 2 Anos':
        price = planPrices.anual * 2;
        dueDate = addTimeToDate(hostingStartDate, 2, 'years');
        break;
      case 'Anual - 3 Anos':
        price = planPrices.anual * 3;
        dueDate = addTimeToDate(hostingStartDate, 3, 'years');
        break;
      default:
        price = planPrices.mensal;
        dueDate = addTimeToDate(hostingStartDate, 1, 'months');
    }

    setHostingPrice(price.toFixed(2));
    setHostingDueDate(dueDate);
  }, [hostingPlan, hostingCycle, hostingStartDate]);

  // Automatically recalculate domain price and due date when domainYears or domainStartDate changes
  useEffect(() => {
    if (!domainStartDate) return;
    const price = DOMAIN_PRICES[domainYears] || 40.0;
    const dueDate = addTimeToDate(domainStartDate, domainYears, 'years');
    
    setDomainPrice(price.toFixed(2));
    setDomainDueDate(dueDate);
  }, [domainYears, domainStartDate]);

  const handleAddCustomItem = () => {
    const newItem: CustomItem = {
      id: Math.random().toString(36).substr(2, 9),
      desc: '',
      qty: 1,
      price: '0.00'
    };
    setCustomItems([...customItems, newItem]);
  };

  const handleUpdateCustomItem = (id: string, field: keyof CustomItem, value: any) => {
    setCustomItems(customItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const handleRemoveCustomItem = (id: string) => {
    setCustomItems(customItems.filter(item => item.id !== id));
  };

  // Calculations
  const getSubtotal = () => {
    let subtotal = 0;
    if (hostingEnabled) {
      subtotal += parseFloat(hostingPrice) || 0;
    }
    if (domainEnabled) {
      subtotal += parseFloat(domainPrice) || 0;
    }
    customItems.forEach(item => {
      const p = parseFloat(item.price) || 0;
      subtotal += p * item.qty;
    });
    return subtotal;
  };

  const getTotal = () => {
    const sub = getSubtotal();
    const disc = parseFloat(discount) || 0;
    return Math.max(0, sub - disc);
  };

  const formatCurrency = (val: number | string) => {
    const parsed = typeof val === 'string' ? parseFloat(val) : val;
    if (isNaN(parsed)) return 'R$ 0,00';
    return `R$ ${parsed.toFixed(2).replace('.', ',')}`;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const generateWhatsAppMessage = () => {
    const name = clientName ? clientName.trim() : 'Cliente';
    const subTotal = formatCurrency(getSubtotal());
    const totalVal = formatCurrency(getTotal());
    const discVal = parseFloat(discount) > 0 ? formatCurrency(discount) : '';

    let itemsStr = '';
    if (hostingEnabled) {
      itemsStr += `• *${hostingPlan}* (${hostingDomain}): ${formatCurrency(hostingPrice)} (${hostingCycle})\n`;
    }
    if (domainEnabled) {
      itemsStr += `• *Registro de Domínio* (${domainName}): ${formatCurrency(domainPrice)} (${domainYears} ${domainYears === 1 ? 'Ano' : 'Anos'})\n`;
    }
    customItems.forEach(item => {
      if (item.desc) {
        itemsStr += `• *${item.desc}* x${item.qty}: ${formatCurrency(parseFloat(item.price) * item.qty)}\n`;
      }
    });

    const companyName = provider === 'hero' ? 'Hero Hospedagem' : 'Fehari Studio';
    
    let message = `Olá, *${name}*! Tudo bem?\n\n`;
    message += `Segue o comprovante de pagamento referente aos seus serviços com a *${companyName}*:\n\n`;
    message += `*Fatura:* #${invoiceNumber}\n`;
    message += `*Data de Emissão:* ${formatDate(issueDate)} às ${issueTime}\n`;
    message += `*Método de Pagamento:* ${paymentMethod}\n`;
    message += `*Status:* ${paymentStatus.toUpperCase()} ✅\n\n`;
    message += `*Detalhes dos Itens:*\n${itemsStr}\n`;
    
    if (discVal) {
      message += `*Subtotal:* ${subTotal}\n`;
      message += `*Desconto:* -${discVal}\n`;
    }
    message += `*Valor Total:* ${totalVal}\n\n`;
    message += `O recibo oficial foi gerado e pode ser impresso ou baixado em PDF a qualquer momento.\n\n`;
    message += `Se tiver qualquer dúvida, estamos à disposição no suporte! Obrigado pela parceria. 🙏`;

    navigator.clipboard.writeText(message);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
        <Helmet>
          <title>Acesso Restrito | Painel Admin</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        {/* Background Radial Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] bg-glow-radial opacity-20 blur-3xl"></div>
        </div>

        <motion.div
          className="w-full max-w-md bg-neutral-950/70 backdrop-blur-xl rounded-3xl border border-neutral-800 shadow-2xl p-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo or Brand */}
          <div className="mb-6 flex justify-center">
            <img src="/logo-fehari-black.svg" alt="Fehari Studio Logo" className="h-10 invert brightness-200" />
          </div>

          <h1 className="text-2xl font-display font-bold text-white mb-2">
            Painel de Faturamento
          </h1>
          <p className="text-neutral-400 text-sm mb-8">
            Insira a senha mestra para acessar o gerador de recibos e comprovantes.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs text-neutral-400 font-bold mb-2 uppercase tracking-wide">
                Senha de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-orange-500 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none transition-colors"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: [0, -10, 10, -10, 10, 0], opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-xs text-red-500 font-medium bg-red-950/20 border border-red-900/30 px-3.5 py-2.5 rounded-lg flex items-center gap-2"
              >
                <span>⚠️ {error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-orange-950/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Entrar no Painel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          #admin-panel-container {
            display: none !important;
          }
          #print-receipt-section {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 40px;
            box-sizing: border-box;
            background: white;
            color: #111;
            font-family: 'Inter', Arial, sans-serif;
          }
          .print-border-b {
            border-bottom: 2px solid #111 !important;
          }
          .print-border-t {
            border-top: 1px solid #ddd !important;
          }
          .print-bg-gray {
            background-color: #f9fafb !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-badge-paid {
            border: 2px solid #10b981 !important;
            color: #10b981 !important;
            background: transparent !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      <Helmet>
        <title>Painel Administrativo | Gerador de Recibos</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Screen view admin panel wrapper */}
      <div id="admin-panel-container" className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col font-sans">
        {/* Header Bar */}
        <header className="bg-neutral-950 border-b border-neutral-800 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-neutral-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-display font-bold text-xl leading-none flex items-center gap-2 text-white">
                Painel Admin <span className="bg-orange-500/10 text-orange-500 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-orange-500/20">Faturamento</span>
              </h1>
              <p className="text-xs text-neutral-400 mt-1">Gerador de recibos e comprovantes de pagamento</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={generateWhatsAppMessage}
              className="flex items-center gap-2 px-4 py-2 bg-green-600/15 border border-green-500/30 hover:bg-green-600/25 text-green-400 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
            >
              {copiedText ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  Copiado!
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4" />
                  Mensagem WhatsApp
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 border border-orange-500 hover:bg-orange-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-orange-950/20 active:scale-[0.98]"
            >
              <Printer className="w-4 h-4" />
              Imprimir / PDF
            </button>
          </div>
        </header>

        {/* Workspace Layout */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left panel - Form Controls */}
          <section className="w-full lg:w-[45%] bg-neutral-900 border-r border-neutral-800 p-6 overflow-y-auto max-h-[calc(100vh-73px)] space-y-6">
            
            {/* 1. Emissor e Metadados */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                <Hash className="w-4 h-4" /> 1. Configuração do Emissor
              </h2>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setProvider('hero')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    provider === 'hero' 
                      ? 'bg-orange-500/10 border-orange-500 text-white shadow-sm' 
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <img src="/logohero.png" alt="Hero Hospedagem" className="h-6 object-contain filter brightness-100 mb-1" />
                  <span className="text-xs font-bold font-display">Hero Hospedagem</span>
                </button>
                <button
                  type="button"
                  onClick={() => setProvider('fehari')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    provider === 'fehari' 
                      ? 'bg-orange-500/10 border-orange-500 text-white shadow-sm' 
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <img src="/logo-fehari-black.svg" alt="Fehari Studio" className="h-6 object-contain filter invert brightness-200 mb-1" />
                  <span className="text-xs font-bold font-display">Fehari Studio</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Número do Recibo</label>
                  <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Data de Emissão</label>
                  <input
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Hora de Emissão</label>
                  <input
                    type="time"
                    value={issueTime}
                    onChange={(e) => setIssueTime(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Método de Pagamento</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Pix">Pix</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Boleto Bancário">Boleto Bancário</option>
                    <option value="Transferência Bancária">Transferência Bancária</option>
                    <option value="Saldo da Carteira">Saldo da Carteira</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Status do Pagamento</label>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value as any)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Pago">Pago (Quitado)</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Atrasado">Atrasado / Pendente</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Dados do Cliente */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                <User className="w-4 h-4" /> 2. Dados do Cliente
              </h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Nome do Cliente / Empresa</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Lucas Fehari Studio"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">CPF / CNPJ (Opcional)</label>
                    <input
                      type="text"
                      value={clientDocument}
                      onChange={(e) => setClientDocument(e.target.value)}
                      placeholder="Ex: 54.604.258/0001-26"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">WhatsApp / Telefone</label>
                    <input
                      type="text"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Ex: (64) 99960-2571"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">E-mail do Cliente</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Ex: cliente@email.com"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 3. Serviço de Hospedagem */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                  <Server className="w-4 h-4" /> 3. Hospedagem
                </h2>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hostingEnabled}
                    onChange={(e) => setHostingEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neutral-400 after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:bg-white peer-checked:bg-orange-600"></div>
                </label>
              </div>

              {hostingEnabled && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Plano de Hospedagem</label>
                      <select
                        value={hostingPlan}
                        onChange={(e) => setHostingPlan(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Hospedagem Hero - Plano Start">Hero Start</option>
                        <option value="Hospedagem Hero - Plano Pro">Hero Pro</option>
                        <option value="Hospedagem Hero - Plano Turbo">Hero Turbo</option>
                        <option value="Hospedagem Customizada - Plano Estúdio">Plano Estúdio</option>
                        <option value="Hospedagem Dedicada VPS">Hospedagem Dedicada VPS</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Domínio Principal</label>
                      <input
                        type="text"
                        value={hostingDomain}
                        onChange={(e) => setHostingDomain(e.target.value)}
                        placeholder="Ex: meusite.com.br"
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Preço (R$)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={hostingPrice}
                        onChange={(e) => setHostingPrice(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Ciclo de Cobrança</label>
                      <select
                        value={hostingCycle}
                        onChange={(e) => setHostingCycle(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Mensal">Mensal</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Semestral">Semestral</option>
                        <option value="Anual - 1 Ano">Anual (1 Ano)</option>
                        <option value="Anual - 2 Anos">Anual (2 Anos)</option>
                        <option value="Anual - 3 Anos">Anual (3 Anos)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Início do Período</label>
                      <input
                        type="date"
                        value={hostingStartDate}
                        onChange={(e) => setHostingStartDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Próximo Vencimento</label>
                      <input
                        type="date"
                        value={hostingDueDate}
                        onChange={(e) => setHostingDueDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Registro de Domínio */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> 4. Registro de Domínio
                </h2>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={domainEnabled}
                    onChange={(e) => setDomainEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neutral-400 after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:bg-white peer-checked:bg-orange-600"></div>
                </label>
              </div>

              {domainEnabled && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Nome do Domínio</label>
                      <input
                        type="text"
                        value={domainName}
                        onChange={(e) => setDomainName(e.target.value)}
                        placeholder="Ex: siteempresa.com.br"
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Preço (R$)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={domainPrice}
                        onChange={(e) => setDomainPrice(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Período (Anos)</label>
                      <select
                        value={domainYears}
                        onChange={(e) => setDomainYears(parseInt(e.target.value) || 1)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="1">1 Ano (R$ 40)</option>
                        <option value="2">2 Anos (R$ 76)</option>
                        <option value="3">3 Anos (R$ 112)</option>
                        <option value="4">4 Anos (R$ 148)</option>
                        <option value="5">5 Anos (R$ 184)</option>
                        <option value="10">10 Anos (R$ 364)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase font-sans">Registro</label>
                      <input
                        type="date"
                        value={domainStartDate}
                        onChange={(e) => setDomainStartDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Renovação</label>
                      <input
                        type="date"
                        value={domainDueDate}
                        onChange={(e) => setDomainDueDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Outros Serviços (Personalizados) */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> 5. Itens Adicionais
                </h2>
                <button
                  type="button"
                  onClick={handleAddCustomItem}
                  className="flex items-center gap-1 px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Adicionar
                </button>
              </div>

              {customItems.length > 0 ? (
                <div className="space-y-4 pt-2">
                  {customItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 bg-neutral-900 p-3 rounded-xl border border-neutral-800 relative">
                      <div className="col-span-6">
                        <label className="block text-[10px] text-neutral-400 font-bold mb-1 uppercase">Descrição</label>
                        <input
                          type="text"
                          value={item.desc}
                          onChange={(e) => handleUpdateCustomItem(item.id, 'desc', e.target.value)}
                          placeholder="Ex: Desenvolvimento Landing Page"
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] text-neutral-400 font-bold mb-1 uppercase">Qtd</label>
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) => handleUpdateCustomItem(item.id, 'qty', parseInt(e.target.value) || 1)}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="col-span-3">
                        <label className="block text-[10px] text-neutral-400 font-bold mb-1 uppercase">Preço (R$)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={item.price}
                          onChange={(e) => handleUpdateCustomItem(item.id, 'price', e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="col-span-1 flex items-end justify-center pb-1">
                        <button
                          type="button"
                          onClick={() => handleRemoveCustomItem(item.id)}
                          className="p-1.5 bg-red-950/30 border border-red-900/40 text-red-400 hover:bg-red-950/70 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-neutral-500 italic py-2 text-center">Nenhum item adicional configurado.</p>
              )}
            </div>

            {/* 6. Descontos e Totalizador de Edição */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> 6. Ajustes de Valor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 font-bold mb-1.5 uppercase">Desconto (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex justify-between items-center h-[42px]">
                    <span className="text-xs text-neutral-400 font-bold uppercase">Total Estimado</span>
                    <span className="font-bold text-orange-500 text-sm font-mono">{formatCurrency(getTotal())}</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Right panel - Realtime Document Preview */}
          <section className="flex-1 bg-neutral-950 p-6 overflow-y-auto max-h-[calc(100vh-73px)] flex justify-center items-start">
            <div className="w-full max-w-[800px] bg-white text-neutral-900 rounded-3xl shadow-2xl p-8 sm:p-12 border border-neutral-200 transition-all select-none">
              
              {/* Receipt Content matching the print style */}
              <div className="flex justify-between items-start border-b-2 border-neutral-900 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  {provider === 'hero' ? (
                    <>
                      <img src="/logohero.png" alt="Hero Hospedagem" className="h-12 object-contain" />
                      <div>
                        <h1 className="text-2xl font-black text-neutral-900 leading-tight mb-0.5 font-display">HERO HOSPEDAGEM</h1>
                        <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wide">Parceiro Oficial: Fehari Studio LTDA</p>
                        <p className="text-neutral-500 text-[10px]">CNPJ: 54.604.258/0001-26 | contato@feharistudio.com.br</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <img src="/logo-fehari-black.svg" alt="Fehari Studio" className="h-10 object-contain" />
                      <div>
                        <h1 className="text-2xl font-black text-neutral-900 leading-tight mb-0.5 font-display">FEHARI STUDIO</h1>
                        <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wide">Tecnologia, Design & Growth Marketing</p>
                        <p className="text-neutral-500 text-[10px]">CNPJ: 54.604.258/0001-26 | contato@feharistudio.com.br</p>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="text-right">
                  <span className="inline-block bg-neutral-900 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded mb-2">DOCUMENTO DIGITAL</span>
                  <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-800 mb-1">Recibo / Fatura</h2>
                  <p className="font-bold text-neutral-900">Nº {invoiceNumber || '------'}</p>
                  <p className="text-neutral-500 text-sm mt-1">Emissão: {formatDate(issueDate)} às {issueTime}</p>
                </div>
              </div>

              {/* Status & Client Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-neutral-50 p-5 border border-neutral-200 rounded-2xl relative overflow-hidden">
                <div>
                  <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-wider mb-1.5">Sacado (Cliente)</h3>
                  <p className="font-bold text-neutral-900 text-base">{clientName || 'Nome do Cliente / Razão Social'}</p>
                  {clientDocument && <p className="text-xs text-neutral-500 mt-1">CPF/CNPJ: {clientDocument}</p>}
                  {clientEmail && <p className="text-xs text-neutral-500">{clientEmail}</p>}
                  {clientPhone && <p className="text-xs text-neutral-500">WhatsApp: {clientPhone}</p>}
                </div>
                
                <div className="text-left md:text-right flex flex-col justify-between">
                  <div>
                    <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-wider mb-1">Método de Pagamento</h3>
                    <p className="font-bold text-neutral-900">{paymentMethod}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex items-center md:justify-end gap-2">
                    <span className="text-xs text-neutral-400 font-bold uppercase mr-1">Status:</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase border ${
                      paymentStatus === 'Pago' 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : paymentStatus === 'Pendente'
                          ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                          : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                      {paymentStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-900 text-left bg-neutral-50">
                      <th className="py-3 px-4 font-bold text-neutral-700 text-xs uppercase tracking-wider">Descrição do Item</th>
                      <th className="py-3 px-4 text-center font-bold text-neutral-700 text-xs uppercase tracking-wider w-24">Qtd</th>
                      <th className="py-3 px-4 text-right font-bold text-neutral-700 text-xs uppercase tracking-wider w-36">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Hosting Line */}
                    {hostingEnabled && (
                      <tr className="border-b border-neutral-200 hover:bg-neutral-50/50 transition-colors">
                        <td className="py-4 px-4 text-neutral-800 text-sm">
                          <div className="font-bold">{hostingPlan}</div>
                          {hostingDomain && <div className="text-xs text-neutral-500 font-mono mt-0.5">Domínio: {hostingDomain}</div>}
                          {(hostingStartDate || hostingDueDate) && (
                            <div className="text-xs text-neutral-500 mt-1">
                              Período: {formatDate(hostingStartDate)} até {formatDate(hostingDueDate)} ({hostingCycle})
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center text-neutral-800 text-sm">1</td>
                        <td className="py-4 px-4 text-right font-medium text-neutral-900 text-sm">
                          {formatCurrency(hostingPrice)}
                        </td>
                      </tr>
                    )}

                    {/* Domain Line */}
                    {domainEnabled && (
                      <tr className="border-b border-neutral-200 hover:bg-neutral-50/50 transition-colors">
                        <td className="py-4 px-4 text-neutral-800 text-sm">
                          <div className="font-bold">Registro/Renovação de Domínio</div>
                          {domainName && <div className="text-xs text-neutral-500 font-mono mt-0.5">Domínio: {domainName}</div>}
                          {(domainStartDate || domainDueDate) && (
                            <div className="text-xs text-neutral-500 mt-1">
                              Período: {formatDate(domainStartDate)} até {formatDate(domainDueDate)} ({domainYears} {domainYears === 1 ? 'Ano' : 'Anos'})
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center text-neutral-800 text-sm">1</td>
                        <td className="py-4 px-4 text-right font-medium text-neutral-900 text-sm">
                          {formatCurrency(domainPrice)}
                        </td>
                      </tr>
                    )}

                    {/* Custom items */}
                    {customItems.map((item) => (
                      <tr key={item.id} className="border-b border-neutral-200 hover:bg-neutral-50/50 transition-colors">
                        <td className="py-4 px-4 text-neutral-800 text-sm">
                          <div className="font-bold">{item.desc || 'Sem descrição'}</div>
                        </td>
                        <td className="py-4 px-4 text-center text-neutral-800 text-sm">{item.qty}</td>
                        <td className="py-4 px-4 text-right font-medium text-neutral-900 text-sm">
                          {formatCurrency(parseFloat(item.price) * item.qty)}
                        </td>
                      </tr>
                    ))}

                    {/* Empty placeholder */}
                    {!hostingEnabled && !domainEnabled && customItems.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-8 px-4 text-neutral-400 text-sm text-center italic">
                          Nenhum produto ou serviço incluído nesta fatura.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Total calculations */}
              <div className="flex justify-end mb-16">
                <div className="w-80 space-y-2.5">
                  <div className="flex justify-between items-center border-t-2 border-neutral-900 pt-4">
                    <span className="font-bold text-xs text-neutral-500 uppercase tracking-wider">Subtotal</span>
                    <span className="font-medium text-neutral-900 text-sm">{formatCurrency(getSubtotal())}</span>
                  </div>
                  {parseFloat(discount) > 0 && (
                    <div className="flex justify-between items-center text-green-700">
                      <span className="font-bold text-xs uppercase tracking-wider">Descontos</span>
                      <span className="font-medium text-sm">- {formatCurrency(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-t-4 border-neutral-950 pt-4">
                    <span className="font-black text-sm text-neutral-900 uppercase tracking-wider">Total Pago</span>
                    <span className="font-black text-2xl text-neutral-900 font-display">{formatCurrency(getTotal())}</span>
                  </div>
                </div>
              </div>

              {/* Footer Terms */}
              <div className="border-t border-dashed border-neutral-300 pt-8 text-center text-xs text-neutral-400 space-y-1">
                <p className="font-bold text-neutral-600">Este documento é um comprovante digital de quitação de pagamento.</p>
                <p>Caso tenha dúvidas, entre em contato pelo email de suporte ou pelo nosso canal no WhatsApp.</p>
                <p className="mt-2 text-[10px]">Emitido via painel de administração em {formatDate(issueDate)} às {issueTime}</p>
              </div>

            </div>
          </section>
        </main>
      </div>

      {/* RENDER FOR PRINT ONLY (Hidden on screen, customized via CSS print block) */}
      <div id="print-receipt-section" className="hidden bg-white text-black p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-start border-b-2 border-black pb-6 mb-8">
          <div className="flex items-center gap-4">
            {provider === 'hero' ? (
              <>
                <img src="/logohero.png" alt="Hero Hospedagem" className="h-14 object-contain" />
                <div>
                  <h1 className="text-2xl font-black text-black leading-tight mb-0.5 font-display">HERO HOSPEDAGEM</h1>
                  <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wide">Parceiro Oficial: Fehari Studio LTDA</p>
                  <p className="text-neutral-500 text-[10px]">CNPJ: 54.604.258/0001-26 | contato@feharistudio.com.br</p>
                </div>
              </>
            ) : (
              <>
                <img src="/logo-fehari-black.svg" alt="Fehari Studio" className="h-10 object-contain" />
                <div>
                  <h1 className="text-2xl font-black text-black leading-tight mb-0.5 font-display">FEHARI STUDIO</h1>
                  <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wide">Tecnologia, Design & Growth Marketing</p>
                  <p className="text-neutral-500 text-[10px]">CNPJ: 54.604.258/0001-26 | contato@feharistudio.com.br</p>
                </div>
              </>
            )}
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-800 mb-1">Recibo / Fatura</h2>
            <p className="font-bold text-black text-lg">Nº {invoiceNumber || '------'}</p>
            <p className="text-neutral-500 text-sm mt-1">Emissão: {formatDate(issueDate)} às {issueTime}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10 bg-neutral-50 p-6 border border-neutral-200 rounded-lg">
          <div>
            <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">Sacado (Cliente)</h3>
            <p className="font-bold text-black text-base">{clientName || 'Cliente'}</p>
            {clientDocument && <p className="text-xs text-neutral-600 mt-1">CPF/CNPJ: {clientDocument}</p>}
            {clientEmail && <p className="text-xs text-neutral-600">E-mail: {clientEmail}</p>}
            {clientPhone && <p className="text-xs text-neutral-600">Telefone/WhatsApp: {clientPhone}</p>}
          </div>
          <div className="text-right">
            <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">Método de Pagamento</h3>
            <p className="font-bold text-black text-base mb-2">{paymentMethod}</p>
            <div className="inline-block border-2 border-green-500 text-green-600 bg-white font-black text-sm px-4 py-1.5 uppercase rounded-md tracking-widest mt-2">
              {paymentStatus}
            </div>
          </div>
        </div>

        <table className="w-full mb-10 border-collapse">
          <thead>
            <tr className="border-b-2 border-black text-left bg-neutral-100 print-bg-gray">
              <th className="py-3 px-4 font-bold text-black text-xs uppercase tracking-wider">Descrição do Serviço / Item</th>
              <th className="py-3 px-4 text-center font-bold text-black text-xs uppercase tracking-wider w-24">Qtd</th>
              <th className="py-3 px-4 text-right font-bold text-black text-xs uppercase tracking-wider w-36">Total</th>
            </tr>
          </thead>
          <tbody>
            {hostingEnabled && (
              <tr className="border-b border-neutral-200">
                <td className="py-4 px-4 text-black text-sm">
                  <span className="font-bold">{hostingPlan}</span>
                  {hostingDomain && <span className="font-mono text-xs block text-neutral-500 mt-0.5">Domínio: {hostingDomain}</span>}
                  {(hostingStartDate || hostingDueDate) && (
                    <span className="text-xs block text-neutral-500 mt-1">
                      Período: {formatDate(hostingStartDate)} até {formatDate(hostingDueDate)} ({hostingCycle})
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 text-center text-black text-sm">1</td>
                <td className="py-4 px-4 text-right font-bold text-black text-sm">
                  {formatCurrency(hostingPrice)}
                </td>
              </tr>
            )}

            {domainEnabled && (
              <tr className="border-b border-neutral-200">
                <td className="py-4 px-4 text-black text-sm">
                  <span className="font-bold">Registro / Renovação de Domínio</span>
                  {domainName && <span className="font-mono text-xs block text-neutral-500 mt-0.5">Domínio: {domainName}</span>}
                  {(domainStartDate || domainDueDate) && (
                    <span className="text-xs block text-neutral-500 mt-1">
                      Período: {formatDate(domainStartDate)} até {formatDate(domainDueDate)} ({domainYears} {domainYears === 1 ? 'Ano' : 'Anos'})
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 text-center text-black text-sm">1</td>
                <td className="py-4 px-4 text-right font-bold text-black text-sm">
                  {formatCurrency(domainPrice)}
                </td>
              </tr>
            )}

            {customItems.map((item) => (
              <tr key={item.id} className="border-b border-neutral-200">
                <td className="py-4 px-4 text-black text-sm">
                  <span className="font-bold">{item.desc || 'Item Adicional'}</span>
                </td>
                <td className="py-4 px-4 text-center text-black text-sm">{item.qty}</td>
                <td className="py-4 px-4 text-right font-bold text-black text-sm">
                  {formatCurrency(parseFloat(item.price) * item.qty)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-80 space-y-2">
            <div className="flex justify-between items-center border-t-2 border-black pt-4">
              <span className="font-bold text-xs text-neutral-500 uppercase tracking-wider">Subtotal</span>
              <span className="font-bold text-black text-sm">{formatCurrency(getSubtotal())}</span>
            </div>
            {parseFloat(discount) > 0 && (
              <div className="flex justify-between items-center">
                <span className="font-bold text-xs text-neutral-500 uppercase tracking-wider">Descontos</span>
                <span className="font-bold text-black text-sm">- {formatCurrency(discount)}</span>
              </div>
            )}
            <div className="flex justify-between items-center border-t-4 border-black pt-4">
              <span className="font-black text-sm text-black uppercase tracking-wider">Total Pago</span>
              <span className="font-black text-2xl text-black font-display">{formatCurrency(getTotal())}</span>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-8 border-t-2 border-dashed border-neutral-300 text-center text-xs text-neutral-400 space-y-1">
          <p className="font-bold text-neutral-600">Este documento é um comprovante digital de quitação de pagamento.</p>
          <p>Caso tenha dúvidas, entre em contato pelo email de suporte ou pelo nosso canal no WhatsApp.</p>
          <p className="mt-2 text-[10px]">Emitido via painel de administração em {formatDate(issueDate)} às {issueTime}</p>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
