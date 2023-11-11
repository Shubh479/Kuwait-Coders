"use client";
import { useState } from "react";
import CartProvider from "@/context/CartProvider";
import Header from "@/client component/Header";
import Meals from "@/client component/Meals";
import Cart from "@/client component/cart/Cart";

export default function HomePage() {
  const [shown, setShown] = useState(false);

  function showCart() {
    setShown(true);
  }

  function hideCart() {
    setShown(false);
  }
  return (
    <CartProvider>
      {/* cart component activated when clicked on cart button in header */}
      {shown && <Cart onClose={hideCart} />}

      <Header onShow={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
