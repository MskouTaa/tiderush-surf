/*
 * TideRush Surf Co. — Contact Page
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-sand py-12 md:py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl text-ocean mb-3"
          >
            Get in Touch
          </motion.h1>
          <p className="font-body text-ocean/60 max-w-lg mx-auto">
            Have a question about our products, need sizing help, or just want to talk surf? We're here for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-ocean mb-6">Contact Info</h2>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@tiderush.com" },
                    { icon: Phone, label: "Phone", value: "+1 (858) 555-SURF" },
                    { icon: MapPin, label: "HQ", value: "Encinitas, California" },
                    { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm PST" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-sunset" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm text-ocean">{item.label}</p>
                        <p className="font-body text-sm text-ocean/60">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sand rounded-2xl p-6">
                <h3 className="font-display font-semibold text-ocean mb-2">Need Quick Help?</h3>
                <p className="font-body text-sm text-ocean/60 mb-3">
                  Check our FAQ page for instant answers to common questions about shipping, returns, and sizing.
                </p>
                <a href="/faq" className="text-sunset font-display font-semibold text-sm hover:underline">
                  Visit FAQ →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-sand-dark/50 shadow-sm space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-display text-sm font-semibold text-ocean mb-2 block">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-display text-sm font-semibold text-ocean mb-2 block">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold text-ocean mb-2 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-sand rounded-xl font-body text-ocean placeholder:text-ocean/40 focus:outline-none focus:ring-2 focus:ring-sunset/30 resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sunset hover:bg-sunset-light text-white font-display font-semibold py-6 rounded-xl text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
