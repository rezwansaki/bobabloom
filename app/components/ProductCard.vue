<template>
  <NuxtLink
    :to="`/products/${product.slug}`"
    class="group glass-card rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer animate-fade-up block"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <div
      class="relative mb-5 rounded-2xl overflow-hidden aspect-square shadow-lg bg-gradient-to-br from-primary-100 to-pink-100"
    >
      <img
        :src="product.images[0]"
        :alt="product.name"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        @error="onImgError"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <button
        class="absolute top-3 right-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 z-10"
        :class="localFavorited ? 'text-pink-500' : 'text-gray-400'"
        @click.prevent="toggleFavorite"
        aria-label="Toggle favorite"
      >
        <svg
          class="w-5 h-5"
          :fill="localFavorited ? 'currentColor' : 'none'"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div
        class="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-primary-600 shadow-sm z-10"
      >
        <span class="flex items-center gap-1">
          <svg
            class="w-3.5 h-3.5 text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          {{ product.rating }}
        </span>
      </div>
    </div>

    <div class="flex items-start justify-between mb-2">
      <h3 class="font-display text-lg font-bold text-gray-900">
        {{ product.name }}
      </h3>
      <span class="font-display text-lg font-bold text-gradient"
        >${{ product.price }}</span
      >
    </div>
    <p class="text-sm text-gray-500 mb-4 line-clamp-2">
      {{ product.description }}
    </p>

    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-1.5">
        <span
          class="w-2 h-2 rounded-full"
          :class="
            product.spice === 'Mild'
              ? 'bg-accent-500'
              : product.spice === 'Medium'
                ? 'bg-primary-500'
                : 'bg-pink-500'
          "
        />
        <span class="text-xs text-gray-400">{{ product.spice }}</span>
      </div>
      <button
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30"
        @click.prevent
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  product: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});

const localFavorited = ref(props.product.favorited);

function toggleFavorite() {
  localFavorited.value = !localFavorited.value;
}

function onImgError(event) {
  event.target.style.display = "none";
}
</script>
