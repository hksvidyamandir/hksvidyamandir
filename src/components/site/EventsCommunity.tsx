import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  CalendarDays,
  Compass,
  Flag,
  GraduationCap,
  Heart,
  Landmark,
  Music,
  Smile,
  Sun,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import samskruti3 from "@/assets/vidya-samskruti-3.jpg";
import anubhav3 from "@/assets/vidya-anubhav-3.jpg";
import khel4 from "@/assets/vidya-khel-4.jpg";

type EventItem = {
  label: string;
  date: string;
  title: string;
  sub: string;
  text: string;
  highlights: string[];
  image: string;
  alt: string;
  to: string;
  cta: string;
  Icon: ComponentType<{ className?: string }>;
};

const events: EventItem[] = [
  {
    label: "Union Day – Annual Day",
    date: "Signature campus showcase",
    title: "Union Day & Annual Day",
    sub: "One school. A grand shared celebration.",
    text: "Our flagship annual gathering unites students, educators and families for theatrical productions, classical and contemporary music, choir showcases and the annual school chronicle — giving every grade a spotlight on stage.",
    highlights: [
      "Whole-school stage productions across Nursery to Grade 12",
      "Student anchors, choir, live percussion and classical ensembles",
      "Annual school report and family community showcase",
    ],
    image: img.campus2,
    alt: "Students performing on stage during Union Day and Annual Day at HKS",
    to: "/samskriti-vidya",
    cta: "Explore Samskriti Vidya",
    Icon: Users,
  },
  {
    label: "Cultural",
    date: "Expression & heritage",
    title: "Cultural Festivals & Stage Arts",
    sub: "Every talent deserves a stage.",
    text: "From Bharatanatyam, Carnatic vocal and folk traditions to theatre, rangoli, literary meets and music recitals, cultural days nurture aesthetic sensitivity, stage confidence and teamwork across houses.",
    highlights: [
      "Classical & folk dance, vocal and instrumental performances",
      "Inter-house drama, debate, elocution and visual art showcases",
      "Hands-on crafts, rangoli and heritage exhibitions",
    ],
    image: samskruti3,
    alt: "HKS students performing music and dance on campus",
    to: "/campus-life/celebrations-festivals",
    cta: "Cultural life at HKS",
    Icon: Music,
  },
  {
    label: "Sports",
    date: "Annual Sports Meet & Leagues",
    title: "Annual Sports Day & Tournaments",
    sub: "Team spirit. Stronger together.",
    text: "March-past ceremonies, track-and-field relays, martial arts and yoga displays, and inter-house championships in cricket, football, basketball, badminton, athletics and chess celebrate grit, fitness and fair play.",
    highlights: [
      "Ceremonial house march-past, torch relay and oath taking",
      "Track sprints, relays, field athletics and yoga mass displays",
      "Inter-house & inter-school leagues across 18+ disciplines",
    ],
    image: khel4,
    alt: "HKS students competing in relay races and sports day",
    to: "/khel-vidya",
    cta: "Explore Khel Vidya",
    Icon: Trophy,
  },
  {
    label: "Awards & Competitions",
    date: "Academic & co-curricular honours",
    title: "Awards, Olympiads & Competitions",
    sub: "Recognising effort, intellect and excellence.",
    text: "Investiture ceremonies, Annual Prize Day, Science and Robotics contests, Model UN debates and SOF / International Olympiad felicitations honour learners for scholarship, leadership, sportsmanship and character.",
    highlights: [
      "Academic toppers, subject excellence and 100% attendance awards",
      "Olympiad (IMO, NSO, IEO, ICSO, IGKO) & MUN honours",
      "Investiture Day swearing-in of Student Council leaders",
    ],
    image: img.topper1,
    alt: "HKS students recognised for academic and co-curricular awards",
    to: "/competitive-exams",
    cta: "Olympiads & Competitions",
    Icon: Award,
  },
  {
    label: "Fairs & Trips",
    date: "Discovery beyond campus walls",
    title: "Science Fairs, Exhibitions & Study Trips",
    sub: "Curiosity taken out into the real world.",
    text: "Campus Science, Math and Art Fairs pair with curated field trips — botanical parks, museums, heritage trails, industry workshops and national/international educational tours (ISRO, NASA, Singapore).",
    highlights: [
      "Annual Science, Robotics, Makerspace and Art exhibitions",
      "Age-graded local field trips, nature walks and museum visits",
      "Curated national & international educational study tours",
    ],
    image: anubhav3,
    alt: "HKS students participating in science fairs and educational field trips",
    to: "/anubhav-vidya",
    cta: "Explore Anubhav Vidya",
    Icon: Compass,
  },
];

const celebrations: EventItem[] = [
  {
    label: "Teachers' Day",
    date: "5 September · Dr. S. Radhakrishnan Jayanti",
    title: "Teachers' Day",
    sub: "Honouring the mentors who shape futures.",
    text: "Observed in memory of philosopher-statesman Dr. Sarvepalli Radhakrishnan, senior students step into classrooms for guided peer teaching while assemblies, gratitude letters and cultural tributes celebrate our educators.",
    highlights: [
      "Student-led gratitude assembly, music and theatrical skits",
      "Senior student mentorship sessions for younger grades",
      "Faculty felicitations and handwritten student appreciation notes",
    ],
    image: img.campus1,
    alt: "Students celebrating Teachers' Day with educators at HKS",
    to: "/campus-life/celebrations-festivals",
    cta: "All school celebrations",
    Icon: GraduationCap,
  },
  {
    label: "Children's Day",
    date: "14 November · Bal Diwas",
    title: "Children's Day",
    sub: "Celebrating curiosity, laughter and childhood.",
    text: "A joyful day designed entirely for our learners — featuring surprise stage performances by teachers, fun-fair activity stalls, storytelling circles, art corners and collaborative games across every grade.",
    highlights: [
      "Special songs, skits and dances performed by HKS teachers",
      "Campus fun stalls, games, art corners and class picnics",
      "Storytelling, puppet shows and creative talent showcases",
    ],
    image: img.acad4,
    alt: "Students celebrating Children's Day at HKS Vidyamandir",
    to: "/campus-life/celebrations-festivals",
    cta: "All school celebrations",
    Icon: Smile,
  },
  {
    label: "Gandhi Jayanti",
    date: "2 October · International Day of Non-Violence",
    title: "Gandhi Jayanti",
    sub: "Small acts. Meaningful change.",
    text: "Remembering Mahatma Gandhi and Lal Bahadur Shastri through bhajans, reflection on truth and ahimsa, campus Swachhata cleanliness drives, khadi awareness and neighbourhood community service.",
    highlights: [
      "All-faith prayer assembly and reflections on ahimsa and satya",
      "Campus Swachhata Abhiyan and zero-waste stewardship drives",
      "Art, essay and speech tributes on peaceful citizenship",
    ],
    image: img.campus4,
    alt: "HKS students gathered for Gandhi Jayanti assembly and service",
    to: "/krishi-vidya",
    cta: "Service & sustainability",
    Icon: Heart,
  },
  {
    label: "Independence Day",
    date: "15 August · National Holiday",
    title: "Independence Day",
    sub: "Celebrating freedom. Growing together.",
    text: "Flag hoisting, the National Anthem, ceremonial house parade and patriotic songs bring our campus together to honour India's freedom movement and inspire active, responsible citizenship.",
    highlights: [
      "Ceremonial tricolour hoisting and synchronized student parade",
      "Patriotic choir, freedom-fighter skits and tricolour crafts",
      "Student speeches on nation-building and civic duty",
    ],
    image: img.welcome,
    alt: "HKS students celebrating Independence Day on campus",
    to: "/campus-life/celebrations-festivals",
    cta: "National days at HKS",
    Icon: Flag,
  },
  {
    label: "Republic Day",
    date: "26 January · National Holiday",
    title: "Republic Day",
    sub: "Our Constitution. Our shared future.",
    text: "Commemorating the adoption of the Constitution of India with Preamble readings, guard-of-honour drills, constitutional quiz bowls and cultural tableaux celebrating India's unity in diversity.",
    highlights: [
      "Flag unfurling, march-past and reading of the Preamble",
      "Cultural tableaux representing Indian states and heritage",
      "Civics quizzes and debates on rights and responsibilities",
    ],
    image: img.campus3,
    alt: "HKS students in ceremonial formation for Republic Day",
    to: "/campus-life/celebrations-festivals",
    cta: "National days at HKS",
    Icon: BookOpen,
  },
  {
    label: "Kannada Rajyotsava",
    date: "1 November · Karnataka Formation Day",
    title: "Kannada Rajyotsava",
    sub: "Proud roots in Karnataka's rich heritage.",
    text: "Honouring Karnataka's language, literature and folk arts with Nada Geethe, Dollu Kunitha rhythms, Kannada poetry recitals, Janapada songs and cultural exhibits celebrating our home state.",
    highlights: [
      "Rendering of Jaya Bharata Jananiya Tanujate (Nada Geethe)",
      "Kannada poetry, storytelling, skits and folk music",
      "Exhibits on Karnataka's history, poets, monuments and science",
    ],
    image: samskruti2,
    alt: "Students celebrating Kannada Rajyotsava and Karnataka heritage",
    to: "/samskriti-vidya",
    cta: "Heritage & culture",
    Icon: Landmark,
  },
  {
    label: "Festivals & Holidays",
    date: "Year-round Indian festivals & observance days",
    title: "Festivals, Holidays & Special Observances",
    sub: "Unity in diversity across the academic calendar.",
    text: "Students learn empathy and cultural literacy by celebrating India's major festivals — Ugadi, Makara Sankranti, Deepavali, Dasara, Onam, Eid, Christmas and Holi — alongside World Environment Day (5 Jun), International Yoga Day (21 Jun) and National Science Day (28 Feb).",
    highlights: [
      "Cultural festivals: Ugadi, Sankranti, Dasara, Deepavali, Onam, Eid & Christmas",
      "Global & CBSE days: Environment Day, Yoga Day, National Science & Math Days",
      "Eco-friendly celebrations, rangoli, harvest sharing and community joy",
    ],
    image: img.acad3,
    alt: "Students celebrating festivals, yoga day and cultural holidays at HKS",
    to: "/campus-life/celebrations-festivals",
    cta: "Explore celebrations",
    Icon: Sun,
  },
];

export function EventsCommunity() {
  const [community, setCommunity] = useState(0);
  const [event, setEvent] = useState(0);
  const [celebration, setCelebration] = useState(0);
  const choices = community === 0 ? events : celebrations;
  const selected = community === 0 ? event : celebration;
  const setSelected = community === 0 ? setEvent : setCelebration;
  const story = choices[selected] ?? choices[0]!;

  return (
    <section className="evc-section">
      <div className="container-site">
        <div className="evc-head">
          <span className="home-kicker">Events &amp; celebration</span>
          <h2>School is better, together</h2>
        </div>

        <div className={`evc-folders is-${community}`}>
          <div className="evc-tabs" role="tablist" aria-label="Events and celebration">
            {[
              { label: "Event Day", Icon: CalendarDays },
              { label: "Celebration", Icon: Calendar },
            ].map(({ label, Icon }, i) => (
              <Button
                variant="ghost"
                key={label}
                role="tab"
                id={`evc-tab-${i}`}
                aria-selected={community === i}
                aria-controls="evc-panel"
                className={`evc-tab ${community === i ? "is-active" : ""}`}
                tabIndex={community === i ? 0 : -1}
                onClick={() => setCommunity(i)}
                onKeyDown={(e) => {
                  const next =
                    e.key === "ArrowRight" || e.key === "ArrowLeft"
                      ? 1 - i
                      : e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 1
                          : undefined;
                  if (next === undefined) return;
                  e.preventDefault();
                  setCommunity(next);
                  document.getElementById(`evc-tab-${next}`)?.focus();
                }}
              >
                <Icon aria-hidden="true" />
                {label}
              </Button>
            ))}
          </div>

          <div
            className="evc-panel"
            id="evc-panel"
            role="tabpanel"
            aria-labelledby={`evc-tab-${community}`}
          >
            <div
              className="evc-event-tabs"
              role="tablist"
              aria-label={community === 0 ? "School event days" : "School celebrations and holidays"}
            >
              {choices.map(({ label, Icon }, i) => (
                <Button
                  key={label}
                  variant="ghost"
                  role="tab"
                  id={`evc-choice-${community}-${i}`}
                  aria-selected={selected === i}
                  aria-controls="evc-event-story"
                  tabIndex={selected === i ? 0 : -1}
                  className="evc-event-tab"
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => {
                    const next =
                      e.key === "ArrowRight"
                        ? (i + 1) % choices.length
                        : e.key === "ArrowLeft"
                          ? (i + choices.length - 1) % choices.length
                          : e.key === "Home"
                            ? 0
                            : e.key === "End"
                              ? choices.length - 1
                              : undefined;
                    if (next === undefined) return;
                    e.preventDefault();
                    setSelected(next);
                    document.getElementById(`evc-choice-${community}-${next}`)?.focus();
                  }}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>

            <div
              className="evc-story"
              id="evc-event-story"
              role="tabpanel"
              aria-labelledby={`evc-choice-${community}-${selected}`}
            >
              <div className="evc-copy">
                <span className="evc-date">{story.date}</span>
                <h3>
                  {story.title}
                  <span>{story.sub}</span>
                </h3>
                <p>{story.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-navy-foreground/85">
                  {story.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="home-action">
                  <Link to={story.to}>
                    {story.cta}
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
              <div className="evc-media">
                <img src={story.image} alt={story.alt} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
