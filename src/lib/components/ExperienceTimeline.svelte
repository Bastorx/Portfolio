<script lang="ts">
  import type { Language } from '../data';
  import { EXPERIENCES } from '../data';
  import { Briefcase, Calendar, MapPin, CheckCircle, Shield, Award } from 'lucide-svelte';

  let { lang }: { lang: Language } = $props();
</script>

<section id="experience" class="py-24 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono">
        <Briefcase class="w-3.5 h-3.5" />
        <span>{lang === 'fr' ? '10+ ans d\'expérience' : '10+ Years Experience'}</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {lang === 'fr' ? 'Parcours & ' : 'Professional '}
        <span class="gradient-text">{lang === 'fr' ? 'Expériences Clés' : 'Track Record'}</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg">
        {lang === 'fr'
          ? "Des environnements critiques de contrôle aérien (SkySoft-ATM) aux architectures d'optimisation SaaS et Big Data étatiques."
          : "From safety-critical Air Traffic Control (SkySoft-ATM) to high-throughput data processing and route optimization SaaS."
        }
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative max-w-4xl mx-auto">
      <!-- Ligne verticale centrale -->
      <div class="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-transparent -translate-x-1/2"></div>

      <div class="space-y-12 sm:space-y-16">
        {#each EXPERIENCES as exp, i}
          <div class="relative flex flex-col sm:flex-row items-start sm:items-center group">
            
            <!-- Point central sur la ligne -->
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center z-20 group-hover:scale-125 group-hover:border-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              {#if exp.type === 'lead'}
                <Award class="w-4 h-4 text-amber-400" />
              {:else}
                <div class="w-2 h-2 rounded-full bg-sky-400"></div>
              {/if}
            </div>

            <!-- Contenu : alternance gauche/droite sur desktop -->
            <div class="ml-12 sm:ml-0 w-full sm:w-1/2 {i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'}">
              <div class="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl relative text-left">
                
                <!-- Badge Entreprise & Rôle -->
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.company}
                  </span>
                  <div class="flex items-center gap-1.5 text-xs font-mono text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-800/40">
                    <Calendar class="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <!-- Poste & Localisation -->
                <div class="text-sm font-semibold text-indigo-300 mb-1">
                  {exp.role[lang]}
                </div>
                <div class="flex items-center gap-1 text-xs text-slate-400 mb-4 font-mono">
                  <MapPin class="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>

                <!-- Description générale -->
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description[lang]}
                </p>

                <!-- Points clés (Bullet points) -->
                <ul class="space-y-1.5 mb-5 text-xs text-slate-400">
                  {#each exp.highlights[lang] as highlight}
                    <li class="flex items-start gap-2">
                      <CheckCircle class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  {/each}
                </ul>

                <!-- Tags technos -->
                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {#each exp.skills as skill}
                    <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      {skill}
                    </span>
                  {/each}
                </div>

              </div>
            </div>

          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
