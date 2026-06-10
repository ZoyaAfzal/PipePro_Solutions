import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, User, ArrowLeft, Twitter, MessageCircle, Linkedin } from "lucide-react";
import { posts } from "@/lib/data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — PipePro Solutions` },
      { name: "description", content: loaderData?.post.excerpt },
      { property: "og:title", content: loaderData?.post.title },
      { property: "og:description", content: loaderData?.post.excerpt },
      { property: "og:image", content: loaderData?.post.image },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="text-primary mt-4 inline-block">Back to blog</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container mx-auto py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="text-primary mt-4 inline-block">Try again</button>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative h-[460px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex flex-col justify-end pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-3">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit">{post.category}</span>
          <h1 className="mt-4 font-outfit font-black text-3xl md:text-5xl text-white max-w-4xl leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            {post.body.map((para: string, i: number) => (
              <p key={i} className="text-lg text-foreground/85 leading-relaxed mb-6">{para}</p>
            ))}

            <div className="mt-10 pt-6 border-t border-border flex items-center gap-3">
              <span className="text-sm font-semibold">Share:</span>
              {[Twitter, MessageCircle, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-8">
            <div className="rounded-3xl bg-card border border-border p-6 sticky top-28">
              <h3 className="font-outfit font-bold text-lg mb-4">Related articles</h3>
              <ul className="space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to="/blog/$slug" params={{ slug: r.slug }} className="group flex gap-3">
                      <img src={r.image} alt={r.title} loading="lazy" className="h-16 w-16 rounded-lg object-cover shrink-0" />
                      <div>
                        <div className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">{r.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{r.date}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
