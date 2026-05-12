/*
 * TideRush Surf Co. — About Page
 * "Golden Swell" design: warm coastal luxury, storytelling, lifestyle imagery
 */
import { Link } from "wouter";
import { LIFESTYLE_IMAGE } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={LIFESTYLE_IMAGE} alt="Aerial beach view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/60" />
        </div>
        <div className="relative container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-6xl text-white mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-white/80 max-w-xl mx-auto"
          >
            Born from a love of the ocean and a passion for performance. This is TideRush.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 font-body text-ocean/70 leading-relaxed text-lg"
            >
              <p>
                <span className="font-display font-bold text-ocean text-2xl">TideRush Surf Co.</span> was born on the sun-soaked shores of Southern California in 2024, founded by a crew of lifelong surfers who were tired of choosing between performance and style.
              </p>
              <p>
                We believe the best surf gear should disappear when you're in the water — all you should feel is the wave beneath your feet and the salt on your skin. That's why every product we create is obsessively engineered for performance while looking good enough to wear from the beach to the boardwalk.
              </p>
              <p>
                Our team includes former competitive surfers, materials engineers, and designers who share one thing in common: an unshakeable love for the ocean. We test every product in real conditions — from the mellow point breaks of Malibu to the heavy shore breaks of the North Shore.
              </p>
              <p>
                Sustainability isn't a marketing buzzword for us — it's a responsibility. We use recycled materials wherever possible, minimize packaging waste, and partner with ocean conservation organizations to protect the waves we ride.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-sand">
        <div className="container">
          <h2 className="font-display font-bold text-3xl text-ocean text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance First",
                desc: "Every product is tested in real surf conditions. If it doesn't perform in overhead waves, it doesn't ship.",
                icon: "🏄",
              },
              {
                title: "Ocean Stewardship",
                desc: "We use recycled materials, minimize waste, and donate 1% of revenue to ocean conservation.",
                icon: "🌊",
              },
              {
                title: "Community Driven",
                desc: "We're built by surfers, for surfers. Our community shapes every product we make.",
                icon: "🤙",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center border border-sand-dark/50"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl text-ocean mb-3">{value.title}</h3>
                <p className="font-body text-ocean/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl text-ocean mb-4">Ready to Ride?</h2>
          <p className="font-body text-ocean/60 mb-8 max-w-md mx-auto">
            Explore our Summer 2026 collection and find the gear that matches your wave.
          </p>
          <Link href="/shop">
            <Button className="bg-sunset hover:bg-sunset-light text-white font-display font-semibold px-8 py-6 rounded-xl text-base">
              Shop the Collection <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
