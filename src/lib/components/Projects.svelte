<script lang="ts">
  import type { Language } from '../data';
  import { PROJECTS } from '../data';
  import { 
    FolderGit2, 
    ExternalLink, 
    Sparkles, 
    Zap, 
    Layers, 
    Bot, 
    Plane, 
    Radio, 
    Workflow 
  } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'autonomous-ai-agents': return Bot;
      case 'aero-navigator': return Plane;
      case 'realtime-radar-streamer': return Radio;
      case 'n8n-smart-automations': return Workflow;
      default: return Layers;
    }
  };
</script>

<section id="projects" class="py-24 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- En-tête -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono">
        <FolderGit2 class="w-3.5 h-3.5" />
        <span>{lang === 'fr' ? 'Sélection de Projets & Architecture' : 'Featured Work & Architecture'}</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {lang === 'fr' ? 'Projets Récents & ' : 'Recent Projects & '}
        <span class="gradient-text">{lang === 'fr' ? 'Lab R&D' : 'R&D Lab'}</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg">
        {lang === 'fr'
          ? "Un aperçu des réalisations combinant IA appliquée, streaming haute performance et applications métier pointues."
          : "A showcase of engineering achievements blending cutting-edge AI, high-fps streaming, and mission-grade tools."
        }
      </p>
    </div>

    <!-- Grille de Projets -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each PROJECTS as project}
        {@const IconComponent = getProjectIcon(project.id)}
        <div class="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
          
          <!-- Gradient d'angle discret -->
          <div class="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all"></div>

          <div>
            <!-- Header du projet -->
            <div class="flex items-center justify-between gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-sky-500/50 group-hover:text-white transition-all shadow-md">
                <IconComponent class="w-6 h-6" />
              </div>

              {#if project.metrics}
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <Zap class="w-3 h-3" />
                  <span>{project.metrics[lang]}</span>
                </div>
              {/if}
            </div>

            <div class="text-xs font-mono text-indigo-400 mb-1">
              {project.category[lang]}
            </div>

            <h3 class="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-3">
              {project.title}
            </h3>

            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              {project.description[lang]}
            </p>
          </div>

          <!-- Tags & liens -->
          <div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {#each project.tags as tag}
                <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
