import React from 'react';
import { motion } from 'framer-motion';

const TermosHeroHospedagemPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-6 sm:px-12">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-glow-radial opacity-20 mix-blend-multiply blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-4xl w-full bg-white border border-border rounded-3xl shadow-sm p-8 sm:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Termos de Serviço - Hero Hospedagem
          </h1>
          <p className="text-text-secondary">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Introdução e Natureza do Serviço</h2>
            <p>
              A <strong>Hero Hospedagem</strong> é um serviço de infraestrutura web gerenciada, operado e mantido pela <strong>Fehari Studio</strong>. 
              Nós não possuímos data centers próprios; utilizamos infraestrutura premium em nuvem de nível empresarial para hospedar os sites de nossos clientes com a máxima performance e segurança. 
              Ao contratar nossos serviços, você concorda com estes termos e com a nossa política de uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Escopo do Suporte e Gerenciamento</h2>
            <p className="mb-2">
              Nosso serviço é "Gerenciado" em nível de servidor. Isso significa que a Fehari Studio é responsável por:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Manter o servidor online e a infraestrutura de rede operante.</li>
              <li>Garantir o funcionamento dos serviços essenciais (Servidor Web, Banco de Dados, PHP/Node).</li>
              <li>Configuração inicial e segurança no nível do servidor (Firewall, Anti-DDoS).</li>
            </ul>
            <p>
              <strong>O que NÃO está incluso no suporte:</strong> A Fehari Studio não é responsável por problemas relacionados ao código da sua aplicação. 
              Se o seu site (ex: WordPress) quebrar devido a uma atualização de plugin malfeita, um tema corrompido ou erro de código do desenvolvedor, a correção deste problema <strong>não</strong> está coberta pela hospedagem e poderá ser orçada separadamente pela agência.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Disponibilidade (Uptime) e Força Maior</h2>
            <p>
              Trabalhamos para manter um uptime de 99,9%. No entanto, como dependemos de infraestrutura de terceiros, não podemos ser responsabilizados por interrupções causadas por:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Quedas globais de energia ou falhas massivas de roteamento na internet.</li>
              <li>Manutenções programadas ou emergenciais nos data centers.</li>
              <li>Ataques de negação de serviço (DDoS) de escala anormal que ultrapassem as defesas padrão.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Segurança, Invasões e Responsabilidade do Cliente</h2>
            <p>
              A segurança do servidor é nossa responsabilidade, mas a <strong>segurança da aplicação é sua</strong>. 
              O cliente é o único responsável por usar senhas fortes e manter o software do seu site (como plugins, temas e o core do CMS) atualizado.
              <br/><br/>
              Se o seu site for invadido (hackeado) devido a vulnerabilidades no seu código ou senhas fracas, e começar a enviar SPAM ou prejudicar a performance do servidor, a Fehari Studio tem o direito de <strong>suspender seu site imediatamente</strong> até que a ameaça seja contida, a fim de proteger nossos servidores e a reputação dos nossos IPs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Backups e Perda de Dados</h2>
            <p>
              Nós realizamos backups automáticos e diários de segurança em nossos servidores. No entanto, esses backups são para nossa contingência administrativa. 
              O cliente compreende e concorda que a Fehari Studio <strong>não garante de forma absoluta a integridade desses backups</strong> e não pode ser legalmente responsabilizada por qualquer perda de dados, lucros cessantes ou danos morais decorrentes da perda de informações do site. Recomendamos fortemente que o cliente mantenha backups locais periódicos de seus arquivos importantes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Política de Uso Aceitável (AUP)</h2>
            <p>
              É estritamente proibido utilizar a Hero Hospedagem para:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Hospedagem de conteúdo ilegal, pornografia infantil, ou materiais protegidos por direitos autorais sem autorização (Pirataria).</li>
              <li>Envio de SPAM, e-mail marketing não solicitado, ou Phishing.</li>
              <li>Mineração de criptomoedas ou scripts de uso abusivo contínuo de CPU (malwares).</li>
            </ul>
            <p className="mt-2">
              A violação desta política resultará na exclusão sumária da conta, sem direito a aviso prévio, reembolso ou fornecimento de backups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">7. Pagamentos, Inadimplência e Exclusão</h2>
            <p>
              Os pagamentos são processados via AbacatePay de forma pré-paga (Mensal ou Anual).
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Atraso de 5 dias:</strong> O site será temporariamente suspenso (ficará offline).</li>
              <li><strong>Atraso de 15 a 30 dias:</strong> Em caso de não pagamento prolongado, a Fehari Studio reserva-se o direito de <strong>excluir permanentemente todos os arquivos e bancos de dados</strong> associados à conta para liberar espaço em nossos servidores. Uma vez deletados, os dados não poderão ser recuperados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">8. Cancelamentos e Reembolsos</h2>
            <p>
              O cliente pode cancelar a hospedagem a qualquer momento. Por se tratar de aluguel de infraestrutura de alta performance, não oferecemos reembolsos parciais por dias não utilizados no ciclo mensal contratado. Para planos anuais, cancelamentos antecipados não geram devolução do valor pago referente aos meses restantes, dada a natureza do desconto comercial aplicado no ato da compra.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm font-medium text-text">
              Ao utilizar os serviços da Hero Hospedagem e Fehari Studio, você atesta que leu, compreendeu e concordou com todos os termos descritos acima.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default TermosHeroHospedagemPage;
