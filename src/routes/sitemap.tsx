import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CAMPUS_LIFE_MEGA_MENU } from "@/lib/campus-life-menu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  head: () =>
    seo(
      "HTML Sitemap",
      "Complete HTML sitemap for HKS Vidyamandir: all academic stages, Four Vidyas, Co-Curricular programmes, admissions, mandatory public disclosure, privacy policy and terms.",
      "/sitemap",
    ),
  component: HtmlSitemapPage,
});

const DIRECTORY_GROUPS = [
  {
    code: "01",
    title: "School & Admissions",
    links: [
      { label: "Home", to: "/" },
      { label: "About HKS Vidyamandir", to: "/about" },
      { label: "Admissions Overview & Enquiry", to: "/admissions" },
      { label: "Campus & Infrastructure", to: "/campus" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    code: "02",
    title: "Academics & Programmes",
    links: [
      { label: "CBSE Curriculum Overview", to: "/academics" },
      { label: "Early Years (Nursery – Grade 2)", to: "/early-years" },
      { label: "Primary School (Grades 3 – 5)", to: "/primary" },
      { label: "High School (Grades 6 – 10)", to: "/high-school" },
      { label: "Senior Secondary (Grades 11 – 12)", to: "/senior-secondary" },
      { label: "Experiential Learning", to: "/experiential-learning" },
      { label: "Competitive Exams & Olympiads", to: "/competitive-exams" },
      { label: "Sports & Physical Education", to: "/sports" },
    ],
  },
  {
    code: "03",
    title: "The Four Vidyas",
    links: [
      { label: "Krishi Vidya — Farming & Ecology", to: "/krishi-vidya" },
      { label: "Khel Vidya — Sports & Fitness", to: "/khel-vidya" },
      { label: "Anubhav Vidya — Skills, Labs & Innovation", to: "/anubhav-vidya" },
      { label: "Samskriti Vidya — Arts, Culture & Leadership", to: "/samskriti-vidya" },
    ],
  },
  {
    code: "04",
    title: "Statutory, Policies & Legal",
    links: [
      { label: "Mandatory Public Disclosure (CBSE Appendix-IX)", to: "/mandatory-public-disclosure" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions (School Policy & Undertaking)", to: "/terms-and-conditions" },
      { label: "HTML Sitemap", to: "/sitemap" },
    ],
  },
] as const;

function HtmlSitemapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-background">
        <div className="container-site pt-12 pb-14 md:pt-16 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Sitemap</span>
          </nav>

          <p className="text-sm font-medium text-muted-foreground">Complete website directory</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-navy md:text-5xl">
            HTML Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Direct links to every page across HKS Vidyamandir — academics, Four Vidyas,
            Co-Curricular programmes, admissions, statutory CBSE disclosures and school policies.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card py-14 md:py-18">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DIRECTORY_GROUPS.map((group) => (
            <div key={group.code} className="rounded-xl border border-border bg-background p-6">
              <p className="font-mono text-xs tabular-nums text-muted-foreground">{group.code}</p>
              <h2 className="mt-1 font-display text-xl font-medium text-navy">{group.title}</h2>
              <ul className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-cta"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-14 md:py-18">
        <div className="container-site">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-muted-foreground">05 / Co-Curricular Directory</p>
              <h2 className="mt-1 font-display text-2xl font-medium text-navy md:text-3xl">
                Co-Curricular Verticals &amp; Programme Pages
              </h2>
            </div>
            <Link
              to="/campus-life"
              className="text-sm font-medium text-navy underline underline-offset-4 hover:text-cta"
            >
              View Co-Curricular overview
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAMPUS_LIFE_MEGA_MENU.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-medium text-navy">
                  <Link to={cat.to} className="transition-colors hover:text-cta">
                    {cat.label}
                  </Link>
                </h3>
                <ul className="mt-3 space-y-2 border-t border-border pt-3 text-sm">
                  {cat.columns.map((col) => (
                    <li key={col.to}>
                      <Link
                        to={col.to}
                        className="text-foreground transition-colors hover:text-cta"
                      >
                        {col.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
