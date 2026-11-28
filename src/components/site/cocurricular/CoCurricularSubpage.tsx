import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { CoCurricularPageData, CoCurricularSection } from "@/lib/cocurricular-pages-data";
import { getCoCurricularMedia } from "@/lib/cocurricular-media";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import { CtaBand } from "@/components/site/blocks";
import { VidyaFaqSection, VidyaTagline } from "@/components/site/vidya/VidyaShared";
import { CoCurricularWidget } from "@/components/site/cocurricular/CoCurricularWidgets";
import { CoCurricularSceneArt } from "@/components/site/cocurricular/CoCurricularSceneArt";
import {
  DoodleDivider,
  DoodleMarginMotif,
  DoodleUnderline,
  TopicIconBadge,
} from "@/components/site/EducationDoodles";

const SECTION_ACCENTS: Record<CoCurricularSection, string> = {
  sports: "#d9482b",
  experiential: "#4352d1",
  labs: "#0e7490",
  olympiad: "#a16207",
  compete: "#9a3412",
  development: "#6d28d9",
  welfare: "#15803d",
  events: "#be185d",
  services: "#0369a1",
  overview: "#ee8a2c",
};

export function CoCurricularSubpage({ data }: { data: CoCurricularPageData }) {
  const accent = SECTION_ACCENTS[data.sec] ?? "#303783";
  const media = getCoCurricularMedia(data.slug, data.sec);

  return (
    <div className="vk-page" data-sec={data.sec}>
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME SECTION BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <DoodleMarginMotif
          theme={data.sec}
          className="absolute top-6 right-6 hidden h-44 w-44 text-white opacity-[0.07] lg:block"
        />
        <div className="container-site relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            {data.crumbs.map((c, idx) => (
              <span key={`${c.label}-${idx}`} className="inline-flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">/</span>}
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-[#ffd27a]">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {(data.stepTag || data.stepSub) && (
                <p className="inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                  {data.stepTag && (
                    <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                      {data.stepTag}
                    </span>
                  )}
                  {data.stepSub && <span>{data.stepSub}</span>}
                </p>
              )}
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                {data.h1}
              </h1>
              <DoodleUnderline className="mt-3 w-36" color="#ffd27a" />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {data.lede}
              </p>

              {data.subnav.length > 0 && (
                <nav
                  aria-label={`${data.stepTag || data.name} pages`}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {data.subnav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`inline-flex min-h-10 items-center rounded-full border px-4 text-xs font-semibold transition-colors sm:text-sm ${
                        item.active
                          ? "border-white bg-white text-[#151947]"
                          : "border-white/30 text-white hover:bg-white/12"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>

            <div className="lg:col-span-5">
              <HeroEnquiryCard
                context={data.seoTitle}
                title="Admissions Enquiry 2026–27"
                subtitle={`Book a campus tour to experience ${data.name} & get the 2026–27 fee guide.`}
                ctaLabel="Request Callback & Fee Guide"
                accentColor={accent}
              />
            </div>
          </div>

          {data.stats.length > 0 && (
            <div className="vk-stats vk-stats-dark">
              {data.stats.map((st) => (
                <div key={st.label}>
                  <b>{st.val}</b>
                  <span>{st.label}</span>
                  <small>{st.sub}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. BESPOKE ANIMATED VECTOR SHOWCASE (MOVED BELOW HERO) */}
      <section className="vk-band vk-ground-paper border-b border-border">
        <div className="container-site space-y-12">
          <div
            className="relative grid items-center gap-8 overflow-hidden rounded-2xl p-6 text-white shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12"
            style={{ backgroundColor: "var(--vt-deep)" }}
          >
            <DoodleMarginMotif
              theme={data.sec}
              className="absolute -bottom-8 -left-8 h-40 w-40 text-white opacity-[0.07]"
            />
            <div className="relative z-10 lg:col-span-5">
              <p className="vk-kicker" style={{ color: "#ffd27a" }}>
                {data.stepTag || "At HKS Vidyamandir"}
              </p>
              <h2 className="font-display text-2xl font-medium leading-[1.15] text-white sm:text-3xl">
                {data.intro?.sideBox?.title || data.stepSub || data.h1}
              </h2>
              {data.intro?.sideBox && data.intro.sideBox.items.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {data.intro.sideBox.items.map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 font-mono text-xs font-bold text-[#ffd27a]">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative z-10 lg:col-span-7">
              <CoCurricularSceneArt slug={data.slug} sec={data.sec} title={data.h1} />
            </div>
          </div>

          {/* SCANNABLE AT-A-GLANCE VISUAL HIGHLIGHTS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {media.highlights.map((hl) => (
              <div
                key={hl.label}
                className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-navy/25"
              >
                <TopicIconBadge label={`${hl.label} ${hl.value}`} theme={data.sec} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground">{hl.label}</p>
                  <p className="mt-0.5 font-display text-lg font-medium leading-tight text-navy">
                    {hl.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/85">{hl.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INTRO WITH ICON-ANCHORED VISUAL SUMMARY */}
          {data.intro && (
            <div className="grid items-start gap-8 pt-2 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="vk-kicker">{data.intro.kicker}</p>
                <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
                  {data.intro.title}
                </h2>
                <DoodleUnderline className="mt-2.5 w-24" color="var(--vt)" />
                <p className="mt-4 text-base leading-relaxed text-foreground">
                  {data.intro.lede}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {data.intro.ticks.map((tick) => (
                  <div
                    key={tick}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <span
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
                      style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{tick}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. REAL CAMPUS PHOTO STRIP — BREAKS UP TEXT DENSITY */}
      <section className="vk-band vk-ground-cream border-b border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">{media.galleryKicker}</p>
              <h2>{media.galleryTitle}</h2>
            </div>
            <p className="vk-lede">
              A glimpse of {data.name} across our Kengeri campus — guided by dedicated mentors
              within the regular school week.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={media.photos[0].src}
                  alt={media.photos[0].caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--vt-deep)" }}
                >
                  {media.photos[0].tag}
                </span>
              </div>
              <figcaption className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-navy">
                <TopicIconBadge label={media.photos[0].tag} theme={data.sec} className="h-8 w-8 rounded-lg" />
                <span>{media.photos[0].caption}</span>
              </figcaption>
            </figure>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {media.photos.slice(1).map((photo) => (
                <figure
                  key={photo.caption}
                  className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:grid-cols-1 lg:grid-cols-12"
                >
                  <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex flex-col justify-center gap-1.5 p-4 lg:col-span-7">
                    <span
                      className="self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
                    >
                      {photo.tag}
                    </span>
                    <span className="text-sm font-medium leading-snug text-navy">
                      {photo.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE WIDGET BANDS, ICON CARD GRIDS & CONNECTED 3-STEP JOURNEYS */}
      {data.bands.map((band, idx) => {
        const groundClass =
          band.ground === "soft"
            ? "vk-ground-soft border-y border-border"
            : band.ground === "cream"
              ? "vk-ground-cream border-y border-border"
              : "vk-ground-paper";

        if (band.kind === "widget") {
          const widgetCfg = data.widgets[band.widgetKey];
          if (!widgetCfg) return null;
          return (
            <section key={`${band.widgetKey}-${idx}`} className={`vk-band relative ${groundClass}`}>
              <div className="container-site">
                <div className="vk-head">
                  <div>
                    <p className="vk-kicker">{band.kicker}</p>
                    <h2>{band.title}</h2>
                  </div>
                  {band.lede && <p className="vk-lede">{band.lede}</p>}
                </div>
                <CoCurricularWidget config={widgetCfg} />
              </div>
            </section>
          );
        }

        if (band.kind === "cards") {
          const colClass =
            band.cols === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : band.cols === 2
                ? "md:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3";
          return (
            <section key={`${band.title}-${idx}`} className={`vk-band relative ${groundClass}`}>
              <DoodleMarginMotif
                theme={data.sec}
                className="absolute top-6 right-6 hidden h-36 w-36 text-navy opacity-[0.06] lg:block"
              />
              <div className="container-site relative z-10">
                <div className="vk-head">
                  <div>
                    <p className="vk-kicker">{band.kicker}</p>
                    <h2>{band.title}</h2>
                  </div>
                  {band.lede && <p className="vk-lede">{band.lede}</p>}
                </div>
                <div className={`grid gap-4 ${colClass}`}>
                  {band.items.map((item) => (
                    <article
                      key={item.title}
                      className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-soft"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <TopicIconBadge label={`${item.title} ${item.tag ?? ""}`} theme={data.sec} />
                        <div className="flex items-center gap-2">
                          {item.tag && (
                            <span
                              className="rounded-full px-3 py-0.5 text-xs font-semibold"
                              style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
                            >
                              {item.tag}
                            </span>
                          )}
                          {item.num && (
                            <span
                              className="font-mono text-xs font-bold tabular-nums"
                              style={{ color: "var(--vt)" }}
                            >
                              {item.num}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-medium leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground">{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section key={`${band.title}-${idx}`} className={`vk-band ${groundClass}`}>
            <div className="container-site">
              <div className="vk-head">
                <div>
                  <p className="vk-kicker">{band.kicker}</p>
                  <h2>{band.title}</h2>
                </div>
                {band.lede && <p className="vk-lede">{band.lede}</p>}
              </div>
              <div className="relative mt-8 grid gap-6 md:grid-cols-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 900 12"
                  className="pointer-events-none absolute top-0 left-12 right-12 hidden h-3 w-[calc(100%-6rem)] md:block"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="900"
                    y2="6"
                    stroke="var(--vt)"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                  />
                </svg>
                {band.items.map((step, si) => (
                  <div
                    key={step.title}
                    className="relative rounded-2xl border border-border bg-card p-6 pt-8"
                  >
                    <span
                      className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full font-display text-base font-medium text-white shadow-sm"
                      style={{ backgroundColor: "var(--vt)" }}
                    >
                      {si + 1}
                    </span>
                    <div className="mb-3 flex justify-end">
                      <TopicIconBadge label={step.title} theme={data.sec} className="h-9 w-9 rounded-lg" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* 5. OPTIONAL EDITORIAL TAGLINE */}
      {data.tagline && (
        <VidyaTagline
          text={data.tagline.text}
          {...(data.tagline.note ? { note: data.tagline.note } : {})}
        />
      )}

      {/* 6. KEEP EXPLORING */}
      {data.related.length > 0 && (
        <section className="border-t border-border bg-background py-12">
          <div className="container-site">
            <DoodleDivider theme={data.sec} label="Keep exploring" />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {data.related.map((rel) => (
                <Link
                  key={rel.to}
                  to={rel.to}
                  className="group flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-navy/40"
                >
                  <TopicIconBadge label={`${rel.title} ${rel.kicker}`} theme={data.sec} />
                  <div className="flex min-w-0 flex-col gap-1">
                    <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                      {rel.kicker}
                    </small>
                    <b className="inline-flex items-center gap-1.5 font-display text-lg font-medium text-navy group-hover:text-cta">
                      {rel.title}
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </b>
                    <span className="text-sm text-muted-foreground">{rel.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQS & CTA */}
      {data.faqs.length > 0 && (
        <VidyaFaqSection
          name={data.name}
          intro={`Common parent questions about ${data.name} at HKS Vidyamandir.`}
          faqs={data.faqs}
        />
      )}

      <CtaBand />
    </div>
  );
}
