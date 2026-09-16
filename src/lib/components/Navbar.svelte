<script lang="ts">
  import type { Language } from '../data';
  import { PROFILE } from '../data';
  import Icons from './Icons.svelte';
  import { 
    Languages, 
    Mail, 
    Sparkles, 
    Menu, 
    X,
    Code2
  } from 'lucide-svelte';

  let { lang, onToggleLang }: { lang: Language; onToggleLang: () => void } = $props();

  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  const navLinks = [
    { href: '#about', label: { fr: 'À propos', en: 'About' } },
    { href: '#ai-expertise', label: { fr: 'Expertise IA', en: 'AI Expertise' } },
    { href: '#experience', label: { fr: 'Parcours', en: 'Experience' } },
    { href: '#projects', label: { fr: 'Projets', en: 'Projects' } },
    { href: '#skills', label: { fr: 'Compétences', en: 'Skills' } },
    { href: '#contact', label: { fr: 'Contact', en: 'Contact' } }
  ];

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 20;
    });
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg' : 'py-5 bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    <!-- Logo -->
    <a href="#about" class="flex items-center gap-2 group">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md group-hover:scale-105 transition-transform">
        <Code2 class="w-5 h-5" />
      </div>
      <div>
        <div class="font-bold text-slate-100 tracking-tight group-hover:text-sky-400 transition-colors">
          Bastien Chevallier
        </div>
        <div class="text-xs text-sky-400 font-mono flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Full Stack & AI
        </div>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-7">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
        >
          {link.label[lang]}
        </a>
      {/each}
    </nav>

    <!-- Right Actions -->
    <div class="hidden md:flex items-center gap-3">
      <!-- Language Toggle -->
      <button
        onclick={onToggleLang}
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-xs font-mono font-medium text-slate-200 transition-all shadow-sm cursor-pointer"
        title="Changer de langue / Switch language"
      >
        <Languages class="w-4 h-4 text-sky-400" />
        <span class="uppercase tracking-wider">{lang === 'fr' ? 'EN' : 'FR'}</span>
      </button>

      <!-- GitHub link -->
      <a
        href={PROFILE.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        aria-label="GitHub"
      >
        <Icons name="github" className="w-5 h-5" />
      </a>

      <!-- LinkedIn link -->
      <a
        href={PROFILE.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        aria-label="LinkedIn"
      >
        <Icons name="linkedin" className="w-5 h-5" />
      </a>

      <!-- CTA Contact -->
      <a
        href="#contact"
        class="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-xs font-semibold text-white shadow-md hover:shadow-sky-500/25 transition-all"
      >
        <Sparkles class="w-3.5 h-3.5" />
        <span>{lang === 'fr' ? 'Me contacter' : 'Contact me'}</span>
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex items-center gap-2 md:hidden">
      <button
        onclick={onToggleLang}
        class="px-2.5 py-1 rounded-md border border-slate-700 bg-slate-900 text-xs font-mono text-sky-400 font-bold"
      >
        {lang.toUpperCase()}
      </button>
      <button
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/70 border border-slate-800"
        aria-label="Toggle Menu"
      >
        {#if mobileMenuOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-3">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => mobileMenuOpen = false}
          class="block py-2 text-base font-medium text-slate-300 hover:text-sky-400"
        >
          {link.label[lang]}
        </a>
      {/each}
      <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" class="text-slate-400 hover:text-white">
            <Icons name="github" className="w-5 h-5" />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" class="text-slate-400 hover:text-white">
            <Icons name="linkedin" className="w-5 h-5" />
          </a>
          <a href={`mailto:${PROFILE.socials.email}`} class="text-slate-400 hover:text-white">
            <Mail class="w-5 h-5" />
          </a>
        </div>
        <a
          href="#contact"
          onclick={() => mobileMenuOpen = false}
          class="px-4 py-2 rounded-lg bg-sky-500 text-white font-medium text-sm"
        >
          {lang === 'fr' ? 'Me contacter' : 'Contact me'}
        </a>
      </div>
    </div>
  {/if}
</header>
