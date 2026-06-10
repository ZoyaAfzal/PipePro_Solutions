import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, fadeUp, scaleIn } from "./_shared";

const features = [
  "Licensed & Insured Professionals",
  "Same-Day Emergency Response",
  "Upfront Transparent Pricing",
  "2-Year Workmanship Warranty",
  "Eco-Friendly Materials Used",
  "24/7 Customer Support",
];

export function WhyUs() {
  return (
    <Section className="bg-sky-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={fadeUp} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=900"
                alt="Plumbing professionals on site"
                loading="lazy"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <motion.div
              variants={scaleIn}
              className="absolute -top-6 -right-4 lg:right-6 bg-white rounded-2xl shadow-xl p-5 border border-border"
            >
              <div className="font-outfit font-black text-4xl text-primary">500K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Jobs Completed
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="absolute -bottom-6 -left-4 lg:left-6 bg-navy text-white rounded-2xl shadow-xl p-5"
            >
              <div className="font-outfit font-black text-4xl text-accent">99.5%</div>
              <div className="text-xs text-white/70 uppercase tracking-wider mt-1">
                Customer Satisfaction
              </div>
            </motion.div>
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="Why choose us"
              title="Plumbing You Can Actually Trust"
              subtitle="Twenty years of clean, code-compliant work behind every pipe we touch."
              align="left"
            />
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-xl bg-white border border-border px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
