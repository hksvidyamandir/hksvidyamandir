import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Backpack,
  Calendar,
  Check,
  Clock,
  Eye,
  GraduationCap,
  HandHeart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/blocks";
import { SITE } from "@/lib/site";

export type VidyaTrackId = "krishi" | "khel" | "anubhav" | "samskriti";

export const VIDYA_TRACKS: {
  id: VidyaTrackId;
  name: string;
  to: "/krishi-vidya" | "/khel-vidya" | "/anubhav-vidya" | "/samskriti-vidya";
  dotVar: string;
  sub: string;
}[] = [
  { id: "krishi", name: "Krishi Vidya", to: "/krishi-vidya", dotVar: "var(--teal)", sub: "Farming, horticulture & ecology" },
  { id: "khel", name: "Khel Vidya", to: "/khel-vidya", dotVar: "var(--cta)", sub: "Sports, fitness & wellbeing" },
  { id: "anubhav", name: "Anubhav Vidya", to: "/anubhav-vidya", dotVar: "var(--navy)", sub: "Experiential learning & labs" },
  { id: "samskriti", name: "Samskriti Vidya", to: "/samskriti-vidya", dotVar: "var(--gold)", sub: "Culture, arts & heritage" },
];

export type GlanceIconKey = "users" | "clock" | "pin" | "teacher" | "wallet" | "bag";

export type GlanceItem = {
  icon: GlanceIconKey;
  label: string;
  value: string;
};

export type GradeBandContent = {
  focus: string;
  doItems: string[];
  often: string;
  home: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

const GLANCE_ICONS: Record<GlanceIconKey, typeof Users> = {
  users: Users,
  clock: Clock,
  pin: MapPin,
  teacher: GraduationCap,
  wallet: Wallet,
  bag: Backpack,
};

const GRADE_BANDS = [
  { label: "Nursery – Grade 2", ages: "Ages 3 to 7" },
  { label: "Grades 3 – 5", ages: "Ages 8 to 10" },
  { label: "Grades 6 – 8", ages: "Ages 11 to 13" },
  { label: "Grades 9 – 10", ages: "Ages 14 to 15" },
  { label: "Grades 11 – 12", ages: "Ages 16 to 17" },
] as const;

export function VidyaTrackNav({ active }: { active: VidyaTrackId }) {
  return (
    <nav className="vk-tracknav" aria-label="Co-curricular tracks">
      <div className="container-site vk-tracknav-row">
        {VIDYA_TRACKS.map((t, idx) => {
          const isOn = t.id === active;
          return (
            <Link
              key={t.id}
              to={t.to}
              style={{ ["--dot-c" as string]: t.dotVar }}
              className={isOn ? "is-on" : ""}
              aria-current={isOn ? "page" : undefined}
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">0{idx + 1}</span>
              <span>{t.name}</span>
            </Link>
          );
        })}
        <Link to="/campus-life" style={{ ["--dot-c" as string]: "var(--navy)" }} className="ml-auto">
          <span>All tracks</span>
        </Link>
      </div>
    </nav>
  );
}

export function VidyaGlance({ name, items }: { name: string; items: GlanceItem[] }) {
  return (
    <section className="vk-glance" aria-label={`${name} at a glance`}>
      <div className="container-site vk-glance-grid">
        <div className="vk-glance-ttl">
          <h2>{name} at a glance</h2>
          <span className="text-xs text-muted-foreground">
            The essentials, before you read further
          </span>
        </div>
        {items.map((item) => {
          const Icon = GLANCE_ICONS[item.icon];
          return (
            <div key={item.label} className="vk-glance-cell">
              <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <small>{item.label}</small>
              <b>{item.value}</b>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function VidyaGradeFinder({
  name,
  grades,
}: {
  name: string;
  grades: GradeBandContent[];
}) {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("hksGrade");
      if (saved !== null) {
        const idx = Number(saved);
        if (!Number.isNaN(idx) && grades[idx]) setSelected(idx);
      }
    } catch {
      // ignore storage errors
    }
  }, [grades]);

  const choose = (idx: number) => {
    setSelected(idx);
    try {
      window.localStorage.setItem("hksGrade", String(idx));
    } catch {
      // ignore storage errors
    }
  };

  const currentBand = GRADE_BANDS[selected] ?? GRADE_BANDS[0];
  const current = grades[selected] ?? grades[0]!;

  return (
    <section className="vk-band border-y border-border bg-card" id="your-child">
      <div className="container-site">
        <div className="vk-head">
          <div>
            <p className="vk-kicker">For parents</p>
            <h2>What will my child do in {name}?</h2>
          </div>
          <p className="vk-lede">
            Choose your child&apos;s grade to see weekly activities, timetable rhythm, and what
            you&apos;re likely to notice at home.
          </p>
        </div>

        <div className="vk-finder">
          <div>
            <div className="vk-gpick" role="tablist" aria-label="Choose your child's grade">
              {GRADE_BANDS.map((band, i) => (
                <button
                  key={band.label}
                  type="button"
                  role="tab"
                  aria-selected={selected === i}
                  onClick={() => choose(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      choose((i + 1) % GRADE_BANDS.length);
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      choose((i + GRADE_BANDS.length - 1) % GRADE_BANDS.length);
                    }
                  }}
                >
                  <span>{band.label}</span>
                  <small>{band.ages}</small>
                </button>
              ))}
            </div>
            <p className="mt-2.5 px-1 text-xs text-muted-foreground">
              Your selection stays remembered across all four Vidya pages.
            </p>
          </div>

          <div className="vk-gpanel" role="tabpanel" aria-live="polite">
            <span className="font-mono text-xs tabular-nums text-muted-foreground">
              {currentBand.label} · {currentBand.ages}
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
              {current.focus}
            </h3>

            <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h4 className="mb-3 font-sans text-xs font-medium text-muted-foreground">
                  What they do
                </h4>
                <ul className="space-y-2.5">
                  {current.doItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                        strokeWidth={1.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-background p-4">
                  <h4 className="font-sans text-xs font-medium text-muted-foreground">How often</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">{current.often}</p>
                </div>
                <div className="rounded-lg border border-border bg-background p-4">
                  <h4 className="font-sans text-xs font-medium text-muted-foreground">
                    What you may notice at home
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">{current.home}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VidyaTagline({ text, note }: { text: string; note?: string }) {
  const cleanText = text.replace(/\*/g, "");
  return (
    <section className="vk-tagline" aria-label={cleanText}>
      <div className="container-site max-w-4xl">
        <blockquote className="border-l-2 border-navy pl-6">
          <p className="vk-tagline-text">{cleanText}</p>
          {note && <footer className="mt-4 text-sm text-muted-foreground">{note}</footer>}
        </blockquote>
      </div>
    </section>
  );
}

export function VidyaEssentials({
  kit,
  progress,
  join,
  safety,
}: {
  kit: string[];
  progress: string[];
  join: string[];
  safety: string[];
}) {
  return (
    <section className="vk-band vk-ground-paper">
      <div className="container-site">
        <div className="vk-head">
          <div>
            <p className="vk-kicker">Practical details</p>
            <h2>Everything parents usually ask us first</h2>
          </div>
          <p className="vk-lede">
            What to send with your child, how progress is shared, and how families take part.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Backpack className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-medium text-navy">What to send</h3>
            </div>
            <ul className="space-y-2.5 border-t border-border pt-4">
              {kit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Eye className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-medium text-navy">
                How you&apos;ll see progress
              </h3>
            </div>
            <ul className="space-y-2.5 border-t border-border pt-4">
              {progress.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <HandHeart className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-medium text-navy">How you can join in</h3>
            </div>
            <ul className="space-y-2.5 border-t border-border pt-4">
              {join.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-5 grid gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-[0.65fr_1.35fr] md:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-navy" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-xl font-medium text-navy">Safety and care</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Standard supervision and wellbeing safeguards across every session.
              </p>
            </div>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {safety.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function VidyaFaqSection({
  name,
  intro,
  faqs,
}: {
  name: string;
  intro: string;
  faqs: FaqItem[];
  tone?: "soft" | "paper";
}) {
  return (
    <section className="vk-band border-t border-border bg-card">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="vk-kicker">Parent guide</p>
          <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy">
            Common questions about {name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground">{intro}</p>

          <aside
            aria-label="Contact the school"
            className="mt-8 space-y-2 rounded-xl border border-border bg-background p-5"
          >
            <h3 className="font-display text-lg font-medium text-navy">Still have a question?</h3>
            <p className="pb-2 text-xs text-muted-foreground">
              Our admissions team is happy to walk you through {name} in person.
            </p>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/40"
            >
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <span>
                Call admissions
                <small className="block text-xs font-normal text-muted-foreground">
                  {SITE.phone}
                </small>
              </span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/40"
            >
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <span>
                Email us
                <small className="block text-xs font-normal text-muted-foreground">
                  {SITE.email}
                </small>
              </span>
            </a>
            <Link
              to="/admissions"
              hash="enquire"
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/40"
            >
              <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <span>
                Book a campus tour
                <small className="block text-xs font-normal text-muted-foreground">
                  See a session in action
                </small>
              </span>
            </Link>
          </aside>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs[0]?.q}
            className="border-t border-border"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-border">
                <AccordionTrigger className="py-4 text-left font-display text-lg font-medium text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function VidyaTail({ active }: { active: VidyaTrackId }) {
  const idx = VIDYA_TRACKS.findIndex((t) => t.id === active);
  const prev = VIDYA_TRACKS[(idx + 3) % 4]!;
  const next = VIDYA_TRACKS[(idx + 1) % 4]!;

  return (
    <>
      <section className="border-t border-border bg-background">
        <div className="container-site flex flex-wrap items-center justify-between gap-6 py-8">
          <Link to={prev.to} className="group flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              Previous track
            </span>
            <span className="font-display text-2xl font-medium text-navy transition-colors group-hover:text-cta">
              {prev.name}
            </span>
          </Link>
          <Link to={next.to} className="group flex flex-col items-end gap-1 text-right">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              Next track
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <span className="font-display text-2xl font-medium text-navy transition-colors group-hover:text-cta">
              {next.name}
            </span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
