<script lang="ts">
  import { onMount } from 'svelte';
  import type { Language } from './lib/data';
  import BackgroundCanvas from './lib/components/BackgroundCanvas.svelte';
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/components/Hero.svelte';
  import AiExpertise from './lib/components/AiExpertise.svelte';
  import ExperienceTimeline from './lib/components/ExperienceTimeline.svelte';
  import Projects from './lib/components/Projects.svelte';
  import SkillsGrid from './lib/components/SkillsGrid.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import Footer from './lib/components/Footer.svelte';

  // Détection de la langue initiale (localStorage ou navigateur)
  let lang = $state<Language>('fr');

  onMount(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'fr' || saved === 'en') {
      lang = saved;
    } else {
      const browserLang = navigator.language.slice(0, 2);
      lang = browserLang === 'fr' ? 'fr' : 'en';
    }
  });

  const toggleLanguage = () => {
    lang = lang === 'fr' ? 'en' : 'fr';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };
</script>

<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 relative font-sans">
  <!-- Interactive Canvas Background -->
  <BackgroundCanvas />

  <!-- Navigation -->
  <Navbar {lang} onToggleLang={toggleLanguage} />

  <!-- Main Content -->
  <main class="relative z-10">
    <Hero {lang} />
    <AiExpertise {lang} />
    <ExperienceTimeline {lang} />
    <Projects {lang} />
    <SkillsGrid {lang} />
    <ContactSection {lang} />
  </main>

  <!-- Footer -->
  <Footer {lang} />
</div>
