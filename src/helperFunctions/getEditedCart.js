export function getEditedCart(cart, product, quantityToAdd) {
  const productToEdit = cart.find((item) => item.product.id === product.id);
  console.log(productToEdit);
  const updatedProduct = {
    ...productToEdit,
    quantity: productToEdit.quantity + quantityToAdd,
  };
  const newCart = cart.map((item) =>
    item.product.id === product.id ? updatedProduct : item
  );
  return newCart;
}
