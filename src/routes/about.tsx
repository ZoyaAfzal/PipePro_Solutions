import { createFileRoute } from "@tanstack/react-router";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PipePro Solutions — The UK's Trusted Plumbers" },
      { name: "description", content: "Twenty years of clean, code-compliant plumbing work across the UK. Meet the team behind PipePro Solutions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About us</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Built on Trust, Run by Tradespeople</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            PipePro Solutions started in 2005 with one van, one master plumber and a simple rule:
            quote honestly, work cleanly and stand behind every joint. Two decades later, that rule
            still runs the company - we're now 30+ technicians strong, serving homes and businesses
            across the UK 24 hours a day.
          </p>
        </div>
      </section>
      <WhyUs />
      <Stats />
      <Team />
    </>
  );
}
