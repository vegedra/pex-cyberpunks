const bancoQuestoes = [
  {
    pergunta: "Qual é o principal objetivo de um programa de conscientização em segurança para funcionários?",
    opcoes: [
      "Aumentar a produtividade sem precisar de treinamentos",
      "Ensinar boas práticas para reduzir riscos de segurança",
      "Substituir a necessidade de ferramentas de segurança",
      "Controlar o acesso físico às instalações"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um e-mail de phishing básico?",
    opcoes: [
      "Remetente conhecido e lista de contatos pessoais",
      "Mensagem com erros ortográficos e solicitação de dados sensíveis",
      "Uso de anexos em formato PDF apenas",
      "Envio apenas para um único destinatário"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática um usuário final deve adotar para criar senhas seguras?",
    opcoes: [
      "Reutilizar senhas de outros serviços",
      "Utilizar apenas números sequenciais",
      "Combinar letras maiúsculas, minúsculas, números e símbolos",
      "Anotar a senha ao lado do computador"
    ],
    correta: 2
  },
  {
    pergunta: "Ao identificar um e-mail suspeito, qual ação é a mais recomendada?",
    opcoes: [
      "Clicar no link para verificar a autenticidade",
      "Responder pedindo confirmação da origem",
      "Encaminhar para todos os colegas para alerta geral",
      "Marcar como spam ou phishing e deletar"
    ],
    correta: 3
  },
  {
    pergunta: "O que é 'shoulder surfing' no contexto de segurança?",
    opcoes: [
      "Técnica de criptografar dados em trânsito",
      "Observar por cima do ombro para obter informações sigilosas",
      "Uso de software para capturar teclas digitadas",
      "Envio massivo de e-mails maliciosos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual ação reforça a segurança quando se trabalha em locais públicos?",
    opcoes: [
      "Usar sempre conexões Wi-Fi abertas",
      "Deixar a tela do equipamento visível a todos",
      "Utilizar VPN e bloqueio automático de tela",
      "Compartilhar o cabo de rede com colegas"
    ],
    correta: 2
  },
  {
    pergunta: "Em treinamentos sobre engenharia social, que tipo de ataque costuma ser demonstrado?",
    opcoes: [
      "Injeção SQL em servidores web",
      "Simulação de ligação telefônica solicitando senha",
      "Instalação de antivírus corporativo",
      "Uso de cabos protegidos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática reforça a proteção de dispositivos móveis corporativos?",
    opcoes: [
      "Desativar todas as atualizações automáticas",
      "Usar senha fraca para facilitar o acesso",
      "Habilitar bloqueio por biometria ou PIN e criptografia de armazenamento",
      "Compartilhar o dispositivo entre vários usuários"
    ],
    correta: 2
  },
  {
    pergunta: "O que todo usuário deve fazer ao notar comportamento estranho no computador?",
    opcoes: [
      "Continuar usando normalmente",
      "Registrar o ocorrido em um canal oficial de incidentes",
      "Tentar remover o vírus por conta própria",
      "Ignorar até a próxima manutenção"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal vantagem de um quiz interativo em treinamentos de segurança?",
    opcoes: [
      "Substituir a necessidade de política de segurança",
      "Engajar participantes e reforçar o aprendizado",
      "Diminuir o tempo de uso de antivírus",
      "Aumentar o tráfego de e-mail interno"
    ],
    correta: 1
  },
  {
    pergunta: "Em conscientização de phishing, quais elementos ajudam a detectar um link falso?",
    opcoes: [
      "Domínio parecido, mas grafia diferente do oficial",
      "Uso exclusivo de HTTPS sem certificado válido",
      "Ícones coloridos e design moderno",
      "Assinatura automática da empresa"
    ],
    correta: 0
  },
  {
    pergunta: "O que deve conter um programa de treinamento eficaz para novos funcionários?",
    opcoes: [
      "Apenas políticas de férias e benefícios",
      "Sessões sobre boas práticas de segurança desde o primeiro dia",
      "Demonstrações de software de mídia social",
      "Lista de contatos pessoais de todos os colegas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a melhor forma de armazenar senhas de múltiplas contas?",
    opcoes: [
      "Em planilha de texto não criptografada",
      "No navegador sem master password",
      "Em gerenciador de senhas confiável",
      "Em post-it colado no monitor"
    ],
    correta: 2
  },
  {
    pergunta: "O que é tailgating em segurança física?",
    opcoes: [
      "Uso de VPN para acessar rede remota",
      "Entrar em área restrita seguindo alguém sem autorização",
      "Escaneamento de vulnerabilidades em servidores",
      "Conectar dispositivos USB desconhecidos"
    ],
    correta: 1
  },
  {
    pergunta: "Durante um treinamento, qual ferramenta pode simular um ataque de phishing?",
    opcoes: [
      "Software de criptografia",
      "Plataforma de phishing controlada pela TI",
      "VPN empresarial",
      "Backup automatizado"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o benefício de incluir casos reais de ataques em treinamentos?",
    opcoes: [
      "Aumentar o tempo de sessão sem valor prático",
      "Mostrar consequências reais e reforçar a importância das boas práticas",
      "Substituir políticas formais",
      "Tornar o treinamento mais teórico e abstrato"
    ],
    correta: 1
  },
  {
    pergunta: "Em conscientização móvel, o que se deve evitar ao usar redes públicas?",
    opcoes: [
      "Usar VPN corporativa",
      "Compartilhar arquivos via Bluetooth sem controle",
      "Bloquear automaticamente a tela",
      "Atualizar apps regularmente"
    ],
    correta: 1
  },
  {
    pergunta: "Qual indicador demonstra retenção de aprendizado após um treinamento?",
    opcoes: [
      "Aplicação consistente das práticas em avaliações simuladas",
      "Número de alunos inscritos",
      "Quantidade de material impresso entregue",
      "Tempo gasto na sala de treinamento"
    ],
    correta: 0
  },
  {
    pergunta: "Qual técnica ajuda a evitar ataques por engenharia social presencial?",
    opcoes: [
      "Deixar portas destrancadas para facilitar evacuação",
      "Verificar identidade antes de liberar acesso a visitantes",
      "Compartilhar crachás entre colegas",
      "Desativar alarmes de acesso"
    ],
    correta: 1
  },
  {
    pergunta: "Por que é importante fazer treinamentos periódicos em vez de apenas uma vez?",
    opcoes: [
      "Para usar mais recursos de TI",
      "Porque as ameaças evoluem e a memória humana se deteriora",
      "Para criar um banco de dados de e-mails",
      "Para substituir sistemas de autenticação"
    ],
    correta: 1
  },
  {
    pergunta: "Num programa de conscientização sobre senhas, qual métrica interna pode ser usada para medir sucesso?",
    opcoes: [
      "Percentual de funcionários que solicitaram troca de senha",
      "Quantidade de backups realizados",
      "Número de relatórios de incidentes de phishing bem-sucedidos",
      "Quantidade de impressões de políticas de segurança"
    ],
    correta: 2
  },
  {
    pergunta: "Durante um exercício de simulação de phishing, qual taxa de clique é considerada aceitável para melhoria?",
    opcoes: [
      "Acima de 80%",
      "Entre 50% e 70%",
      "Abaixo de 20%",
      "Sempre 100%"
    ],
    correta: 2
  },
  {
    pergunta: "Qual abordagem pedagógica fortalece o engajamento em treinamentos de segurança?",
    opcoes: [
      "Aula expositiva única sem práticas",
      "Metodologia hands-on com cenários realistas",
      "Apenas leitura de manuais técnicos",
      "Vídeos genéricos sem interação"
    ],
    correta: 1
  },
  {
    pergunta: "Em treinamentos de BYOD, o que deve ser enfatizado?",
    opcoes: [
      "Uso irrestrito de aplicativos não autorizados",
      "Instalação de software corporativo de gerenciamento (MDM)",
      "Compartilhamento de senhas entre usuários",
      "Desativar criptografia do dispositivo"
    ],
    correta: 1
  },
  {
    pergunta: "Qual norma regula práticas de conscientização em empresas brasileiras?",
    opcoes: [
      "NBR ISO 9001",
      "NBR ISO/IEC 27001",
      "Lei Maria da Penha",
      "Código de Trânsito Brasileiro"
    ],
    correta: 1
  },
  {
    pergunta: "Como avaliar se o treinamento melhorou a postura de segurança?",
    opcoes: [
      "Contagem de acessos à intranet",
      "Auditoria de políticas e redução de incidentes",
      "Impressão de documentos confidenciais",
      "Uso de planilhas antigas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método auxilia na identificação proativa de novos riscos sociais?",
    opcoes: [
      "Análise de logs de firewall",
      "Realização de entrevistas periódicas com funcionários",
      "Compartilhamento de credenciais",
      "Desativação de antivírus"
    ],
    correta: 1
  },
  {
    pergunta: "Na conscientização sobre phishing por SMS (smishing), qual ponto é crucial?",
    opcoes: [
      "Usar sempre links curtos",
      "Verificar remetente e desconfiar de pedidos urgentes",
      "Autorizar todos os acessos",
      "Ignorar políticas de TI"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um programa de 'security champions' dentro de uma equipe?",
    opcoes: [
      "Representantes que disseminam boas práticas de segurança entre pares",
      "Líderes que implementam senhas fracas",
      "Equipe dedicada a backup de dados",
      "Grupo que ignora atualizações"
    ],
    correta: 0
  },
  {
    pergunta: "Qual tecnologia pode ser apresentada em treinamentos para reforçar MFA?",
    opcoes: [
      "Firewalls de próxima geração",
      "Tokens de hardware ou aplicativos autenticadores",
      "USBs públicos",
      "Antivírus gratuitos"
    ],
    correta: 1
  },
  {
    pergunta: "Em avaliações pós-treinamento, qual tipo de questão é mais eficaz?",
    opcoes: [
      "Fechadas e de múltipla escolha com cenários reais",
      "Perguntas sem resposta correta",
      "Apenas questões dissertativas genéricas",
      "Questões de conhecimento irrelevante"
    ],
    correta: 0
  },
  {
    pergunta: "Qual prática de conscientização reduz riscos de engenharia social em telefonemas?",
    opcoes: [
      "Responder imediatamente a qualquer solicitação",
      "Confirmar identidade em canal oficial antes de fornecer informações",
      "Compartilhar senhas por SMS",
      "Permitir acesso irrestrito"
    ],
    correta: 1
  },
  {
    pergunta: "Em um cenário de home office, qual ponto deve constar no treinamento?",
    opcoes: [
      "Desligar o antivírus para economizar recursos",
      "Uso de rede doméstica sem firewall",
      "Seguir diretrizes de uso de VPN e bloqueio de tela",
      "Compartilhar equipamentos com estranhos"
    ],
    correta: 2
  },
  {
    pergunta: "Qual indicador qualitativo pode mostrar eficácia de um workshop de segurança?",
    opcoes: [
      "Número de slides exibidos",
      "Feedback positivo e relatos de casos de sucesso",
      "Quantidade de café consumido",
      "Tamanho da sala de treinamento"
    ],
    correta: 1
  },
  {
    pergunta: "Por que incluir líderes de equipe em treinamentos de segurança?",
    opcoes: [
      "Para centralizar decisões sem envolver o time",
      "Porque influenciam comportamento e reforçam políticas",
      "Para dividir credenciais com todos",
      "Para simplificar processos de TI"
    ],
    correta: 1
  },
  {
    pergunta: "Em campanhas internas, qual mídia costuma gerar maior alcance?",
    opcoes: [
      "Comunicados em murais físicos apenas",
      "E-mail corporativo e intranet integrados",
      "Mensagens via aplicativos pessoais",
      "Entrega de panfleto impresso"
    ],
    correta: 1
  },
  {
    pergunta: "O que é 'vishing' em segurança da informação?",
    opcoes: [
      "Phishing via e-mail",
      "Phishing via ligação telefônica",
      "Invasão física de servidores",
      "Uso de software de gestão de patches"
    ],
    correta: 1
  },
  {
    pergunta: "Durante reciclagem de treinamento, qual frequência mínima é recomendada?",
    opcoes: [
      "A cada 5 anos",
      "A cada 3 meses",
      "Apenas na admissão",
      "Nunca repetir"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tipo de linguagem usar em materiais de conscientização para maior engajamento?",
    opcoes: [
      "Termos técnicos avançados apenas",
      "Exemplo práticos, linguagem simples e analogias do dia a dia",
      "Textos longos e sem exemplos",
      "Somente normas legais"
    ],
    correta: 1
  },
  {
    pergunta: "Qual abordagem fortalece a cultura de segurança na empresa?",
    opcoes: [
      "Responsabilizar indivíduos isoladamente",
      "Reconhecer boas práticas e premiar comportamentos seguros",
      "Ignorar sugestões de funcionários",
      "Aplicar punições sem diálogo prévio"
    ],
    correta: 1
  },
  {
    pergunta: "Em um programa avançado de conscientização, qual método de avaliação é considerado mais robusto?",
    opcoes: [
      "Testes de múltipla escolha sem contexto",
      "Simulações red team com cenários reais",
      "Leitura de políticas sem aplicação prática",
      "Questionários de opinião anônimos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual métrica de negócio pode demonstrar o ROI de treinamentos em segurança?",
    opcoes: [
      "Tempo médio de login dos usuários",
      "Redução no custo médio por incidente de segurança",
      "Número de downloads de antivírus gratuitos",
      "Quantidade de e-mails enviados internamente"
    ],
    correta: 1
  },
  {
    pergunta: "Em um ambiente de alta rotatividade, como manter o nível de conscientização?",
    opcoes: [
      "Treinamentos esporádicos de alta duração",
      "Microlearning contínuo e integração automática de novos funcionários",
      "Apenas políticas no manual do funcionário",
      "Ignorar novas contratações"
    ],
    correta: 1
  },
  {
    pergunta: "Qual abordagem de gamificação pode aumentar retenção em treinamentos?",
    opcoes: [
      "Pontuação e leaderboard com recompensas simbólicas",
      "Apenas vídeos sem interação",
      "Material estático impresso",
      "Sessões monótonas de slides"
    ],
    correta: 0
  },
  {
    pergunta: "Em um programa global, como assegurar consistência de conscientização?",
    opcoes: [
      "Traduzir literalmente sem adaptar ao contexto cultural",
      "Localizar conteúdo para culturas e idiomas, mantendo padrões mínimos",
      "Usar apenas uma língua em todas as regiões",
      "Ignorar diferenças legais locais"
    ],
    correta: 1
  },
  {
    pergunta: "Qual técnica avançada pode detectar cliques em links maliciosos antes do usuário perceber?",
    opcoes: [
      "Análise de tráfego no endpoint com sandboxing de URLs",
      "Desativar firewall para melhor desempenho",
      "Backup de todos os e-mails recebidos",
      "Compartilhar credenciais internamente"
    ],
    correta: 0
  },
  {
    pergunta: "No contexto de ABAC (Attribute-Based Access Control), como o treinamento deve abordar a informação?",
    opcoes: [
      "Focar apenas em papéis estáticos",
      "Enfatizar entendimento de atributos de usuário, recurso e ambiente",
      "Ignorar requisitos de contexto",
      "Ensinar senha única para todos"
    ],
    correta: 1
  },
  {
    pergunta: "Ao medir maturidade de um programa de conscientização, qual modelo é recomendado?",
    opcoes: [
      "Modelo de Maturidade de Capability (CMMI) adaptado para segurança",
      "Apenas contagem de treinamentos realizados",
      "Tamanho da equipe de TI",
      "Quantidade de políticas documentadas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desafio central ao treinar usuários em ambientes DevOps?",
    opcoes: [
      "Uso exclusivo de senhas complexas",
      "Integração contínua de práticas de segurança sem atrasar entregas",
      "Isolamento total da TI",
      "Proibição de automação"
    ],
    correta: 1
  },
  {
    pergunta: "Como a análise de comportamento do usuário (UBA) pode complementar treinamentos?",
    opcoes: [
      "Desativando logs de auditoria",
      "Identificando padrões anômalos e reforçando treinamentos direcionados",
      "Forçando backup de dados irrelevantes",
      "Aplicando patches manuais"
    ],
    correta: 1
  },
  {
    pergunta: "Em organizações altamente regulamentadas, qual aspecto do treinamento é crucial?",
    opcoes: [
      "Abordar somente riscos técnicos",
      "Incluir requisitos legais específicos de conformidade (LGPD, GDPR, etc.)",
      "Focar apenas em redes sociais",
      "Ignorar auditorias externas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o papel de indicadores KPIs vs. KRIs em um programa de conscientização?",
    opcoes: [
      "KPIs medem atividades; KRIs alertam sobre riscos emergentes",
      "Ambós são sinônimos",
      "KPIs apenas relatam incidentes",
      "KRIs apenas calculam custos"
    ],
    correta: 0
  },
  {
    pergunta: "Em um cenário de phishing avançado (spear-phishing), qual camada de defesa humana é essencial?",
    opcoes: [
      "Treinamento genérico sem segmentação",
      "Simulações personalizadas e briefing sobre ameaças específicas",
      "Uso de senha curta",
      "Reuniões informais sem objetivo"
    ],
    correta: 1
  },
  {
    pergunta: "Como a neurociência pode influenciar design de treinamentos em segurança?",
    opcoes: [
      "Ignorando limites de atenção",
      "Incorporando intervalos e reforço espaçado para melhor retenção",
      "Apenas aumentando o tempo de exposição",
      "Fornecendo apenas texto extenso"
    ],
    correta: 1
  },
  {
    pergunta: "Qual técnica avançada de storytelling reforça mensagens de segurança?",
    opcoes: [
      "Relatar casos de sucesso em primeira pessoa e criar vínculos emocionais",
      "Expor apenas estatísticas sem contexto",
      "Usar jargão técnico",
      "Apresentar slides sem narrativa"
    ],
    correta: 0
  },
  {
    pergunta: "No uso de AR/VR para conscientização, qual cuidado deve ser tomado?",
    opcoes: [
      "Expor usuários a cenários de risco real sem supervisão",
      "Criar simulações seguras com feedback imediato",
      "Ignorar métricas de desempenho",
      "Não testar dispositivos antes do uso"
    ],
    correta: 1
  },
  {
    pergunta: "Como mensurar o impacto de um programa de microlearning?",
    opcoes: [
      "Avaliando tempo total gasto",
      "Medindo resultados em pequenas avaliações frequentes",
      "Contando número de vídeos assistidos",
      "Verificando tamanho do arquivo de treinamento"
    ],
    correta: 1
  },
  {
    pergunta: "Para lidar com riscos de insider threats, que componente deve integrar o treinamento?",
    opcoes: [
      "Somente políticas de TI",
      "Sinais de alerta comportamental e canais anônimos de denúncia",
      "Compartilhamento irrestrito de senhas",
      "Desativação de logs"
    ],
    correta: 1
  },
  {
    pergunta: "Em um programa global, como alinhar métricas em diferentes fusos?",
    opcoes: [
      "Usar apenas horário local de cada país",
      "Definir referência UTC e converter para relatórios locais",
      "Desconsiderar diferenças de horário",
      "Enviar relatórios sem datas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o próximo passo após detectar baixa adesão a treinamentos?",
    opcoes: [
      "Aumentar punições automáticas",
      "Revisar formato, conteúdo e canais de entrega para torná-los mais atrativos",
      "Cancelar todos os treinamentos",
      "Focar apenas em documentação escrita"
    ],
    correta: 1
  }
];

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function carregarQuiz() {
  const perguntasSelecionadas = embaralhar([...bancoQuestoes]).slice(0, 10);
  window.perguntasSelecionadas = perguntasSelecionadas;

  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = ""; // Limpar conteúdo anterior

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

  document.getElementById("resultado").innerHTML = "";
}

function verificarRespostas() {
  let acertos = 0;
  let respondidas = 0;

  const perguntasSelecionadas = window.perguntasSelecionadas;

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

  document.getElementById("resultado").innerHTML = `
    <div class='score-container'>
      <div class='score-circle'>${acertos}/10</div>
    </div>
    <p>${mensagem}</p>
    <div class='action-buttons'>
      <button class='btn-secundario' onclick='reiniciarQuiz()'>Refazer Quiz</button>
    </div>`;
}

function reiniciarQuiz() {
  carregarQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = carregarQuiz;