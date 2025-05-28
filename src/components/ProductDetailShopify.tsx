"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, CheckCircle } from "lucide-react";
import { getProductByHandle } from "@/lib/shopify/api";
import { isShopifyProduct, getProductDisplayName, formatPrice, getProductPriceAsNumber } from "@/lib/utils/productUtils";
import type { ShopifyProductNormalized } from "@/types/shopify";
import type { Product } from "@/data/products";

interface ProductDetailShopifyProps {
  productHandle: string;
  fallbackProduct?: Product;
}

export default function ProductDetailShopify({ productHandle, fallbackProduct }: ProductDetailShopifyProps) {
  const [product, setProduct] = useState<ShopifyProductNormalized | Product | null>(fallbackProduct || null);
  const [loading, setLoading] = useState(!fallbackProduct);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const loadShopifyProduct = async () => {
      if (fallbackProduct) return; // Don't load if we have a fallback

      try {
        setLoading(true);
        const shopifyProduct = await getProductByHandle(productHandle);
        
        if (shopifyProduct) {
          setProduct(shopifyProduct);
        } else {
          setError("Product not found in store");
        }
      } catch (err) {
        console.error("Error loading Shopify product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    loadShopifyProduct();
  }, [productHandle, fallbackProduct]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Normalize the product for cart compatibility
    const cartProduct = isShopifyProduct(product) ? {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      images: product.images,
      description: product.description,
      inStock: product.inStock,
      // Required fields with defaults for Shopify products
      benefits: [],
      skinType: [],
      keyIngredients: [],
      allIngredients: '',
      howToUse: [],
      size: '',
      // Optional Shopify fields
      handle: product.handle,
      vendor: product.vendor,
      productType: product.productType,
      tags: product.tags,
      shopifyId: product.shopifyId,
      isShopifyProduct: product.isShopifyProduct,
    } : product;
    
    addItem(cartProduct, quantity);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">{error || "The product you're looking for doesn't exist."}</p>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const isShopify = isShopifyProduct(product);
  const currentVariant = isShopify && product.variants ? product.variants[selectedVariant] : null;
  const currentPrice = currentVariant ? formatPrice(getProductPriceAsNumber(currentVariant.price.amount)) : product.price;
  const compareAtPrice = currentVariant?.compareAtPrice ? formatPrice(getProductPriceAsNumber(currentVariant.compareAtPrice.amount)) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-[#efeff0]">
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/600x600?text=Product+Image";
              }}
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#746cad]' : 'border-gray-200'
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

        {/* Product Details */}
        <div className="space-y-6">
          {/* Product Title and Price */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              {isShopify && (
                <Badge className="bg-green-100 text-green-800">
                  Available in Store
                </Badge>
              )}
              {isShopify && product.vendor && (
                <Badge variant="outline" className="text-xs">
                  by {product.vendor}
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-[#1c1c22] mb-4 font-lato">
              {getProductDisplayName(product)}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1c1c22]">{currentPrice}</span>
                {compareAtPrice && (
                  <span className="text-lg text-gray-500 line-through">{compareAtPrice}</span>
                )}
              </div>
              
              {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
          </div>

          {/* Product Description */}
          <div className="prose prose-sm max-w-none">
            <p className="text-[#747474] font-inter leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Variant Selection (for Shopify products) */}
          {isShopify && product.variants && product.variants.length > 1 && (
            <div>
              <h3 className="font-semibold text-[#1c1c22] mb-3">Options:</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-3 border rounded-lg text-sm transition-colors ${
                      selectedVariant === index 
                        ? 'border-[#746cad] bg-[#746cad] text-white' 
                        : 'border-gray-200 hover:border-[#746cad]'
                    }`}
                  >
                    {variant.title}
                    <div className="text-xs mt-1">
                      {formatPrice(getProductPriceAsNumber(variant.price.amount))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="font-semibold text-[#1c1c22]">Quantity:</label>
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-200">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-[#746cad] hover:bg-[#aca4e9] text-white py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button variant="outline" className="px-4">
                <Heart className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="px-4">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-[#746cad]" />
              <div>
                <div className="font-semibold text-sm">Free Shipping</div>
                <div className="text-xs text-gray-500">On orders over $25</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-[#746cad]" />
              <div>
                <div className="font-semibold text-sm">Quality Guarantee</div>
                <div className="text-xs text-gray-500">Premium ingredients</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-[#746cad]" />
              <div>
                <div className="font-semibold text-sm">Easy Returns</div>
                <div className="text-xs text-gray-500">30-day return policy</div>
              </div>
            </div>
          </div>

          {/* Additional Shopify Product Info */}
          {isShopify && product.tags && product.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-[#1c1c22] mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}