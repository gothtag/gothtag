import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GothicButton } from "@/components/GothicButton";
import { Particles } from "@/components/Particles";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Flame, Moon, Scroll, Skull } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Particles />
      <Navigation />
      <div className="pt-20" />
      
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center py-20 px-6 min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center space-y-12 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="block text-white/40 font-display text-sm md:text-base tracking-[0.5em] uppercase mb-6">
              Welcome to the Void
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-display tracking-wide leading-tight">
              GOTHTAG
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/70 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-l border-r border-white/10 px-8 py-4"
          >
            A digital sanctuary for the shadowed, the forgotten, and the arcane. 
            We are a collective bound by silence and united in darkness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <Link href="/apply">
              <GothicButton variant="outline" className="text-lg px-10 py-6">
                Join the Cult
              </GothicButton>
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </section>

      {/* Features/Mood Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon={<Moon className="w-8 h-8" />}
            title="The Night"
            description="We thrive when the sun falls. Our events, rituals, and gatherings occur in the witching hour."
            delay={0.2}
          />
          <Feature 
            icon={<Skull className="w-8 h-8" />}
            title="The Silence"
            description="Respect the quiet. Our community values thoughtful discourse over meaningless noise."
            delay={0.4}
          />
          <Feature 
            icon={<Flame className="w-8 h-8" />}
            title="The Ritual"
            description="Tradition binds us. Participate in our weekly rites to ascend through the ranks."
            delay={0.6}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Feature({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center space-y-6 group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 group-hover:border-white/40 transition-colors duration-500 text-white/80">
        {icon}
      </div>
      <h3 className="text-2xl font-display text-white tracking-widest">{title}</h3>
      <p className="text-white/60 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
