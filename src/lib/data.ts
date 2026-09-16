export type Language = 'fr' | 'en';

export interface Project {
  id: string;
  title: string;
  category: { fr: string; en: string };
  description: { fr: string; en: string };
  tags: string[];
  metrics?: { fr: string; en: string };
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: { fr: string; en: string };
  period: string;
  location: string;
  description: { fr: string; en: string };
  highlights: { fr: string[]; en: string[] };
  skills: string[];
  type: 'lead' | 'fullstack' | 'ai';
}

export interface SkillCategory {
  title: { fr: string; en: string };
  icon: string;
  description: { fr: string; en: string };
  items: { name: string; level?: string; highlight?: boolean }[];
}

export const PROFILE = {
  name: "Bastien Chevallier",
  title: {
    fr: "Lead Tech Full Stack & Architecte Solutions IA",
    en: "Lead Full Stack Engineer & AI Solutions Architect"
  },
  tagline: {
    fr: "De la visualisation temps-réel aéronautique aux architectures multi-agents autonomes.",
    en: "From mission-critical real-time aviation systems to autonomous multi-agent architectures."
  },
  bio: {
    fr: "Ingénieur logiciel expérimenté (Full Stack, Golang, TypeScript, React/Node, Python, Cloud/K8s) avec une solide expertise en systèmes temps réel, distribués et à haute fiabilité. Passionné par l'Intelligence Artificielle de pointe (agents autonomes, RAG, MCP, orchestration LLM) et pilote privé d'avion (PPL).",
    en: "Senior software engineer (Full Stack, Golang, TypeScript, React/Node, Python, Cloud/K8s) specialized in mission-critical real-time and distributed architectures. Driving cutting-edge AI systems (autonomous agents, RAG, MCP, LLM pipelines) and licensed Private Pilot (PPL)."
  },
  location: "Paris / Remote",
  socials: {
    github: "https://github.com/Bastorx",
    linkedin: "https://www.linkedin.com/in/bastien-chevallier-45b14187/",
    email: "contact@bastienchevallier.com",
    website: "https://bastienchevallier.com"
  },
  stats: [
    { value: "10+", label: { fr: "Années d'expérience", en: "Years Experience" } },
    { value: "100k+", label: { fr: "Utilisateurs servis", en: "Users Scaled" } },
    { value: "99.99%", label: { fr: "SLA Systèmes critiques", en: "Mission-Critical SLA" } },
    { value: "PPL", label: { fr: "Pilote Privé d'Avion", en: "Private Pilot License" } }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: { fr: "Intelligence Artificielle & Automatisation", en: "AI Engineering & Automation" },
    icon: "Bot",
    description: {
      fr: "Conception et déploiement d'écosystèmes d'agents IA, RAG haute précision et orchestration de workflows autonomes.",
      en: "Designing & deploying multi-agent AI ecosystems, precision RAG pipelines, and autonomous workflow automation."
    },
    items: [
      { name: "Autonomous Multi-Agents (OpenClaw / LangChain)", highlight: true },
      { name: "MCP (Model Context Protocol)", highlight: true },
      { name: "RAG & Vector Search (Chroma, pgvector)", highlight: true },
      { name: "LLM Fine-tuning & Local Inference (Ollama)", highlight: true },
      { name: "n8n Workflow Automation & Webhooks", highlight: true },
      { name: "Prompt Engineering & Structured Output Evaluation" }
    ]
  },
  {
    title: { fr: "Architecture & Backend", en: "Architecture & Backend" },
    icon: "Server",
    description: {
      fr: "Services scalables, systèmes distribués à faible latence et traitement de flux temps réel.",
      en: "Scalable services, low-latency distributed systems, and real-time event streaming."
    },
    items: [
      { name: "Golang (Go)", highlight: true },
      { name: "TypeScript / Node.js / NestJS", highlight: true },
      { name: "Python (FastAPI, PyTorch basics)", highlight: true },
      { name: "PostgreSQL, Redis, MongoDB" },
      { name: "gRPC, WebSockets, Kafka / RabbitMQ" },
      { name: "GraphQL & RESTful Hypermedia APIs" }
    ]
  },
  {
    title: { fr: "Frontend & Expérience Utilisateur", en: "Frontend & Modern UI" },
    icon: "Layout",
    description: {
      fr: "Interfaces réactives ultra-fluides, dashboards temps réel, visualisation de données cartographiques et graphiques.",
      en: "Ultra-fluid reactive interfaces, real-time dashboards, spatial/map & graphics data visualization."
    },
    items: [
      { name: "Svelte 5 / Runes", highlight: true },
      { name: "React, Next.js, Redux / Zustand", highlight: true },
      { name: "Tailwind CSS & Design Systems", highlight: true },
      { name: "Three.js / WebGL / Canvas", highlight: true },
      { name: "GIS & Maps (OpenLayers, Leaflet, Mapbox)" },
      { name: "Vite, Micro-frontends & Performance Web" }
    ]
  },
  {
    title: { fr: "DevOps, SRE & Sécurité", en: "DevOps, Cloud & SRE" },
    icon: "Cloud",
    description: {
      fr: "Infrastructures conteneurisées, pipelines CI/CD résilients et monitoring de production.",
      en: "Containerized infrastructure, resilient CI/CD pipelines, and production observability."
    },
    items: [
      { name: "Docker & Docker Compose", highlight: true },
      { name: "Kubernetes (K8s) & Helm", highlight: true },
      { name: "GitHub Actions CI/CD", highlight: true },
      { name: "Linux Administration & Self-hosting (NAS / Bare Metal)" },
      { name: "Cloudflare Workers & Tunnels" },
      { name: "Observability (Prometheus, Grafana, OpenTelemetry)" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "SkySoft-ATM (Suisse)",
    role: {
      fr: "Lead Tech & Développeur Senior Full-Stack",
      en: "Lead Tech & Senior Full-Stack Engineer"
    },
    period: "2021 — 2024",
    location: "Genève (Suisse) / Remote",
    description: {
      fr: "Conception et évolution d'applications critiques de contrôle du trafic aérien (ATC) et de visualisation radar/cartographique temps réel pour les tours de contrôle internationales.",
      en: "Architecture & development of mission-critical Air Traffic Control (ATC) recording, surveillance, and real-time radar mapping software for international airport towers."
    },
    highlights: {
      fr: [
        "Architecture temps réel haute résilience à tolérance de panne avec WebSockets et flux streaming vidéo/radar",
        "Visualisation cartographique complexe et rendu haute performance multi-écrans",
        "Mentoring d'équipe, revue de code rigoureuse et conformité aux standards de sécurité aéronautique",
        "Refonte vers des stacks modernes TypeScript / React et services distribués haute performance"
      ],
      en: [
        "High-resilience fault-tolerant real-time architecture utilizing streaming video/radar and low-latency WebSockets",
        "Complex spatial/GIS visualization and ultra-smooth multi-display rendering",
        "Engineering mentorship, strict code reviews, and air traffic safety compliance",
        "Modernization toward high-performance TypeScript/React frontend and distributed services"
      ]
    },
    skills: ["TypeScript", "React", "Node.js", "WebSockets", "GIS / Canvas", "Docker", "SRE"],
    type: "lead"
  },
  {
    company: "Ministère de l'Intérieur",
    role: {
      fr: "Ingénieur Concepteur Full-Stack",
      en: "Full-Stack Software Engineer"
    },
    period: "2020 — 2021",
    location: "Paris, France",
    description: {
      fr: "Développement d'outils stratégiques internes de gestion des opérations et de suivi de données sensibles sous haute contrainte de sécurité.",
      en: "Development of sensitive internal operational management systems and data governance platforms under high government security clearance."
    },
    highlights: {
      fr: [
        "Conception de microservices sécurisés et d'APIs REST robustes",
        "Mise en place d'interfaces utilisateurs claires pour les opérateurs de terrain",
        "Optimisation des requêtes de bases de données et gestion fine des habilitations RBAC"
      ],
      en: [
        "Designed secured microservices and resilient REST APIs",
        "Built responsive, accessible interfaces for field operators and decision-makers",
        "Database query tuning and granular Role-Based Access Control (RBAC)"
      ]
    },
    skills: ["Golang", "TypeScript", "React", "PostgreSQL", "Docker", "SecOps"],
    type: "fullstack"
  },
  {
    company: "Quadient (ex-Neopost)",
    role: {
      fr: "Ingénieur Logiciel Full-Stack & Big Data",
      en: "Full-Stack & Big Data Software Engineer"
    },
    period: "2018 — 2020",
    location: "Bagneux, France",
    description: {
      fr: "Plateforme cloud de gestion des flux documentaires et d'analyse de données massives (Customer Experience Management).",
      en: "Enterprise cloud platform for document workflow automation and massive data analytics (Customer Experience Management)."
    },
    highlights: {
      fr: [
        "Traitement et ingestion de millions de documents par jour via pipelines ETL asynchrones",
        "Développement de microservices scalables et dashboards interactifs d'analytics",
        "Intégration continue, tests de charge automatisés et déploiement multi-tenant"
      ],
      en: [
        "Ingestion & processing of millions of documents daily via asynchronous ETL pipelines",
        "Built scalable microservices and interactive data analytics dashboards",
        "Continuous integration, automated load testing, and multi-tenant deployments"
      ]
    },
    skills: ["TypeScript", "Node.js", "Angular / React", "MongoDB", "RabbitMQ", "Microservices"],
    type: "fullstack"
  },
  {
    company: "Kardinal",
    role: {
      fr: "Développeur Full-Stack (Optimisation algorithmique)",
      en: "Full-Stack Engineer (Route Optimization SaaS)"
    },
    period: "2017 — 2018",
    location: "Paris, France",
    description: {
      fr: "SaaS innovant d'optimisation en temps réel de tournées logistiques basé sur la recherche opérationnelle et l'algorithmique avancée.",
      en: "SaaS platform optimizing logistics route planning in real-time using advanced operational research algorithms."
    },
    highlights: {
      fr: [
        "Interface de visualisation spatio-temporelle de flottes de véhicules sur cartes dynamiques",
        "Communication réactive avec le moteur de calcul d'optimisation sous contraintes",
        "Amélioration des performances de rendu cartographique pour des milliers de points simultanés"
      ],
      en: [
        "Dynamic spatio-temporal fleet dispatching & route visualization on interactive maps",
        "Real-time event streaming with constrained optimization calculation engines",
        "Optimized client-side spatial map rendering for thousands of simultaneous waypoints"
      ]
    },
    skills: ["JavaScript / TypeScript", "React", "Node.js", "Leaflet / Mapbox", "Algorithms"],
    type: "fullstack"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "autonomous-ai-agents",
    title: "Autonomous Multi-Agent AI System",
    category: { fr: "IA & Systèmes Autonomes", en: "AI & Autonomous Systems" },
    description: {
      fr: "Architecture orchestrée de multi-agents collaboratifs spécialisés (Recherche de marché, Lead Developer, Architecte QA, SRE). Intégration de MCP (Model Context Protocol), mémoire vectorielle RAG et exécution d'outils sandboxés.",
      en: "Orchestrated collaborative multi-agent architecture (Market Scout, Lead Dev, QA Architect, SRE). Deep integration with Model Context Protocol (MCP), vector RAG memory, and sandboxed autonomous tool execution."
    },
    tags: ["OpenClaw", "TypeScript", "LangChain", "MCP", "RAG", "Ollama", "Docker"],
    metrics: { fr: "8x gain de productivité R&D", en: "8x R&D velocity boost" },
    featured: true
  },
  {
    id: "aero-navigator",
    title: "AeroNav - PPL Flight Assistant",
    category: { fr: "Aéronautique & Mobile", en: "Aviation & Real-Time" },
    description: {
      fr: "Assistant de vol et de préparation de navigation pour pilotes privés VFR : calcul de carburant, centrage/masse, vents en altitude, NOTAMs temps réel et déroutement d'urgence.",
      en: "In-flight assistance & pre-flight planning application for VFR pilots: dynamic weight & balance, winds aloft, live METAR/TAF/NOTAMs, and diversion calculations."
    },
    tags: ["TypeScript", "Svelte", "OpenLayers", "WebSockets", "PPL VFR"],
    metrics: { fr: "Conforme DGAC / OACI", en: "DGAC / ICAO Compliant" },
    featured: true
  },
  {
    id: "realtime-radar-streamer",
    title: "High-FPS Air Traffic Radar Replay",
    category: { fr: "Temps Réel & Systèmes Critiques", en: "Real-Time & Systems" },
    description: {
      fr: "Moteur de synchronisation et relecture multi-canaux de flux radar ASTERIX et communications audio/vidéo ATC à 60 FPS avec scrubbing temporel instantané.",
      en: "Multi-channel synchronization and replay engine for ASTERIX radar surveillance data & ATC audio/video streams at 60 FPS with zero-latency scrubbing."
    },
    tags: ["Golang", "TypeScript", "WebAssembly", "WebGL / Canvas", "gRPC"],
    metrics: { fr: "< 16ms latence de rendu", en: "< 16ms render latency" },
    featured: true
  },
  {
    id: "n8n-smart-automations",
    title: "Autonomous Enterprise Pipeline & n8n Hub",
    category: { fr: "Automatisation & DevOps", en: "Automation & DevOps" },
    description: {
      fr: "Hub d'automatisation couplé à n8n pour interconnecter webhooks, alertes, monitoring de serveurs NAS, synchronisation cloud et résumés LLM quotidiens.",
      en: "Automated event hub bridging n8n workflows, webhook ingestion, self-hosted NAS monitoring, Cloudflare tunnels, and daily synthesized LLM briefings."
    },
    tags: ["n8n", "Docker", "Node.js", "Webhooks", "Cloudflare", "NAS"],
    metrics: { fr: "100% autonome & auto-hébergé", en: "100% self-hosted & resilient" },
    featured: false
  }
];
