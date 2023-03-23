export default defineEventHandler(async () => {
  const { data: products } = await $fetch("https://fakestoreapi.com/products");

  return products;
});
