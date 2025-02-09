"use client";
import Image from "next/image";
import { useCart } from "./CartContext";

const product = {
  id: "presidential-kneepads",
  name: "Presidential Branded Knee-Pads",
  description:
    "Experience the pinnacle of style and protection with our Presidential Branded Knee-Pads. Designed for comfort and durability, these knee-pads are perfect for those who value both functionality and prestige.",
  benefits: [
    "Premium quality materials",
    "Ergonomic design for optimal support",
    "Exclusive Presidential branding",
    "Lightweight and durable",
  ],
  price: 99.99,
  image: "/presidential_knee_pads_3.webp", // Place your image in the public folder
};

export default function ProductShowcase() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="rounded shadow p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
          <h2 className="text-xl font-semibold mb-2">Benefits:</h2>
          <ul className="list-disc list-inside mb-4">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <p className="text-2xl font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
