<script lang="ts">
  import type { Language } from '../data';
  import { SKILL_CATEGORIES } from '../data';
  import { Bot, Server, Layout, Cloud, Check } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return Bot;
      case 'Server': return Server;
      case 'Layout': return Layout;
      case 'Cloud': return Cloud;
      default: return Server;
    }
  };
</script>

<section id="skills" class="py-24 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- En-tête -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono">
        <Server class="w-3.5 h-3.5" />
        <span>{lang === 'fr' ? 'Stack & Capacités Techniques' : 'Technical Stack & Capabilities'}</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {lang === 'fr' ? 'Boîte à Outils & ' : 'Tech Stack & '}
        <span class="gradient-text">{lang === 'fr' ? 'Expertise' : 'Expertise'}</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg">
        {lang === 'fr'
          ? "Un aperçu structuré des technologies maîtrisées et éprouvées en production."
          : "A structured overview of core technologies validated in high-scale production."
        }
      </p>
    </div>

    <!-- Grille des 4 catégories de skills -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each SKILL_CATEGORIES as category}
        {@const Icon = getCategoryIcon(category.icon)}
        <div class="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400">
                <Icon class="w-5 h-5" />
              </div>
              <h3 class="text-xl font-bold text-white">
                {category.title[lang]}
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {category.description[lang]}
            </p>

            <!-- Items -->
            <ul class="space-y-2.5">
              {#each category.items as item}
                <li class="flex items-center gap-2.5 text-sm text-slate-300">
                  <span class="w-4 h-4 rounded-full bg-sky-950 border border-sky-500/40 flex items-center justify-center shrink-0">
                    <Check class="w-2.5 h-2.5 text-sky-400" />
                  </span>
                  <span class="{item.highlight ? 'font-semibold text-white' : 'text-slate-400'}">
                    {item.name}
                  </span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
