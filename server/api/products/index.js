export default defineEventHandler(async () => {
  const products = await $fetch("https://fakestoreapi.com/products");

  return products;
});
