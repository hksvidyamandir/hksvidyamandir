import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Dumbbell, Flame, Trophy } from "lucide-react";
import khel1 from "@/assets/vidya-khel-1.jpg";
import khel2 from "@/assets/vidya-khel-2.jpg";
import khel3 from "@/assets/vidya-khel-3.jpg";
import khel4 from "@/assets/vidya-khel-4.jpg";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/khel-vidya")({
  head: () => seo(
    "Khel Vidya - Sports, Fitness & Physical Education",
    "Explore Khel Vidya at HKS Vidyamandir: 25+ sports and fitness areas including outdoor sports, indoor games, yoga, martial arts and Olympic disciplines.",
    "/khel-vidya",
  ),
  component: KhelVidya,
});

const alternatingSections = [
  {
    eyebrow: "01 · Structured PE & Coaching",
    title: "Professional coaching, curriculum & tournaments",
    text: "Khel Vidya integrates daily physical education with specialist coaching so every student builds stamina, technique and sportsmanship across the academic year.",
    image: khel4,
    alt: "Students participating in athletics and relays at HKS",
    points: [
      "Professional coaching and regular structured practice sessions",
      "Expansive indoor and outdoor sports facilities across campus",
      "Year-wise Physical Education curriculum for every age group",
      "Inter-school competitions, tournaments and annual Sports Day",
    ],
  },
  {
    eyebrow: "02 · Outdoor Sports",
    title: "Team play, traditional games & outdoor adventure",
    text: "From cricket pitches and basketball courts to traditional Indian games, skating, horse riding and outdoor challenges, students learn teamwork and resilience under open skies.",
    image: khel1,
    alt: "Students playing outdoor team sports at HKS",
    points: [
      "Cricket, Football, Basketball and Volleyball match play",
      "Kho-Kho and Kabaddi celebrating traditional Indian team grit",
      "Skating for balance and fitness on wheels",
      "Horse riding and adventure outdoor activities building courage",
    ],
  },
  {
    eyebrow: "03 · Indoor Games & Wellness",
    title: "Strategy, reflexes, yoga & martial arts",
    text: "Indoor sports and mindful wellness programmes strengthen concentration, emotional balance, flexibility and self-discipline alongside physical fitness.",
    image: khel2,
    alt: "Students playing indoor table tennis at HKS",
    points: [
      "Chess, Table Tennis, Badminton, Carrom and indoor games",
      "Yoga and Meditation for strength, flexibility and calm focus",
      "Aerobics, Dance and Movement for energetic fitness and expression",
      "Martial Arts nurturing self-defence, discipline and confidence",
    ],
  },
  {
    eyebrow: "04 · Olympic Disciplines",
    title: "Precision, speed & Olympic-style training",
    text: "Dedicated pathways in track and field, archery, swimming and gymnastics encourage students to set personal goals and pursue sporting excellence.",
    image: khel3,
    alt: "Students practising outdoor wellness and athletic training at HKS",
    points: [
      "Athletics covering track races, relays and field events",
      "Archery developing focus, discipline and steady precision",
      "Swimming and Gymnastics for endurance, balance and core strength",
      "Structured training pathways for Olympic-style sports",
    ],
  },
];

const gallery = [
  { src: khel1, caption: "Outdoor team sports and coaching" },
  { src: khel2, caption: "Indoor games and reflexes" },
  { src: khel3, caption: "Yoga, mindfulness and wellbeing" },
  { src: khel4, caption: "Athletics, relays and team spirit" },
];

const outdoorSports = ["Cricket", "Football", "Basketball", "Volleyball", "Kho-Kho", "Kabaddi", "Skating", "Horse Riding", "Adventure & Outdoor Activities"];
const indoorAndOlympic = ["Chess", "Table Tennis", "Badminton", "Carrom", "Aerobics", "Yoga & Meditation", "Dance & Movement", "Martial Arts", "Athletics", "Archery", "Swimming", "Gymnastics"];

function KhelVidya() {
  return (
    <>
      <PageHero
        crumb="Khel Vidya"
        eyebrow="Sports & Physical Education · 25 Areas"
        title="Movement, wellbeing and team spirit"
        intro="Strong bodies and sharp minds — structured physical education, professional coaching, indoor and outdoor sports, wellness and Olympic disciplines."
        image={khel1}
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
        <SectionHead center eyebrow="Four pillars" title="Sports & fitness across campus" />
        <CardGrid cols={4} items={[
          { icon: <Trophy className="h-6 w-6" />, title: "Outdoor Team Sports", text: "Cricket, football, basketball, volleyball, kho-kho, kabaddi, skating and horse riding." },
          { icon: <Dumbbell className="h-6 w-6" />, title: "Indoor Games", text: "Chess, table tennis, badminton, carrom and indoor recreation building strategy and reflexes." },
          { icon: <Flame className="h-6 w-6" />, title: "Wellness & Martial Arts", text: "Yoga, meditation, aerobics, dance and movement, and martial arts for strength and calm." },
          { icon: <Award className="h-6 w-6" />, title: "Olympic Disciplines", text: "Athletics, archery, swimming, gymnastics and structured tournament preparation." },
        ]} />
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Disciplines" title="Outdoor, indoor & Olympic sports" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Outdoor Sports & Adventure</h3>
            <PillList items={outdoorSports} />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy">Indoor Games, Wellness & Olympic Sports</h3>
            <PillList items={indoorAndOlympic} />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead center eyebrow="On the field" title="Khel Vidya in action" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={photo.src} alt={photo.caption} loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/krishi-vidya">Previous: Krishi Vidya</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/anubhav-vidya">Next: Anubhav Vidya (Skills & Labs)</Link></Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
