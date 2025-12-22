import { Skull } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Skull className="w-5 h-5 text-white/50" />
          <span className="font-display text-xs tracking-[0.25em] text-white/50 uppercase">
            Est. MMXXIV
          </span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="font-display text-xs tracking-[0.2em] text-white/30 hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="font-display text-xs tracking-[0.2em] text-white/30 hover:text-white transition-colors">
            Discord
          </a>
          <a href="#" className="font-display text-xs tracking-[0.2em] text-white/30 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
