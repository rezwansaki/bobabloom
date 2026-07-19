<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass-strong shadow-lg shadow-black/5'
        : 'bg-white/70 backdrop-blur-sm shadow-sm shadow-black/5',
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div
              class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 to-pink-500 flex items-center justify-center shadow-lg shadow-primary-500/25 transition-transform duration-300 group-hover:scale-110"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <span
              class="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text text-transparent"
            >
              Boba Bloom
            </span>
          </NuxtLink>

          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.href"
              class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300"
              :class="
                activeSection === item.href.slice(1)
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              "
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <button
            class="p-2.5 rounded-xl transition-all duration-300 text-gray-600 hover:text-primary-600 hover:bg-primary-50"
            aria-label="Search"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <!-- <button
            class="p-2.5 rounded-xl transition-all duration-300 relative group text-gray-600 hover:text-primary-600 hover:bg-primary-50"
            aria-label="Cart"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span
              class="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-secondary-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-pink-500/30"
              >3</span
            >
          </button> -->

          <!-- <NuxtLink
            to="/order"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-xl text-white transition-all duration-300 shadow-lg"
            style="
              background: linear-gradient(135deg, #f59e0b, #ec4899);
              box-shadow: 0 4px 15px rgba(245, 158, 11, 0.35);
            "
            @mouseenter="hoverBtn = true"
            @mouseleave="hoverBtn = false"
          >
            Order Now
            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="hoverBtn ? 'translate-x-1' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </NuxtLink> -->

          <button
            class="lg:hidden p-2.5 rounded-xl transition-all duration-300 text-gray-600"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menu"
          >
            <svg
              v-if="!mobileOpen"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
      >
        <div class="px-4 py-4 space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.href"
            class="block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300"
            :class="
              activeSection === item.href.slice(1)
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
            "
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <!-- <NuxtLink
            to="/order"
            class="block px-4 py-3 text-sm font-semibold rounded-xl text-white text-center transition-all duration-300 mt-2"
            style="background: linear-gradient(135deg, #f59e0b, #ec4899)"
            @click="mobileOpen = false"
          >
            Order Now
          </NuxtLink> -->
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const { isScrolled } = useScrollPosition();
const mobileOpen = ref(false);
const hoverBtn = ref(false);
const activeSection = ref("hero");

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#featured" },
  { label: "Best Seller", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
];

function onScroll() {
  const sections = ["hero", "featured", "about", "reviews", "footer"];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = id;
        break;
      }
    }
  }
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
