<script lang="ts">
  import type { Language } from '../data';
  import { 
    Bot, 
    Workflow, 
    Sparkles, 
    Code2, 
    Layers,
    ArrowUpRight
  } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();

  const aiPillars = [
    {
      icon: Code2,
      color: "from-sky-500 to-blue-600",
      title: {
        fr: "Assistance au Développement & Pair-Programming IA",
        en: "AI Pair-Programming & Developer Tooling"
      },
      subtitle: {
        fr: "Gain de vélocité et rigueur de code",
        en: "Velocity and engineering rigor"
      },
      description: {
        fr: "Utilisation quotidienne et approfondie des outils d'assistance au code (Copilot, agents de refactorisation, génération de tests unitaires et revues de code automatisées) pour accélérer le delivery.",
        en: "Daily use of AI code assistance (Copilot, refactoring agents, automated unit test generation, and code review workflows) to significantly speed up engineering delivery."
      },
      tags: ["Copilot", "LLM-assisted dev", "Tests automatisés", "Refactoring"]
    },
    {
      icon: Workflow,
      color: "from-indigo-500 to-purple-600",
      title: {
        fr: "Automatisation de Workflows (n8n & Webhooks)",
        en: "Workflow Automation (n8n & Webhooks)"
      },
      subtitle: {
        fr: "Connexion d'outils et traitement d'événements",
        en: "Event processing and service wiring"
      },
      description: {
        fr: "Orchestration de flux automatisés avec n8n pour relier des webhooks, traiter des alertes, synchroniser des données et intégrer des étapes d'analyse par LLM.",
        en: "Building automated workflows with n8n to connect webhooks, handle alerts, synchronize data sources, and trigger LLM-powered processing steps."
      },
      tags: ["n8n", "Webhooks", "Docker", "Pipelines d'événements"]
    },
    {
      icon: Bot,
      color: "from-emerald-500 to-teal-600",
      title: {
        fr: "Agents & Protocoles d'Outils (Découverte MCP)",
        en: "Agentic Concepts & MCP Tool Protocols"
      },
      subtitle: {
        fr: "Veille active et expérimentation pragmatique",
        en: "Active exploration & practical prototyping"
      },
      description: {
        fr: "Intérêt marqué et expérimentation autour du standard MCP (Model Context Protocol) et des concepts d'agents capables d'interagir avec des outils et des APIs externes.",
        en: "Keen interest and experimentation with the Model Context Protocol (MCP) and agentic concepts connecting language models to external tools and APIs."
      },
      tags: ["MCP Concepts", "APIs & Tools", "Veille technologique", "Expérimentation"]
    },
    {
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      title: {
        fr: "Prompting Structuré & Intégration dans les Apps",
        en: "Structured Prompting & App Integration"
      },
      subtitle: {
        fr: "Exploitation efficace des modèles",
        en: "Effective model utilization"
      },
      description: {
        fr: "Mise au point de prompts précis avec sorties JSON typées et intégration de requêtes IA dans des microservices Node/TypeScript ou Python.",
        en: "Crafting structured prompts with typed JSON outputs and integrating AI queries within Node/TypeScript and Python services."
      },
      tags: ["Prompt Engineering", "JSON Schema", "TypeScript", "Python"]
    }
  ];
</script>

<section id="ai-expertise" class="py-24 relative overflow-hidden">
  <!-- Fond décoratif néon -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- En-tête de section -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs font-mono">
        <Sparkles class="w-3.5 h-3.5 text-sky-400" />
        <span>{lang === 'fr' ? 'Pratiques actuelles & veille' : 'Current practices & exploration'}</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {lang === 'fr' ? 'Intégration de l\'IA & ' : 'AI Integration & '}
        <span class="gradient-text">{lang === 'fr' ? 'Automatisation' : 'Automation'}</span>
      </h2>
      <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
        {lang === 'fr'
          ? "Une approche pragmatique de l'IA : utiliser les modèles pour accélérer le développement au quotidien, automatiser les flux répétitifs et explorer les nouveaux standards comme MCP."
          : "A pragmatic approach to AI: leveraging modern models to accelerate daily development, automating repetitive pipelines, and exploring emerging standards like MCP."
        }
      </p>
    </div>

    <!-- Grille des 4 axes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each aiPillars as pillar}
        <div class="glass-panel glass-panel-hover p-8 rounded-2xl relative group flex flex-col justify-between">
          <div>
            <!-- En-tête carte -->
            <div class="flex items-center gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br {pillar.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <pillar.icon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {pillar.title[lang]}
                </h3>
                <div class="text-xs font-mono text-slate-400">
                  {pillar.subtitle[lang]}
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              {pillar.description[lang]}
            </p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            {#each pillar.tags as tag}
              <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-sky-400 border border-slate-800">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
