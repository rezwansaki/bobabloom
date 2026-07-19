<template>
  <section id="hero" class="relative min-h-screen overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-100 via-pink-50 to-secondary-100" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="blob w-[700px] h-[700px] bg-gradient-to-br from-primary-300 to-primary-500 -top-48 -right-24 animate-drift" />
      <div class="blob w-[550px] h-[550px] bg-gradient-to-br from-pink-300 to-secondary-400 top-1/3 -left-32 animate-drift-reverse" />
      <div class="blob w-[450px] h-[450px] bg-gradient-to-br from-accent-300 to-accent-400 bottom-0 right-1/4 animate-float-slow" />
      <div class="blob-sm w-[280px] h-[280px] bg-gradient-to-br from-primary-200 to-pink-200 top-1/4 left-1/4 animate-float" />
      <div class="blob-sm w-[200px] h-[200px] bg-gradient-to-br from-secondary-200 to-pink-300 bottom-1/3 left-1/3 animate-float-slower" />
      <div class="blob-sm w-[150px] h-[150px] bg-gradient-to-br from-accent-200 to-primary-200 top-2/3 right-1/3 animate-drift" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-24 pb-16">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div class="space-y-8 lg:space-y-10 text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 text-sm font-semibold text-primary-700 animate-fade-up shadow-lg shadow-primary-500/10"
          >
            <span class="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-pink-500 animate-pulse" />
            Premium Bubble Tea
          </div>

          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight animate-fade-up animation-delay-200">
            <span class="block">Taste</span>
            <span class="text-gradient">Happiness</span>
            <span class="block text-gray-900">One Sip</span>
            <span class="block text-gray-900">At A Time</span>
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-400">
            Handcrafted with premium ingredients, our bubble tea offers the perfect blend of flavor, texture, and joy in every sip.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up animation-delay-600">
            <button class="btn-primary text-base px-10 py-4 group w-full sm:w-auto">
              Order Now
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button class="btn-secondary text-base px-10 py-4 w-full sm:w-auto group">
              Explore Menu
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-3 gap-6 sm:gap-10 pt-4 animate-fade-up animation-delay-800">
            <div class="text-center lg:text-left">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">100+</div>
              <div class="text-sm sm:text-base text-gray-500 font-medium">Drinks</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-secondary-500 bg-clip-text text-transparent">25K+</div>
              <div class="text-sm sm:text-base text-gray-500 font-medium">Happy Customers</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">15+</div>
              <div class="text-sm sm:text-base text-gray-500 font-medium">Flavors</div>
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-center lg:justify-end">
          <div class="relative w-full max-w-lg aspect-square">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200/50 via-pink-200/50 to-secondary-200/50 animate-float-slow blur-2xl" />
            <div class="absolute inset-4 rounded-full bg-gradient-to-br from-primary-100/40 via-pink-100/40 to-secondary-100/40 animate-float blur-xl" />

            <div class="absolute top-6 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 opacity-20 animate-float" />
            <div class="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-300 to-secondary-500 opacity-15 animate-float-slower" />
            <div class="absolute top-1/3 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-accent-300 to-accent-500 opacity-20 animate-float-delayed" />
            <div class="absolute top-2/3 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary-300 to-pink-400 opacity-15 animate-float-slow" />

            <div class="absolute top-12 right-20 w-7 h-7 rounded-full bg-gradient-to-br from-primary-300 to-primary-400 opacity-50 animate-bubble-rise" />
            <div class="absolute top-1/4 left-6 w-6 h-6 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-50 animate-bubble-rise-delayed" />
            <div class="absolute bottom-1/3 right-4 w-9 h-9 rounded-full bg-gradient-to-br from-secondary-300 to-secondary-400 opacity-40 animate-bubble-rise-slow" />
            <div class="absolute bottom-28 left-20 w-7 h-7 rounded-full bg-gradient-to-br from-accent-300 to-accent-400 opacity-45 animate-bubble-rise" />
            <div class="absolute top-1/2 left-2 w-5 h-5 rounded-full bg-white/60 animate-bubble-rise" />
            <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 opacity-40 animate-bubble-rise-delayed" />
            <div class="absolute top-8 left-1/3 w-4 h-4 rounded-full bg-primary-200/60 animate-bubble-rise-slow" />
            <div class="absolute bottom-16 right-1/4 w-5 h-5 rounded-full bg-secondary-200/60 animate-bubble-rise" />
            <div class="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-accent-200/50 animate-bubble-rise-delayed" />
            <div class="absolute bottom-8 left-1/4 w-3 h-3 rounded-full bg-pink-200/60 animate-bubble-rise-slow" />

            <div class="absolute top-16 left-10 w-6 h-6 text-primary-400 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-50">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div class="absolute bottom-14 right-2 w-6 h-6 text-accent-400 animate-float-slow">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-35">
                <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75C16.75 4.13 14.62 2 12 2zM19 15v1c0 1.66-1.34 3-3 3s-3-1.34-3-3v-1c0-1.66 1.34-3 3-3s3 1.34 3 3zm-11 0v1c0 1.66-1.34 3-3 3s-3-1.34-3-3v-1c0-1.66 1.34-3 3-3s3 1.34 3 3z" />
              </svg>
            </div>

            <div class="absolute top-6 right-8 w-5 h-5 text-pink-400 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-40">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div class="absolute bottom-10 left-6 w-5 h-5 text-accent-400 animate-float-slow">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-35">
                <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.68-1.76-2.64-5.02-3.48-7.66-1.68-1.4.96-2.25 2.44-2.34 4.07-.14 2.74 1.74 5.17 3.65 7.01 1.84 1.77 3.89 3.18 5.45 5.01.29.34.66.51 1.04.51.38 0 .75-.17 1.04-.51 1.56-1.83 3.61-3.24 5.45-5.01 1.91-1.84 3.79-4.28 3.65-7.01-.09-1.63-.94-3.11-2.34-4.07z" />
              </svg>
            </div>

            <div class="absolute top-3 right-2 w-4 h-4 text-accent-500 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-45">
                <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z" />
              </svg>
            </div>

            <div class="absolute top-1/4 right-6 w-5 h-5 text-primary-400 animate-float-slow">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-30">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>

            <div class="absolute bottom-1/4 left-4 w-7 h-7 text-pink-400 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor" class="opacity-25">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 10.5h-5v5h-1v-5h-5v-1h5v-5h1v5h5v1z" />
              </svg>
            </div>

            <div class="relative w-full h-full flex items-center justify-center">
              <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
                <svg viewBox="0 0 400 400" class="w-full h-full drop-shadow-2xl animate-float-slow" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#FEF3C7" />
                      <stop offset="50%" stop-color="#FDE68A" />
                      <stop offset="100%" stop-color="#FCD34D" />
                    </linearGradient>
                    <linearGradient id="teaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#92400E" />
                      <stop offset="100%" stop-color="#78350F" />
                    </linearGradient>
                    <linearGradient id="milkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stop-color="#FEF3C7" />
                      <stop offset="100%" stop-color="#FFFBEB" />
                    </linearGradient>
                    <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.3" />
                      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0" />
                    </radialGradient>
                    <clipPath id="cupClip">
                      <path d="M100 100 L100 250 Q100 300 140 310 L240 310 Q280 300 280 250 L280 100 Z" />
                    </clipPath>
                  </defs>

                  <circle cx="200" cy="200" r="180" fill="url(#glowGrad)" />

                  <ellipse cx="200" cy="85" rx="95" ry="15" fill="#D97706" opacity="0.3" />
                  <rect x="110" y="100" width="160" height="10" rx="5" fill="#F59E0B" />

                  <path d="M100 100 L100 250 Q100 300 140 310 L240 310 Q280 300 280 250 L280 100 Z" fill="url(#cupGrad)" stroke="#F59E0B" stroke-width="2" />
                  <rect x="100" y="100" width="180" height="160" fill="url(#cupGrad)" clip-path="url(#cupClip)" />
                  <path d="M100 100 Q190 90 280 100" fill="none" stroke="#D97706" stroke-width="2" />

                  <ellipse cx="200" cy="100" rx="85" ry="12" fill="url(#milkGrad)" opacity="0.9" />
                  <path d="M115 100 Q200 85 285 100" fill="none" stroke="#FDE68A" stroke-width="2" />
                  <path d="M130 100 Q200 110 270 100 Q200 95 130 100" fill="#FFFBEB" opacity="0.5" />

                  <circle cx="200" cy="240" r="20" fill="url(#teaGrad)" />
                  <circle cx="180" cy="250" r="15" fill="url(#teaGrad)" />
                  <circle cx="220" cy="248" r="16" fill="url(#teaGrad)" />
                  <circle cx="195" cy="260" r="12" fill="url(#teaGrad)" />
                  <circle cx="210" cy="235" r="10" fill="url(#teaGrad)" />
                  <circle cx="170" cy="238" r="11" fill="url(#teaGrad)" />
                  <circle cx="230" cy="240" r="13" fill="url(#teaGrad)" />
                  <circle cx="185" cy="270" r="9" fill="url(#teaGrad)" />
                  <circle cx="215" cy="265" r="8" fill="url(#teaGrad)" />
                  <circle cx="200" cy="220" r="14" fill="url(#teaGrad)" />
                  <circle cx="160" cy="255" r="10" fill="url(#teaGrad)" />
                  <circle cx="240" cy="258" r="9" fill="url(#teaGrad)" />
                  <circle cx="200" cy="240" r="20" fill="none" stroke="#FFF" stroke-width="0.5" opacity="0.3" />

                  <path d="M290 250 Q310 250 310 230 Q310 210 295 210" fill="none" stroke="#D97706" stroke-width="5" stroke-linecap="round" />
                  <path d="M295 245 Q315 245 315 225" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" opacity="0.6" />

                  <path d="M0 0 Q50 20 100 100" fill="none" stroke="#22C55E" stroke-width="3" opacity="0.6" />
                  <ellipse cx="30" cy="15" rx="15" ry="6" fill="#22C55E" opacity="0.4" transform="rotate(-20 30 15)" />
                  <path d="M360 40 Q340 70 350 120" fill="none" stroke="#22C55E" stroke-width="2.5" opacity="0.5" />
                  <ellipse cx="358" cy="38" rx="12" ry="5" fill="#22C55E" opacity="0.35" transform="rotate(15 358 38)" />
                  <path d="M80 280 Q70 260 75 245 Q80 230 90 235" fill="none" stroke="#22C55E" stroke-width="2" opacity="0.5" />
                  <circle cx="75" cy="240" r="4" fill="#22C55E" opacity="0.4" />
                  <path d="M320 300 Q330 280 325 265" fill="none" stroke="#EC4899" stroke-width="2" opacity="0.4" />
                  <circle cx="320" cy="298" r="3" fill="#EC4899" opacity="0.5" />
                  <circle cx="60" cy="180" r="4" fill="#22C55E" opacity="0.5" />
                  <circle cx="55" cy="175" r="3" fill="#22C55E" opacity="0.35" />
                  <circle cx="65" cy="185" r="3" fill="#22C55E" opacity="0.3" />
                  <circle cx="330" cy="160" r="5" fill="#EC4899" opacity="0.4" />
                  <circle cx="336" cy="155" r="3" fill="#EC4899" opacity="0.3" />

                  <circle cx="100" cy="350" r="25" fill="#EC4899" opacity="0.15" />
                  <circle cx="100" cy="350" r="15" fill="#EC4899" opacity="0.2" />
                  <circle cx="300" cy="360" r="20" fill="#7C3AED" opacity="0.12" />
                  <circle cx="300" cy="360" r="10" fill="#7C3AED" opacity="0.18" />

                  <circle cx="120" cy="200" r="3" fill="#F59E0B" opacity="0.4" />
                  <ellipse cx="340" cy="200" rx="12" ry="8" fill="#F97316" opacity="0.3" transform="rotate(-30 340 200)" />
                </svg>

                <div class="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-pink-500 flex items-center justify-center shadow-xl shadow-primary-500/40 animate-pulse-glow">
                  <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>

                <div class="absolute -bottom-3 -left-3 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-xl rotate-12 border border-white/50">
                  <span class="text-3xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-cream to-transparent z-10" />
  </section>
</template>

<script setup>
</script>
