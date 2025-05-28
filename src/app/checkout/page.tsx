"use client";

import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { state, getSubtotal } = useCart();
  const { state: authState, isAuthenticated, openLoginModal } = useAuth();
  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States"
  });

  // Pre-fill form if user is logged in
  useEffect(() => {
    if (isAuthenticated && authState.user) {
      setEmail(authState.user.email);
      setShippingInfo(prev => ({
        ...prev,
        firstName: authState.user!.firstName,
        lastName: authState.user!.lastName
      }));
    }
  }, [isAuthenticated, authState.user]);

  const subtotal = getSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment processor
    alert("Order placed successfully! (This is a demo)");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#1c1c22] mb-4 font-lato">
            Your cart is empty
          </h1>
          <p className="text-[#747474] mb-8 font-inter">
            Add some products to your cart before checking out.
          </p>
          <Link href="/">
            <Button className="bg-[#746cad] hover:bg-[#aca4e9] text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-[#746cad] hover:text-[#aca4e9] font-inter">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <h1 className="text-2xl font-bold text-[#1c1c22] mb-8 font-lato">
              Checkout
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#1c1c22] font-inter">
                    Contact Information
                  </h2>
                  {!isAuthenticated && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={openLoginModal}
                      className="border-[#c1c0cb]"
                    >
                      Sign In
                    </Button>
                  )}
                </div>

                {isAuthenticated ? (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
                    <p className="text-green-800 text-sm font-inter">
                      ✓ Signed in as {authState.user?.email}
                      {authState.user?.isInsider && (
                        <span className="ml-2 text-[#746cad] font-medium">
                          (INKEY Insider - 30% off applied!)
                        </span>
                      )}
                    </p>
                  </div>
                ) : (
                  <div className="p-3 bg-[#efeff0] border border-[#c1c0cb] rounded-lg mb-4">
                    <p className="text-[#747474] text-sm font-inter">
                      💡 Sign in to save your information and earn rewards
                    </p>
                  </div>
                )}

                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                  disabled={isAuthenticated}
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-lg font-semibold text-[#1c1c22] mb-4 font-inter">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First name"
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Last name"
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                    required
                  />
                </div>
                <Input
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  required
                  className="mt-4"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <Input
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="State"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="ZIP code"
                    value={shippingInfo.zipCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-lg font-semibold text-[#1c1c22] mb-4 font-inter">
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div className="relative">
                    <Input placeholder="Card number" className="pl-10" />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#97979d]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM/YY" />
                    <Input placeholder="CVC" />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#746cad] hover:bg-[#aca4e9] text-white py-3 font-medium"
              >
                <Lock className="h-4 w-4 mr-2" />
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-[#efeff0] rounded-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-[#1c1c22] mb-6 font-inter">
                Order Summary
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#1c1c22] font-inter">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-[#97979d] font-inter">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-[#1c1c22] font-inter">
                      {formatPrice(Number.parseFloat(item.product.price.replace('$', '')) * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-[#c1c0cb] pt-4 space-y-3">
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-[#747474]">Subtotal</span>
                  <span className="text-[#1c1c22]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-[#747474]">Shipping</span>
                  <span className="text-[#1c1c22]">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-[#747474]">Tax</span>
                  <span className="text-[#1c1c22]">{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-[#c1c0cb] pt-3">
                  <div className="flex justify-between font-semibold font-inter">
                    <span className="text-[#1c1c22]">Total</span>
                    <span className="text-[#1c1c22]">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
