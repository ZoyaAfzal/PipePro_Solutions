import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PipePro Solutions — The UK's #1 Trusted Plumbers" },
      {
        name: "description",
        content:
          "24/7 emergency plumbing, bathroom renovations, drain cleaning and water heater service across the UK. Licensed, insured, and guaranteed.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ limit={5} />
      <Blog />
      <CTABanner />
    </>
  );
}
