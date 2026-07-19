<template>
  <section class="relative py-20 md:py-28 overflow-hidden bg-cream">
    <div class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-primary-200 to-pink-200 top-0 right-0 animate-drift pointer-events-none" />
    <div class="blob-sm w-[300px] h-[300px] bg-gradient-to-br from-secondary-200 to-accent-200 bottom-0 left-0 animate-drift-reverse pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-[3rem] p-8 sm:p-12 md:p-20 text-center max-w-5xl mx-auto">
        <div class="max-w-2xl mx-auto space-y-8">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-400 to-pink-500 flex items-center justify-center shadow-xl shadow-primary-500/30">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>

          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15]">
            Stay in the Bubble Loop
          </h2>

          <p class="text-lg text-gray-600 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new flavors, exclusive offers, and special events.
          </p>

          <form class="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" @submit.prevent="handleSubmit">
            <div class="relative flex-1 w-full">
              <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <input
                v-model="email"
                type="email"
                required
                placeholder="Enter your email address"
                class="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 bg-white text-gray-900 placeholder-gray-400 font-body transition-all duration-300 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              class="btn-primary text-base px-8 py-4 w-full sm:w-auto whitespace-nowrap group"
              :disabled="submitting"
            >
              <span v-if="submitting" class="flex items-center gap-2">
                <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Subscribing...
              </span>
              <span v-else class="flex items-center gap-2">
                Subscribe
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </form>

          <p class="text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy. We respect your inbox — no spam, ever.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitting = ref(false)

function handleSubmit() {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    email.value = ''
    alert('Thank you for subscribing!')
  }, 1500)
}
</script>
