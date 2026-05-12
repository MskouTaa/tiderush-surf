/*
 * TideRush Surf Co. — Shop Page
 * "Golden Swell" design: warm coastal luxury, product filtering, grid layout
 */
import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Surfboards", "Apparel", "Accessories", "Eyewear"];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function Shop() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];
    if (category !== "All") {
      result = result.filter(p => p.category === category);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => b.inventoryQty - a.inventoryQty); break;
    }
    return result;
  }, [category, sort, priceRange]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-sand py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em]">
              Summer 2026 Collection
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ocean mt-2 mb-3">
              Shop All Gear
            </h1>
            <p className="font-body text-ocean/60 max-w-lg mx-auto">
              Premium surf equipment and beach lifestyle essentials. Every piece designed for performance, built for the wave.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-display font-medium whitespace-nowrap transition-all ${
                    category === cat
                      ? "bg-ocean text-white"
                      : "bg-sand text-ocean hover:bg-sand-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-sand rounded-xl text-sm font-body text-ocean hover:bg-sand-dark transition-colors md:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="px-4 py-2 bg-sand rounded-xl text-sm font-body text-ocean focus:outline-none focus:ring-2 focus:ring-sunset/30"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="font-body text-sm text-ocean/50 mb-6">
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display font-semibold text-xl text-ocean mb-2">No products found</p>
              <p className="font-body text-ocean/60 mb-4">Try adjusting your filters</p>
              <button
                onClick={() => { setCategory("All"); setPriceRange([0, 1000]); }}
                className="text-sunset font-display font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
