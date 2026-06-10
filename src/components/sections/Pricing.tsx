import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader, fadeUp } from "./_shared";

export const plans = [
  {
    name: "Basic",
    price: 75,
    tagline: "For one-off repairs",
    features: [
      "Emergency call-out",
      "On-site diagnosis",
      "One repair included",
      "30-day part warranty",
    ],
  },
  {
    name: "Standard",
    price: 150,
    tagline: "Full home check-up",
    popular: true,
    features: [
      "Full property inspection",
      "Up to 3 repairs included",
      "6-month workmanship warranty",
      "Priority booking",
      "Photo report",
    ],
  },
  {
    name: "Premium",
    price: 350,
    tagline: "Annual peace of mind",
    features: [
      "Annual maintenance visit",
      "24/7 priority support",
      "All call-outs included",
      "2-year workmanship warranty",
      "Quarterly drain jet",
    ],
  },
];

export function Pricing({ showCta = true }: { showCta?: boolean }) {
  return (
    <Section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Honest, Upfront Pricing"
          subtitle="No hidden fees. No hourly surprises. Pick the plan that fits your home."
        />

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border bg-card p-7 flex flex-col ${
                p.popular
                  ? "border-primary shadow-brand md:scale-[1.04]"
                  : "border-border shadow-sm"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="font-outfit font-bold text-2xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              <div className="mt-6">
                <span className="font-outfit font-black text-4xl text-foreground">
                  £{p.price.toLocaleString()}
                </span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-7 ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <Link to="/contact">Choose {p.name}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {showCta && (
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">View Full Pricing</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
