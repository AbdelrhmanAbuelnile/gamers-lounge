import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

// provider component

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);


  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CheckboxProvider");
	}
	return context;
}