<script setup>
import { useProductsStore } from "~~/stores/ProductsStore";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
];

const { fill } = useProductsStore();

fill();
</script>

<template>
  <div class="w-screen">
    <nav class="bg-zinc-200 flex gap-4 p-4 items-center">
      <h1
        class="font-bold text-2xl uppercase"
        role="button"
        @click="() => useRouter().replace('/')"
      >
        Nuxt Store
      </h1>

      <div
        v-for="link in links"
        class="flex h-full items-center"
        :key="link.name"
      >
        <NuxtLink
          :to="link.path"
          class="text-md font-semibold uppercase"
          >{{ link.name }}</NuxtLink
        >
      </div>
    </nav>

    <div class="bg-stone-700">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.active-link {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
</style>
