export function productInCart(cart, product) {
  return cart.some((item) => {
    return item.product.id == product.id;
  });
}
