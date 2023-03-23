<script setup>
const { id } = useRoute().params;

const { data: product } = await useFetch(`/api/products/${id}`);
</script>

<template>
  <div>
    <h1>Product ID: {{ product.id }}</h1>
    <h1>Product Title: {{ product.title }}</h1>
  </div>
</template>
