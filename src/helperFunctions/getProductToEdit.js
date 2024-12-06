export function getProductToEdit(cart, product) {
  return cart.find((item) => {
    return item.product.id == product.id;
  });
}
