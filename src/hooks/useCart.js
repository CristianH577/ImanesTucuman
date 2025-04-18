import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState({});

  const addToCart = (cat, itemId, itemCartData = {}) => {
    const cart_ = structuredClone(cart);
    const itemCartData_ = structuredClone(itemCartData);

    if (!cart_.hasOwnProperty(cat)) cart_[cat] = {};
    if (!itemCartData_.hasOwnProperty("qtt")) itemCartData_.qtt = 1;

    itemCartData_.priceToUse = "base";

    cart_[cat][itemId] = itemCartData_;

    setCart(cart_);
  };

  return { value: cart, set: setCart, add: addToCart };
}
