import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { stats } from "@/lib/data";

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, value, { duration: 2.2, ease: "easeOut" });
    const unsub = mv.on("change", (v) => setVal(Math.floor(v)));
    return () => {
      ctrl.stop();
      unsub();
    };
  }, [inView, value, mv]);

  const display =
    value >= 1_000_000
      ? `${(val / 1_000_000).toFixed(val >= 1_000_000 ? 1 : 0)}M`
      : value >= 1000
        ? `${Math.floor(val / 1000)}K`
        : val.toString();

  return (
    <div ref={ref} className="font-outfit font-black text-5xl md:text-6xl text-white">
      {display}
      <span className="text-accent">{suffix}</span>
    </div>
  );
}

export function Stats() {
  // Pre-randomize floating droplet positions
  const drops = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 6,
    size: 6 + Math.random() * 10,
  }));

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      {/* Floating drops */}
      {drops.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <StatNumber value={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm uppercase tracking-wider text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
