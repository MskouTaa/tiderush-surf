/*
 * TideRush Surf Co. — FAQ Page
 */
import { FAQ_DATA } from "@/lib/store";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <section className="bg-sand py-12 md:py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl text-ocean mb-3"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="font-body text-ocean/60 max-w-lg mx-auto">
            Everything you need to know about TideRush Surf Co. Can't find your answer? Contact us anytime.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-2xl border border-sand-dark/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-display font-semibold text-ocean text-left py-5 hover:no-underline hover:text-sunset transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-ocean/70 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-sand rounded-2xl p-8">
            <h3 className="font-display font-bold text-xl text-ocean mb-2">Still Have Questions?</h3>
            <p className="font-body text-ocean/60 mb-4">Our surf experts are here to help.</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-sunset hover:bg-sunset-light text-white font-display font-semibold rounded-xl transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
