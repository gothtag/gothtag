import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, Instagram, Music } from "lucide-react";

const socialLinks = [
  {
    name: "Discord Server",
    description: "Join the cult. No verification needed.",
    url: "https://discord.gg/gothtag",
    icon: MessageCircle,
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/40",
  },
  {
    name: "Instagram",
    description: "Visual moments from the void.",
    url: "https://www.instagram.com/goth.tag/",
    icon: Instagram,
    gradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/40",
  },
  {
    name: "Linktr.ee",
    description: "All links in one place.",
    url: "https://Linktr.ee/gothtag",
    icon: ExternalLink,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/40",
  },
  {
    name: "TikTok",
    description: "Short rituals and moments.",
    url: "https://www.tiktok.com/@gothtag/",
    icon: Music,
    gradient: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/40",
  },
];

const creators = [
  {
    name: "levh (ev)",
    role: "Founder",
    avatar: "https://i.imgur.com/MICixot.jpeg",
  },
  {
    name: "purrw (ey)",
    role: "Co-Founder",
    avatar: "https://i.imgur.com/Yfp57Ae.jpeg",
  },
];

export default function Socials() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Particles />
      <Navigation />
      <div className="pt-20" />
      
      <main className="flex-1 pt-12 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="block text-white/40 font-display text-sm tracking-[0.4em] uppercase mb-4">
            Find Us
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white tracking-wide">
            Social Portals
          </h1>
          <p className="text-white/50 mt-6 text-lg font-light">
            Connect with us across the digital void.
          </p>
        </motion.div>

        {/* Social links grid - Linktr.ee style */}
        <div className="max-w-lg mx-auto space-y-4 mb-20">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`block group relative overflow-hidden border ${link.borderColor} bg-black/30 backdrop-blur-sm p-6 hover:bg-black/50 transition-all duration-300 cursor-pointer`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-display text-lg tracking-wide">{link.name}</h3>
                      <p className="text-white/50 text-sm font-light">{link.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Creators Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto border-t border-white/10 pt-20"
        >
          <div className="text-center mb-12">
            <span className="block text-white/40 font-display text-sm tracking-[0.4em] uppercase mb-4">
              The Architects
            </span>
            <h2 className="text-4xl font-display text-white tracking-wide">
              Our Creators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center space-y-4 border border-white/10 p-8 bg-black/30 backdrop-blur-sm"
              >
                <div className="w-24 h-24 rounded-full border-2 border-white/30 overflow-hidden flex-shrink-0">
                  <img 
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-display text-lg tracking-wide">{creator.name}</h3>
                  <p className="text-white/50 text-sm font-light">{creator.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-lg mx-auto text-center mt-20 border-t border-white/10 pt-12"
        >
          <p className="text-white/40 text-sm font-light leading-relaxed">
            All our networks are public. No verification required.
            <br />
            Enter freely and speak your truth.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
