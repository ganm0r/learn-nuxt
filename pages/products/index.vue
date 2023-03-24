<script setup>
import { useProductsStore } from '~~/stores/ProductsStore';

const { products } = useProductsStore();
</script>

<template>
  <div>
    <h1>products</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
