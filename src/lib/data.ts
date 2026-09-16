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
  type: 'lead' | 'fullstack' | 'backend';
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
    fr: "Développeur Full Stack Senior",
    en: "Senior Full Stack Engineer"
  },
  tagline: {
    fr: "Développement d'outils visuels temps réel, architectures web robustes et exploration pratique des technologies IA.",
    en: "Building real-time visual tools, robust web architectures, and exploring practical AI integrations."
  },
  bio: {
    fr: "Développeur Full Stack avec plus de 9 ans d'expérience (TypeScript, React, Golang, Node.js, NestJS, Python, Docker). Spécialisé dans la réalisation d'applications web réactives et d'outils de visualisation en temps réel. Passionné par l'aéronautique (licence PPL en cours aux Ailes Lyonnaises) et l'intégration pragmatique d'outils d'IA pour booster la productivité.",
    en: "Senior Full Stack Developer with 9+ years of experience (TypeScript, React, Golang, Node.js, NestJS, Python, Docker). Focused on high-performance web applications and real-time visualization interfaces. Aviation enthusiast (PPL pilot license in progress) and keen on practical AI tools integration."
  },
  location: "Genève / Remote",
  socials: {
    github: "https://github.com/Bastorx",
    linkedin: "https://www.linkedin.com/in/bastien-chevallier/",
    email: "bastienchevallier.com@gmail.com",
    phone: "(+33) 06 12 15 74 63",
    website: "https://bastienchevallier.com"
  },
  stats: [
    { value: "9+", label: { fr: "Années d'expérience", en: "Years Experience" } },
    { value: "ATCO", label: { fr: "Visualisation Trafic Aérien", en: "Air Traffic Real-Time Visu" } },
    { value: "Full Stack", label: { fr: "React • Golang • NestJS", en: "React • Golang • NestJS" } },
    { value: "PPL(A)", label: { fr: "Élève Pilote Aéroclub", en: "Pilot License in progress" } }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: { fr: "Frontend & Visualisation", en: "Frontend & Visualization" },
    icon: "Layout",
    description: {
      fr: "Conception d'interfaces réactives, outils de visualisation en temps réel et dashboards de suivi.",
      en: "Designing reactive interfaces, real-time visualization tools, and tracking dashboards."
    },
    items: [
      { name: "React.js / Redux / Next.js", highlight: true },
      { name: "TypeScript / JavaScript (ES6+)", highlight: true },
      { name: "Svelte 5 / Vite", highlight: true },
      { name: "Vue.js", highlight: false },
      { name: "React-Native (Mobile)", highlight: true },
      { name: "Tailwind CSS / SCSS" }
    ]
  },
  {
    title: { fr: "Backend & Microservices", en: "Backend & Microservices" },
    icon: "Server",
    description: {
      fr: "Développement d'APIs REST, agrégateurs de données, microservices et gestion de bases de données.",
      en: "Building REST APIs, data aggregators, microservices, and database management."
    },
    items: [
      { name: "Golang (Gin)", highlight: true },
      { name: "Node.js / Express / NestJS", highlight: true },
      { name: "Python (Scripts, Automatisation)", highlight: true },
      { name: "PostgreSQL, MongoDB, MySQL", highlight: true },
      { name: "Tests unitaires & intégration (Jest, Go test)", highlight: true }
    ]
  },
  {
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    icon: "Cloud",
    description: {
      fr: "Conteneurisation, automatisation des déploiements et pipelines d'intégration continue.",
      en: "Containerization, automated deployments, and continuous integration pipelines."
    },
    items: [
      { name: "Docker & Docker Compose", highlight: true },
      { name: "CI/CD (GitHub Actions, GitLab CI)", highlight: true },
      { name: "GCP (GKE, Cloud Build) & AWS (Glue, Athena)", highlight: false },
      { name: "Kubernetes, Rancher, Skaffold", highlight: false },
      { name: "Linux / Auto-hébergement" }
    ]
  },
  {
    title: { fr: "Exploration IA & Automatisation", en: "AI Exploration & Automation" },
    icon: "Bot",
    description: {
      fr: "Intégration pratique d'assistants et d'outils IA dans les flux de développement et workflows automatisés.",
      en: "Practical integration of AI assistants and LLM tools into developer workflows and automated pipelines."
    },
    items: [
      { name: "Assistance au code & Pair-Programming IA", highlight: true },
      { name: "Automatisations de workflows (n8n, Webhooks)", highlight: true },
      { name: "Découverte des concepts d'agents & protocoles (MCP)", highlight: true },
      { name: "Prompting pragmatique & structuré", highlight: false }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "SkySoft-ATM (Genève, Suisse)",
    role: {
      fr: "Développeur Full Stack",
      en: "Full Stack Developer"
    },
    period: "Mai 2023 — En cours",
    location: "Genève / Remote",
    description: {
      fr: "Conception et développement d'outils visuels destinés aux ATCO (Aiguilleurs du ciel) pour la visualisation en temps réel du trafic aérien.",
      en: "Design and development of real-time visual tools dedicated to ATCOs (Air Traffic Controllers) for air traffic surveillance and operations."
    },
    highlights: {
      fr: [
        "Développement d'outils de visualisation en temps réel du trafic aérien",
        "Conception front-end réactive et synchronisation des flux de données",
        "Mise en place de tests unitaires et d'intégration rigoureux"
      ],
      en: [
        "Development of real-time visual air traffic monitoring tools",
        "High-performance reactive frontend interfaces and data synchronization",
        "Thorough unit and integration testing"
      ]
    },
    skills: ["Golang", "TypeScript", "Node.js", "React.js", "Docker", "Tests unitaires"],
    type: "fullstack"
  },
  {
    company: "Ministère de l'Intérieur",
    role: {
      fr: "Développeur Full Stack",
      en: "Full Stack Developer"
    },
    period: "Septembre 2022 — Avril 2023",
    location: "Remote",
    description: {
      fr: "Réalisation d'un outil de bibliothèque de démarches simplifiées from scratch (plateforme liée au contrôle des investissements étrangers).",
      en: "Development from scratch of a simplified procedures portal and foreign investment tracking platform."
    },
    highlights: {
      fr: [
        "Développement complet from scratch du back-end avec NestJS et PostgreSQL",
        "Développement du front-end en Vue.js",
        "Mise en place complète des tests unitaires et d'intégration sous Docker"
      ],
      en: [
        "Engineered the full backend from scratch using NestJS and PostgreSQL",
        "Built the user-facing frontend with Vue.js",
        "Configured containerized testing and CI workflows with Docker"
      ]
    },
    skills: ["TypeScript", "NestJS", "Node.js", "Vue.js", "PostgreSQL", "Docker"],
    type: "fullstack"
  },
  {
    company: "Quadient",
    role: {
      fr: "Développeur Back End",
      en: "Back End Developer"
    },
    period: "Octobre 2021 — Août 2022",
    location: "Remote",
    description: {
      fr: "Développement de nouvelles fonctionnalités logistiques pour la gestion et le suivi des flux de livraison de colis (matériel logistique & traitement de courrier).",
      en: "Backend development for parcel delivery tracking and smart logistics systems (parcel lockers and mailing solutions)."
    },
    highlights: {
      fr: [
        "Développement de fonctionnalités back-end pour la gestion logistique de colis",
        "Mise en place d'un nouveau dashboard de suivi avec pipeline ETL",
        "Traitement de données avec AWS (Glue, Athena) et tests automatisés"
      ],
      en: [
        "Developed backend features for parcel delivery workflows and logistics",
        "Created an analytics and monitoring dashboard backed by an ETL pipeline",
        "Data processing using AWS services (Glue, Athena) and integration testing"
      ]
    },
    skills: ["TypeScript", "Node.js", "Python", "AWS (Glue, Athena)", "ETL", "Tests automatisés"],
    type: "backend"
  },
  {
    company: "HomeServe",
    role: {
      fr: "Développeur Full Stack",
      en: "Full Stack Developer"
    },
    period: "Janvier 2021 — Octobre 2021",
    location: "Lyon, France",
    description: {
      fr: "Automatisation de la gestion comptable, maintenance du code existant et amorce de migration vers React pour la plateforme d'assistance à l'habitat.",
      en: "Accounting automation scripts, maintenance of core platform code, and initiating migration to React for home assistance contracts."
    },
    highlights: {
      fr: [
        "Développement de scripts d'automatisation comptable en Python",
        "Ajout de nouvelles fonctionnalités en React dans l'optique de la migration",
        "Maintenance applicative du socle existant en AngularJS"
      ],
      en: [
        "Automated accounting and financial processes using custom Python scripts",
        "Engineered new customer features in React as part of a front-end modernization plan",
        "Maintained existing AngularJS legacy platform and added test coverage"
      ]
    },
    skills: ["Python", "TypeScript", "React", "AngularJS", "Tests unitaires"],
    type: "fullstack"
  },
  {
    company: "Kardinal",
    role: {
      fr: "Développeur Full Stack",
      en: "Full Stack Developer"
    },
    period: "Décembre 2019 — Décembre 2020",
    location: "Remote",
    description: {
      fr: "Solution SaaS d'optimisation des tournées de livraison en amont et en temps réel en fonction du trafic et des imprévus.",
      en: "SaaS route optimization platform solving last-mile delivery scheduling in advance and in real-time based on live road conditions."
    },
    highlights: {
      fr: [
        "Responsable du développement de l'interface utilisateur en React.js",
        "Développement d'un agrégateur de données NestJS / TypeScript pour centraliser les microservices",
        "Développement de microservices en Golang (Gin), incluant l'authentification et l'agrégateur d'événements",
        "Architecture de microservices orchestrée avec Docker et Rancher, CI/CD sur GitLab-CI"
      ],
      en: [
        "Led the frontend application development in React.js",
        "Engineered a NestJS/TypeScript data aggregator unifying multiple microservices",
        "Built microservices in Golang (Gin), including authentication and event streaming services",
        "Set up microservice architecture using Docker and Rancher, with GitLab-CI pipelines"
      ]
    },
    skills: ["Golang", "Gin", "TypeScript", "NestJS", "React.js", "MongoDB", "PostgreSQL", "Docker", "Rancher"],
    type: "fullstack"
  },
  {
    company: "AWE",
    role: {
      fr: "Développeur Full Stack & DevOps",
      en: "Full Stack Developer & DevOps"
    },
    period: "Janvier 2018 — Novembre 2019",
    location: "Levallois-Perret, France",
    description: {
      fr: "Conseil et technologies marketing : développement d'un dashboard analytique d'agrégation de données et gestion d'infrastructure cloud.",
      en: "Marketing technology & analytics: developed data aggregation dashboards to measure client campaign impact and managed cloud infrastructure."
    },
    highlights: {
      fr: [
        "Migration de la plateforme d'AngularJS vers React.js et formation de l'équipe",
        "DevOps : conteneurisation Docker, Kubernetes sur GCP (GKE) et CI/CD avec GitHub Actions / Cloud Build",
        "Développement d'outils internes et APIs back-end en TypeScript et PHP"
      ],
      en: [
        "Migrated legacy AngularJS frontends to React.js and trained the engineering team",
        "DevOps: Docker containers, Kubernetes on GCP (GKE), and CI/CD automation with GitHub Actions",
        "Built internal tooling and backend APIs in TypeScript and PHP"
      ]
    },
    skills: ["TypeScript", "React.js", "Docker", "Kubernetes (GKE)", "GitHub Actions", "PHP", "MySQL"],
    type: "fullstack"
  },
  {
    company: "Beedeez",
    role: {
      fr: "Développeur Full Stack Web & Mobile",
      en: "Full Stack Web & Mobile Developer"
    },
    period: "Octobre 2016 — Décembre 2017",
    location: "Paris, France",
    description: {
      fr: "Plateforme de micro-apprentissage mobile en entreprise.",
      en: "Corporate mobile micro-learning and training platform."
    },
    highlights: {
      fr: [
        "Développement de l'application mobile en React-Native",
        "Création du back-office pour les formateurs en React.js",
        "Développement de l'API Node.js avec MongoDB"
      ],
      en: [
        "Developed cross-platform mobile application using React-Native",
        "Built trainer back-office in React.js",
        "Developed REST API with Node.js and MongoDB"
      ]
    },
    skills: ["React-Native", "React.js", "TypeScript", "Node.js", "MongoDB"],
    type: "fullstack"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "skysoft-visu",
    title: "Outils de Visualisation Trafic Aérien (SkySoft-ATM)",
    category: { fr: "Visualisation Temps Réel", en: "Real-Time Visualization" },
    description: {
      fr: "Développement d'outils visuels interactifs et réactifs destinés aux aiguilleurs du ciel (ATCO) pour surveiller et suivre la situation du trafic aérien en temps réel.",
      en: "Interactive and reactive visual tools for air traffic controllers (ATCO) to monitor real-time air traffic situations with zero lag."
    },
    tags: ["Golang", "TypeScript", "React.js", "Node.js", "Docker"],
    metrics: { fr: "Temps réel critique", en: "Mission-critical real-time" },
    featured: true
  },
  {
    id: "kardinal-dispatch",
    title: "Optimisation de Tournées en Temps Réel (Kardinal)",
    category: { fr: "SaaS Logistique & Algorithmes", en: "Logistics SaaS" },
    description: {
      fr: "Interface React complète et agrégateur de données NestJS / microservices Golang pour visualiser et recalculer dynamiquement les itinéraires de livraison face aux imprévus de circulation.",
      en: "React interface and NestJS data aggregator connected to Golang microservices dynamically adjusting parcel delivery routes based on live traffic events."
    },
    tags: ["React.js", "Golang", "Gin", "NestJS", "PostgreSQL", "Docker"],
    metrics: { fr: "Microservices Golang & NestJS", en: "Golang & NestJS microservices" },
    featured: true
  },
  {
    id: "quadient-parcels",
    title: "Suivi Logistique & Dashboard ETL (Quadient)",
    category: { fr: "Backend & Data", en: "Backend & Data Pipeline" },
    description: {
      fr: "Conception de services back-end pour la gestion de colis et mise en place d'un dashboard de suivi des flux logistiques adossé à un pipeline ETL avec AWS.",
      en: "Backend logistics services for parcel management and an analytics dashboard powered by an ETL pipeline utilizing AWS services."
    },
    tags: ["TypeScript", "Node.js", "Python", "AWS Glue/Athena", "ETL"],
    metrics: { fr: "Pipeline ETL & Suivi", en: "ETL & Tracking Dashboard" },
    featured: false
  },
  {
    id: "n8n-smart-automations",
    title: "Automatisations de Workflows & Intégration IA",
    category: { fr: "Productivité & IA", en: "Productivity & AI" },
    description: {
      fr: "Mise en place de workflows automatisés avec n8n et exploration des intégrations LLM (aide au développement, alertes automatiques et orchestration de tâches).",
      en: "Automated workflow setups with n8n combined with practical LLM integrations (developer tooling, automated alerts, and task orchestration)."
    },
    tags: ["n8n", "Docker", "Node.js", "Webhooks", "IA Assistive"],
    metrics: { fr: "Workflows automatisés", en: "Automated workflows" },
    featured: false
  }
];
