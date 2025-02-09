"use client";
import { useState } from "react";
import { useCart } from "../../components/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate processing the order
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>
          Your cart is empty. Please add some items before proceeding to
          checkout.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
        <p>Thank you for your order, {formData.fullName}!</p>
        <p>
          Your items will be shipped to {formData.address}, {formData.city},{" "}
          {formData.state} {formData.zip}.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Total: ${total.toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full text-black border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full text-black border rounded px-3 py-2"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full text-black border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full text-black border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full text-black border rounded px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-black border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
