import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GothicCard } from "@/components/GothicCard";
import { Scroll, Users, Crown, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Community() {
  const tenets = [
    { title: "I. Silence", desc: "Speak only when your words improve upon the silence." },
    { title: "II. Shadows", desc: "Do not seek the spotlight. The collective is greater than the individual." },
    { title: "III. Secrets", desc: "What happens in the crypt stays in the crypt." },
    { title: "IV. Solitude", desc: "Respect the boundaries of others. We are alone, together." },
    { title: "V. Sacrifice", desc: "Give freely of your knowledge and your time." },
    { title: "VI. Spirit", desc: "Honor the aesthetic. Maintain the atmosphere at all costs." },
  ];

  const roles = [
    { title: "Elder", icon: <Crown className="w-5 h-5" />, desc: "Keepers of the ancient laws." },
    { title: "Seer", icon: <Eye className="w-5 h-5" />, desc: "Those who guide the lost." },
    { title: "Acolyte", icon: <Scroll className="w-5 h-5" />, desc: "Learners of the dark arts." },
    { title: "Wraith", icon: <Users className="w-5 h-5" />, desc: "The silent majority." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="pt-20" />
      
      <main className="flex-1 pt-12 pb-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="block text-white/40 font-display text-sm tracking-[0.4em] uppercase mb-4">
            Our Covenant
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white tracking-wide">
            The Coven
          </h1>
        </motion.div>

        {/* Tenets Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px bg-white/20 w-12" />
            <h2 className="text-2xl font-display tracking-widest text-white">The Tenets</h2>
            <div className="h-px bg-white/20 w-12" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenets.map((tenet, i) => (
              <GothicCard 
                key={i} 
                title={tenet.title} 
                className="text-center h-full items-center justify-center border-white/10 bg-white/[0.02]"
                delay={i * 0.1}
              >
                {tenet.desc}
              </GothicCard>
            ))}
          </div>
        </div>

        {/* Roles Section */}
        <div>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px bg-white/20 w-12" />
            <h2 className="text-2xl font-display tracking-widest text-white">Hierarchy</h2>
            <div className="h-px bg-white/20 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 hover:border-white/40 transition-all duration-300 text-center group bg-black"
              >
                <div className="flex justify-center mb-4 text-white/50 group-hover:text-white transition-colors">
                  {role.icon}
                </div>
                <h3 className="font-display text-lg tracking-widest text-white mb-2">{role.title}</h3>
                <p className="text-sm text-white/50 font-light">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
