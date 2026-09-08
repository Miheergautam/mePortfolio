import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FaBlogger } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Who Am I", href: "#services" },
  { label: "What I Do", href: "#work" },
  { label: "Connect", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/miheer-gautam/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Miheergautam",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/miheer_gautam4",
    icon: Instagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="text-xl font-bold tracking-wide text-cust-red">
                <span className="text-white">. </span>
                mePORTFOLIO
              </span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              Software engineer building AI-native web apps, automation tools,
              and polished digital experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-cust-red/40 px-3 py-2 text-sm font-semibold text-cust-red transition hover:bg-cust-red hover:text-neutral-950"
            >
              <Mail size={16} aria-hidden="true" />
              Freelance project inquiry
            </a>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-3 text-sm font-medium text-neutral-400 md:justify-start"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-2 py-1 transition hover:bg-neutral-800 hover:text-cust-red"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/mytech"
              className="rounded-md px-2 py-1 transition hover:bg-neutral-800 hover:text-cust-red"
            >
              .meTECH
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-neutral-300 transition hover:border-cust-red hover:bg-cust-red hover:text-neutral-950"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href="https://meblogs-4.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-base font-medium text-neutral-300 transition hover:text-cust-red"
            >
              <span className="text-cust-red transition group-hover:scale-110">•</span>
              <span>meBlogs</span>
              <FaBlogger className="text-xl text-cust-red transition group-hover:rotate-12" />
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-800 pt-4 text-center text-xs font-medium text-neutral-500 md:flex-row md:text-left">
          <span>&copy; {currentYear} Miheer Gautam. Built with React.</span>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 text-neutral-400 transition hover:text-cust-red"
          >
            Back to top
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
