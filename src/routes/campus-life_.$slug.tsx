import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CAMPUS_LIFE_PAGES_BY_SLUG, CATEGORY_ENRICHMENT } from "@/lib/campus-life-pages";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { BeyondClassroom } from "@/components/site/BeyondClassroom";
import { StudentsSpeak } from "@/components/site/StudentsSpeak";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/campus-life_/$slug")({
  loader: ({ params }) => {
    const page = CAMPUS_LIFE_PAGES_BY_SLUG[params.slug];
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(loaderData.seoTitle, loaderData.seoDescription, `/campus-life/${loaderData.slug}`)
      : seo("Campus Life", "Explore Campus Life at HKS Vidyamandir.", "/campus-life"),
  component: CampusLifeSubpage,
});

function CampusLifeSubpage() {
  const page = Route.useLoaderData();
  const extra = CATEGORY_ENRICHMENT[page.categoryLabel];
  const cols: 2 | 3 | 4 = page.cards.length === 4 || page.cards.length === 8 ? 4 : page.cards.length === 2 ? 2 : 3;

  return (
    <>
      <PageHero
        crumb={page.crumb}
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        image={page.heroImage}
      />

      {extra && (
        <Section tone="cream">
          <dl className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {extra.stats.map(([val, label]) => (
              <div key={label} className="rounded-3xl bg-card p-6 text-center shadow-soft">
                <dt className="font-display text-2xl font-semibold text-navy md:text-3xl">{val}</dt>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section>
        <Split image={page.splitImage} alt={page.splitAlt}>
          <SectionHead eyebrow={page.splitEyebrow} title={page.splitTitle} />
          <p className="mt-4 text-muted-foreground">{page.splitText}</p>
          <CheckList items={page.highlights} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow={page.cardsEyebrow} title={page.cardsTitle} intro={page.cardsIntro} />
        <CardGrid cols={cols} items={page.cards} />
      </Section>

      {extra && (
        <Section>
          <SectionHead center eyebrow={extra.journeyEyebrow} title={extra.journeyTitle} />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {extra.journeySteps.map((step, i) => (
              <li key={step.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span className="font-display text-4xl font-semibold text-flame">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {(page.pills?.length || extra?.outcomes.length) ? (
        <Section tone="muted">
          <SectionHead
            center
            eyebrow={page.categoryLabel}
            title={page.pillsTitle ?? extra?.outcomesTitle ?? "Key areas"}
          />
          <PillList center items={page.pills?.length ? page.pills : (extra?.outcomes ?? [])} />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {page.relatedLinks.map((link, idx) => (
              <Button
                key={link.to}
                asChild
                variant={idx === 0 ? "default" : "outline"}
                className="h-auto rounded-full px-6 py-3 font-bold"
              >
                <Link to={link.to}>
                  {link.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ))}
            <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold">
              <Link to="/campus-life">All Campus Life</Link>
            </Button>
          </div>
        </Section>
      ) : null}

      <div className="hks-home">
        <BeyondClassroom />
        <StudentsSpeak />
      </div>

      <CtaBand />
    </>
  );
}
