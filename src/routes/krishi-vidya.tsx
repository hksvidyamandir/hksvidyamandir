import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Recycle, Sprout, Sun } from "lucide-react";
import krishi1 from "@/assets/vidya-krishi-1.jpg";
import krishi2 from "@/assets/vidya-krishi-2.jpg";
import krishi3 from "@/assets/vidya-krishi-3.jpg";
import krishi4 from "@/assets/vidya-krishi-4.jpg";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/krishi-vidya")({
  head: () => seo(
    "Krishi Vidya - Organic Farming, Horticulture & Sustainability",
    "Explore Krishi Vidya at HKS Vidyamandir: hands-on organic farming, gardening, horticulture, composting and environmental sustainability.",
    "/krishi-vidya",
  ),
  component: KrishiVidya,
});

const alternatingSections = [
  {
    eyebrow: "01 · Life Skills Education",
    title: "Organic farming & horticulture in action",
    text: "Through Krishi Vidya, students learn by doing in living campus gardens — sowing seeds, tending seasonal beds, watering thoughtfully and harvesting fresh produce together.",
    image: krishi1,
    alt: "Students planting seedlings in Krishi Vidya at HKS",
    points: [
      "Life Skills Education in organic farming and horticulture",
      "Hands-on sowing, mulching, plant care and seasonal harvests",
      "Understanding food cycles, soil nutrition and natural growth",
      "Building patience, teamwork and respect for agricultural work",
    ],
  },
  {
    eyebrow: "02 · Science & Ecology",
    title: "Environmental & sustainability learning zone",
    text: "Classroom ecology comes alive when students test soil and water samples, observe living ecosystems and practise sustainable habits every day on campus.",
    image: krishi3,
    alt: "Students caring for young garden plants at HKS",
    points: [
      "Dedicated Environmental and Sustainability Learning Zone",
      "Environmental Science Laboratory studying air, water, soil and ecosystems",
      "Composting garden leaves and organic matter back into healthy soil",
      "Water conservation, biodiversity observation and zero-waste habits",
    ],
  },
  {
    eyebrow: "03 · Empathy & Stewardship",
    title: "Environmental club, Pet Day & community care",
    text: "Caring for nature extends beyond the garden into caring for animals, neighbours and the wider community through student-led green initiatives.",
    image: krishi4,
    alt: "Students composting garden leaves in Krishi Vidya",
    points: [
      "Active student-led Environmental Club and campus plantation drives",
      "Pet Day helping children meet pets and learn compassionate animal care",
      "Community engagement and social responsibility projects",
      "Everyday eco-friendly choices turning awareness into action",
    ],
  },
];

const gallery = [
  { src: krishi1, caption: "Planting seedlings and experiential learning" },
  { src: krishi2, caption: "Organic farming and garden harvests" },
  { src: krishi3, caption: "Horticulture and caring for young plants" },
  { src: krishi4, caption: "Composting and everyday environmental care" },
];

const focusAreas = [
  "Organic Farming & Gardening",
  "Horticulture & Plant Care",
  "Composting & Soil Health",
  "Environmental & Sustainability Learning Zone",
  "Environmental Science Laboratory",
  "Environmental Club",
  "Pet Day & Animal Care",
  "Community & Social Responsibility",
];

function KrishiVidya() {
  return (
    <>
      <PageHero
        crumb="Krishi Vidya"
        eyebrow="Farming & Sustainability"
        title="Nature becomes the classroom"
        intro="Hands-on organic farming, gardening, horticulture and environmental stewardship that build patience, responsibility and deep respect for nature."
        image={krishi2}
      />

      {alternatingSections.map((sec, i) => (
        <Section key={sec.title} tone={i % 2 === 1 ? "cream" : "default"}>
          <Split image={sec.image} alt={sec.alt} reverse={i % 2 === 1}>
            <SectionHead eyebrow={sec.eyebrow} title={sec.title} />
            <p className="mt-4 text-muted-foreground">{sec.text}</p>
            <CheckList items={sec.points} />
          </Split>
        </Section>
      ))}

      <Section tone="cream">
        <SectionHead center eyebrow="Four experiences" title="What students practise in Krishi Vidya" />
        <CardGrid cols={4} items={[
          { icon: <Sprout className="h-6 w-6" />, title: "Organic Farming & Gardening", text: "Sowing, tending beds and harvesting fresh produce connect everyday learning with the land." },
          { icon: <Sun className="h-6 w-6" />, title: "Horticulture & Sustainability", text: "Guided horticulture activities teach seasonal cycles, water conservation and eco-conscious habits." },
          { icon: <Recycle className="h-6 w-6" />, title: "Composting & Soil Care", text: "Turning garden leaves and organic matter into rich compost makes sustainability tangible." },
          { icon: <Leaf className="h-6 w-6" />, title: "Environmental Stewardship", text: "Campus plantation drives, Environmental Club projects and community initiatives build lifelong responsibility." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Focus areas" title="Farming, ecology & green initiatives" />
        <PillList center items={focusAreas} />
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="In the garden" title="Krishi Vidya in action" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={photo.caption} loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/khel-vidya">Next: Khel Vidya (Sports)</Link></Button>
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/campus-life">Explore Campus Life</Link></Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
