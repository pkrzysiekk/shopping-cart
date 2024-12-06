export function getEditedCart(cart, product, quantity) {
  let productToEdit = cart.find((item) => {
    return item.product.id == product.id;
  });
  let indexToEdit = cart.indexOf(productToEdit);
  productToEdit.quantity += quantity;
  cart[indexToEdit] = productToEdit;
  const newCart = [...cart];
  console.log(newCart);
  return newCart;
}
