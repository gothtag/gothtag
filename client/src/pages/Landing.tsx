import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function Landing() {
  const [clicked, setClicked] = useState(false);
  const [, navigate] = useLocation();

  const handleClick = () => {
    setClicked(true);
    // Small delay to let animation play
    setTimeout(() => {
      navigate('/home');
    }, 300);
  };

  if (clicked) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center cursor-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        {/* GOTHTAG Title with glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <h1 className="text-8xl md:text-9xl font-display text-white tracking-widest drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            GOTHTAG
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-display text-white tracking-widest blur-2xl opacity-40">
            GOTHTAG
          </div>
        </motion.div>

        {/* Click here with blinking glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-12"
        >
          <button
            onClick={handleClick}
            className="relative group"
          >
            <motion.div
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,1)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl md:text-2xl font-display text-white tracking-widest uppercase"
            >
              Click Here
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
