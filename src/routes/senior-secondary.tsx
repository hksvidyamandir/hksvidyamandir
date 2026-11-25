import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Briefcase, GraduationCap, UserCheck } from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AcademicCommonSections } from "@/components/site/AcademicCommonSections";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/senior-secondary")({
  head: () => seo(
    "Senior Secondary (Grades 11 - 12)",
    "Explore Senior Secondary at HKS Vidyamandir: Grades 11 and 12 CBSE Science and Commerce streams with integrated NEET/JEE coaching and career guidance.",
    "/senior-secondary",
  ),
  component: SeniorSecondary,
});

const subjects = [
  "English Core",
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "Computer Science",
  "Accountancy",
  "Business Studies",
  "Economics",
];

function SeniorSecondary() {
  return (
    <>
      <PageHero
        crumb="Senior Secondary"
        eyebrow="Grades 11 - 12"
        title="Focused pathways to universities & careers"
        intro="Science and Commerce streams under the CBSE framework, pairing academic rigour with personalised mentoring, competitive exam preparation and university guidance."
        image={img.progSenior}
      />

      <Section>
        <Split image={img.senior} alt="Senior Secondary students at HKS Vidyamandir">
          <SectionHead eyebrow="Senior secondary stage" title="Academic ambition with purposeful guidance" />
          <p className="mt-4 text-muted-foreground">
            Grades 11 and 12 are a defining bridge to higher education. Our experienced subject faculty combine thorough CBSE board preparation with integrated competitive exam training and individual career counselling so students step into top universities in India and abroad with confidence.
          </p>
          <CheckList items={[
            "Dedicated Science (PCM / PCB) and Commerce streams",
            "Integrated NEET, JEE and CUET preparation within the school day",
            "SAT, IELTS and international university application guidance",
            "Regular mock tests, practical lab assessments and doubt-clearing",
            "One-on-one mentoring and career pathway workshops",
          ]} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Four pillars" title="How Senior Secondary prepares every learner" />
        <CardGrid cols={4} items={[
          { icon: <GraduationCap className="h-6 w-6" />, title: "Subject Depth and Academic Rigour", text: "Students study their chosen subjects in greater depth, developing analytical thinking, strong communication and the ability to apply knowledge with confidence." },
          { icon: <UserCheck className="h-6 w-6" />, title: "Personalised Educator Guidance", text: "Experienced educators provide focused academic support, regular feedback and mentoring that help each learner work towards their individual potential." },
          { icon: <Briefcase className="h-6 w-6" />, title: "College and Career Readiness", text: "Counselling, workshops and pathway planning help students understand their strengths, select suitable subjects and prepare for university applications and future careers." },
          { icon: <Award className="h-6 w-6" />, title: "Leadership and Personal Growth", text: "Service, sport, clubs and leadership opportunities build resilience, responsibility, collaboration and the confidence to contribute beyond the classroom." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Academic streams" title="Streams & subject combinations" intro="Choose the pathway that aligns with your strengths, university goals and future ambitions." />
        <CardGrid cols={2} items={[
          { title: "Science Stream", text: "Physics, Chemistry, Mathematics / Biology and Computer Science — with full laboratory practicals and integrated NEET & JEE preparation." },
          { title: "Commerce Stream", text: "Accountancy, Business Studies, Economics and Mathematics / Computer Science — building analytical, financial and management foundations." },
        ]} />
        <div className="mt-8">
          <PillList center items={subjects} />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/competitive-exams">Competitive Exams & Test Prep</Link></Button>
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/admissions">Admissions 2026-27</Link></Button>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="A glimpse inside" title="Life in Senior Secondary" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmePhotos.senior.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={`${photo.caption} in Senior Secondary at HKS`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-3.5 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/high-school">Previous: High School</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/academics">All CBSE Stages</Link></Button>
        </div>
      </Section>

      <AcademicCommonSections />
      <CtaBand />
    </>
  );
}
