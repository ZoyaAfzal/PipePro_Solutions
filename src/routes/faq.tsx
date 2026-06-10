import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — PipePro Solutions" },
      { name: "description", content: "Answers to common plumbing questions about emergency service, warranties, pricing and coverage areas across the UK." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Help center</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Frequently Asked Questions</h1>
        </div>
      </section>
      <FAQ />
      <CTABanner />
    </>
  );
}
