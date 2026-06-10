import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/lib/data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Blog & Tips — PipePro Solutions" },
      { name: "description", content: "Practical plumbing advice from twenty years on the tools — maintenance tips, buying guides and emergency know-how." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">From the workshop</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Plumbing Insights</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stories, tips and how-tos from our team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-brand transition-shadow"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="h-52 overflow-hidden relative">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-outfit font-semibold text-lg leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
