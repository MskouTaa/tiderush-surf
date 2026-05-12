/*
 * TideRush Surf Co. — Newsletter Popup
 * Shows after 5 seconds on first visit
 */
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const dismissed = localStorage.getItem("tiderush-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're in! Check your inbox for 10% off your first order.");
      localStorage.setItem("tiderush-popup-dismissed", "true");
      setShow(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem("tiderush-popup-dismissed", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ocean/40 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-cream rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-ocean/40 hover:text-ocean transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-sunset/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏄</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-ocean mb-2">
                Join the TideRush Crew
              </h3>
              <p className="font-body text-sm text-ocean/60 mb-6">
                Get 10% off your first order plus exclusive access to new drops, surf tips, and member-only deals.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30 text-center"
                />
                <Button
                  type="submit"
                  className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold py-6 rounded-xl text-base"
                >
                  Get 10% Off
                </Button>
              </form>
              <button
                onClick={handleClose}
                className="mt-3 text-xs text-ocean/40 hover:text-ocean/60 font-body transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
