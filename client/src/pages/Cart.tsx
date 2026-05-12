/*
 * TideRush Surf Co. — Cart Page
 */
import { Link } from "wouter";
import { Minus, Plus, Trash2, ShieldCheck, Truck, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Cart() {
  const { getCartProducts, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const cartProducts = getCartProducts();
  const freeShippingThreshold = 100;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 9.99;
  const total = subtotal + shipping;

  // Upsell
  const cartIds = cartProducts.map(cp => cp.product.id);
  const upsells = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 2);

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-sand flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-ocean/30" />
          </div>
          <h1 className="font-display font-bold text-3xl text-ocean mb-2">Your Cart is Empty</h1>
          <p className="font-body text-ocean/60 mb-8">Looks like you haven't added anything yet.</p>
          <Link href="/shop">
            <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold px-8 py-6 rounded-xl">
              Start Shopping <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-sand py-8">
        <div className="container">
          <h1 className="font-display font-bold text-3xl text-ocean">Shopping Cart ({itemCount})</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartProducts.map(({ product, item }) => (
                <motion.div
                  key={`${product.id}-${JSON.stringify(item.selectedVariants)}`}
                  layout
                  className="flex gap-4 md:gap-6 bg-card rounded-2xl p-4 md:p-5 border border-sand-dark/50"
                >
                  <Link href={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="font-display font-semibold text-ocean hover:text-sunset transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-xs text-ocean/50 font-body mt-1">
                      {Object.entries(item.selectedVariants).map(([k, v]) => `${k}: ${v}`).join(" / ")}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 bg-sand rounded-xl">
                        <button onClick={() => updateQuantity(product.id, item.selectedVariants, item.quantity - 1)} className="p-2 text-ocean/60 hover:text-ocean">
                          <Minus size={16} />
                        </button>
                        <span className="font-display font-semibold text-ocean w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(product.id, item.selectedVariants, item.quantity + 1)} className="p-2 text-ocean/60 hover:text-ocean">
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-display font-bold text-lg text-ocean">${(product.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeItem(product.id, item.selectedVariants)} className="p-2 text-ocean/30 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Upsells */}
              {upsells.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display font-bold text-lg text-ocean mb-4">You Might Also Like</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {upsells.map(p => (
                      <Link key={p.id} href={`/product/${p.slug}`} className="flex items-center gap-3 bg-card rounded-xl p-3 border border-sand-dark/50 hover:shadow-md transition-shadow">
                        <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                          <p className="font-display font-semibold text-sm text-ocean">{p.name}</p>
                          <p className="font-body text-xs text-ocean/60">${p.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-card rounded-2xl p-6 border border-sand-dark/50 sticky top-24">
                <h3 className="font-display font-bold text-xl text-ocean mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-ocean/60">Subtotal</span>
                    <span className="text-ocean font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-ocean/60">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? "text-green-600" : "text-ocean"}`}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {subtotal < freeShippingThreshold && (
                    <p className="text-xs text-sunset font-body">
                      Add ${(freeShippingThreshold - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t border-sand-dark pt-3 flex justify-between">
                    <span className="font-display font-bold text-ocean">Total</span>
                    <span className="font-display font-bold text-xl text-ocean">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold py-6 rounded-xl text-base mb-4">
                    Proceed to Checkout
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-4 text-xs text-ocean/40 font-body">
                  <div className="flex items-center gap-1"><ShieldCheck size={14} /> Secure Checkout</div>
                  <div className="flex items-center gap-1"><Truck size={14} /> Fast Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
