/*
 * TideRush Surf Co. — Product Detail Page
 * "Golden Swell" design: warm cream cards, soft shadows, full product info
 */
import { useParams, Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Star, Minus, Plus, ShieldCheck, Truck, RotateCcw, ChevronRight, Check } from "lucide-react";
import { getProduct, getCrossSells, type Product } from "@/lib/store";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const product = getProduct(params.slug || "");
  const { addItem } = useCart();

  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "features" | "reviews" | "care">("description");

  useEffect(() => {
    if (product) {
      const defaults: Record<string, string> = {};
      product.variants.forEach(v => { defaults[v.type] = v.options[0]; });
      setSelectedVariants(defaults);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-ocean mb-2">Product Not Found</h1>
          <Link href="/shop">
            <Button className="bg-sunset text-white font-display mt-4">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const crossSells = getCrossSells(product);
  const discount = Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);

  const handleAddToCart = () => {
    addItem(product.id, selectedVariants, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-sand py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-xs font-body text-ocean/50">
            <Link href="/" className="hover:text-ocean transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-ocean transition-colors">Shop</Link>
            <ChevronRight size={12} />
            <span className="text-ocean">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product section */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-sand sticky top-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-ocean text-white text-xs font-display font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="absolute top-4 right-4 px-4 py-1.5 bg-sunset text-white text-xs font-display font-semibold rounded-full">
                    Save {discount}%
                  </span>
                )}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em] mb-2">
                {product.category}
              </p>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-ocean mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-sand-dark"} />
                  ))}
                </div>
                <span className="font-body text-sm text-ocean/60">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display font-bold text-3xl text-ocean">${product.price.toFixed(2)}</span>
                {product.compareAtPrice > product.price && (
                  <span className="font-body text-lg text-ocean/40 line-through">${product.compareAtPrice.toFixed(2)}</span>
                )}
                {discount > 0 && (
                  <span className="px-3 py-1 bg-sunset/10 text-sunset text-sm font-display font-semibold rounded-full">
                    Save ${(product.compareAtPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="font-body text-ocean/70 leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Variants */}
              <div className="space-y-6 mb-8">
                {product.variants.map(variant => (
                  <div key={variant.type}>
                    <label className="font-display font-semibold text-sm text-ocean mb-3 block">
                      {variant.type}: <span className="text-ocean/60 font-normal">{selectedVariants[variant.type]}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {variant.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.type]: opt }))}
                          className={`px-4 py-2.5 rounded-xl text-sm font-body transition-all ${
                            selectedVariants[variant.type] === opt
                              ? "bg-ocean text-white shadow-md"
                              : "bg-sand text-ocean hover:bg-sand-dark border border-sand-dark"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3 bg-sand rounded-xl px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-ocean/60 hover:text-ocean transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-display font-semibold text-ocean w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-ocean/60 hover:text-ocean transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-sunset hover:bg-sunset-light text-white font-display font-semibold text-base py-6 rounded-xl shadow-lg shadow-sunset/20 active:scale-[0.97] transition-transform"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Truck, label: "Free Shipping", desc: "Over $100" },
                  { icon: ShieldCheck, label: "Secure Pay", desc: "SSL Encrypted" },
                  { icon: RotateCcw, label: "Easy Returns", desc: "30 Days" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 bg-sand rounded-xl">
                    <item.icon size={18} className="text-ocean/50 mx-auto mb-1" />
                    <p className="font-display text-xs font-semibold text-ocean">{item.label}</p>
                    <p className="font-body text-[10px] text-ocean/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* SKU & Tags */}
              <div className="text-xs font-body text-ocean/40 space-y-1 mb-6">
                <p>SKU: {product.sku}</p>
                <p>Tags: {product.tags.join(", ")}</p>
              </div>

              {/* Tabs */}
              <div className="border-t border-sand-dark pt-6">
                <div className="flex gap-1 mb-6 overflow-x-auto">
                  {(["description", "features", "reviews", "care"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-display font-medium capitalize whitespace-nowrap transition-all ${
                        activeTab === tab ? "bg-ocean text-white" : "text-ocean/60 hover:bg-sand"
                      }`}
                    >
                      {tab === "care" ? "Care Instructions" : tab}
                    </button>
                  ))}
                </div>

                {activeTab === "description" && (
                  <div className="font-body text-ocean/70 leading-relaxed space-y-4">
                    <p>{product.description}</p>
                    <div>
                      <h4 className="font-display font-semibold text-ocean mb-2">Materials</h4>
                      <p>{product.materials}</p>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-ocean mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={16} className="text-sunset mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "features" && (
                  <ul className="space-y-3">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-ocean/70">
                        <Check size={16} className="text-sunset mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    {product.reviews.map((r, i) => (
                      <div key={i} className="bg-sand rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={12} className={j < r.rating ? "fill-amber-400 text-amber-400" : "text-sand-dark"} />
                            ))}
                          </div>
                          <span className="font-display font-semibold text-sm text-ocean">{r.author}</span>
                          <span className="text-xs text-ocean/40 font-body">{r.date}</span>
                        </div>
                        <p className="font-body text-sm text-ocean/70">{r.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "care" && (
                  <ul className="space-y-3">
                    {product.careInstructions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-ocean/70">
                        <span className="w-5 h-5 rounded-full bg-sunset/10 text-sunset text-xs flex items-center justify-center shrink-0 font-semibold">{i + 1}</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-sells */}
      {crossSells.length > 0 && (
        <section className="py-16 bg-sand">
          <div className="container">
            <h2 className="font-display font-bold text-2xl text-ocean mb-8">Complete Your Setup</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {crossSells.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
