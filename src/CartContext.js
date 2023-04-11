import { createContext } from "react";
import { useState } from "react";
import { getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  function getProductQuantity(id) {
    const quantity = cartProducts.find((prod) => prod.id === id)?.quantity;
    if (quantity === undefined) return 0;
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ]);
    } else {
      setCartProducts(
        cartProducts.map((prod) => {
          if (prod.id === id) {
            return { ...prod, quantity: prod.quantity + 1 };
          }
          return prod;
        })
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((prod) => {
        return prod.id !== id;
      })
    );
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((prod) => {
          if (prod.id === id) {
            return { ...prod, quantity: prod.quantity - 1 };
          }
          return prod;
        })
      );
    }
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartProd) => {
      const prodData = getProductData(cartProd.id);
      totalCost += cartProd.quantity * prodData.price;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
