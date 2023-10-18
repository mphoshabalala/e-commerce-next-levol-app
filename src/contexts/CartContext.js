import { createContext, useContext, useState } from "react";
import { useItems } from "./ItemsContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  //get cart items from local storage
  const [cartItems, setCartItems] = useState(() => {
    const ItemsInLocalStorage = JSON.parse(localStorage.getItem("item"));
    return ItemsInLocalStorage || [];
  });
  const [isInCart, setIsInCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { currentItem } = useItems();

  function checkIfIsInCart(item) {
    try {
      const isItemInCart = cartItems.some(
        (cartItem) => cartItem.id === item.id
      );
      setIsInCart(isItemInCart);
    } catch (err) {
      console.log(err);
    }
  }

  function deleteItemInCart(item) {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id === item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("item", JSON.stringify(updatedCartItems));

    if (currentItem && currentItem.id === item.id) {
      setIsInCart(false);
    }
  }

  function handleAddToCart(item) {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id); //check if item exist in the cart
    if (isItemInCart) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("item", JSON.stringify(updatedCartItems));
      setIsInCart(false);
    } else {
      // if the item is not in cart add it
      setCartItems((cartItems) => [...cartItems, item]);
      localStorage.setItem("item", JSON.stringify([...cartItems, item]));
      setIsInCart(true);
    }
  }

  const cartItemsCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        checkIfIsInCart,
        cartItems,
        deleteItemInCart,
        handleAddToCart,
        cartItemsCount,
        isInCart,
        setCartOpen,
        cartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
