import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Mic, Music, Palette } from "lucide-react";
import samskruti1 from "@/assets/vidya-samskruti-1.jpg";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import samskruti3 from "@/assets/vidya-samskruti-3.jpg";
import samskruti4 from "@/assets/vidya-samskruti-4.jpg";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/samskriti-vidya")({
  head: () => seo(
    "Samskriti Vidya - Art, Culture, Clubs & Celebrations",
    "Explore Samskriti Vidya at HKS Vidyamandir: music, dance, theatre, fine arts, heritage, student clubs, public speaking, leadership and cultural festivals.",
    "/samskriti-vidya",
  ),
  component: SamskritiVidya,
});

const alternatingSections = [
  {
    eyebrow: "01 · Performing & Visual Arts",
    title: "Music, dance, theatre & creative arts studio",
    text: "Samskriti Vidya gives every child joyful spaces to paint, sculpt, sing, play instruments, dance and act — turning creativity into everyday confidence.",
    image: samskruti3,
    alt: "Students enjoying music and dance in Samskriti Vidya at HKS",
    points: [
      "Creative Arts and Design Studio for drawing, painting and craft",
      "Music and Performing Arts covering vocals, instruments and stage recitals",
      "Theatre and Drama building expression, voice projection and storytelling",
      "Photography and Film Club capturing campus life through visual media",
    ],
  },
  {
    eyebrow: "02 · Voice & Student Clubs",
    title: "Debate, writing, reading & literary clubs",
    text: "Dedicated speaking centres and interest-based clubs help students sharpen articulation, explore literature, debate thoughtfully and share their voice.",
    image: samskruti1,
    alt: "Students participating in public speaking and clubs at HKS",
    points: [
      "Public Speaking and Debate Centre for confident stage presence",
      "Debate & Public Speaking, Creative Writing and Reading & Literary clubs",
      "Entrepreneurship Club encouraging creative pitches and initiative",
      "School Newsletters showcasing student essays, poetry and artwork",
    ],
  },
  {
    eyebrow: "03 · Heritage & Celebrations",
    title: "Cultural festivals, Annual Day & heritage zone",
    text: "Rooted in Karnataka's and India's living traditions, our celebrations bring students, educators and families together in music, colour and community pride.",
    image: samskruti2,
    alt: "Students celebrating cultural festivals with flower rangoli at HKS",
    points: [
      "Heritage and Cultural Learning Zone celebrating local and national traditions",
      "Annual Day Celebrations showcasing every student's creative talent",
      "Cultural Festivals honouring diversity, harmony and shared traditions",
      "Workshops and Guest Lectures connecting learners with artists and authors",
    ],
  },
  {
    eyebrow: "04 · Character & Leadership",
    title: "Personality development, emotional intelligence & service",
    text: "Through student governance, team-building and community service, learners grow into compassionate, poised young leaders ready to contribute to society.",
    image: samskruti4,
    alt: "Students collaborating on leadership and community projects at HKS",
    points: [
      "Personality Development Programmes and emotional intelligence sessions",
      "Leadership and Team-Building Activities across house and club events",
      "Student Leadership Council giving students an active role in school life",
      "Community Service Initiatives and Student Awards recognising character",
    ],
  },
];

const gallery = [
  { src: samskruti1, caption: "Public speaking and student clubs" },
  { src: samskruti2, caption: "Cultural festivals and heritage celebrations" },
  { src: samskruti3, caption: "Music, dance and stage performances" },
  { src: samskruti4, caption: "Leadership, community and collaboration" },
];

const artsAndClubs = [
  "Creative Arts & Design Studio",
  "Heritage & Cultural Learning Zone",
  "Music & Performing Arts",
  "Theatre & Drama",
  "Art & Craft",
  "Photography & Film Club",
  "Debate & Public Speaking Club",
  "Creative Writing, Reading & Literary Clubs",
];

const cultureAndLeadership = [
  "Annual Day Celebrations",
  "Cultural Festivals & Heritage Events",
  "Personality Development & Emotional Intelligence",
  "Leadership & Team-Building Activities",
  "Student Leadership Council",
  "Community Service Initiatives",
  "Workshops, Guest Lectures & School Newsletters",
  "Student Awards, Recognition & Initiatives",
];

function SamskritiVidya() {
  return (
    <>
      <PageHero
        crumb="Samskriti Vidya"
        eyebrow="Art, Culture & Expression"
        title="Expression, culture and connections"
        intro="Music, dance, theatre, visual arts, heritage celebrations, student clubs and leadership — rooting every child in culture while giving them confidence on every stage."
        image={samskruti2}
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

      <Section>
        <SectionHead center eyebrow="Four pillars" title="Arts, heritage & leadership at HKS" />
        <CardGrid cols={4} items={[
          { icon: <Palette className="h-6 w-6" />, title: "Visual Arts & Craft", text: "Drawing, painting, craft, design studio work, photography and filmmaking." },
          { icon: <Music className="h-6 w-6" />, title: "Music, Dance & Theatre", text: "Vocal and instrumental music, dance performances, theatre and stage expression." },
          { icon: <Mic className="h-6 w-6" />, title: "Clubs & Communication", text: "Debate, public speaking, creative writing, reading and literary clubs." },
          { icon: <Landmark className="h-6 w-6" />, title: "Heritage & Leadership", text: "Cultural festivals, Annual Day, community service and the Student Leadership Council." },
        ]} />
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Co-curricular life" title="Clubs, arts & celebrations" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Arts, Studios & Student Clubs</h3>
            <PillList items={artsAndClubs} />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Culture, Events & Leadership</h3>
            <PillList items={cultureAndLeadership} />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="On stage & together" title="Samskriti Vidya in action" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={photo.caption} loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/anubhav-vidya">Previous: Anubhav Vidya</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/campus-life">Explore Campus Life</Link></Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
