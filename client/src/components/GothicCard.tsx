import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GothicCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GothicCard({ title, subtitle, children, className, delay = 0 }: GothicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-black border border-white/20 p-8 flex flex-col gap-4 group hover:border-white/60 transition-colors duration-500",
        className
      )}
    >
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40 group-hover:border-white transition-colors duration-500" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40 group-hover:border-white transition-colors duration-500" />
      
      {(title || subtitle) && (
        <div className="space-y-1 mb-2">
          {title && (
            <h3 className="font-display text-xl text-white tracking-widest group-hover:text-white/90">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-display text-xs text-white/40 tracking-[0.2em] uppercase">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="text-white/70 font-light leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
