/*
 * TideRush Surf Co. — Product Card
 * "Golden Swell" design: warm cream cards, soft shadows, organic rounded forms
 */
import { Link } from "wouter";
import { Star, ShoppingBag } from "lucide-react";
import { type Product } from "@/lib/store";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const discount = Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariants: Record<string, string> = {};
    product.variants.forEach(v => {
      defaultVariants[v.type] = v.options[0];
    });
    addItem(product.id, defaultVariants);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <Link href={`/product/${product.slug}`} className="group block">
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-sand-dark/50">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-sand">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badge && (
                <span className="px-3 py-1 bg-ocean text-white text-xs font-display font-semibold rounded-full">
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 bg-sunset text-white text-xs font-display font-semibold rounded-full">
                  -{discount}%
                </span>
              )}
            </div>
            {/* Quick add */}
            <button
              onClick={handleQuickAdd}
              className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-ocean hover:bg-sunset hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-md active:scale-95"
              aria-label="Quick add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-xs text-ocean/50 font-body uppercase tracking-wide mb-1">{product.category}</p>
            <h3 className="font-display font-semibold text-ocean text-base mb-2 group-hover:text-sunset transition-colors">
              {product.name}
            </h3>
            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-sand-dark"}
                  />
                ))}
              </div>
              <span className="text-xs text-ocean/50 font-body">({product.reviewCount})</span>
            </div>
            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-ocean">${product.price.toFixed(2)}</span>
              {product.compareAtPrice > product.price && (
                <span className="font-body text-sm text-ocean/40 line-through">${product.compareAtPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
