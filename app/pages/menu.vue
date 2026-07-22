<template>
  <div class="min-h-screen bg-cream">
    <Navbar />

    <main class="pt-28 pb-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 shadow-sm"
          >
            <svg class="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Our Menu
          </div>
          <h1 class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Complete Menu
          </h1>
          <p class="text-lg text-gray-600">
            Explore our full selection of handcrafted bubble tea creations
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            :class="selectedCategorySlug === null ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'"
            @click="clearCategory"
          >
            All Drinks
          </button>
          <button
            v-for="cat in data.categories"
            :key="cat.id"
            class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2"
            :class="selectedCategorySlug === cat.slug ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'"
            @click="selectCategory(cat.slug)"
          >
            {{ cat.name }}
          </button>
        </div>

        <div v-if="selectedCategorySlug" class="mb-6">
          <h2 class="font-display text-2xl font-bold text-gray-900">
            {{ currentCategory.name }}
          </h2>
          <p class="text-sm text-gray-500 mt-1">{{ currentCategory.description }}</p>
        </div>

        <p v-if="filteredProducts.length === 0" class="text-center text-gray-500 py-20">
          No products found in this category.
        </p>

        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProductCard
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            :product="product"
            :delay="index * 100"
          />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from "vue";
import data from "~/data/products.json";

const { selectedCategorySlug, selectCategory, clearCategory } = useCategoryFilter();

const allProducts = computed(() => {
  return data.categories.flatMap((cat) => cat.products);
});

const currentCategory = computed(() => {
  return data.categories.find((cat) => cat.slug === selectedCategorySlug.value);
});

const filteredProducts = computed(() => {
  if (selectedCategorySlug.value === null) return allProducts.value;
  const cat = data.categories.find((c) => c.slug === selectedCategorySlug.value);
  return cat ? cat.products : [];
});

useSeoMeta({
  title: "Our Menu | Boba Bloom",
  description: "Explore our full selection of handcrafted premium bubble tea creations.",
});
</script>
