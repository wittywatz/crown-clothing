export const addItemToCart = (cartItems, newItem) => {
  if (cartItems.length === 0) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
  const exists = cartItems.find((cartItem) => cartItem.id === newItem.id);
  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  const exists = cartItems.find((item) => item.id === removeItem.id);

  if (exists.quantity === 1) {
    return cartItems.filter((product) => product.id !== removeItem.id);
  }
  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === removeItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
