import { Link } from "wouter";
import { GothicButton } from "@/components/GothicButton";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background flex-col p-4 relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-10" />
      <div className="vignette absolute inset-0 z-10" />
      
      <div className="relative z-20 text-center space-y-8 max-w-md border border-white/10 p-12 bg-black/50 backdrop-blur-sm">
        <div className="flex justify-center text-white/50">
          <Ghost className="w-16 h-16 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display text-white tracking-widest">
          404
        </h1>
        
        <p className="text-white/60 font-light leading-relaxed">
          You have wandered too far into the darkness. 
          There is nothing here but silence.
        </p>

        <Link href="/">
          <GothicButton variant="outline" className="mt-4">
            Turn Back
          </GothicButton>
        </Link>
      </div>
    </div>
  );
}
