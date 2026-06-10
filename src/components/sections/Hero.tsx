import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Star, ShieldCheck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    const unsub = mv.on("change", (v) => setVal(Math.floor(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, mv]);

  const formatted =
    to >= 1000 ? val.toLocaleString() : val.toString();
  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function Hero() {
  const heroStats = [
    { v: 500_000, s: "+", l: "Jobs Done" },
    { v: 99, s: "%", l: "Satisfaction" },
    { v: 24, s: "/7", l: "Emergency" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* decorative ripple */}
      <svg
        className="absolute -bottom-1 left-0 right-0 w-full h-16 text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M0,40 C320,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
          animate={{
            d: [
              "M0,40 C320,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z",
              "M0,30 C320,60 720,20 1080,50 C1260,70 1380,20 1440,35 L1440,80 L0,80 Z",
              "M0,40 C320,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              The UK's #1 Trusted Plumbers Since 2005
            </motion.span>

            <h1 className="mt-6 font-outfit font-black text-5xl md:text-7xl tracking-tight text-foreground leading-[0.95]">
              {["Expert", "Plumbing,"].map((w, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block text-gradient-brand"
              >
                Zero Leaks
              </motion.span>
              <br />
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                Guaranteed.
              </motion.span>
            </h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              From emergency repairs to full bathroom renovations, PipePro
              Solutions delivers fast, reliable plumbing that lasts. Licensed,
              insured, on call 24/7.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-brand font-semibold"
              >
                <Link to="/contact">
                  Book a Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <a href="#projects">
                  <Play className="mr-2 h-4 w-4" /> View Our Work
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md"
            >
              {heroStats.map((s) => (
                <div key={s.l}>
                  <div className="font-outfit text-3xl font-black text-foreground">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-brand"
            >
              <img
                src="https://images.pexels.com/photos/14598653/pexels-photo-14598653.jpeg?w=900"
                alt="Professional plumber working on pipework"
                loading="eager"
                className="w-full h-[440px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </motion.div>

            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-2 lg:right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="font-bold text-sm">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                2,400+ verified reviews
              </p>
              <span className="absolute -top-1 -right-1 inline-flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
            </motion.div>

            {/* Bottom-left card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-2 lg:left-6 bg-white rounded-2xl shadow-xl p-4 border border-border max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-bold text-sm">Licensed & Insured</div>
                  <div className="text-xs text-muted-foreground">
                    2-year workmanship warranty
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="hidden md:flex absolute top-1/2 -right-4 bg-navy text-white rounded-2xl shadow-xl p-3 items-center gap-2"
            >
              <Clock3 className="h-4 w-4 text-accent" />
              <div className="text-xs leading-tight">
                <div className="font-bold">90 min</div>
                <div className="text-white/70">avg response</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
