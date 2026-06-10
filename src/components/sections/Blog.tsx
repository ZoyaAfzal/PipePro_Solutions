import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/data";
import { Section, SectionHeader, fadeUp } from "./_shared";

export function Blog() {
  return (
    <Section className="bg-sky-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Insights"
          title="From The Workshop"
          subtitle="Practical advice from twenty years on the tools."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <motion.article
              key={p.slug}
              variants={fadeUp}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-brand transition-shadow flex"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="flex flex-col w-full"
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readTime}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="mt-3 font-outfit font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
