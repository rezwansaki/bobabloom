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
          <NuxtLink to="/" class="flex items-center gap-1 group">
            <div
              class="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            >
              <img
                src="/logo.png"
                alt="Boba Bloom Logo"
                class="w-full h-full object-contain"
              />
            </div>

            <span
              class="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text text-transparent"
            >
              <img
                src="/Site_Text_Logo.png"
                alt="Boba Bloom Logo"
                class="w-20 md:w-28 lg:w-40 h-auto object-contain"
              />
            </span>
          </NuxtLink>

          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.href"
              class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300"
              :class="
                isItemActive(item)
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              "
            >
              {{ item.label }}
            </NuxtLink>

            <div class="relative">
              <button
                class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 inline-flex items-center gap-1"
                :class="
                  selectedCategorySlug
                    ? 'bg-primary-50 text-primary-600 font-semibold'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                "
                @click="categoriesOpen = !categoriesOpen"
              >
                Categories
                <svg
                  class="w-3.5 h-3.5 transition-transform duration-300"
                  :class="categoriesOpen ? 'rotate-180' : ''"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div
                v-if="categoriesOpen"
                class="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-gray-100 py-2 backdrop-blur-xl z-50"
                @mouseleave="categoriesOpen = false"
              >
                <button
                  class="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 rounded-xl"
                  @click="goToCategory(null)"
                >
                  All Drinks
                </button>
                <div class="mx-4 my-1 border-t border-gray-100" />
                <button
                  v-for="cat in data.categories"
                  :key="cat.id"
                  class="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 rounded-xl flex items-center gap-3"
                  @click="goToCategory(cat.slug)"
                >
                  <span
                    class="w-2 h-2 rounded-full"
                    :class="
                      cat.slug === 'milk-tea'
                        ? 'bg-amber-400'
                        : cat.slug === 'fruit-tea'
                          ? 'bg-pink-400'
                          : 'bg-purple-400'
                    "
                  />
                  {{ cat.name }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <NuxtLink
            to="/menu"
            class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
            style="background: linear-gradient(135deg, #f59e0b, #fbbf24)"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
            Browse Menu
          </NuxtLink>
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
              isItemActive(item)
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
            "
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="pt-2 pb-1">
            <p
              class="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Categories
            </p>
            <button
              class="w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              @click="goToCategory(null)"
            >
              All Drinks
            </button>
            <button
              v-for="cat in data.categories"
              :key="cat.id"
              class="w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              @click="goToCategory(cat.slug)"
            >
              <span
                class="w-2 h-2 rounded-full"
                :class="
                  cat.slug === 'milk-tea'
                    ? 'bg-amber-400'
                    : cat.slug === 'fruit-tea'
                      ? 'bg-pink-400'
                      : 'bg-purple-400'
                "
              />
              {{ cat.name }}
            </button>
          </div>

          <NuxtLink
            to="/menu"
            class="flex items-center justify-center gap-2 w-full px-4 py-3.5 mt-3 text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/30"
            style="background: linear-gradient(135deg, #f59e0b, #fbbf24)"
            @click="mobileOpen = false"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
            Browse Menu
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import data from "~/data/products.json";

const { isScrolled } = useScrollPosition();
const { selectedCategorySlug, selectCategory, clearCategory } =
  useCategoryFilter();
const mobileOpen = ref(false);
const activeSection = ref("hero");
const categoriesOpen = ref(false);

const route = useRoute();

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Best Seller", href: "/" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
];

function isItemActive(item) {
  if (item.href.startsWith("#")) {
    return activeSection.value === item.href.slice(1);
  }
  return route.path === item.href;
}

function goToCategory(slug) {
  categoriesOpen.value = false;
  mobileOpen.value = false;
  if (slug) {
    selectCategory(slug);
  } else {
    clearCategory();
  }
  const el = document.getElementById("featured");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

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
