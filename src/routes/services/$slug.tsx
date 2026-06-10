import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title ?? "Service"} — PipePro Solutions` },
      { name: "description", content: loaderData?.service.description },
      { property: "og:title", content: loaderData?.service.title },
      { property: "og:description", content: loaderData?.service.description },
      { property: "og:image", content: loaderData?.service.image },
    ],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="text-primary mt-4 inline-block">Back to services</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="text-primary mt-4 inline-block">Try again</button>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[420px] overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex flex-col justify-end pb-12">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link> /{" "}
            <Link to="/services" className="hover:text-white">Services</Link> /{" "}
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="font-outfit font-black text-4xl md:text-6xl text-white max-w-3xl">{service.title}</h1>
          <p className="mt-3 text-white/80 max-w-2xl text-lg">{service.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-outfit font-bold text-3xl mb-4">About this service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{service.details}</p>

              <h3 className="font-outfit font-semibold text-2xl mt-12 mb-4">What's included</h3>
              <ul className="space-y-3">
                {service.included.map((item: string, i: number) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-3xl bg-navy text-white p-8 sticky top-28">
              <h3 className="font-outfit font-bold text-2xl">Book this service</h3>
              <p className="mt-2 text-white/70 text-sm">Free quote, same-day availability in most areas.</p>
              <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/contact">Get a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="mt-6 pt-6 border-t border-white/10 text-sm">
                <div className="text-white/60">24/7 Emergency</div>
                <Link to="/contact" className="font-bold text-lg hover:text-accent transition-colors">Request emergency callback</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sky-soft py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-outfit font-bold text-3xl mb-8">Related services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-brand transition-shadow"
              >
                <div className="h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-outfit font-semibold text-lg group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
