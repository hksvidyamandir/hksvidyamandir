import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, Cpu, Microscope, ShieldCheck } from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AcademicCommonSections } from "@/components/site/AcademicCommonSections";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/high-school")({
  head: () => seo(
    "High School (Grades 6 - 10)",
    "Explore High School at HKS Vidyamandir: Grades 6 to 10 CBSE programme combining subject depth, laboratory enquiry, coding, AI and NEET/JEE foundations.",
    "/high-school",
  ),
  component: HighSchool,
});

const subjects = [
  "English",
  "Mathematics",
  "Science (Physics, Chemistry & Biology)",
  "Social Studies",
  "Hindi / Kannada",
  "Computer Applications & Coding",
  "Fine Arts, Music & Dance",
  "Physical Education",
];

function HighSchool() {
  return (
    <>
      <PageHero
        crumb="High School"
        eyebrow="Grades 6 - 10"
        title="Deeper understanding. Independent thinking."
        intro="A multi-disciplinary CBSE journey across Middle and High School that sharpens analytical rigour, laboratory enquiry, coding skills and board exam readiness."
        image={img.progCbse}
      />

      <Section>
        <Split image={img.high} alt="High School students at HKS Vidyamandir">
          <SectionHead eyebrow="Middle & secondary stage" title="Preparing confident, analytical learners" />
          <p className="mt-4 text-muted-foreground">
            From Grade 6 to Grade 10, students progress into abstract concepts across science, mathematics, humanities and technology. Regular lab practicals, vocational crafts, ten bagless days and integrated NEET/JEE foundation prepare learners for board examinations and beyond.
          </p>
          <CheckList items={[
            "Strong CBSE conceptual depth leading to Grade 10 board readiness",
            "Integrated NEET/JEE foundation and Olympiad coaching from Grade 6",
            "Hands-on Physics, Chemistry, Biology, Robotics and AI lab sessions",
            "Vocational crafts, 'ten bagless days' and interdisciplinary projects",
            "Public speaking, leadership clubs, sports and mentorship support",
          ]} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Four pillars" title="What defines High School at HKS" />
        <CardGrid cols={4} items={[
          { icon: <BookMarked className="h-6 w-6" />, title: "Subject Depth", text: "Students explore languages, mathematics, science, social sciences and technology in greater detail, building strong knowledge and clear academic thinking." },
          { icon: <Microscope className="h-6 w-6" />, title: "Independent Enquiry", text: "Research, experiments and interdisciplinary projects encourage learners to ask thoughtful questions, examine evidence and form their own conclusions." },
          { icon: <ShieldCheck className="h-6 w-6" />, title: "Personal Growth", text: "Life skills, wellbeing, arts and sport help students build self-awareness, resilience, communication and confidence during the teenage years." },
          { icon: <Cpu className="h-6 w-6" />, title: "Innovation in Action", text: "Coding, design challenges and entrepreneurship experiences give learners opportunities to create solutions, test ideas and learn through application." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Curriculum" title="Subjects & academic pathways" intro="Structured progression across core CBSE disciplines, languages, technology and co-scholastic pursuits." />
        <PillList center items={subjects} />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/experiential-learning">Experiential Learning & Labs</Link></Button>
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/competitive-exams">NEET/JEE Foundation & Olympiads</Link></Button>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="A glimpse inside" title="Life in High School" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmePhotos.high.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={`${photo.caption} in High School at HKS`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-3.5 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/primary">Previous: Primary</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/senior-secondary">Next: Senior Secondary (Grades 11 - 12)</Link></Button>
        </div>
      </Section>

      <AcademicCommonSections />
      <CtaBand />
    </>
  );
}
