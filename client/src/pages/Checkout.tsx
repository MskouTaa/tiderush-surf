/*
 * TideRush Surf Co. — Checkout Page
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShieldCheck, Lock, ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Checkout() {
  const { getCartProducts, subtotal, clearCart } = useCart();
  const [, navigate] = useLocation();
  const cartProducts = getCartProducts();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.0875;
  const total = subtotal + shipping + tax;
  const [step, setStep] = useState<"info" | "payment" | "complete">("info");
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", address: "", city: "", state: "", zip: "", phone: "",
    cardNumber: "", expiry: "", cvv: "", cardName: "",
  });

  if (cartProducts.length === 0 && step !== "complete") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-ocean mb-4">No items in cart</h1>
          <Link href="/shop">
            <Button className="bg-sunset text-white font-display">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (step === "complete") {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h1 className="font-display font-bold text-3xl text-ocean mb-3">Order Confirmed!</h1>
          <p className="font-body text-ocean/60 mb-2">Thank you for your purchase. Your order #TR-{Math.random().toString(36).substr(2, 8).toUpperCase()} has been placed.</p>
          <p className="font-body text-ocean/60 mb-8">You'll receive a confirmation email shortly with tracking details.</p>
          <Link href="/shop">
            <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold px-8 py-6 rounded-xl">
              Continue Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep("complete");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <div className="bg-cream border-b border-sand-dark">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/cart" className="flex items-center gap-2 text-ocean/60 hover:text-ocean font-body text-sm transition-colors">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
          <div className="flex items-center gap-2 text-ocean/40 text-xs font-body">
            <Lock size={14} />
            Secure Checkout
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-cream">
        <div className="container py-4">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 text-sm font-display font-semibold ${step === "info" ? "text-sunset" : "text-ocean"}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step === "info" ? "bg-sunset text-white" : "bg-ocean text-white"}`}>1</span>
              Information
            </div>
            <div className="w-12 h-px bg-sand-dark" />
            <div className={`flex items-center gap-2 text-sm font-display font-semibold ${step === "payment" ? "text-sunset" : "text-ocean/40"}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step === "payment" ? "bg-sunset text-white" : "bg-sand-dark text-ocean/40"}`}>2</span>
              Payment
            </div>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {step === "info" && (
                <form onSubmit={handleSubmitInfo} className="bg-card rounded-2xl p-6 md:p-8 border border-sand-dark/50 space-y-5">
                  <h2 className="font-display font-bold text-xl text-ocean mb-2">Shipping Information</h2>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="your@email.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">First Name</label>
                      <input type="text" required value={form.firstName} onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="First" />
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">Last Name</label>
                      <input type="text" required value={form.lastName} onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="Last" />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Address</label>
                    <input type="text" required value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="Street address" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">City</label>
                      <input type="text" required value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="City" />
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">State</label>
                      <input type="text" required value={form.state} onChange={e => setForm(p => ({ ...p, state: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="State" />
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">ZIP</label>
                      <input type="text" required value={form.zip} onChange={e => setForm(p => ({ ...p, zip: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="ZIP" />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Phone (optional)</label>
                    <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="(555) 555-5555" />
                  </div>
                  <Button type="submit" className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold py-6 rounded-xl text-base">
                    Continue to Payment
                  </Button>
                </form>
              )}

              {step === "payment" && (
                <form onSubmit={handleSubmitPayment} className="bg-card rounded-2xl p-6 md:p-8 border border-sand-dark/50 space-y-5">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-xl text-ocean">Payment</h2>
                    <button type="button" onClick={() => setStep("info")} className="text-sm text-sunset font-display font-semibold hover:underline">
                      Edit Info
                    </button>
                  </div>
                  <div className="bg-sand rounded-xl p-4 text-sm font-body text-ocean/60">
                    <p>{form.firstName} {form.lastName}</p>
                    <p>{form.address}, {form.city}, {form.state} {form.zip}</p>
                    <p>{form.email}</p>
                  </div>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Card Number</label>
                    <input type="text" required value={form.cardNumber} onChange={e => setForm(p => ({ ...p, cardNumber: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="1234 5678 9012 3456" maxLength={19} />
                  </div>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Name on Card</label>
                    <input type="text" required value={form.cardName} onChange={e => setForm(p => ({ ...p, cardName: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="Full name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">Expiry</label>
                      <input type="text" required value={form.expiry} onChange={e => setForm(p => ({ ...p, expiry: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="MM/YY" maxLength={5} />
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold text-ocean mb-2 block">CVV</label>
                      <input type="text" required value={form.cvv} onChange={e => setForm(p => ({ ...p, cvv: e.target.value }))} className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30" placeholder="123" maxLength={4} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold py-6 rounded-xl text-base">
                    <Lock size={16} className="mr-2" /> Place Order — ${total.toFixed(2)}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-ocean/40 font-body">
                    <ShieldCheck size={14} />
                    Your payment information is encrypted and secure
                  </div>
                </form>
              )}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 border border-sand-dark/50 sticky top-24">
                <h3 className="font-display font-bold text-lg text-ocean mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {cartProducts.map(({ product, item }) => (
                    <div key={`${product.id}-${JSON.stringify(item.selectedVariants)}`} className="flex items-center gap-3">
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="w-14 h-14 object-cover rounded-lg" />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-ocean text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-sm text-ocean truncate">{product.name}</p>
                        <p className="text-xs text-ocean/50 font-body">
                          {Object.values(item.selectedVariants).join(" / ")}
                        </p>
                      </div>
                      <span className="font-display font-semibold text-sm text-ocean">${(product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-sand-dark pt-4 space-y-2">
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-ocean/60">Subtotal</span>
                    <span className="text-ocean">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-ocean/60">Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : "text-ocean"}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-ocean/60">Tax (est.)</span>
                    <span className="text-ocean">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-sand-dark pt-3 flex justify-between">
                    <span className="font-display font-bold text-ocean">Total</span>
                    <span className="font-display font-bold text-xl text-ocean">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
