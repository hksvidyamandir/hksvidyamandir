import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/blocks";
import {
  DoodleMarginMotif,
  DoodleUnderline,
  MotionToggleButton,
  type DoodleTheme,
} from "@/components/site/EducationDoodles";
import type { ProgrammePhoto } from "@/lib/programme-photos";

export type AcademicStageId = "cbse" | "early" | "primary" | "high" | "senior" | "compete";

export function AcademicVectorShowcase({
  bg,
  kicker,
  title,
  description,
  theme = "academics",
  children,
}: {
  bg: string;
  kicker: string;
  title: string;
  description: string;
  theme?: DoodleTheme;
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);

  return (
    <section className="vk-band vk-ground-paper border-b border-border">
      <div className="container-site">
        <div
          className="relative grid items-center gap-8 overflow-hidden rounded-2xl p-6 text-white shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12"
          style={{ backgroundColor: bg }}
        >
          <DoodleMarginMotif
            theme={theme}
            className="absolute -bottom-8 -left-8 h-40 w-40 text-white opacity-[0.07]"
          />
          <div className="relative z-10 lg:col-span-5">
            <p className="vk-kicker" style={{ color: "#ffd27a" }}>
              {kicker}
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
              {title}
            </h2>
            <DoodleUnderline className="mt-3 w-28" color="#ffd27a" />
            <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
              {description}
            </p>
            <div className="mt-5">
              <MotionToggleButton paused={paused} onToggle={() => setPaused((p) => !p)} tone="dark" />
            </div>
          </div>
          <div className={`ac-hero-art relative z-10 lg:col-span-7 ${paused ? "is-motion-paused" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export const ACADEMIC_STAGES: {
  id: AcademicStageId;
  name: string;
  to:
    | "/academics"
    | "/early-years"
    | "/primary"
    | "/high-school"
    | "/senior-secondary"
    | "/competitive-exams";
  color: string;
  sub: string;
}[] = [
  { id: "cbse", name: "CBSE Curriculum", to: "/academics", color: "#23286b", sub: "All stages" },
  { id: "early", name: "Early Years", to: "/early-years", color: "#0f8a84", sub: "Nursery – Grade 2" },
  { id: "primary", name: "Primary School", to: "/primary", color: "#2c6fd1", sub: "Grades 3 – 5" },
  { id: "high", name: "High School", to: "/high-school", color: "#b4451f", sub: "Grades 6 – 10" },
  { id: "senior", name: "Senior Secondary", to: "/senior-secondary", color: "#0e5a8a", sub: "Grades 11 – 12" },
  { id: "compete", name: "Competitive Exams", to: "/competitive-exams", color: "#a16207", sub: "Olympiads, NEET, JEE, SAT" },
];

export function AcademicPhotoGallery({
  stageName,
  intro,
  photos,
}: {
  stageName: string;
  intro: string;
  photos: ProgrammePhoto[];
}) {
  return (
    <section className="vk-band vk-ground-paper border-t border-border">
      <div className="container-site">
        <div className="vk-head">
          <div>
            <p className="vk-kicker">A glimpse inside</p>
            <h2>Life in {stageName}</h2>
          </div>
          <p className="vk-lede">{intro}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={`${photo.caption} in ${stageName} at HKS Vidyamandir`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-navy">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AcademicTail({ active }: { active: AcademicStageId }) {
  const idx = ACADEMIC_STAGES.findIndex((s) => s.id === active);
  const prev = ACADEMIC_STAGES[(idx + ACADEMIC_STAGES.length - 1) % ACADEMIC_STAGES.length]!;
  const next = ACADEMIC_STAGES[(idx + 1) % ACADEMIC_STAGES.length]!;

  return (
    <>
      <section className="border-t border-border bg-background">
        <div className="container-site flex flex-wrap items-center justify-between gap-6 py-8">
          <Link to={prev.to} className="group flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              Previous stage
            </span>
            <span className="font-display text-xl font-medium text-navy transition-colors group-hover:text-cta sm:text-2xl">
              {prev.name}
            </span>
          </Link>
          <Link to={next.to} className="group flex flex-col items-end gap-1 text-right">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              Next stage
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl font-medium text-navy transition-colors group-hover:text-cta sm:text-2xl">
              {next.name}
            </span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
