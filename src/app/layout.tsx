import { CartProvider } from "../components/CartContext";
import Header from "../components/Header";

// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: "My Presidential Knee-Pads",
  description:
    "High quality Presidential branded knee-pads for superior protection and style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
