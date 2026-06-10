import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, ArrowDownCircle, Bath, Flame, GitBranch, Droplets, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Wrench, ArrowDownCircle, Bath, Flame, GitBranch, Droplets,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Plumbing Services across the UK — PipePro Solutions" },
      { name: "description", content: "Full range of residential and commercial plumbing services across the UK — repairs, drains, bathrooms, water heaters and more." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Services</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Everything Plumbing</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From a midnight pipe burst to a full bathroom renovation — one team, one number, every job warranted.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-brand transition-all hover:-translate-y-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-outfit font-semibold text-xl group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
