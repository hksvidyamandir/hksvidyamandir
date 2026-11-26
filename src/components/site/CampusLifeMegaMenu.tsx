import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { CAMPUS_LIFE_MEGA_MENU } from "@/lib/campus-life-menu";

export function CampusLifeMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [activeId, setActiveId] = useState(CAMPUS_LIFE_MEGA_MENU[0]?.id ?? "experiential-learning");
  const active = CAMPUS_LIFE_MEGA_MENU.find((c) => c.id === activeId) ?? CAMPUS_LIFE_MEGA_MENU[0]!;

  return (
    <div className="rounded-2xl border border-border bg-muted p-4 shadow-soft lg:p-5">
      <div className="flex items-stretch gap-4 lg:gap-5">
        {/* Left category rail */}
        <div className="flex w-64 shrink-0 flex-col justify-between gap-3">
          <div role="tablist" aria-label="Campus Life categories" className="space-y-1">
            {CAMPUS_LIFE_MEGA_MENU.map((cat) => {
              const isActive = cat.id === active.id;
              return (
                <Link
                  key={cat.id}
                  to={cat.to}
                  role="tab"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveId(cat.id)}
                  onFocus={() => setActiveId(cat.id)}
                  onClick={() => {
                    setActiveId(cat.id);
                    onNavigate?.();
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-left text-sm transition ${
                    isActive
                      ? "bg-card font-bold text-navy shadow-xs"
                      : "font-medium text-foreground/75 hover:bg-card/60 hover:text-navy"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate">{cat.label}</span>
                    {cat.subtitle && (
                      <span className="block truncate text-[11px] font-normal text-muted-foreground">
                        {cat.subtitle}
                      </span>
                    )}
                  </span>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition ${isActive ? "text-navy" : "text-foreground/45"}`} />
                </Link>
              );
            })}
          </div>

          <Link
            to="/campus-life"
            onClick={onNavigate}
            className="inline-flex w-fit items-center justify-center rounded-lg border-2 border-navy/80 bg-transparent px-4 py-2 text-sm font-bold text-navy transition hover:bg-navy hover:text-navy-foreground"
          >
            Explore Campus Life
          </Link>
        </div>

        {/* Right two-column tick-point panel */}
        <div
          role="tabpanel"
          aria-label={active.label}
          className="flex min-w-0 flex-1 flex-col justify-between rounded-xl border border-border/70 bg-card p-6 lg:p-7"
        >
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {active.columns.map((col, idx) => (
              <div key={col.title} className={idx === 1 ? "border-l border-border pl-6 lg:pl-8" : ""}>
                <h3 className="font-display text-lg font-bold leading-snug text-navy lg:text-xl">
                  <Link to={active.to} onClick={onNavigate} className="transition hover:text-primary">
                    {col.title}
                  </Link>
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {col.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md bg-cream px-2.5 py-1 text-xs font-semibold text-navy/85"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={active.to}
                        onClick={onNavigate}
                        className="group flex items-start gap-2.5 text-sm leading-snug text-foreground/85 transition hover:text-primary"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy transition group-hover:text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs font-medium text-muted-foreground">
              {active.label} · HKS Vidyamandir
            </span>
            <Link
              to={active.to}
              onClick={onNavigate}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition hover:text-navy"
            >
              {active.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
