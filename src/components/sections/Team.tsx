import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/data";
import { Section, SectionHeader, fadeUp } from "./_shared";

export function Team() {
  return (
    <Section className="bg-sky-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="The crew"
          title="Meet The Team"
          subtitle="Real people, fully licensed, on your job from day one to handover."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm flex flex-col"
            >
              <div className="relative h-72 overflow-hidden shrink-0">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  {m.experience}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-outfit font-semibold text-lg">{m.name}</h3>
                <p className="text-sm text-primary font-medium">{m.role}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/about">Meet the Full Team</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
