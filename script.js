const translations = {
  en: {
    docTitle: "Marcelo da Paixão | Full-stack Developer",
    metaDescription:
      "Full-stack developer in São Paulo building AI workflow systems, APIs, web apps, and product-minded software.",
    skip: "Skip to content",
    navCase: "Case",
    navWork: "Work",
    navStack: "Stack",
    navContact: "Contact",
    heroImageAlt: "FlowPilot AI workflow builder interface",
    heroEyebrow: "Full-stack developer · AI systems · São Paulo",
    heroCopy:
      "I build full-stack products with the backend discipline to keep them reliable and the product sense to make them useful. My current main case is FlowPilot AI: workflow automation with real LLM execution, queues, credentials, and observability.",
    heroPrimary: "See FlowPilot case",
    heroSecondary: "View GitHub",
    proofMainLabel: "Main case",
    proofProjectsLabel: "Selected projects",
    proofFocusLabel: "Focus",
    proofFocusValue: "Backend, AI, product UI",
    stripOne:
      "Available for freelance builds, backend/API work, AI prototypes, and full-stack product roles.",
    stripTwo:
      "Recent work combines TypeScript, Python, PHP/Laravel, PostgreSQL, RabbitMQ, Redis, Docker, React, Angular, and product-facing dashboards.",
    caseEyebrow: "Featured case",
    caseTitle: "FlowPilot AI",
    caseLead:
      "A multi-tenant workflow automation platform with asynchronous execution, a Python AI orchestrator, encrypted workspace credentials, and observability for LLM calls.",
    caseHuman:
      "I built FlowPilot AI to show how I think about applied AI in software: as one step inside a working system, with failures, secrets, cost, latency, and traceability to handle. It is not a chatbot demo. It is a product-shaped architecture exercise.",
    casePointOneTitle: "Workflow execution",
    casePointOneText:
      "Visual builder, workflow versions, manual trigger, transform, condition, HTTP, and AI prompt nodes.",
    casePointTwoTitle: "Operational backbone",
    casePointTwoText:
      "RabbitMQ worker execution with retries, dead-letter handling, idempotency, and lifecycle events.",
    casePointThreeTitle: "AI with visibility",
    casePointThreeText:
      "OpenRouter-backed prompt node through FastAPI, with traces for provider, model, tokens, status, latency, and estimated cost.",
    caseGifAlt: "Animated FlowPilot AI workflow walkthrough",
    caseCaption:
      "Demo: incident triage workflow from intake to model response and trace data.",
    metricStatusLabel: "Execution",
    metricNodesLabel: "Nodes",
    metricTokensLabel: "Tokens",
    metricLatencyLabel: "Provider latency",
    metricEventsLabel: "Timeline events",
    galleryBuilderAlt: "FlowPilot workflow builder showing the incident triage workflow",
    galleryTracesAlt:
      "FlowPilot AI traces table with provider, model, tokens, cost, and latency",
    galleryExecutionAlt: "FlowPilot execution detail summary cards",
    galleryConfigAlt: "FlowPilot AI prompt node configuration panel",
    galleryBuilder: "Workflow builder",
    galleryTraces: "AI traces",
    galleryExecution: "Execution detail",
    galleryConfig: "AI node config",
    workEyebrow: "Selected work",
    workTitle: "Projects worth showing",
    workLead:
      "I picked the repositories with the clearest product shape, meaningful implementation, tests, or architecture signals. The older ones stay honest about scope; the newer ones show where my work is heading.",
    statePrivate: "Private repo",
    statePublic: "Public",
    statePublic2: "Public",
    statePublic3: "Public",
    statePublic4: "Public",
    statePublic5: "Public",
    docuDesc:
      "Full-stack PDF question-answering app with upload, MinIO object storage, text extraction, and LLM answers grounded in the selected document.",
    docuOne: "Express API and React/Vite frontend in a simple monorepo.",
    docuTwo: "Docker Compose runs API, web app, MinIO, and bucket bootstrap.",
    docuThree: "OpenRouter integration with a strict answer-from-document prompt.",
    webchatDesc:
      "Private messaging app with Laravel, Inertia/React, authenticated API routes, message persistence, and realtime delivery through broadcast channels.",
    webchatOne: "Jetstream/Sanctum auth foundation with typed React screens.",
    webchatTwo: "WebSocket event for incoming messages and per-user private channels.",
    webchatThree: "Conversation loading, message creation, deletion, and seeded demo data.",
    repoLink: "View repository",
    angularDesc:
      "Product and category management split across an Angular Material frontend and a NestJS API with Prisma, JWT auth, validation, and tests.",
    angularOne: "Frontend includes auth flow, guards, interceptors, forms, tables, and dialogs.",
    angularTwo: "API covers users, products, categories, Passport strategies, and Prisma models.",
    angularThree: "Unit specs across components, services, controllers, and e2e scaffolding.",
    frontendRepo: "Frontend repo",
    apiRepo: "API repo",
    investmentDesc:
      "Laravel API foundation for an investment dashboard with Fortify/Sanctum auth, role-based routes, Docker, migrations, and JSON response middleware.",
    investmentOne: "Admin and customer dashboard route groups behind Sanctum auth.",
    investmentTwo: "Custom login/logout responses and email validation rules.",
    investmentThree: "Role table, personal access tokens, queues/cache tables, and tests.",
    repoLink2: "View repository",
    conectarDesc:
      "TCC project pairing an Expo/React Native frontend with a Java Spring Boot backend for a service-oriented mobile product.",
    conectarOne:
      "Expo app structure with auth context, native Android/iOS setup, and maps config.",
    conectarTwo: "Spring Boot backend foundation with Maven project structure.",
    conectarThree: "A broader product build that shows comfort outside one stack.",
    repoLink3: "View repository",
    pokemonDesc:
      "React/Vite TypeScript app for browsing Pokémon types, pagination, routing, reusable UI pieces, and focused component tests.",
    pokemonOne: "Typed models for pagination, Pokémon, and type data.",
    pokemonTwo: "Test coverage for cards, buttons, header, pagination, and pages.",
    pokemonThree: "Small project, useful as a clean front-end testing sample.",
    repoLink4: "View repository",
    stackEyebrow: "How I can help",
    stackTitle: "Practical full-stack engineering",
    capBackendTitle: "Backend systems",
    capBackendText:
      "NestJS, Laravel, Express, FastAPI, REST APIs, auth, RBAC, Prisma, PostgreSQL, queues, jobs, and integration boundaries.",
    capFrontendTitle: "Product interfaces",
    capFrontendText:
      "React, Vite, Angular, Inertia, TypeScript, forms, dashboards, admin panels, workflow UIs, and responsive frontends that stay usable.",
    capAiTitle: "AI integration",
    capAiText:
      "LLM provider abstraction, prompt nodes, OpenRouter, document Q&A, observability, token/latency tracking, and room to grow into RAG and model comparison.",
    capDeliveryTitle: "Delivery habits",
    capDeliveryText:
      "Docker Compose, GitHub Actions, tests where they matter, readable docs, demo seeds, and architecture choices that can be explained in an interview.",
    contactEyebrow: "Freelance and hiring",
    contactTitle: "Let’s build something useful.",
    contactText:
      "I am open to freelance projects, backend-heavy full-stack work, AI-enabled product prototypes, and software engineering roles. For private repo access or a code walkthrough, reach me through GitHub or the platform where you found this portfolio.",
    contactGithub: "GitHub profile",
    contactCase: "Review FlowPilot",
    footerText: "Built as a static GitHub Pages portfolio.",
  },
  pt: {
    docTitle: "Marcelo da Paixão | Desenvolvedor Full-stack",
    metaDescription:
      "Desenvolvedor full-stack em São Paulo criando sistemas com IA, APIs, web apps e software com visão de produto.",
    skip: "Pular para o conteúdo",
    navCase: "Case",
    navWork: "Projetos",
    navStack: "Stack",
    navContact: "Contato",
    heroImageAlt: "Interface do construtor de workflows do FlowPilot AI",
    heroEyebrow: "Desenvolvedor full-stack · Sistemas com IA · São Paulo",
    heroCopy:
      "Eu construo produtos full-stack com cuidado de backend para manter tudo confiável e senso de produto para manter tudo útil. Meu case principal hoje é o FlowPilot AI: automação de workflows com execução real de LLM, filas, credenciais e observabilidade.",
    heroPrimary: "Ver case FlowPilot",
    heroSecondary: "Ver GitHub",
    proofMainLabel: "Case principal",
    proofProjectsLabel: "Projetos selecionados",
    proofFocusLabel: "Foco",
    proofFocusValue: "Backend, IA, UI de produto",
    stripOne:
      "Disponível para freelas, backend/APIs, protótipos com IA e vagas full-stack de produto.",
    stripTwo:
      "Trabalhos recentes combinam TypeScript, Python, PHP/Laravel, PostgreSQL, RabbitMQ, Redis, Docker, React, Angular e dashboards voltados ao produto.",
    caseEyebrow: "Case em destaque",
    caseTitle: "FlowPilot AI",
    caseLead:
      "Uma plataforma multi-tenant de automação de workflows com execução assíncrona, orquestrador de IA em Python, credenciais criptografadas por workspace e observabilidade para chamadas de LLM.",
    caseHuman:
      "Eu criei o FlowPilot AI para mostrar como penso IA aplicada em software: como uma etapa dentro de um sistema real, com falhas, segredos, custo, latência e rastreabilidade para cuidar. Não é uma demo de chatbot. É um exercício de arquitetura com formato de produto.",
    casePointOneTitle: "Execução de workflows",
    casePointOneText:
      "Builder visual, versões de workflow, trigger manual, transform, condition, HTTP e nós de prompt com IA.",
    casePointTwoTitle: "Base operacional",
    casePointTwoText:
      "Worker com RabbitMQ, retries, dead-letter handling, idempotência e eventos de ciclo de vida.",
    casePointThreeTitle: "IA com visibilidade",
    casePointThreeText:
      "Nó de prompt via OpenRouter e FastAPI, com traces de provider, modelo, tokens, status, latência e custo estimado.",
    caseGifAlt: "Walkthrough animado do FlowPilot AI",
    caseCaption:
      "Demo: workflow de triagem de incidente, do intake até a resposta gerada pela IA e os dados de trace.",
    metricStatusLabel: "Execução",
    metricNodesLabel: "Nós",
    metricTokensLabel: "Tokens",
    metricLatencyLabel: "Latência do provider",
    metricEventsLabel: "Eventos na timeline",
    galleryBuilderAlt: "Builder do FlowPilot com workflow de triagem de incidente",
    galleryTracesAlt:
      "Tabela de traces de IA do FlowPilot com provider, modelo, tokens, custo e latência",
    galleryExecutionAlt: "Cards de resumo da execução no FlowPilot",
    galleryConfigAlt: "Painel de configuração do nó de prompt com IA no FlowPilot",
    galleryBuilder: "Workflow builder",
    galleryTraces: "Traces de IA",
    galleryExecution: "Detalhe da execução",
    galleryConfig: "Configuração do nó de IA",
    workEyebrow: "Projetos selecionados",
    workTitle: "Projetos que valem mostrar",
    workLead:
      "Escolhi os repositórios com forma de produto mais clara, implementação relevante, testes ou bons sinais de arquitetura. Os mais antigos ficam honestos sobre escopo; os mais novos mostram para onde meu trabalho está indo.",
    statePrivate: "Repo privado",
    statePublic: "Público",
    statePublic2: "Público",
    statePublic3: "Público",
    statePublic4: "Público",
    statePublic5: "Público",
    docuDesc:
      "Aplicação full-stack para perguntas sobre PDFs, com upload, armazenamento em MinIO, extração de texto e respostas de LLM baseadas no documento selecionado.",
    docuOne: "API Express e frontend React/Vite em um monorepo simples.",
    docuTwo: "Docker Compose sobe API, web app, MinIO e bootstrap do bucket.",
    docuThree: "Integração com OpenRouter usando prompt restrito ao conteúdo do documento.",
    webchatDesc:
      "App de mensagens privadas com Laravel, Inertia/React, rotas autenticadas, persistência de mensagens e entrega em tempo real via broadcast channels.",
    webchatOne: "Base de autenticação com Jetstream/Sanctum e telas React tipadas.",
    webchatTwo: "Evento WebSocket para novas mensagens e canais privados por usuário.",
    webchatThree: "Carregamento de conversas, criação, deleção e dados seed para demo.",
    repoLink: "Ver repositório",
    angularDesc:
      "Gestão de produtos e categorias dividida entre um frontend Angular Material e uma API NestJS com Prisma, JWT auth, validação e testes.",
    angularOne: "Frontend com fluxo de auth, guards, interceptors, formulários, tabelas e dialogs.",
    angularTwo: "API com users, products, categories, Passport strategies e models Prisma.",
    angularThree: "Specs unitários em componentes, services, controllers e base e2e.",
    frontendRepo: "Repo frontend",
    apiRepo: "Repo API",
    investmentDesc:
      "Base de API Laravel para dashboard de investimentos com Fortify/Sanctum auth, rotas por papel, Docker, migrations e middleware de resposta JSON.",
    investmentOne: "Grupos de rotas admin e customer atrás de autenticação Sanctum.",
    investmentTwo: "Respostas customizadas de login/logout e regras de validação de email.",
    investmentThree: "Tabela de roles, personal access tokens, filas/cache e testes.",
    repoLink2: "Ver repositório",
    conectarDesc:
      "Projeto de TCC juntando frontend Expo/React Native e backend Java Spring Boot para um produto mobile orientado a serviços.",
    conectarOne:
      "Estrutura Expo com contexto de auth, setup nativo Android/iOS e configuração de mapas.",
    conectarTwo: "Base backend Spring Boot com estrutura Maven.",
    conectarThree: "Um build de produto mais amplo, mostrando conforto fora de uma única stack.",
    repoLink3: "Ver repositório",
    pokemonDesc:
      "App React/Vite com TypeScript para navegar por tipos de Pokémon, paginação, rotas, componentes reutilizáveis e testes focados.",
    pokemonOne: "Models tipados para paginação, Pokémon e tipos.",
    pokemonTwo: "Testes cobrindo cards, botões, header, paginação e páginas.",
    pokemonThree: "Projeto menor, útil como amostra limpa de testes no front-end.",
    repoLink4: "Ver repositório",
    stackEyebrow: "Como posso ajudar",
    stackTitle: "Engenharia full-stack prática",
    capBackendTitle: "Sistemas backend",
    capBackendText:
      "NestJS, Laravel, Express, FastAPI, REST APIs, auth, RBAC, Prisma, PostgreSQL, filas, jobs e fronteiras de integração.",
    capFrontendTitle: "Interfaces de produto",
    capFrontendText:
      "React, Vite, Angular, Inertia, TypeScript, formulários, dashboards, admin panels, UIs de workflow e frontends responsivos que continuam usáveis.",
    capAiTitle: "Integração com IA",
    capAiText:
      "Abstração de providers LLM, nós de prompt, OpenRouter, perguntas sobre documentos, observabilidade, tokens/latência e caminho para RAG e comparação de modelos.",
    capDeliveryTitle: "Entrega",
    capDeliveryText:
      "Docker Compose, GitHub Actions, testes onde importam, docs legíveis, seeds de demo e decisões de arquitetura que dá para explicar em entrevista.",
    contactEyebrow: "Freela e contratação",
    contactTitle: "Vamos construir algo útil.",
    contactText:
      "Estou aberto para freelas, trabalho full-stack com peso em backend, protótipos de produto com IA e vagas de engenharia de software. Para acesso a repositórios privados ou walkthrough de código, me chame pelo GitHub ou pela plataforma onde você encontrou este portfólio.",
    contactGithub: "Perfil no GitHub",
    contactCase: "Rever FlowPilot",
    footerText: "Criado como portfólio estático no GitHub Pages.",
  },
};

const langButtons = document.querySelectorAll("[data-lang-option]");
const year = document.querySelector("[data-year]");
const header = document.querySelector("[data-header]");
const metaDescription = document.querySelector('meta[name="description"]');

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = dictionary.docTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    if (dictionary[key]) {
      node.setAttribute("alt", dictionary[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-option") === lang;
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", lang);
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  const stored = localStorage.getItem("portfolio-language");

  if (fromQuery === "pt" || fromQuery === "en") return fromQuery;
  if (stored === "pt" || stored === "en") return stored;
  return "en";
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang-option"));
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

if (year) {
  year.textContent = new Date().getFullYear();
}

applyLanguage(getInitialLanguage());
