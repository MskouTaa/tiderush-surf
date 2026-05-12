/*
 * TideRush Surf Co. — Footer
 * "Golden Swell" design: warm coastal luxury, wave divider, comprehensive links
 */
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the TideRush crew! Check your inbox for 10% off.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-ocean text-white/90">
      {/* Wave divider */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 80V40C240 80 480 0 720 20C960 40 1200 80 1440 40V80H0Z" fill="oklch(0.35 0.08 250)" />
        </svg>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">TideRush</h3>
            <p className="font-display text-xs text-white/50 tracking-[0.2em] uppercase mb-4">Surf Co.</p>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Premium surf gear and beach lifestyle essentials for those who live to ride every wave. Born on the California coast, built for surfers everywhere.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" onClick={e => { e.preventDefault(); toast("Feature coming soon"); }} className="text-white/40 hover:text-sunset transition-colors"><Instagram size={20} /></a>
              <a href="#" onClick={e => { e.preventDefault(); toast("Feature coming soon"); }} className="text-white/40 hover:text-sunset transition-colors"><Facebook size={20} /></a>
              <a href="#" onClick={e => { e.preventDefault(); toast("Feature coming soon"); }} className="text-white/40 hover:text-sunset transition-colors"><Youtube size={20} /></a>
              <a href="#" onClick={e => { e.preventDefault(); toast("Feature coming soon"); }} className="text-white/40 hover:text-sunset transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Shop</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">All Products</Link>
              <Link href="/shop?category=Surfboards" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Surfboards</Link>
              <Link href="/shop?category=Apparel" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Apparel</Link>
              <Link href="/shop?category=Accessories" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Accessories</Link>
              <Link href="/shop?category=Eyewear" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Eyewear</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">About Us</Link>
              <Link href="/contact" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Contact</Link>
              <Link href="/faq" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">FAQ</Link>
              <Link href="/shipping" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Shipping Policy</Link>
              <Link href="/returns" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Returns & Refunds</Link>
              <Link href="/privacy" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block font-body text-sm text-white/60 hover:text-sunset transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Stay in the Lineup</h4>
            <p className="font-body text-sm text-white/60 mb-4">
              Join 10,000+ surfers. Get exclusive drops, surf tips, and 10% off your first order.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sunset/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-sunset hover:bg-sunset-light text-white font-display font-semibold text-sm rounded-xl transition-colors"
              >
                Subscribe & Save 10%
              </button>
            </form>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
                Visa
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="12" r="7"/><circle cx="15" cy="12" r="7"/></svg>
                Mastercard
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M2 12h20"/></svg>
                PayPal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; 2026 TideRush Surf Co. All rights reserved. Ride Every Wave.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/shipping" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
