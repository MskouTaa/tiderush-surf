/*
 * TideRush Surf Co. — Cart Drawer
 * Slide-out cart panel with upsells and checkout
 */
import { Link } from "wouter";
import { X, Plus, Minus, Trash2, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, getCartProducts, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart();
  const cartProducts = getCartProducts();
  const freeShippingThreshold = 100;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  // Upsell: suggest a product not in cart
  const cartIds = cartProducts.map(cp => cp.product.id);
  const upsellProduct = PRODUCTS.find(p => !cartIds.includes(p.id));

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ocean/30 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-sand-dark">
              <h2 className="font-display font-bold text-xl text-ocean">Your Cart ({itemCount})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-1 text-ocean/60 hover:text-ocean transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Free shipping progress */}
            {subtotal > 0 && (
              <div className="px-5 pt-4">
                {remaining > 0 ? (
                  <p className="text-sm font-body text-ocean/70 mb-2">
                    Add <span className="font-semibold text-sunset">${remaining.toFixed(2)}</span> more for free shipping!
                  </p>
                ) : (
                  <p className="text-sm font-body text-green-700 font-semibold mb-2 flex items-center gap-1">
                    <Truck size={16} /> You've unlocked free shipping!
                  </p>
                )}
                <div className="w-full h-2 bg-sand rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sunset rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-sand flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-ocean/30" />
                  </div>
                  <p className="font-display font-semibold text-lg text-ocean mb-1">Your cart is empty</p>
                  <p className="text-sm text-ocean/60 font-body mb-6">Discover our premium surf gear</p>
                  <Link href="/shop" onClick={() => setIsCartOpen(false)}>
                    <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold">
                      Shop Now
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  {cartProducts.map(({ product, item }) => (
                    <div key={`${product.id}-${JSON.stringify(item.selectedVariants)}`} className="flex gap-4 bg-warm-white rounded-xl p-3">
                      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-sm text-ocean truncate">{product.name}</h3>
                        <div className="text-xs text-ocean/50 font-body mt-0.5">
                          {Object.entries(item.selectedVariants).map(([k, v]) => `${k}: ${v}`).join(" / ")}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-sand rounded-lg">
                            <button
                              onClick={() => updateQuantity(product.id, item.selectedVariants, item.quantity - 1)}
                              className="p-1.5 text-ocean/60 hover:text-ocean transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-semibold text-ocean w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, item.selectedVariants, item.quantity + 1)}
                              className="p-1.5 text-ocean/60 hover:text-ocean transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display font-bold text-sm text-ocean">
                              ${(product.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(product.id, item.selectedVariants)}
                              className="p-1 text-ocean/30 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Upsell */}
                  {upsellProduct && (
                    <div className="mt-4 p-4 bg-sunset/5 border border-sunset/20 rounded-xl">
                      <p className="text-xs font-semibold text-sunset uppercase tracking-wide mb-2">Complete Your Kit</p>
                      <div className="flex items-center gap-3">
                        <img src={upsellProduct.image} alt={upsellProduct.name} className="w-14 h-14 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="font-display font-semibold text-sm text-ocean">{upsellProduct.name}</p>
                          <p className="text-xs text-ocean/60">${upsellProduct.price.toFixed(2)}</p>
                        </div>
                        <Link href={`/product/${upsellProduct.slug}`} onClick={() => setIsCartOpen(false)}>
                          <Button size="sm" variant="outline" className="text-xs border-sunset text-sunset hover:bg-sunset hover:text-white">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            {cartProducts.length > 0 && (
              <div className="border-t border-sand-dark p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-ocean/70">Subtotal</span>
                  <span className="font-display font-bold text-xl text-ocean">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ocean/50 font-body">Shipping and taxes calculated at checkout</p>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold text-base py-6 rounded-xl">
                    Proceed to Checkout
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-ocean/50">
                  <ShieldCheck size={14} />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ShoppingBag({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
