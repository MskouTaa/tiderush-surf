/*
 * TideRush Surf Co. — Navbar
 * "Golden Swell" design: warm coastal luxury, Outfit display font, organic forms
 * Sticky navigation with search, cart drawer, and mobile menu
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, Menu, X, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount, setIsCartOpen } = useCart();
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Promo banner */}
      <div className="bg-ocean text-white text-center py-2 px-4 text-sm font-body tracking-wide">
        <span className="font-semibold">Summer 2026 Surf Drop</span> — Free shipping on orders over $100
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md"
            : "bg-cream"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2 text-ocean hover:text-sunset transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl lg:text-2xl text-ocean tracking-tight">
                TideRush
              </span>
              <span className="font-display text-[10px] lg:text-xs text-ocean/60 tracking-[0.2em] uppercase">
                Surf Co.
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors hover:text-sunset relative ${
                  location === link.href ? "text-sunset" : "text-ocean"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sunset rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-ocean hover:text-sunset transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-ocean hover:text-sunset transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-sunset text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </nav>

        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-cream border-t border-sand-dark shadow-lg z-50"
            >
              <div className="container py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean/40" size={20} />
                  <input
                    type="text"
                    placeholder="Search surfboards, apparel, accessories..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full pl-12 pr-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30"
                  />
                </div>
                {filteredProducts.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {filteredProducts.map(p => (
                      <Link
                        key={p.id}
                        href={`/product/${p.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-sand transition-colors"
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      >
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="font-display font-semibold text-sm text-ocean">{p.name}</p>
                          <p className="text-xs text-ocean/60">${p.price.toFixed(2)}</p>
                        </div>
                        <ChevronRight size={16} className="text-ocean/30" />
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery.trim() && filteredProducts.length === 0 && (
                  <p className="mt-3 text-sm text-ocean/50 font-body">No products found for "{searchQuery}"</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ocean/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-bold text-xl text-ocean">TideRush</span>
                  <button onClick={() => setMobileOpen(false)} className="p-1 text-ocean/60">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-1">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl font-body font-medium transition-colors ${
                        location === link.href
                          ? "bg-sunset/10 text-sunset"
                          : "text-ocean hover:bg-sand"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-sand-dark space-y-1">
                  <Link href="/shipping" className="block px-4 py-2 text-sm text-ocean/70 hover:text-ocean font-body">Shipping Policy</Link>
                  <Link href="/returns" className="block px-4 py-2 text-sm text-ocean/70 hover:text-ocean font-body">Returns & Refunds</Link>
                  <Link href="/privacy" className="block px-4 py-2 text-sm text-ocean/70 hover:text-ocean font-body">Privacy Policy</Link>
                  <Link href="/terms" className="block px-4 py-2 text-sm text-ocean/70 hover:text-ocean font-body">Terms of Service</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
