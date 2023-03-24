import { defineStore } from "pinia";

const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fill() {
      const { data: products } = await useFetch("/api/products");
      this.$state.products = products;
    },
    async getProductById(id) {
      const { data: product } = await useFetch(`/api/products/${id}`);
      return product;
    }
  },
});

export { useProductsStore };
