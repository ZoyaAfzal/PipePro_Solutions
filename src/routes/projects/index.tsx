import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Our Projects — PipePro Solutions" },
      { name: "description", content: "Recent plumbing projects across the UK - bathrooms, repairs, re-pipes and commercial work." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Recent Projects</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A snapshot of homes and businesses we've kept flowing across the UK.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                to="/projects/$id"
                params={{ id: p.id }}
                className="group block relative overflow-hidden rounded-3xl shadow-sm hover:shadow-brand transition-shadow"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{p.category}</span>
                    <h3 className="mt-3 font-outfit font-bold text-white text-xl leading-tight">{p.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View project <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
