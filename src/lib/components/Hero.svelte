<script lang="ts">
  import type { Language } from '../data';
  import { PROFILE } from '../data';
  import { 
    Terminal, 
    ArrowRight, 
    Sparkles, 
    Plane, 
    CheckCircle2, 
    Layers,
    Code2
  } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();

  const codeSnippet = `const developer = {
  name: "Bastien Chevallier",
  role: "Senior Full Stack Developer",
  experience: "9+ years",
  core: ["TypeScript", "React", "Golang", "NestJS", "Node.js", "Docker"],
  realtime: "ATCO Air Traffic Visual Tools",
  interests: ["Practical AI", "Aviation (PPL student) ✈️"],
  available: true
};`;
</script>

<section id="about" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Colonne gauche : Présentation -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Badge Status -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{lang === 'fr' ? 'Disponible pour nouveaux projets' : 'Available for new opportunities'}</span>
        </div>

        <!-- Titre Principal -->
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {PROFILE.name} <br />
          <span class="gradient-text">{PROFILE.title[lang]}</span>
        </h1>

        <!-- Accroche -->
        <p class="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
          {PROFILE.tagline[lang]}
        </p>

        <p class="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
          {PROFILE.bio[lang]}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#experience"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all group"
          >
            <Layers class="w-4 h-4 text-sky-200" />
            <span>{lang === 'fr' ? 'Découvrir mon parcours' : 'View Experience'}</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium hover:border-slate-500 transition-all"
          >
            <Code2 class="w-4 h-4 text-slate-400" />
            <span>{lang === 'fr' ? 'Voir mes projets' : 'View Projects'}</span>
          </a>
        </div>

        <!-- Highlights pills -->
        <div class="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono text-slate-400">
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
            <span>Temps Réel & Visualisation</span>
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
            <Sparkles class="w-3.5 h-3.5 text-sky-400" />
            <span>Outils & Pratiques IA</span>
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
            <Plane class="w-3.5 h-3.5 text-indigo-400" />
            <span>Élève Pilote PPL(A)</span>
          </div>
        </div>
      </div>

      <!-- Colonne droite : Code Terminal -->
      <div class="lg:col-span-5 relative">
        <div class="relative mx-auto max-w-lg lg:max-w-none">
          <div class="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

          <div class="relative rounded-2xl glass-panel border border-slate-700/60 shadow-2xl overflow-hidden font-mono text-xs">
            <div class="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="text-slate-400 text-xs ml-2 flex items-center gap-1">
                  <Terminal class="w-3.5 h-3.5 text-sky-400" />
                  bastien@dev:~$ cat profile.ts
                </span>
              </div>
              <span class="text-slate-500 text-[10px]">TypeScript</span>
            </div>

            <div class="p-5 text-slate-300 leading-relaxed overflow-x-auto bg-slate-950/80">
              <pre class="font-mono text-xs"><code>{codeSnippet}</code></pre>
            </div>

            <div class="px-5 py-3 bg-slate-900/40 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span class="flex items-center gap-1 text-emerald-400">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Full Stack & Real-Time
              </span>
              <span class="text-slate-500 font-mono">v2.0</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Stats Bar -->
    <div class="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {#each PROFILE.stats as stat}
        <div class="glass-panel glass-panel-hover p-6 rounded-2xl text-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-white gradient-text mb-1">
            {stat.value}
          </div>
          <div class="text-xs sm:text-sm text-slate-400 font-medium">
            {stat.label[lang]}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
