import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Wrench,
  ArrowDownCircle,
  Bath,
  Flame,
  GitBranch,
  Droplets,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { Section, SectionHeader, fadeUp } from "./_shared";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  ArrowDownCircle,
  Bath,
  Flame,
  GitBranch,
  Droplets,
};

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Our Best Services"
          subtitle="Reliable, efficient, and tailored to your needs, every job backed by our 2-year workmanship warranty."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <motion.div key={s.slug} variants={fadeUp} className="flex">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-2 flex flex-col w-full"
                >
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="font-outfit font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
