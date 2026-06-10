import { Link } from "@tanstack/react-router";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-outfit text-xl font-black">
                PipePro Solutions
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              The UK's most trusted plumbing team since 2005. Licensed,
              insured and on call 24/7 for emergencies.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-outfit font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Blog", "/blog"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-outfit font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-outfit font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                hello@pipepro.pk
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                24/7 Emergency · Mon–Sat office
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50 flex justify-end">
          <p>
            Powered by{" "}
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-primary transition-colors font-semibold"
            >
              AxisTechGroup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
