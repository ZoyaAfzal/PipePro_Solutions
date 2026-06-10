import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gradient-to-r from-primary via-primary to-navy">
        {/* diagonal accent */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-navy"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-accent">
                24/7 Available
              </span>
              <h2 className="mt-3 font-outfit font-bold text-3xl md:text-5xl text-white leading-tight">
                Emergency Plumbing? <br />
                We're On The Way.
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl">
                Call now and get a certified plumber at your door within hours,
                anywhere in the UK.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-semibold h-14 text-base"
              >
                <Link to="/contact">
                  Request Emergency Callback
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-foreground h-14 text-base"
              >
                <Link to="/contact">
                  Go to Contact Page
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
