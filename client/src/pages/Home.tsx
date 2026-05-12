/*
 * TideRush Surf Co. — Homepage
 * "Golden Swell" design: warm coastal luxury, photography-led, organic forms
 * Sections: Hero, Featured Products, Lifestyle Story, Best Sellers, Testimonials,
 * Newsletter, Social Proof, Summer Campaign, Instagram Gallery, Trust Badges
 */
import { Link } from "wouter";
import { Star, Truck, ShieldCheck, RotateCcw, Award, ArrowRight } from "lucide-react";
import { PRODUCTS, TESTIMONIALS, HERO_IMAGE, LIFESTYLE_IMAGE } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [nlEmail, setNlEmail] = useState("");
  const bestSellers = PRODUCTS.filter(p => p.badge === "Best Seller" || p.reviewCount > 100);
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Surfer riding a barrel wave at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/70 via-ocean/40 to-transparent" />
        <div className="relative h-full container flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="max-w-xl"
          >
            <span className="inline-block px-4 py-1.5 bg-sunset/90 text-white text-xs font-display font-semibold rounded-full mb-6 tracking-wide uppercase">
              Summer 2026 Collection
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4">
              Ride Every<br />Wave.
            </h1>
            <p className="font-body text-lg text-white/80 mb-8 max-w-md leading-relaxed">
              Premium surf gear crafted for those who live for the ocean. Discover our Summer 2026 collection — engineered for performance, designed for the lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-sunset/30 active:scale-[0.97] transition-transform">
                  Shop The Summer Surf Collection
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-display font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 80V60C360 20 720 80 1080 40C1260 20 1380 30 1440 40V80H0Z" fill="oklch(0.96 0.015 80)" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="py-8 border-b border-sand-dark">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: "Free Shipping", desc: "On orders over $100" },
              { icon: ShieldCheck, label: "Secure Checkout", desc: "SSL encrypted payments" },
              { icon: RotateCcw, label: "Easy Returns", desc: "30-day hassle-free" },
              { icon: Award, label: "Premium Quality", desc: "Built to perform" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-sunset" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-ocean">{item.label}</p>
                  <p className="font-body text-xs text-ocean/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em]"
            >
              New Arrivals
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-ocean mt-2"
            >
              Featured Surf Gear
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop">
              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white font-display font-semibold px-8 py-5 rounded-xl">
                View All Products
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LIFESTYLE STORYTELLING ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={LIFESTYLE_IMAGE}
            alt="Aerial view of surfers in turquoise water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean/60" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-display font-semibold text-sunset-light uppercase tracking-[0.2em]"
            >
              The TideRush Lifestyle
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-5xl text-white mt-3 mb-6 leading-tight"
            >
              Born on the Coast.<br />Built for the Wave.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-lg text-white/80 mb-8 leading-relaxed"
            >
              TideRush Surf Co. was founded by surfers who believe the best sessions happen when your gear disappears — when all you feel is the wave beneath you and the salt on your skin. Every product we make is designed to enhance your time in the water, not distract from it.
            </motion.p>
            <Link href="/about">
              <Button className="bg-white text-ocean hover:bg-sand font-display font-semibold px-8 py-6 rounded-xl">
                Read Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BEST SELLERS ─── */}
      <section className="py-20 bg-sand">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em]">
                Most Popular
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean mt-2">
                Best Sellers
              </h2>
            </div>
            <Link href="/shop">
              <span className="font-display font-semibold text-sm text-ocean hover:text-sunset transition-colors flex items-center gap-1">
                Shop All <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bestSellers.slice(0, 3).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUMMER CAMPAIGN BANNER ─── */}
      <section className="py-16 bg-ocean">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block px-3 py-1 bg-sunset text-white text-xs font-display font-semibold rounded-full mb-4">
                Limited Time
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
                Summer 2026 Surf Drop
              </h2>
              <p className="font-body text-white/70 max-w-md">
                Up to 25% off our entire Summer collection. Premium gear at unbeatable prices — gear up before the best waves hit.
              </p>
            </div>
            <Link href="/shop">
              <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold px-10 py-6 rounded-xl text-lg shadow-lg shadow-sunset/30 whitespace-nowrap">
                Shop the Drop
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em]">
              What Surfers Say
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean mt-2">
              Trusted by the Crew
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-2xl p-6 border border-sand-dark/50 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-body text-ocean/80 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-sm text-ocean">{t.author}</p>
                  <p className="font-body text-xs text-ocean/50">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / STATS ─── */}
      <section className="py-16 bg-sand">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Happy Surfers" },
              { value: "4.8", label: "Average Rating" },
              { value: "50+", label: "Countries Shipped" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-ocean">{stat.value}</p>
                <p className="font-body text-sm text-ocean/60 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM GALLERY ─── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-display font-semibold text-sunset uppercase tracking-[0.2em]">
              @TideRushSurf
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean mt-2">
              Follow the Lifestyle
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop",
            ].map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => toast("Feature coming soon")}
              >
                <img
                  src={url}
                  alt={`TideRush lifestyle ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER SECTION ─── */}
      <section className="py-20 bg-ocean">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
              Stay in the Lineup
            </h2>
            <p className="font-body text-white/70 mb-8">
              Subscribe for exclusive drops, surf tips, and 10% off your first order. Join 10,000+ surfers who never miss a swell.
            </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (nlEmail) {
                  toast.success("Welcome to the crew! Check your inbox for 10% off.");
                  setNlEmail("");
                }
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={nlEmail}
                onChange={e => setNlEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl font-body text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sunset/50"
              />
              <Button
                type="submit"
                className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold px-8 py-4 rounded-xl whitespace-nowrap"
              >
                Subscribe & Save 10%
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
