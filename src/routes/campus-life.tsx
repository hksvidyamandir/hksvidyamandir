import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import krishi2 from "@/assets/vidya-krishi-2.jpg";
import khel1 from "@/assets/vidya-khel-1.jpg";
import anubhav4 from "@/assets/vidya-anubhav-4.jpg";
import samskruti1 from "@/assets/vidya-samskruti-1.jpg";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import { seo } from "@/lib/seo";
import { CardGrid, CtaBand, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/campus-life")({
  head: () =>
    seo(
      "Co-Curricular — Four Vidyas & Student Development",
      "Co-curricular life at HKS Vidyamandir: Krishi Vidya, Khel Vidya, Anubhav Vidya and Samskriti Vidya, alongside student clubs, leadership and arts.",
      "/campus-life",
    ),
  component: Life,
});

const TRACK_PANELS = [
  {
    id: "krishi",
    num: "01",
    label: "Farming, horticulture & ecology",
    name: "Krishi Vidya",
    to: "/krishi-vidya" as const,
    image: krishi2,
    text: "Organic farming, horticulture, composting and environmental science in our campus gardens.",
  },
  {
    id: "khel",
    num: "02",
    label: "Sports, fitness & wellbeing",
    name: "Khel Vidya",
    to: "/khel-vidya" as const,
    image: khel1,
    text: "Twenty-four sports and disciplines with trained coaches, plus yoga, meditation and Sports Day.",
  },
  {
    id: "anubhav",
    num: "03",
    label: "Experiential learning & labs",
    name: "Anubhav Vidya",
    to: "/anubhav-vidya" as const,
    image: anubhav4,
    text: "Nine experiential zones and thirteen labs: VR, AR, astronomy, robotics, business and debate.",
  },
  {
    id: "samskriti",
    num: "04",
    label: "Culture, arts & heritage",
    name: "Samskriti Vidya",
    to: "/samskriti-vidya" as const,
    image: samskruti2,
    text: "Music, dance, theatre, art, three languages, the festival year and Karnataka's heritage.",
  },
] as const;

function Life() {
  return (
    <div className="vk-page bg-background text-foreground">
      {/* Co-Curricular 4-Track Documentary Expanding Hub */}
      <section className="border-b border-border bg-background pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Co-Curricular</span>
          </nav>

          <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <h1 className="max-w-[14ch] font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy md:text-6xl">
              Four ways to grow beyond the classroom
            </h1>
            <p className="text-base leading-relaxed text-foreground">
              Every child at HKS Vidyamandir learns through four co-curricular tracks: the soil, the
              field, the lab and the stage. Each is timetabled, guided by trained educators and
              structured from Nursery to Grade 12.
            </p>
          </div>

          <div className="vk-hub-panels mt-10">
            {TRACK_PANELS.map((panel, i) => (
              <Link
                key={panel.id}
                to={panel.to}
                className={`vk-hub-panel border border-border bg-ink ${i === 0 ? "is-first" : ""}`}
              >
                <img
                  src={panel.image}
                  alt={panel.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(16, 20, 48, 0.12) 0%, rgba(16, 20, 48, 0.86) 100%)",
                  }}
                />
                <div className="relative z-10">
                  <small className="font-mono text-xs text-card/85">
                    {panel.num} · {panel.label}
                  </small>
                  <h2 className="mt-1 font-display text-2xl font-medium text-card md:text-3xl">
                    {panel.name}
                  </h2>
                  <div className="vk-hub-more">
                    <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-card/90">
                      {panel.text}
                    </p>
                    <span className="mt-3.5 inline-flex items-center gap-1.5 border-b border-gold pb-0.5 text-sm font-medium text-card">
                      Explore {panel.name}
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead center eyebrow="Holistic development" title="Skills for life" />
        <CardGrid
          cols={4}
          items={[
            { title: "Leadership & Teamwork", text: "Student Leadership Council, houses and team-building camps." },
            { title: "Communication", text: "Debates, elocution and public speaking from early grades." },
            { title: "Critical Thinking", text: "Problem-solving challenges and innovation projects." },
            { title: "Emotional Intelligence", text: "Mindfulness, counselling and peer support." },
            { title: "Career Counselling", text: "Guidance on streams, careers and universities." },
            { title: "Life Skills", text: "Organic farming, horticulture and practical skills." },
            { title: "Community Service", text: "Social responsibility and outreach initiatives." },
            { title: "Creativity", text: "Art, craft, music, theatre and design." },
          ]}
        />
      </Section>

      <Section tone="cream">
        <Split image={samskruti1} alt="Students taking part in club activities">
          <SectionHead eyebrow="Clubs & societies" title="Find your passion" />
          <PillList
            items={[
              "Debate & Public Speaking",
              "Creative Writing",
              "Reading & Literary",
              "Environmental",
              "Entrepreneurship",
              "Photography & Film",
              "Music & Performing Arts",
              "Theatre & Drama",
              "Art & Craft",
            ]}
          />
        </Split>
      </Section>

      <CtaBand />
    </div>
  );
}
