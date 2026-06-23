import { motion } from "framer-motion";

export default function TradingAnimation() {
  // Generate random data points for a simple bar/line chart feel
  const bars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 20,
  }));

  return (
    <div className="relative w-full h-64 bg-surface rounded-xl border border-gray-800 p-4 overflow-hidden flex items-end space-x-2">
      {/* Background grid lines */}
      <div className="absolute inset-0 grid grid-rows-4 gap-0 pointer-events-none opacity-10">
        <div className="border-b border-white"></div>
        <div className="border-b border-white"></div>
        <div className="border-b border-white"></div>
        <div className="border-b border-white"></div>
      </div>

      {bars.map((bar, i) => (
        <motion.div
          key={bar.id}
          className="w-full bg-primary rounded-t-sm"
          initial={{ height: "0%" }}
          animate={{
            height: [`${bar.height}%`, `${bar.height + (Math.random() * 20 - 10)}%`, `${bar.height}%`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          style={{
            background: bar.height > 50 ? "linear-gradient(180deg, #10b981 0%, #059669 100%)" : "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)",
          }}
        />
      ))}
      
      {/* Floating indicators */}
      <motion.div 
        className="absolute top-4 right-4 bg-gray-900 px-3 py-1 text-primary font-mono text-sm rounded-full border border-primary/30"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ● LIVE BTC/USD
      </motion.div>
    </div>
  );
}
