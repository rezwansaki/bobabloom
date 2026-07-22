<template>
  <div v-if="product" class="min-h-screen bg-cream">
    <Navbar />

    <main class="pt-24 pb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/#featured"
          class="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors duration-300 mb-8 group"
        >
          <svg
            class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Menu
        </NuxtLink>

        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div class="space-y-4">
            <div
              class="relative rounded-3xl overflow-hidden aspect-square shadow-xl bg-gradient-to-br from-primary-100 to-pink-100"
            >
              <img
                :src="activeImage"
                :alt="product.name"
                class="w-full h-full object-cover transition-all duration-500"
                @error="onImgError"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"
              />
            </div>

            <div
              v-if="product.images.length > 1"
              class="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            >
              <button
                v-for="(img, i) in product.images"
                :key="i"
                class="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300"
                :class="
                  activeImage === img
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20'
                    : 'border-transparent opacity-60 hover:opacity-100'
                "
                @click="activeImage = img"
              >
                <img
                  :src="img"
                  :alt="`${product.name} ${i + 1}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  @error="onImgError"
                />
              </button>
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2 flex-wrap mb-4">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold shadow-sm"
              >
                <svg class="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Featured Drink
              </div>
              <NuxtLink
                :to="`/menu?category=${product.category_slug}`"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-50 text-secondary-600 text-sm font-semibold shadow-sm hover:bg-secondary-100 transition-colors duration-300"
              >
                {{ product.category }}
              </NuxtLink>
            </div>

            <h1 class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              {{ product.name }}
            </h1>

            <p class="text-lg text-gray-600 mb-6">
              {{ product.description }}
            </p>

            <div class="flex items-center gap-4 mb-6">
              <div class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white shadow-sm">
                <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="font-bold text-gray-900">{{ product.rating }}</span>
              </div>

              <div class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full" :class="product.spice === 'Mild' ? 'bg-accent-500' : product.spice === 'Medium' ? 'bg-primary-500' : 'bg-pink-500'" />
                <span class="text-sm text-gray-600">{{ product.spice }}</span>
              </div>

              <div class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full" :class="product.stock ? 'bg-accent-500' : 'bg-red-400'" />
                <span class="text-sm" :class="product.stock ? 'text-accent-700' : 'text-red-600'">{{ product.stock ? 'In Stock' : 'Out of Stock' }}</span>
              </div>
            </div>

            <div class="text-4xl font-display font-extrabold text-gradient mb-8">
              ${{ product.price }}
            </div>

            <div v-if="product.features && product.features.length" class="mb-8">
              <h3 class="font-display font-bold text-gray-900 mb-3">Key Features</h3>
              <ul class="space-y-2">
                <li v-for="(feature, i) in product.features" :key="i" class="flex items-center gap-3 text-sm text-gray-600">
                  <svg class="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="flex gap-4">
              <button class="btn-primary flex-1 text-lg py-4">
                <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Add to Cart
              </button>

              <button
                class="p-4 rounded-2xl transition-all duration-300 bg-white shadow-sm hover:shadow-md border border-gray-100"
                :class="localFavorited ? 'text-pink-500' : 'text-gray-400'"
                @click="localFavorited = !localFavorited"
                aria-label="Toggle favorite"
              >
                <svg class="w-6 h-6" :fill="localFavorited ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>

  <div v-else class="min-h-screen bg-cream flex items-center justify-center">
    <div class="text-center max-w-md mx-auto px-4">
      <div
        class="w-24 h-24 mx-auto mb-8 rounded-full bg-primary-50 flex items-center justify-center"
      >
        <svg
          class="w-12 h-12 text-primary-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
      <h1 class="font-display text-4xl font-extrabold text-gray-900 mb-4">
        Product Not Found
      </h1>
      <p class="text-gray-600 mb-8">
        We couldn't find the drink you're looking for. It might have been
        removed or the link may be incorrect.
      </p>
      <NuxtLink to="/" class="btn-primary inline-flex">
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import data from "~/data/products.json";

const route = useRoute();
const slug = route.params.slug;

const product = computed(() => {
  for (const cat of data.categories) {
    const found = cat.products.find((p) => p.slug === slug);
    if (found) return found;
  }
  return null;
});

const activeImage = ref(product.value ? product.value.images[0] : null);
const localFavorited = ref(product.value ? product.value.favorited : false);

function onImgError(event) {
  event.target.style.display = "none";
}

useSeoMeta({
  title: product.value
    ? `${product.value.name} | Boba Bloom`
    : "Product Not Found | Boba Bloom",
  description: product.value
    ? product.value.description
    : "The requested product could not be found.",
});
</script>
