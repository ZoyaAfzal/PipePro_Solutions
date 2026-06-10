import { motion } from "framer-motion";
import { Phone, Search, FileText, CheckCircle, type LucideIcon } from "lucide-react";
import { Section, SectionHeader, fadeUp } from "./_shared";

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Phone, title: "Book Online or Call", desc: "Tell us what's wrong in 60 seconds." },
  { icon: Search, title: "We Diagnose the Problem", desc: "On-site inspection with proper tools." },
  { icon: FileText, title: "Get a Free Quote", desc: "Flat rate, approved before work starts." },
  { icon: CheckCircle, title: "Job Done, Guaranteed", desc: "Cleaned up and warranted for 2 years." },
];

export function HowItWorks() {
  return (
    <Section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Four Simple Steps"
          subtitle="From your first call to a job done right — no surprises along the way."
        />

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <svg
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 pointer-events-none"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="oklch(0.685 0.155 235)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="relative text-center"
              >
                <div className="relative mx-auto h-20 w-20 mb-5">
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    initial={{ rotate: -90, pathLength: 0 }}
                    whileInView={{ rotate: 270 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-xs font-black flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-outfit font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
