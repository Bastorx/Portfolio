<script lang="ts">
  import type { Language } from '../data';
  import { PROFILE } from '../data';
  import Icons from './Icons.svelte';
  import { 
    Mail, 
    Copy, 
    Check, 
    Send, 
    MessageSquare,
    Plane,
    Sparkles
  } from 'lucide-svelte';
  import confetti from 'canvas-confetti';

  let { lang }: { lang: Language } = $props();

  let copied = $state(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.socials.email);
    copied = true;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => {
      copied = false;
    }, 2500);
  };
</script>

<section id="contact" class="py-24 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <div class="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/30 text-center relative overflow-hidden shadow-2xl">
      <!-- Glow background -->
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-3xl pointer-events-none rounded-full"></div>

      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/60 text-sky-400 text-xs font-mono mb-6">
        <Sparkles class="w-3.5 h-3.5" />
        <span>{lang === 'fr' ? 'Connectons-nous' : 'Get in Touch'}</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
        {lang === 'fr' ? 'Prêt à construire quelque chose de ' : 'Ready to build something '}
        <span class="gradient-text">{lang === 'fr' ? 'remarquable ?' : 'extraordinary?'}</span>
      </h2>

      <p class="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        {lang === 'fr'
          ? "Que ce soit pour un rôle de Tech Lead, la conception d'un système multi-agents IA ou un projet temps réel critique, échangeons sur vos défis."
          : "Whether you need high-level Tech Leadership, an autonomous AI multi-agent swarm, or high-performance real-time architectures, let's talk."
        }
      </p>

      <!-- Boutons d'action -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-10">
        <!-- Mail direct -->
        <a
          href={`mailto:${PROFILE.socials.email}`}
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
        >
          <Send class="w-4 h-4" />
          <span>{lang === 'fr' ? 'Envoyer un email' : 'Send an Email'}</span>
        </a>

        <!-- Bouton Copier Email -->
        <button
          onclick={copyEmail}
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-all cursor-pointer"
        >
          {#if copied}
            <Check class="w-4 h-4 text-emerald-400" />
            <span class="text-emerald-400">{lang === 'fr' ? 'Email copié !' : 'Copied to clipboard!'}</span>
          {:else}
            <Copy class="w-4 h-4 text-slate-400" />
            <span>{PROFILE.socials.email}</span>
          {/if}
        </button>
      </div>

      <!-- Liens Réseaux Sociaux -->
      <div class="flex items-center justify-center gap-6 pt-6 border-t border-slate-800/80">
        <a
          href={PROFILE.socials.github}
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
        >
          <Icons name="github" className="w-5 h-5" />
          <span class="font-mono">GitHub</span>
        </a>

        <a
          href={PROFILE.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
        >
          <Icons name="linkedin" className="w-5 h-5" />
          <span class="font-mono">LinkedIn</span>
        </a>

        <div class="flex items-center gap-1.5 text-xs font-mono text-indigo-400/90 pl-4 border-l border-slate-800">
          <Plane class="w-3.5 h-3.5" />
          <span>Paris / Remote / EASA PPL</span>
        </div>
      </div>

    </div>

  </div>
</section>
