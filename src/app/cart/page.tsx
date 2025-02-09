"use client";
import Link from "next/link";
import { useCart } from "../../components/CartContext";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-4 border-b pb-2">
            <div className="flex justify-between">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
      <div className="mt-4 flex space-x-4">
        <Link
          href="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
        <button
          onClick={clearCart}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
