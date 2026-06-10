import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Section, SectionHeader, fadeUp } from "./_shared";

export function Projects() {
  const featured = projects.slice(0, 6);
  return (
    <Section id="projects" className="bg-sky-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Recent work"
          title="Projects We're Proud Of"
          subtitle="A small slice of the homes and businesses we've kept flowing this year."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
            >
              <Link
                to="/projects/$id"
                params={{ id: p.id }}
                className="group block relative overflow-hidden rounded-3xl bg-card shadow-sm hover:shadow-brand transition-shadow h-full min-h-[400px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div>
                    <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-outfit font-bold text-white text-lg md:text-xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">{p.result}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      View project <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/projects">View More Projects</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
