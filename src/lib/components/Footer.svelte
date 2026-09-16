<script lang="ts">
  import type { Language } from '../data';
  import { PROFILE } from '../data';
  import { Code2, Heart, Sparkles, Plane } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();
</script>

<footer class="border-t border-slate-900 bg-slate-950/90 py-12 text-slate-500 text-xs">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
    
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
        <Code2 class="w-3.5 h-3.5" />
      </div>
      <span class="text-slate-300 font-medium">Bastien Chevallier</span>
      <span>•</span>
      <span>{PROFILE.title[lang]}</span>
    </div>

    <div class="flex items-center gap-1.5 font-mono text-slate-400">
      <span>Designed with</span>
      <Sparkles class="w-3 h-3 text-sky-400" />
      <span>Svelte 5 & Vite</span>
      <span class="mx-1">•</span>
      <span class="flex items-center gap-1 text-indigo-400">
        <Plane class="w-3 h-3" />
        PPL Aviator
      </span>
    </div>

    <div>
      © {new Date().getFullYear()} — {lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}
    </div>

  </div>
</footer>
