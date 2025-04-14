const bancoQuestoes = [
  {
    pergunta: "O que significa TI?",
    opcoes: ["Tecnologia da Informação", "Transporte Integrado", "Tecnologia Industrial", "Teoria da Inovação"],
    correta: 0
  },
  {
    pergunta: "O que é um antivírus?",
    opcoes: ["Um tipo de firewall", "Um programa de produtividade", "Um software que combate ameaças virtuais", "Um sistema de backup"],
    correta: 2
  },
  {
    pergunta: "O que caracteriza uma senha forte?",
    opcoes: ["Apenas letras minúsculas", "Sequência numérica simples", "Letras, números e caracteres especiais", "Nome da empresa"],
    correta: 2
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ["Atualização de software", "Invasão por força bruta", "Ataque que utiliza e-mails falsos para roubo de dados", "Proteção de rede"],
    correta: 2
  },
  {
    pergunta: "Para que serve um firewall?",
    opcoes: ["Aumentar a velocidade da internet", "Controlar o acesso a redes", "Fazer backup", "Apagar arquivos desnecessários"],
    correta: 1
  },
  {
    pergunta: "O que é um backup?",
    opcoes: ["Um tipo de vírus", "Cópia de segurança de dados", "Programa de edição de texto", "Sistema de impressão"],
    correta: 1
  },
  {
    pergunta: "Qual destes é um exemplo de autenticação multifator?",
    opcoes: ["Apenas senha", "Nome de usuário", "E-mail pessoal", "Senha + biometria"],
    correta: 3
  },
  {
    pergunta: "O que é criptografia?",
    opcoes: ["Exclusão de arquivos", "Codificação de dados para proteger informações", "Formatação de disco rígido", "Atualização de sistema"],
    correta: 1
  },
  {
    pergunta: "O que é um ataque DDoS?",
    opcoes: ["Sobre carga de tráfego para derrubar um serviço", "Roubo de senhas", "Infecção por vírus", "Acesso não autorizado a um computador"],
    correta: 0
  },
  {
    pergunta: "Qual destes NÃO é um método seguro para navegar na internet?",
    opcoes: ["Usar HTTPS", "Atualizar softwares regularmente", "Clicar em links desconhecidos", "Usar VPN"],
    correta: 2
  },
  {
    pergunta: "Qual é o objetivo principal de realizar backup de dados?",
    opcoes: ["Aumentar a velocidade do computador", "Ter cópias de segurança para recuperação em caso de perda", "Melhorar o desempenho da internet", "Liberar espaço no disco rígido"],
    correta: 1
  },
  {
    pergunta: "O que é malware?",
    opcoes: ["Um tipo de hardware", "Software malicioso que danifica sistemas", "Programa de edição de fotos", "Sistema operacional alternativo"],
    correta: 1
  },
  {
    pergunta: "Por que é importante usar autenticação por senha?",
    opcoes: ["Para tornar o computador mais rápido", "Porque é exigido por lei", "Para proteger o acesso não autorizado a contas e sistemas", "Para economizar energia"],
    correta: 2
  },
  {
    pergunta: "O que é engenharia social?",
    opcoes: ["Técnica de construção civil", "Tipo de software educativo", "Forma de criptografia", "Método de manipulação psicológica para obter informações confidenciais"],
    correta: 3
  },
  {
    pergunta: "Por que os softwares devem ser mantidos atualizados?",
    opcoes: ["Porque novas versões são mais bonitas", "Para corrigir vulnerabilidades de segurança e bugs", "Para aumentar o preço do produto", "Porque versões antigas funcionam melhor"],
    correta: 1
  },
  {
    pergunta: "O que caracteriza uma rede Wi-Fi protegida?",
    opcoes: ["Está sempre aberta para qualquer pessoa", "Usa criptografia (como WPA2/WPA3) e senha forte", "Tem o nome visível para todos", "Não precisa de senha"],
    correta: 1
  },
  {
    pergunta: "Como evitar o acesso não autorizado ao sistema?",
    opcoes: ["Usar senhas fracas e fáceis de lembrar", "Compartilhar credenciais com colegas", "Utilizar autenticação forte e não divulgar credenciais", "Desativar todas as proteções"],
    correta: 2
  },
  {
    pergunta: "O que são cookies e como eles afetam a privacidade?",
    opcoes: ["Arquivos que armazenam dados de navegação e podem rastrear usuários", "Programas antivírus", "Dispositivos de hardware", "Tipos de vírus"],
    correta: 0
  },
  {
    pergunta: "Qual a importância de bloquear a estação de trabalho ao se ausentar?",
    opcoes: ["Para economizar energia", "Para evitar acesso não autorizado durante a ausência", "Porque o computador funciona melhor bloqueado", "Para atualizar o sistema automaticamente"],
    correta: 1
  },
  {
    pergunta: "O que são atualizações de segurança?",
    opcoes: ["Novos jogos para o computador", "Correções que protegem contra vulnerabilidades conhecidas", "Aumento de capacidade do disco rígido", "Mudanças na aparência do sistema"],
    correta: 1
  },
  {
    pergunta: "O que significa o termo \"dados sensíveis\"?",
    opcoes: ["Informações públicas que qualquer um pode ver", "Dados confidenciais que exigem proteção especial", "Arquivos temporários do sistema", "Mensagens de e-mail comuns"],
    correta: 1
  },
  {
    pergunta: "O que fazer ao receber um e-mail suspeito?",
    opcoes: ["Abrir todos os anexos para verificar", "Clicar em links para confirmar se é legítimo", "Não abrir, marcar como spam e deletar", "Encaminhar para todos os contatos"],
    correta: 2
  },
  {
    pergunta: "Qual a diferença entre login e senha?",
    opcoes: ["Login é o nome de usuário, senha é a chave de acesso", "São a mesma coisa", "Login é a senha, senha é o usuário", "Nenhuma diferença"],
    correta: 0
  },
  {
    pergunta: "O que significa criptografia?",
    opcoes: ["Exclusão permanente de arquivos", "Codificação de dados para proteger informações", "Compactação de arquivos para economizar espaço", "Formatação de dispositivos"],
    correta: 1
  },
  {
    pergunta: "Por que não se deve compartilhar senhas?",
    opcoes: ["Porque senhas são caras", "Para evitar que outras pessoas acessem suas contas sem autorização", "Porque senhas mudam sozinhas", "Porque o computador pode travar"],
    correta: 1
  },
  {
    pergunta: "O que é um ataque de força bruta?",
    opcoes: ["Formatação rápida do disco rígido", "Exclusão acidental de arquivos", "Tipo de backup automático", "Tentativa de adivinhar senhas testando várias combinações"],
    correta: 3
  },
  {
    pergunta: "Qual destes NÃO é um método seguro para criar senhas?",
    opcoes: ["Usar combinações aleatórias de letras, números e símbolos", "Criar senhas longas com mais de 12 caracteres", "Usar frases complexas como senha", "Usar sequências simples como \"123456\""],
    correta: 3
  },
  {
    pergunta: "O que é autenticação em dois fatores (2FA)?",
    opcoes: ["Usar duas senhas iguais", "Verificação em duas etapas (ex: senha + código SMS)", "Ter duas contas de e-mail", "Fazer login duas vezes"],
    correta: 1
  },
  {
    pergunta: "O que é VPN e para que serve?",
    opcoes: ["Rede virtual privada que criptografa a conexão", "Tipo de vírus", "Programa de edição de vídeo", "Sistema de backup"],
    correta: 0
  },
  {
    pergunta: "Qual destes é um exemplo de boa prática de segurança?",
    opcoes: ["Usar a mesma senha em todos os serviços", "Ativar atualizações automáticas", "Ignorar e-mails de phishing", "Nunca fazer backup"],
    correta: 1
  },
  {
    pergunta: "O que é autenticação de dois fatores (2FA)?",
    opcoes: ["Verificação em duas etapas (ex: senha + código SMS)", "Usar duas senhas diferentes", "Ter duas contas de e-mail", "Fazer login duas vezes no mesmo sistema"],
    correta: 0
  },
  {
    pergunta: "O que são patches de segurança?",
    opcoes: ["Correções para vulnerabilidades conhecidas", "Atualizações estéticas do sistema", "Novos recursos de hardware", "Programas antivírus"],
    correta: 0
  },
  {
    pergunta: "Como funciona um ransomware?",
    opcoes: ["Rouba senhas de usuários", "Criptografa arquivos e exige resgate para liberá-los", "Espalha spam por e-mail", "Monitora atividades do usuário"],
    correta: 1
  },
  {
    pergunta: "O que é um ataque DDoS?",
    opcoes: ["Roubo de dados sensíveis", "Sobrecarga de um serviço com tráfego falso", "Infecção por vírus em dispositivos móveis", "Acesso não autorizado a redes Wi-Fi"],
    correta: 1
  },
  {
    pergunta: "O que são portas de rede e por que devem ser monitoradas?",
    opcoes: ["Conexões físicas de cabos de internet", "Dispositivos de armazenamento em nuvem", "Pontos de entrada/saída de dados que podem ser explorados por invasores", "Ferramentas de backup automático"],
    correta: 2
  },
  {
    pergunta: "Qual a importância de um antivírus corporativo?",
    opcoes: ["Aumentar a velocidade da rede", "Substituir firewalls", "Proteger múltiplos dispositivos contra ameaças avançadas", "Bloquear apenas e-mails indesejados"],
    correta: 2
  },
  {
    pergunta: "O que é um firewall de próxima geração?",
    opcoes: ["Um antivírus básico", "Sistema que combina firewall tradicional com filtragem avançada (ex: IPS, inspeção profunda de pacotes)", "Ferramenta de backup em nuvem", "Dispositivo que apenas bloqueia portas"],
    correta: 1
  },
  {
    pergunta: "Como identificar um site falso (phishing site)?",
    opcoes: ["Verificar se o URL começa com \"HTTPS\" e se o certificado SSL é válido", "Confiar em e-mails solicitando dados pessoais", "Clicar em links suspeitos para testar", "Ignorar erros de certificado digital"],
    correta: 0
  },
  {
    pergunta: "O que é um certificado SSL?",
    opcoes: ["Licença de software", "Protocolo que criptografa a comunicação entre navegador e servidor", "Tipo de vírus disfarçado", "Sistema de armazenamento em nuvem"],
    correta: 1
  },
  {
    pergunta: "O que é um spyware e como ele age?",
    opcoes: ["Hardware que melhora a velocidade da internet", "Software que monitora atividades do usuário sem consentimento", "Ferramenta de otimização de sistema", "Tipo de firewall"],
    correta: 1
  },
  {
    pergunta: "Por que evitar o uso de dispositivos USB desconhecidos?",
    opcoes: ["Sempre danificam o computador", "São mais lentos que os conhecidos", "Podem conter malware ou roubar dados", "Não há riscos reais"],
    correta: 2
  },
  {
    pergunta: "Como funciona a criptografia de ponta a ponta?",
    opcoes: ["Dados são criptografados apenas no servidor", "Qualquer pessoa na rede pode ler os dados", "Apenas o remetente e o destinatário podem decifrar a mensagem", "Substitui a necessidade de senhas"],
    correta: 2
  },
  {
    pergunta: "O que são permissões de usuário em sistemas?",
    opcoes: ["Senhas temporárias", "Limites de armazenamento", "Regras que definem o que um usuário pode ou não acessar", "Níveis de velocidade de internet"],
    correta: 2
  },
  {
    pergunta: "O que é o gerenciamento de identidade e acesso (IAM)?",
    opcoes: ["Sistema que controla quem acessa quais recursos em uma rede", "Ferramenta de edição de documentos", "Tipo de antivírus", "Protocolo de rede"],
    correta: 0
  },
  {
    pergunta: "Como proteger dispositivos móveis corporativos?",
    opcoes: ["Usar senhas fracas", "Desativar todas as atualizações", "Ativar remotamente apagamento de dados em caso de perda/roubo", "Ignorar políticas de segurança"],
    correta: 2
  },
  {
    pergunta: "O que é uma VPN e para que serve?",
    opcoes: ["Antivírus para redes sociais", "Sistema de backup local", "Rede virtual que criptografa a conexão e mascara o IP", "Ferramenta de edição de vídeo"],
    correta: 2
  },
  {
    pergunta: "Como identificar vulnerabilidades em sistemas?",
    opcoes: ["Ignorar atualizações de segurança", "Usar ferramentas de varredura (ex: pentests, scanners de vulnerabilidade)", "Desativar firewalls", "Não monitorar logs"],
    correta: 1
  },
  {
    pergunta: "O que é um keylogger?",
    opcoes: ["Tipo de firewall", "Dispositivo que registra tudo o que é digitado no teclado", "Programa de backup", "Antivírus avançado"],
    correta: 1
  },
  {
    pergunta: "O que é segmentação de rede?",
    opcoes: ["Dividir a rede em partes isoladas para limitar o acesso de invasores", "Aumentar a velocidade da internet", "Desativar todas as proteções", "Usar a mesma senha para todos os dispositivos"],
    correta: 0
  },
  {
    pergunta: "O que é uma auditoria de segurança da informação?",
    opcoes: ["Atualização de hardware", "Formatação de servidores", "Compra de novos equipamentos", "Processo que avalia a eficácia das medidas de segurança"],
    correta: 3
  },
  {
    pergunta: "O que é um pentest (teste de penetração)?",
    opcoes: ["Atualização automática de softwares", "Backup de dados críticos", "Simulação de ataques para identificar vulnerabilidades em sistemas", "Monitoramento de redes sociais"],
    correta: 2
  },
  {
    pergunta: "O que é um SIEM e como ele auxilia na segurança?",
    opcoes: ["Sistema que consolida e analisa logs para detectar ameaças em tempo real", "Ferramenta de edição de código", "Protocolo de criptografia", "Dispositivo de armazenamento em nuvem"],
    correta: 0
  },
  {
    pergunta: "Como funciona o modelo Zero Trust?",
    opcoes: ["Confia em todos os usuários dentro da rede", "Desativa firewalls para melhorar desempenho", "Usa apenas senhas simples", "Exige verificação contínua de identidade, mesmo para usuários internos"],
    correta: 3
  },
  {
    pergunta: "O que são vulnerabilidades de dia zero (zero-day)?",
    opcoes: ["Falhas desconhecidas pelos fabricantes, sem patches disponíveis", "Bugs corrigidos em atualizações rotineiras", "Problemas de hardware", "Ameaças já catalogadas em bancos de dados públicos"],
    correta: 0
  },
  {
    pergunta: "O que é um honeypot em redes?",
    opcoes: ["Dispositivo que acelera a conexão à internet", "Ferramenta de backup", "Sistema isca para atrair e estudar invasores", "Antivírus para redes sociais"],
    correta: 2
  },
  {
    pergunta: "Como prevenir exfiltração de dados?",
    opcoes: ["Permitir acesso irrestrito a todos os usuários", "Usar DLP (Data Loss Prevention) e monitorar transferências suspeitas", "Desativar criptografia", "Ignorar logs de acesso"],
    correta: 1
  },
  {
    pergunta: "O que é um SOC (Security Operations Center)?",
    opcoes: ["Equipe dedicada a monitorar e responder a incidentes de segurança", "Software de edição de imagens", "Tipo de firewall", "Sistema de armazenamento offline"],
    correta: 0
  },
  {
    pergunta: "Como funciona o gerenciamento de riscos em TI?",
    opcoes: ["Ignorar ameaças para reduzir custos", "Identificar, avaliar e mitigar riscos com base em probabilidade e impacto", "Usar apenas senhas padrão", "Não realizar backups"],
    correta: 1
  },
  {
    pergunta: "O que é criptografia assimétrica?",
    opcoes: ["Usa uma única chave para cifrar e decifrar", "Utiliza par de chaves (pública e privada)", "Criptografia sem chaves", "Método obsoleto de proteção"],
    correta: 1
  },
  {
    pergunta: "Qual a importância da governança de dados?",
    opcoes: ["Aumentar a velocidade de redes", "Substituir firewalls", "Eliminar backups", "Garantir que dados sejam gerenciados com segurança e conformidade"],
    correta: 3
  },
  {
    pergunta: "O que é DevSecOps?",
    opcoes: ["Método para evitar atualizações", "Integrar segurança no ciclo de vida de desenvolvimento de software", "Ferramenta de pentest", "Tipo de malware"],
    correta: 1
  },
  {
    pergunta: "O que é hardening de sistemas?",
    opcoes: ["Reduzir superfície de ataque com configurações seguras", "Aumentar permissões para todos os usuários", "Desativar logs de segurança", "Ignorar patches"],
    correta: 0
  },
  {
    pergunta: "Como funcionam as políticas de acesso baseadas em atributos (ABAC)?",
    opcoes: ["Acesso concedido com base em atributos do usuário, recurso e contexto", "Todos os usuários têm as mesmas permissões", "Não exigem autenticação", "Usam apenas senhas simples"],
    correta: 0
  },
  {
    pergunta: "O que são ataques de injeção SQL?",
    opcoes: ["Ataques físicos a servidores", "Roubo de dispositivos USB", "Vírus que infectam apenas redes Wi-Fi", "Inserção de código malicioso em bancos de dados via consultas SQL"],
    correta: 3
  },
  {
    pergunta: "Qual o papel da ISO/IEC 27001 na segurança da informação?",
    opcoes: ["Definir protocolos de hardware", "Padronizar boas práticas em um SGSI (Sistema de Gestão de Segurança da Informação)", "Substituir firewalls", "Eliminar a necessidade de backups"],
    correta: 1
  },
  {
    pergunta: "Como funciona a anonimização de dados?",
    opcoes: ["Remoção/modificação de informações que permitam identificar indivíduos", "Compartilhamento irrestrito de dados sensíveis", "Exclusão permanente de arquivos", "Criptografia reversível sem chaves"],
    correta: 0
  },
  {
    pergunta: "O que são APIs seguras e como implementá-las?",
    opcoes: ["APIs sem qualquer proteção", "APIs com autenticação, criptografia e limites de taxa de requisição", "Ferramentas de edição de código", "Sistemas de backup"],
    correta: 1
  },
  {
    pergunta: "O que são ameaças persistentes avançadas (APT)?",
    opcoes: ["Ataques prolongados e direcionados, geralmente patrocinados por Estados ou grupos organizados", "Vírus comuns de e-mail", "Falhas de hardware", "Erros de digitação em senhas"],
    correta: 0
  },
  {
    pergunta: "Qual o impacto da segurança na LGPD?",
    opcoes: ["Eliminar a necessidade de senhas", "Ignorar vazamentos de dados", "Não afeta empresas brasileiras", "Exigir medidas técnicas e administrativas para proteger dados pessoais"],
    correta: 3
  },
  {
    pergunta: "Como proteger dados em ambientes de nuvem?",
    opcoes: ["Armazenar credenciais em arquivos públicos", "Desativar logs de acesso", "Usar criptografia, MFA e políticas de acesso restritivas", "Não usar autenticação"],
    correta: 2
  },
  {
    pergunta: "Como realizar uma gestão de riscos cibernéticos eficaz?",
    opcoes: ["Ignorar ameaças desconhecidas", "Identificar ativos, avaliar ameaças e implementar controles baseados em impacto", "Confiar apenas em firewalls básicos", "Não documentar processos"],
    correta: 1
  },
  {
    pergunta: "O que é um plano de continuidade de negócios em TI?",
    opcoes: ["Documento que descreve como manter operações durante/após desastres", "Lista de softwares instalados", "Relatório de vendas mensal", "Política de redes sociais"],
    correta: 0
  },
  {
    pergunta: "Como funcionam as auditorias de conformidade?",
    opcoes: ["Atualizam sistemas automaticamente", "Substituem firewalls", "Verificam se a organização segue regulamentos (ex: LGPD, ISO 27001)", "Geram relatórios financeiros"],
    correta: 2
  }
];

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const perguntasSelecionadas = embaralhar([...bancoQuestoes]).slice(0, 10);
const quizForm = document.getElementById("quizForm");

perguntasSelecionadas.forEach((q, i) => {
  const div = document.createElement("div");
  div.classList.add("question-result");
  div.innerHTML = `<strong>${i + 1}. ${q.pergunta}</strong>`;

  const opcoesDiv = document.createElement("div");
  opcoesDiv.classList.add("options");

  q.opcoes.forEach((op, j) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${op}`;
    opcoesDiv.appendChild(label);
  });

  div.appendChild(opcoesDiv);
  quizForm.appendChild(div);
});

function verificarRespostas() {
  let acertos = 0;
  let respondidas = 0;

  perguntasSelecionadas.forEach((q, i) => {
    const resposta = document.querySelector(`input[name='q${i}']:checked`);
    if (resposta) {
      respondidas++;
      if (parseInt(resposta.value) === q.correta) {
        acertos++;
      }
    }
  });

  let mensagem = "";
  if (respondidas < 10) {
    mensagem = "Você não respondeu todas as perguntas...";
  } else if (acertos === 10) {
    mensagem = "Excelente! Você acertou todas as perguntas. Parabéns!";
  } else if (acertos >= 8) {
    mensagem = "Muito bom! Você tem um ótimo conhecimento de segurança da informação.";
  } else if (acertos >= 5) {
    mensagem = "Você foi bem, mas pode melhorar. Que tal revisar alguns conceitos?";
  } else {
    mensagem = "Atenção! É importante estudar mais sobre segurança da informação.";
  }

  document.getElementById("resultado").innerHTML = `<div class='score-container'><div class='score-circle'>${acertos}/10</div></div><p>${mensagem}</p>`;
}
