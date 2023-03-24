<script setup>
import { useProductsStore } from "~~/stores/ProductsStore";

const { getProductById } = useProductsStore();

const { id } = useRoute().params;

const product = await getProductById(id);
</script>

<template>
  <div>
    <h1>{{ id }}</h1>
    <h1>Product ID: {{ product.id }}</h1>
    <h1>Product Title: {{ product.title }}</h1>
  </div>
</template>
