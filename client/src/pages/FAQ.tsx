import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is Nocturne?",
      a: "Nocturne is an invite-only digital collective for artists, developers, and thinkers who prefer the darkness. We build, we create, and we support one another in silence."
    },
    {
      q: "How do I join?",
      a: "Membership is by application or invitation only. Submit your details through the application form. If your values align with ours, the gatekeepers will reach out."
    },
    {
      q: "Is this a cult?",
      a: "We prefer the term 'aesthetic collective'. We share rituals and values, but our devotion is to creativity and atmosphere, not a deity."
    },
    {
      q: "What are the fees?",
      a: "There is no monetary cost to join. The cost is your time, your dedication, and your willingness to contribute to the void."
    },
    {
      q: "Can I leave?",
      a: "The door is always open. But those who leave rarely find the light satisfying again."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Particles />
      <Navigation />
      <div className="pt-20" />
      
      <main className="flex-1 pt-12 pb-20 px-6 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="block text-white/40 font-display text-sm tracking-[0.4em] uppercase mb-4">
            Knowledge
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white tracking-wide">
            Truths
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-white/10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                <AccordionTrigger className="text-white hover:text-white/80 font-display tracking-widest text-lg py-6 uppercase hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
