import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plumbing Pricing — PipePro Solutions" },
      { name: "description", content: "Transparent, upfront pricing on all plumbing work across the UK. Flat rates, no hourly surprises." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pricing</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Simple, Honest Pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Pick a plan or get a custom quote in under 24 hours.
          </p>
        </div>
      </section>
      <Pricing showCta={false} />
      <FAQ />
      <CTABanner />
    </>
  );
}
