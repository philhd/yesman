"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Presidential Knee-Pads
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart ({totalItems})
          </Link>
          <Link href="/checkout" className="hover:underline">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
