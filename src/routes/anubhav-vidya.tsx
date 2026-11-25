import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Compass, FlaskConical, Lightbulb } from "lucide-react";
import anubhav1 from "@/assets/vidya-anubhav-1.jpg";
import anubhav2 from "@/assets/vidya-anubhav-2.jpg";
import anubhav3 from "@/assets/vidya-anubhav-3.jpg";
import anubhav4 from "@/assets/vidya-anubhav-4.jpg";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/anubhav-vidya")({
  head: () => seo(
    "Anubhav Vidya - Skill-Based Learning, Labs & Innovation",
    "Explore Anubhav Vidya at HKS Vidyamandir: VR/AR rooms, 13+ STEM, robotics and AI labs, critical thinking, entrepreneurship, Olympiads and competitive skills.",
    "/anubhav-vidya",
  ),
  component: AnubhavVidya,
});

const gallery = [
  { src: anubhav1, caption: "Science laboratories and discovery" },
  { src: anubhav2, caption: "Olympiads and competitive preparation" },
  { src: anubhav3, caption: "Real-world industry orientation" },
  { src: anubhav4, caption: "Robotics, coding and maker projects" },
];

const labsAndZones = [
  "Virtual Reality (VR) & AR Rooms",
  "Astronomy & Space Exploration Zone",
  "Physics, Chemistry, Biology & Math Labs",
  "Computer Science, Coding & Programming Lab",
  "Robotics, AI & Machine Learning Labs",
  "Electronics Prototyping & STEM Labs",
  "Tinkering, Innovation & Maker Space",
  "Entrepreneurship & Business Simulation Centre",
];

const skillsAndCompetitions = [
  "Critical Thinking & Problem-Solving",
  "Career Awareness & Counselling",
  "Olympiad Preparation (IMO, NSO, IEO, ICSO, IGKO & MUN)",
  "Early NEET & JEE Foundation (Grade 6+)",
  "Digital SAT, ACT, PSAT, AP, TOEFL & IELTS",
  "Science Exhibitions & Robotics Competitions",
  "Educational Excursions & Field Trips",
  "International Educational Tour (NASA, ISRO, Singapore)",
];

function AnubhavVidya() {
  return (
    <>
      <PageHero
        crumb="Anubhav Vidya"
        eyebrow="Skills, Labs & Discovery"
        title="Curiosity meets real-world discovery"
        intro="Skill-based, experiential learning across VR/AR zones, 13+ modern laboratories, robotics, coding, entrepreneurship, Olympiads and competitive foundations."
        image={anubhav4}
      />

      <Section>
        <Split image={anubhav1} alt="Students conducting experiments in Anubhav Vidya at HKS">
          <SectionHead eyebrow="Learn by doing" title="Turning knowledge into practical skills" />
          <p className="mt-4 text-muted-foreground">
            Anubhav Vidya bridges theory and practice. From immersive VR/AR rooms and 13+ science, robotics and AI laboratories to entrepreneurship simulations and global Olympiad tracks, students build the analytical and creative skills needed for tomorrow.
          </p>
          <CheckList items={[
            "9 experiential learning zones including VR, AR and Astronomy",
            "13+ dedicated Physics, Chemistry, Biology, Math, Coding, AI & Robotics labs",
            "Tinkering Lab, Electronics Prototyping and Maker Space",
            "Integrated Olympiad coaching (Grade 4+) and NEET/JEE foundation (Grade 6+)",
            "Science exhibitions, robotics contests, excursions and career counselling",
          ]} />
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Four pillars" title="Skills nurtured in Anubhav Vidya" />
        <CardGrid cols={4} items={[
          { icon: <FlaskConical className="h-6 w-6" />, title: "Modern Laboratories", text: "Hands-on Physics, Chemistry, Biology, Mathematics, Astronomy and Environmental Science labs." },
          { icon: <Bot className="h-6 w-6" />, title: "Coding, Robotics & AI", text: "Step-by-step programming, robotics builds, AI/ML concepts, electronics and maker design." },
          { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation & Enterprise", text: "Tinkering labs, business simulations, critical thinking and young-founder projects." },
          { icon: <Compass className="h-6 w-6" />, title: "Competitive & Global Skills", text: "Olympiads, MUN, NEET/JEE foundation, SAT/IELTS readiness and educational study tours." },
        ]} />
      </Section>

      <Section>
        <SectionHead center eyebrow="Programmes & spaces" title="Labs, zones & future-ready skills" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Experiential Zones & Laboratories</h3>
            <PillList items={labsAndZones} />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Skills, Olympiads & Exposure</h3>
            <PillList items={skillsAndCompetitions} />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/experiential-learning">Explore All Labs & Zones</Link></Button>
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/competitive-exams">Competitive Exams & Olympiads</Link></Button>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="In the lab" title="Anubhav Vidya in action" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={photo.caption} loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/khel-vidya">Previous: Khel Vidya</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/samskriti-vidya">Next: Samskriti Vidya (Art & Culture)</Link></Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
