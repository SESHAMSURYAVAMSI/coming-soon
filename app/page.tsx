"use client";

import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
      
      {/* Floating background circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Coming Soon 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8 opacity-90"
        >
          {/* Something amazing is on the way */}
        </motion.p>

        {/* Animated dots */}
        <motion.div
          className="flex justify-center gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                repeat: Infinity,
              },
            },
          }}
        >
          {[1, 2, 3].map((dot) => (
            <motion.span
              key={dot}
              className="w-3 h-3 bg-white rounded-full"
              variants={{
                hidden: { opacity: 0.3 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
