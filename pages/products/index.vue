<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products"); 
</script>

<template>
  <div>
    <h1>Products</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`products/${product.id}`">{{ product.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
