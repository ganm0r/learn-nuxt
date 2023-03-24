export default defineEventHandler(async (request) => {
  const { id } = request.context.params;

  const product = await $fetch(`https://fakestoreapi.com/products/${id}`);

  return product;
});
