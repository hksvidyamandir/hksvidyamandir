import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import { DoodleUnderline, TopicIconBadge } from "@/components/site/EducationDoodles";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumb,
  showForm = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  crumb: string;
  showForm?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-ink">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />
      <div className="container-site py-12 text-navy-foreground sm:py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-foreground/80">
          <Link to="/" className="transition-colors hover:text-card">
            Home
          </Link>{" "}
          <span className="mx-1.5" aria-hidden="true">/</span>
          <span className="font-medium text-card">{crumb}</span>
        </nav>

        <div className={showForm ? "grid items-center gap-8 lg:grid-cols-12 lg:gap-12" : ""}>
          <div className={showForm ? "lg:col-span-7" : ""}>
            <p className="text-sm font-semibold text-gold">{eyebrow}</p>
            <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-card sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-foreground/90 md:text-lg">
              {intro}
            </p>
          </div>

          {showForm && (
            <div className="lg:col-span-5">
              <HeroEnquiryCard context={crumb} accentColor="#ee8a2c" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-medium leading-[1.14] tracking-[-0.01em] text-navy md:text-4xl">
        {title}
      </h2>
      <DoodleUnderline
        className={`mt-2.5 w-24 ${center ? "mx-auto" : ""}`}
        color="#ee8a2c"
      />
      {intro && <p className="mt-4 text-base leading-relaxed text-foreground">{intro}</p>}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
  id,
}: {
  children: ReactNode;
  tone?: "default" | "muted" | "cream" | "navy";
  id?: string;
}) {
  const t = {
    default: "bg-background",
    muted: "bg-card border-y border-border",
    cream: "bg-cream border-y border-border",
    navy: "bg-ink text-navy-foreground",
  }[tone];
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 ${t}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function CardGrid({
  items,
  cols = 3,
}: {
  items: { title: string; text: string; icon?: ReactNode }[];
  cols?: 2 | 3 | 4;
}) {
  const c = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  return (
    <div className={`mt-10 grid gap-5 ${c}`}>
      {items.map((it) => (
        <article
          key={it.title}
          className="rounded-xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-soft"
        >
          {it.icon ? (
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-navy">
              {it.icon}
            </div>
          ) : (
            <div className="mb-4">
              <TopicIconBadge label={`${it.title} ${it.text}`} theme="academics" />
            </div>
          )}
          <h3 className="font-display text-xl font-medium text-navy">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export function PillList({ items, center = false }: { items: string[]; center?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap ${
        center ? "mx-auto mt-8 max-w-4xl justify-center gap-2.5" : "mt-6 gap-2"
      }`}
    >
      {items.map((i) => (
        <li
          key={i}
          className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-navy"
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Split({
  image,
  alt,
  children,
  reverse,
}: {
  image: string;
  alt: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-auto max-h-[520px] w-full object-cover object-top"
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function CtaBand({
  title = "Give your child wings to succeed",
  text = "Admissions are open for 2026–27, from Nursery to Grade 12. Visit our campus or speak with our admissions team.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={img.building}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />
      <div className="container-site flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#ffd27a]">Admissions 2026–27</p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/90">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Button
            asChild
            className="h-11 w-full rounded-lg bg-[#ee8a2c] px-6 text-sm font-medium text-white hover:bg-[#ffd27a] hover:text-ink sm:w-auto"
          >
            <Link to="/admissions" hash="enquire">
              Apply Now
              <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Button>
          <Link
            to="/contact"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Book a Campus Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
