import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — PipePro Solutions` },
      { name: "description", content: loaderData?.project.result },
      { property: "og:title", content: loaderData?.project.title },
      { property: "og:description", content: loaderData?.project.result },
      { property: "og:image", content: loaderData?.project.image },
    ],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <Link to="/projects" className="text-primary mt-4 inline-block">Back to projects</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="text-primary mt-4 inline-block">Try again</button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex flex-col justify-end pb-14">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">{project.category}</span>
          <h1 className="mt-4 font-outfit font-black text-4xl md:text-6xl text-white max-w-4xl">{project.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {[
              { label: "Challenge", content: project.challenge },
              { label: "Solution", content: project.solution },
              { label: "Result", content: project.result },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="font-outfit font-bold text-2xl text-primary mb-3">{s.label}</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <aside>
            <div className="rounded-3xl bg-card border border-border p-6 sticky top-28">
              <h3 className="font-outfit font-bold text-xl mb-5">Project details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <User className="h-4 w-4 text-primary mt-0.5" />
                  <div><div className="text-muted-foreground">Client</div><div className="font-semibold">{project.client}</div></div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <div><div className="text-muted-foreground">Location</div><div className="font-semibold">{project.location}</div></div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  <div><div className="text-muted-foreground">Duration</div><div className="font-semibold">{project.duration}</div></div>
                </li>
                <li className="flex items-start gap-3">
                  <Tag className="h-4 w-4 text-primary mt-0.5" />
                  <div><div className="text-muted-foreground">Category</div><div className="font-semibold">{project.category}</div></div>
                </li>
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Start your project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sky-soft py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-outfit font-bold text-3xl mb-8">Related projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/projects/$id"
                params={{ id: p.id }}
                className="group block relative overflow-hidden rounded-3xl shadow-sm hover:shadow-brand transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-outfit font-semibold text-white">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
