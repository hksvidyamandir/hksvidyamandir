import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calculator, Layers, Users } from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AcademicCommonSections } from "@/components/site/AcademicCommonSections";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/primary")({
  head: () => seo(
    "Primary School (Grades 3 - 5)",
    "Explore Primary School at HKS Vidyamandir: Grades 3 to 5 CBSE preparatory stage focused on literacy, numeracy, hands-on science and personal growth.",
    "/primary",
  ),
  component: Primary,
});

const subjects = [
  "English Literacy",
  "Numeracy",
  "Science & EVS",
  "Fine & Performing Arts",
  "Information Practices",
  "Second Languages",
  "Personal, Social & Physical Education",
];

function Primary() {
  return (
    <>
      <PageHero
        crumb="Primary"
        eyebrow="Grades 3 - 5"
        title="Where curiosity becomes confidence"
        intro="The preparatory stage emphasises exploration and activity-based learning with concept-oriented textbooks - building strong foundations in literacy, numeracy and collaborative discovery."
        image={img.progElementary}
      />

      <Section>
        <Split image={img.primary} alt="Primary students at HKS Vidyamandir">
          <SectionHead eyebrow="Preparatory stage" title="Building strong academic foundations" />
          <p className="mt-4 text-muted-foreground">
            In Grades 3 to 5, students move from early discovery into structured, engaging inquiry. Lessons combine hands-on experiments, storytelling, library reading and group projects so children understand concepts deeply rather than memorising them.
          </p>
          <CheckList items={[
            "Concept-oriented CBSE textbooks paired with activity-based learning",
            "Daily reading, writing and spoken communication practice",
            "Hands-on science, nature exploration and early robotics from Grade 4",
            "Olympiad exposure in Maths, Science and English from Grade 4",
            "Equal emphasis on sports, arts, values and teamwork",
          ]} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Four pillars" title="How students grow in Primary" />
        <CardGrid cols={4} items={[
          { icon: <Layers className="h-6 w-6" />, title: "Connected Learning", text: "Students connect ideas across languages, mathematics, science, social studies and technology, helping them see learning as a complete picture." },
          { icon: <BookOpen className="h-6 w-6" />, title: "Strong Literacy and Communication", text: "Reading, writing, speaking and listening experiences help learners express ideas clearly, understand different viewpoints and become confident communicators." },
          { icon: <Calculator className="h-6 w-6" />, title: "Mathematical and Scientific Thinking", text: "Hands-on investigations and problem-solving develop logical reasoning, conceptual understanding and curiosity about how the world works." },
          { icon: <Users className="h-6 w-6" />, title: "Character and Personal Growth", text: "Arts, sport, life skills and collaborative experiences build creativity, resilience, empathy, teamwork and responsible decision-making." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Curriculum" title="Subjects & learning areas" intro="A well-rounded CBSE preparatory curriculum balancing academics, languages, technology and the arts." />
        <PillList center items={subjects} />
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="A glimpse inside" title="Life in Primary" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmePhotos.primary.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={`${photo.caption} in Primary at HKS`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-3.5 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/early-years">Previous: Early Years</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/high-school">Next: High School (Grades 6 - 10)</Link></Button>
        </div>
      </Section>

      <AcademicCommonSections />
      <CtaBand />
    </>
  );
}
