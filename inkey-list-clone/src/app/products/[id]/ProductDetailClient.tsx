"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import ProductReviews from "@/components/ProductReviews";
import WriteReviewModal from "@/components/WriteReviewModal";
import { useCart } from "@/contexts/CartContext";
import { getReviewStats } from "@/data/reviews";
import { Star, Minus, Plus, ShoppingCart, Heart, Share } from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'howToUse' | 'reviews'>('description');
  const [showWriteReview, setShowWriteReview] = useState(false);
  const { addItem } = useCart();

  // Get review stats for this product
  const reviewStats = getReviewStats(product.id);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#747474] mb-8 font-inter">
          <Link href="/" className="hover:text-[#1c1c22]">Home</Link> /
          <Link href="/#products" className="hover:text-[#1c1c22]"> Products</Link> /
          <span className="text-[#1c1c22]"> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-[#efeff0] rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-[#746cad]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-[#746cad] font-inter font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-[#1c1c22] mt-2 font-lato">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-[#1c1c22] mt-2 font-inter">
                {product.price}
              </p>
              <p className="text-sm text-[#747474] mt-1 font-inter">
                {product.size}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {renderStars(reviewStats.averageRating)}
              </div>
              <span className="text-sm text-[#747474] font-inter">
                {reviewStats.averageRating} ({reviewStats.totalReviews} reviews)
              </span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-600 font-medium text-sm font-inter">
                  ✓ In Stock
                </span>
              ) : (
                <span className="text-red-600 font-medium text-sm font-inter">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm font-medium text-[#1c1c22] font-inter">
                Quantity:
              </span>
              <div className="flex items-center border border-[#c1c0cb] rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-[#efeff0]"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 font-inter">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-[#efeff0]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex space-x-3 mb-8">
              <Button
                className="flex-1 bg-[#746cad] hover:bg-[#aca4e9] text-white py-3 font-medium"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="border-[#c1c0cb]">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-[#c1c0cb]">
                <Share className="h-4 w-4" />
              </Button>
            </div>

            {/* Skin Type */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#1c1c22] mb-2 font-inter">
                Suitable for:
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.skinType.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#efeff0] text-[#747474] text-sm rounded-full font-inter"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold text-[#1c1c22] mb-3 font-inter">
                Key Benefits:
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#746cad] mr-2">•</span>
                    <span className="text-[#747474] text-sm font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-[#c1c0cb]">
            <nav className="flex space-x-8">
              {[
                { id: 'description' as const, label: 'Description' },
                { id: 'ingredients' as const, label: 'Ingredients' },
                { id: 'howToUse' as const, label: 'How to Use' },
                { id: 'reviews' as const, label: `Reviews (${reviewStats.totalReviews})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm font-inter transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#746cad] text-[#746cad]'
                      : 'border-transparent text-[#747474] hover:text-[#1c1c22]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <p className="text-[#747474] leading-relaxed font-inter">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#1c1c22] mb-4 font-lato">
                    Key Ingredients
                  </h3>
                  <div className="grid gap-6">
                    {product.keyIngredients.map((ingredient, index) => (
                      <div key={index} className="border border-[#c1c0cb] rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-[#1c1c22] font-inter">
                            {ingredient.name}
                          </h4>
                          {ingredient.percentage && (
                            <span className="text-[#746cad] font-medium text-sm font-inter">
                              {ingredient.percentage}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#746cad] font-medium mb-2 font-inter">
                          Function: {ingredient.function}
                        </p>
                        <p className="text-[#747474] text-sm leading-relaxed font-inter">
                          {ingredient.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1c1c22] mb-4 font-lato">
                    Full Ingredients List
                  </h3>
                  <p className="text-[#747474] text-sm leading-relaxed font-inter">
                    {product.allIngredients}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'howToUse' && (
              <div className="max-w-3xl">
                <h3 className="text-lg font-semibold text-[#1c1c22] mb-4 font-lato">
                  How to Use
                </h3>
                <ol className="space-y-3">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-[#746cad] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 font-inter">
                        {index + 1}
                      </span>
                      <span className="text-[#747474] font-inter">{step}</span>
                    </li>
                  ))}
                </ol>

                {product.warnings && product.warnings.length > 0 && (
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2 font-inter">
                      Important Notes:
                    </h4>
                    <ul className="space-y-1">
                      {product.warnings.map((warning, index) => (
                        <li key={index} className="text-yellow-700 text-sm font-inter">
                          • {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-5xl">
                <ProductReviews productId={product.id} />
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={showWriteReview}
        onClose={() => setShowWriteReview(false)}
        productId={product.id}
        productName={product.name}
      />

      <Footer />
    </div>
  );
}
