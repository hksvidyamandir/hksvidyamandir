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

      <Section>
        <Split image={krishi1} alt="Students planting seedlings in Krishi Vidya at HKS">
          <SectionHead eyebrow="Rooted in nature" title="Learning by growing, caring and harvesting" />
          <p className="mt-4 text-muted-foreground">
            Through Krishi Vidya, students step out into living campus gardens to sow seeds, nurture plants, compost organic waste and observe ecosystems first-hand. Practical farming connects classroom science with real-world sustainability.
          </p>
          <CheckList items={[
            "Life Skills Education in organic farming and horticulture",
            "Dedicated Environmental and Sustainability Learning Zone",
            "Hands-on Environmental Science Laboratory investigations",
            "Active student-led Environmental Club and green drives",
            "Pet Day and animal care nurturing empathy for all living beings",
          ]} />
        </Split>
      </Section>

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
