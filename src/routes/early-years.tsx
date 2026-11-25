import { createFileRoute, Link } from "@tanstack/react-router";
import { Blocks, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AcademicCommonSections } from "@/components/site/AcademicCommonSections";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/early-years")({
  head: () => seo(
    "Early Years (Nursery - Grade 2)",
    "Explore Early Years at HKS Vidyamandir: Nursery to Grade 2 play-based, inquiry-led and Montessori-inspired foundation under the CBSE framework.",
    "/early-years",
  ),
  component: EarlyYears,
});

const subjects = [
  "Creative Expression",
  "Numeracy",
  "Communication, Language & Literacy",
  "Environmental Education",
  "Physical Development",
  "Personal, Social & Emotional Development",
];

function EarlyYears() {
  return (
    <>
      <PageHero
        crumb="Early Years"
        eyebrow="Nursery - Grade 2"
        title="Small discoveries. A strong beginning."
        intro="A five-year, flexible, multi-level and activity-based foundation guided by ECCE principles - where play, stories and exploration build a lifelong love of learning."
        image={img.progMontessori}
      />

      <Section>
        <Split image={img.early} alt="Early Years learners at HKS Vidyamandir">
          <SectionHead eyebrow="Foundational stage" title="Joyful learning in the early years" />
          <p className="mt-4 text-muted-foreground">
            Our Early Years programme nurtures curiosity, confidence and joyful discovery. Continuous formative assessment through observation and documentation helps educators understand and support each child's unique pace of growth.
          </p>
          <CheckList items={[
            "Warm, safe and child-friendly learning spaces",
            "Activity-based, multi-level pedagogy aligned with ECCE",
            "Montessori materials for sensory and motor development",
            "Continuous observation-led assessment without exam stress",
            "Close partnership and regular updates with parents",
          ]} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Four pillars" title="How children learn in Early Years" />
        <CardGrid cols={4} items={[
          { icon: <Blocks className="h-6 w-6" />, title: "Play-Based Learning", text: "Purposeful play strengthens language, early numeracy, imagination, coordination and the confidence to explore new ideas." },
          { icon: <Compass className="h-6 w-6" />, title: "Inquiry-Led Exploration", text: "Through Quest projects, stories and hands-on investigations, children ask questions, make connections and discover how the world works." },
          { icon: <Sparkles className="h-6 w-6" />, title: "Montessori Learning Experiences", text: "Scientifically designed materials develop concentration, fine motor skills, sensory awareness and independent problem-solving." },
          { icon: <HeartHandshake className="h-6 w-6" />, title: "Whole-Child Development", text: "Art, music, movement, outdoor play and collaborative experiences support physical, emotional, social and creative growth." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Learning areas" title="Core areas of development" intro="Balanced exposure across language, numeracy, creativity, nature and movement." />
        <PillList center items={subjects} />
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="A glimpse inside" title="Life in Early Years" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmePhotos.early.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={`${photo.caption} in Early Years at HKS`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-3.5 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/primary">Next: Primary (Grades 3 - 5)</Link></Button>
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/academics">All CBSE Stages</Link></Button>
        </div>
      </Section>

      <AcademicCommonSections />
      <CtaBand />
    </>
  );
}
