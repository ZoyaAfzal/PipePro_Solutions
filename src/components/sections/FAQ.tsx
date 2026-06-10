import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";
import { Section, SectionHeader, fadeUp } from "./_shared";

export function FAQ({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <Section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, Answered"
          subtitle="The things customers ask us most — straight answers, no fluff."
        />

        <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-outfit font-semibold text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {limit && (
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/faq">See All Questions</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
