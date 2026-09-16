<script lang="ts">
  import type { Language } from '../data';
  import { 
    Bot, 
    Network, 
    Cpu, 
    Workflow, 
    Sparkles, 
    Database, 
    ShieldCheck, 
    CodeXml,
    ArrowUpRight
  } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();

  const aiPillars = [
    {
      icon: Network,
      color: "from-sky-500 to-blue-600",
      title: {
        fr: "Architectures Multi-Agents Autonomes",
        en: "Autonomous Multi-Agent Architectures"
      },
      subtitle: {
        fr: "Systèmes collaboratifs orchestrés",
        en: "Orchestrated collaborative systems"
      },
      description: {
        fr: "Conception de collectifs d'agents IA spécialisés capables de raisonner, d'exécuter des outils en sandbox, de collaborer via des protocoles formels et d'accomplir des missions de bout-en-bout avec résilience.",
        en: "Engineering specialized AI agent swarms capable of recursive reasoning, sandboxed tool execution, protocol-driven collaboration, and autonomous goal fulfillment with continuous feedback loops."
      },
      tags: ["OpenClaw", "LangChain / LangGraph", "Autogen", "Subagents", "Tool Sandboxing"]
    },
    {
      icon: Workflow,
      color: "from-indigo-500 to-purple-600",
      title: {
        fr: "MCP & Orchestration d'Outils (Model Context Protocol)",
        en: "MCP & Tool Augmentation (Model Context Protocol)"
      },
      subtitle: {
        fr: "Standard ouvert d'interconnexion IA",
        en: "Open protocol for agent tool context"
      },
      description: {
        fr: "Implémentation de serveurs MCP personnalisés permettant aux modèles d'interagir nativement avec des bases de données SQL, des dépôts Git, des APIs cloud et des pipelines d'infrastructure sécurisés.",
        en: "Developing and deploying custom MCP servers enabling LLMs to natively and securely query SQL databases, control Git repositories, trigger cloud APIs, and manipulate complex data."
      },
      tags: ["MCP Protocol", "TypeScript", "Python", "gRPC", "API Integration"]
    },
    {
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      title: {
        fr: "RAG Avancé & Moteurs de Recherche Vectorielle",
        en: "Advanced RAG & Vector Embeddings"
      },
      subtitle: {
        fr: "Connaissance augmentée et anti-hallucination",
        en: "Grounded enterprise knowledge retrieval"
      },
      description: {
        fr: "Mise en place de pipelines de Retrieval-Augmented Generation avec découpage sémantique (chunking adaptatif), reranking de haute précision, et recherche hybride (Dense + BM25) garantissant l'exactitude des faits.",
        en: "Building precision RAG pipelines featuring semantic chunking, reciprocal rank fusion (dense vector + sparse BM25), contextual reranking, and citation verification to eliminate hallucinations."
      },
      tags: ["pgvector", "ChromaDB", "Hybrid Search", "Embeddings", "Semantic Chunking"]
    },
    {
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      title: {
        fr: "Inférence Locale, Modèles Open-Source & Optimisation",
        en: "Local Inference, Open Models & Optimization"
      },
      subtitle: {
        fr: "Souveraineté des données & maîtrise des coûts",
        en: "Data privacy & zero-token-waste efficiency"
      },
      description: {
        fr: "Déploiement d'inférence locale sur GPU/serveurs privés (Ollama, vLLM, llama.cpp), fine-tuning léger (LoRA/QLoRA), routage intelligent vers les meilleurs modèles et délégation des tâches déterministes à n8n.",
        en: "Running local inference on private hardware (Ollama, vLLM, llama.cpp), quantization, intelligent LLM routing, and offloading deterministic logic to n8n workflows for optimal compute economics."
      },
      tags: ["Ollama", "vLLM", "Local LLMs", "n8n Workflows", "Token Optimization"]
    }
  ];
</script>

<section id="ai-expertise" class="py-24 relative overflow-hidden">
  <!-- Fond décoratif néon -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- En-tête de section -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono">
        <Sparkles class="w-3.5 h-3.5 text-purple-400" />
        <span>{lang === 'fr' ? 'La nouvelle ère du développement logiciel' : 'The new frontier of software engineering'}</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {lang === 'fr' ? 'Expertise & Solutions ' : 'Expertise & '}
        <span class="gradient-text">{lang === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence'}</span>
      </h2>
      <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
        {lang === 'fr'
          ? "L'IA ne remplace pas l'ingénierie logicielle : elle l'amplifie. J'allie plus de 10 ans de rigueur d'architecte temps-réel avec les technologies agentiques et génératives les plus avancées."
          : "AI does not replace sound software engineering: it multiplies it. I blend 10+ years of mission-critical real-time rigor with state-of-the-art agentic workflows and LLM orchestration."
        }
      </p>
    </div>

    <!-- Grille des 4 piliers IA -->
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

    <!-- Bannière interactive IA Mindset -->
    <div class="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border-indigo-500/20 bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center md:text-left">
        <div class="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
          <ShieldCheck class="w-5 h-5 text-emerald-400" />
          <span>{lang === 'fr' ? 'Architecture IA Déterministe & Zéro Dette' : 'Deterministic & Zero-Debt AI Architecture'}</span>
        </div>
        <p class="text-sm text-slate-400 max-w-2xl">
          {lang === 'fr' 
            ? "Pas de boîtes noires incontrôlées : chaque agent dispose de budgets de tokens stricts, d'évaluations d'outputs typés, de sandbox d'exécution et de mécanismes de validation humaine."
            : "No uncontrolled black boxes: every agent operates with strict token budgets, typed schema outputs, sandboxed execution, and human-in-the-loop escalation."
          }
        </p>
      </div>

      <a
        href="#contact"
        class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-indigo-500/20"
      >
        <span>{lang === 'fr' ? 'Discuter d\'un projet IA' : 'Discuss an AI Project'}</span>
        <ArrowUpRight class="w-4 h-4" />
      </a>
    </div>

  </div>
</section>
