export default defineEventHandler(async (request) => {
  const { id } = request.context.params;

  const { data: product } = await $fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return product;
});
