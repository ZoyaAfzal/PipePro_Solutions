import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PipePro Solutions — Book a Plumber in the UK" },
      { name: "description", content: "Book a plumber, request a quote or call our 24/7 emergency line. Serving all major UK neighbourhoods." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received — we'll call you back within 30 minutes.");
    }, 800);
  }

  return (
    <>
      <section className="bg-gradient-hero pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Get in touch</span>
          <h1 className="mt-3 font-outfit font-black text-5xl md:text-6xl">Book a Plumber</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what's wrong,  we'll call back within 30 minutes, day or night.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { Icon: Mail, label: "Email", value: "hello@pipepro.pk", href: "mailto:hello@pipepro.pk" },
              { Icon: Clock, label: "Hours", value: "Emergencies 24/7 · Office Mon–Sat 9–7" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary transition-colors"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="font-semibold mt-0.5">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 shadow-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required placeholder="+92 300 0000000" className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="service">Service needed</Label>
              <Input id="service" name="service" placeholder="e.g. blocked drain in London" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Describe the issue</Label>
              <Textarea id="message" name="message" rows={5} placeholder="A few sentences help us send the right technician." className="mt-1.5" />
            </div>
            <Button type="submit" disabled={sending} size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold">
              {sending ? "Sending…" : <>Request Call Back <Send className="ml-2 h-4 w-4" /></>}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              For emergencies, please request a callback for fastest response.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
