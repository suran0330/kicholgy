"use client";

import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/products";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const categories = [
  { name: "HYDRATION", image: "https://ext.same-assets.com/3071055451/2165639085.png", href: "/concerns/hydration" },
  { name: "ANTI-AGING", image: "https://ext.same-assets.com/3071055451/653406535.png", href: "/concerns/anti-aging" },
  { name: "BLEMISHES", image: "https://ext.same-assets.com/3071055451/2316002344.png", href: "/concerns/blemishes" },
  { name: "BRIGHTENING", image: "https://ext.same-assets.com/3071055451/3667623108.png", href: "/concerns/brightening" },
  { name: "SENSITIVE SKIN", image: "https://ext.same-assets.com/3071055451/4219517047.png", href: "/concerns/sensitive" }
];

export default function ProductGrid() {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#1c1c22] mb-12 font-lato">
            Shop by Concern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group block">
                <div className="cursor-pointer border-2 border-transparent hover:border-[#746cad] rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-square rounded-lg overflow-hidden bg-[#efeff0] mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#f8f7ff]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-center text-[#1c1c22] font-inter transition-colors duration-300 group-hover:text-[#746cad]">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#1c1c22] mb-12 font-lato">
            Insider Favorites
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-[#efeff0] mb-4 group-hover:scale-105 transition-transform cursor-pointer relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ShoppingCart className="h-4 w-4 text-[#746cad]" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-[#97979d] font-inter">{product.category}</p>
                    <h3 className="text-sm font-semibold text-[#1c1c22] font-inter leading-tight group-hover:text-[#746cad] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-[#1c1c22] font-inter">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-[#1c1c22] mb-4 font-lato">
            Ready to Transform Your Skincare?
          </h2>
          <p className="text-[#747474] mb-8 max-w-2xl mx-auto font-inter">
            Join thousands of skincare enthusiasts who trust INKEY for their daily routine.
            Science-backed formulations at affordable prices.
          </p>
          <Link href="/shop">
            <Button className="bg-[#746cad] hover:bg-[#aca4e9] text-white px-8 py-3 rounded-lg font-medium">
              Shop All Products
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
