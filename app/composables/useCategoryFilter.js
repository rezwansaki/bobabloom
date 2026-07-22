import { ref } from "vue";

const selectedCategorySlug = ref(null);

export function useCategoryFilter() {
  function selectCategory(slug) {
    selectedCategorySlug.value = slug;
  }

  function clearCategory() {
    selectedCategorySlug.value = null;
  }

  return {
    selectedCategorySlug,
    selectCategory,
    clearCategory,
  };
}
