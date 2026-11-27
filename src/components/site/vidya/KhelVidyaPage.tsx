import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import khel1 from "@/assets/vidya-khel-1.jpg";
import khel4 from "@/assets/vidya-khel-4.jpg";
import { Button } from "@/components/ui/button";
import {
  VidyaEssentials,
  VidyaFaqSection,
  VidyaGlance,
  VidyaGradeFinder,
  VidyaTagline,
  VidyaTail,
  VidyaTrackNav,
  type FaqItem,
  type GlanceItem,
  type GradeBandContent,
} from "./VidyaShared";

type SportCat = "out" | "in" | "oly";

type SportItem = {
  name: string;
  cat: SportCat;
  desc: string;
  note?: boolean;
};

const SPORTS: SportItem[] = [
  { name: "Cricket", cat: "out", desc: "Batting, bowling and match play" },
  { name: "Football", cat: "out", desc: "Skills, fitness and team play" },
  { name: "Basketball", cat: "out", desc: "Shooting, passing and team games" },
  { name: "Volleyball", cat: "out", desc: "Teamwork, serving and rallies" },
  { name: "Kho-Kho", cat: "out", desc: "A traditional team game for all" },
  { name: "Kabaddi", cat: "out", desc: "A traditional contact team sport" },
  { name: "Athletics", cat: "out", desc: "Track and field training" },
  { name: "Skating", cat: "out", desc: "Fitness and balance on wheels" },
  { name: "Adventure & outdoor", cat: "out", desc: "Trips and outdoor challenges" },
  { name: "Horse riding", cat: "out", desc: "Training with available facilities", note: true },
  { name: "Chess", cat: "in", desc: "Thinking and strategy" },
  { name: "Table tennis", cat: "in", desc: "Quick reflexes and fun competition" },
  { name: "Badminton", cat: "in", desc: "Skill, fitness and tournaments" },
  { name: "Carrom", cat: "in", desc: "A classic indoor game for all ages" },
  { name: "Indoor games", cat: "in", desc: "Fun games for free periods" },
  { name: "Martial arts", cat: "in", desc: "Self-defence, discipline and confidence" },
  { name: "Aerobics", cat: "in", desc: "Energetic fitness sessions" },
  { name: "Yoga", cat: "in", desc: "Strength, flexibility and calm" },
  { name: "Meditation", cat: "in", desc: "Quiet time for focus and wellbeing" },
  { name: "Dance & movement", cat: "in", desc: "Dance for fitness and expression" },
  { name: "Archery", cat: "oly", desc: "Focus, discipline and precision" },
  { name: "Gymnastics", cat: "oly", desc: "Balance, strength and flexibility" },
  { name: "Swimming", cat: "oly", desc: "Training with available facilities", note: true },
  { name: "Other Olympic sports", cat: "oly", desc: "Training for Olympic-style events" },
];

const CAT_LABELS: Record<SportCat, string> = {
  out: "Outdoor",
  in: "Indoor & wellness",
  oly: "Olympic-style",
};

const WEEK_SCHEDULE = [
  {
    day: "Monday",
    tag: "",
    rows: [
      ["Assembly", "Breathing and stretching", "Five calm minutes to start the week"],
      ["PE", "Athletics drills", "Sprint starts and relay changeovers"],
      ["After school", "Football practice", "For children who chose football"],
    ],
  },
  {
    day: "Tuesday",
    tag: "",
    rows: [
      ["PE", "Badminton", "Grip, serve and footwork"],
      ["Lunch", "Indoor games", "Chess and carrom in the games room"],
      ["After school", "Skating", "Balance and braking basics"],
    ],
  },
  {
    day: "Wednesday",
    tag: "",
    rows: [
      ["PE", "Yoga", "Strength, flexibility and breathing"],
      ["Club", "Martial arts", "Discipline and self-defence"],
      ["After school", "Cricket nets", "Batting and bowling practice"],
    ],
  },
  {
    day: "Thursday",
    tag: "",
    rows: [
      ["PE", "Kho-Kho and Kabaddi", "Traditional team games"],
      ["Lunch", "Table tennis", "Quick reflexes"],
      ["After school", "Basketball", "Passing and shooting drills"],
    ],
  },
  {
    day: "Friday",
    tag: "",
    rows: [
      ["PE", "Fitness circuit", "Stamina, strength and balance"],
      ["Club", "Dance and movement", "Practice for the next showcase"],
      ["After school", "Meditation", "A calm end to the week"],
    ],
  },
  {
    day: "Saturday",
    tag: "Match day",
    sat: true,
    rows: [
      ["Morning", "Inter-school fixture", "On scheduled Saturdays"],
      ["Midday", "Team review", "What went well, what to practise"],
      ["Afternoon", "Rest", "Recovery matters too"],
    ],
  },
];

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Who takes part", value: "Every child, Nursery to Grade 12" },
  { icon: "clock", label: "When", value: "PE periods every week, plus team practice" },
  { icon: "pin", label: "Where", value: "Indoor and outdoor sports facilities on campus" },
  { icon: "teacher", label: "Led by", value: "Trained coaches and PE teachers" },
  { icon: "wallet", label: "Fees", value: "PE is part of the school programme" },
  { icon: "bag", label: "Your child brings", value: "PE uniform, sports shoes, water bottle & cap" },
];

const GRADES: GradeBandContent[] = [
  {
    focus: "Joyful movement and motor skills",
    doItems: [
      "Running, hopping and balancing games",
      "Ball skills: throwing, catching and kicking",
      "Dance and movement to music",
      "Simple yoga stretches and breathing",
    ],
    often: "Regular PE periods each week, kept short and playful.",
    home: "Better balance and coordination, and a child who wants to race you to the gate.",
  },
  {
    focus: "Trying every arena",
    doItems: [
      "Team games such as football, kho-kho and kabaddi",
      "Racquet basics in badminton and table tennis",
      "Athletics and skating",
      "Chess and carrom in indoor periods",
    ],
    often: "Regular PE periods each week across indoor and outdoor arenas.",
    home: "New favourite sports, and long stories about matches and teams.",
  },
  {
    focus: "Choosing a sport and training properly",
    doItems: [
      "Coached training in the sports your child chooses",
      "Rules, tactics and fair play",
      "Fitness basics: stamina, strength and flexibility",
      "Yoga and meditation for focus",
    ],
    often: "PE periods plus coached practice for chosen sports.",
    home: "More care about sleep, nutrition and practice routines.",
  },
  {
    focus: "Competing for the school",
    doItems: [
      "School teams in inter-school competitions and tournaments",
      "Advanced training in chosen sports",
      "Captain and vice-captain roles",
      "Yoga and breathing routines for exam focus",
    ],
    often: "PE periods, team practice and match days.",
    home: "A teenager who learns to balance practice and studies.",
  },
  {
    focus: "Fitness for life and leadership",
    doItems: [
      "Competitive sport for those who choose it",
      "Fitness and wellbeing routines that support board exams",
      "Leading warm-ups and mentoring juniors",
      "Helping organise Sports Day",
    ],
    often: "Regular PE, with flexible practice around board exams.",
    home: "Healthier routines and calmer exam seasons.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "My child isn't very sporty. Will they still enjoy Khel Vidya?",
    a: "Yes. The PE curriculum is about movement and confidence, not competition. Many children discover a love for chess, yoga, skating or dance rather than a team sport, and all of these count.",
  },
  {
    q: "How does my child choose a sport?",
    a: "Younger children try every arena through PE. From the middle grades, children pick the sports they want to train in, with guidance from coaches based on interest and aptitude.",
  },
  {
    q: "Are swimming and horse riding available?",
    a: "These are offered with available facilities. The school confirms arrangements, batches and any additional fees each term.",
  },
  {
    q: "What safety measures are in place?",
    a: "Sessions are supervised by trained coaches, warm-ups are mandatory and the school medical room provides first aid. Protective gear is used wherever the sport requires it.",
  },
  {
    q: "Can girls play every sport?",
    a: "Yes. Every sport and every team is open to all children, and coaches plan groups by age and skill.",
  },
  {
    q: "My child has asthma or another health condition. Can they take part?",
    a: "Almost always, with the right plan. Share your doctor's advice with the class teacher and coach, and they will adjust intensity, breaks and medication timing. The medical room keeps a copy of the plan.",
  },
  {
    q: "Will sport take time away from studies?",
    a: "PE is part of the timetable, so it does not replace lessons. For older students, practice and matches are planned around tests and board exams.",
  },
  {
    q: "Are there after-school batches and holiday camps?",
    a: "Coaching batches and summer/winter camps run as optional programmes outside regular hours, with timings and any fees shared with parents in advance.",
  },
];

export function KhelVidyaPage() {
  const [filter, setFilter] = useState<"all" | SportCat>("all");
  const [breathState, setBreathState] = useState<"idle" | "inhale" | "hold" | "exhale" | "done">("idle");
  const [breathLabel, setBreathLabel] = useState("Ready");
  const breathTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const weekRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (breathTimer.current) clearTimeout(breathTimer.current);
    };
  }, []);

  const toggleBreathing = () => {
    if (breathTimer.current) {
      clearTimeout(breathTimer.current);
      breathTimer.current = null;
      setBreathState("idle");
      setBreathLabel("Ready");
      return;
    }
    const seq: Array<["inhale" | "hold" | "exhale", string]> = [
      ["inhale", "Breathe in"],
      ["hold", "Hold"],
      ["exhale", "Breathe out"],
    ];
    let n = 0;
    const run = () => {
      if (n >= 15) {
        setBreathState("done");
        setBreathLabel("Complete");
        breathTimer.current = null;
        return;
      }
      const [cls, txt] = seq[n % 3]!;
      setBreathState(cls);
      setBreathLabel(txt);
      n += 1;
      breathTimer.current = setTimeout(run, 4000);
    };
    run();
  };

  const filteredSports = filter === "all" ? SPORTS : SPORTS.filter((s) => s.cat === filter);

  const scrollWeek = (dir: number) => {
    weekRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-track="khel">
      {/* 1. ASYMMETRIC DOCUMENTARY HERO ON CALM PAPER */}
      <section className="border-b border-border bg-background pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-navy">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Khel Vidya</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-mono tabular-nums text-navy">02 of 04</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Sports, fitness and wellbeing</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy md:text-6xl">
                Every child finds their game
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                From the cricket pitch to the chess board, from the running track to the yoga mat,
                Khel Vidya gives every child a sport to love, trained coaches to guide them and real
                matches to play.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button asChild className="h-11 rounded-lg px-6 text-sm font-medium">
                  <Link to="/admissions" hash="enquire">
                    Book a sports-campus tour
                    <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Button>
                <a
                  href="#arena"
                  className="inline-flex items-center gap-2 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Explore all 24 sports
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={khel1}
                  alt="Students playing basketball on the HKS Vidyamandir court"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Coached team play on the campus basketball court</span>
                <span className="shrink-0 font-mono tabular-nums">Plate 01</span>
              </figcaption>
            </figure>
          </div>

          <div className="vk-stats">
            <div>
              <b>24</b>
              <span>Sports &amp; disciplines</span>
              <small>Outdoor, indoor and Olympic-style</small>
            </div>
            <div>
              <b>3</b>
              <span>Arenas</span>
              <small>Outdoor, indoor &amp; wellness, Olympic</small>
            </div>
            <div>
              <b>Coached</b>
              <span>Training batches</span>
              <small>Trained coaches, regular practice</small>
            </div>
            <div>
              <b>Inter-school</b>
              <span>Competitions</span>
              <small>Matches and tournaments</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaTrackNav active="khel" />
      <VidyaGlance name="Khel Vidya" items={GLANCE} />

      {/* 2. FILTERABLE 24-SPORT ARENA DIRECTORY */}
      <section className="vk-band vk-ground-paper" id="arena">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Pick your arena</p>
              <h2>Twenty-four ways to play, train and grow</h2>
            </div>
            <p className="vk-lede">
              Filter by arena to see everything on offer. Every child takes part in the PE
              curriculum, then chooses the sports they want to take further.
            </p>
          </div>

          <div className="vk-chips" role="group" aria-label="Filter sports">
            {(
              [
                ["all", "All", 24],
                ["out", "Outdoor", 10],
                ["in", "Indoor & wellness", 10],
                ["oly", "Olympic-style", 4],
              ] as const
            ).map(([val, label, count]) => (
              <button
                key={val}
                type="button"
                aria-pressed={filter === val}
                onClick={() => setFilter(val)}
                className="vk-chip"
              >
                {label} <em>{count}</em>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filteredSports.map((sport) => (
              <article
                key={sport.name}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-navy/35"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs text-muted-foreground">{CAT_LABELS[sport.cat]}</span>
                  {sport.note && (
                    <span className="font-mono text-xs text-muted-foreground">*</span>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-medium text-navy">{sport.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground">{sport.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Offered with available facilities. Schedules are confirmed by the school each term.
          </p>
        </div>
      </section>

      <VidyaGradeFinder name="Khel Vidya" grades={GRADES} />

      {/* 3. ATHLETE PATHWAY & FOUR COACHING PILLARS */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The athlete pathway</p>
              <h2>From first kick to student leadership</h2>
            </div>
            <p className="vk-lede">
              Each stage builds on the last. Students who want to compete can climb all the way;
              every child gains fitness, teamwork and confidence.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-5">
            {[
              { step: "01", band: "Nursery – Grade 2", title: "Play", desc: "Running, balancing, throwing and catching through joyful movement games." },
              { step: "02", band: "Grades 3 – 5", title: "Explore", desc: "A taste of every arena through PE: team games, racquets and athletics." },
              { step: "03", band: "Grades 6 – 8", title: "Train", desc: "Children choose their sports and train in coached batches with clear skill goals." },
              { step: "04", band: "Grades 9 – 12", title: "Compete", desc: "School teams enter inter-school competitions and tournaments." },
              { step: "05", band: "Senior students", title: "Lead", desc: "Captains and sports leaders run warm-ups, mentor juniors and help organise Sports Day." },
            ].map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{p.step}</span>
                  <span className="text-xs text-muted-foreground">{p.band}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{p.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-border pt-14">
            <div className="vk-head">
              <div>
                <p className="vk-kicker">How we coach</p>
                <h2>Four pillars behind every match</h2>
              </div>
              <p className="vk-lede">
                Sport at HKS is taught like any other subject: with a curriculum, qualified coaches,
                proper spaces and real feedback.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Professional coaching", "Trained coaches and regular practice sessions, grouped by age and skill."],
                ["02", "Dedicated facilities", "Indoor and outdoor spaces where children play, train, stretch and unwind."],
                ["03", "Inter-school fixtures", "Matches and tournaments with other schools for genuine competitive experience."],
                ["04", "Structured PE syllabus", "Annual progression in fitness, motor skills, rules of the game and sportsmanship."],
              ].map(([num, title, desc]) => (
                <article key={num} className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{num}</span>
                  <h3 className="mt-3 font-display text-xl font-medium text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Sport teaches what no textbook can: how to win with grace, lose with courage and try again tomorrow."
        note="Every child plays. Every child learns to be a good teammate."
      />

      {/* 4. CALM BREATHING EXERCISE (Quiet Interactive Wellness Moment) */}
      <section className="vk-band vk-ground-navy">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`vk-orb ${
              breathState === "inhale"
                ? "is-inhale"
                : breathState === "hold"
                  ? "is-hold"
                  : ""
            }`}
          >
            <div className="vk-orb-ring" aria-hidden="true" />
            <div className="vk-orb-core" aria-hidden="true" />
            <div className="absolute text-center" aria-live="polite">
              <span className="block font-display text-2xl font-medium text-card">{breathLabel}</span>
              <span className="mt-1 block font-mono text-xs text-navy-foreground/70">
                4s in · 4s hold · 4s out
              </span>
            </div>
          </div>

          <div>
            <p className="vk-kicker">Wellness in Khel Vidya</p>
            <h2 className="font-display text-3xl font-medium text-card md:text-4xl">
              Strong bodies, calm minds
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-foreground/80">
              Fitness is only half the story. Yoga builds strength and flexibility, meditation gives
              children quiet time to focus, and aerobics and dance keep movement joyful.
            </p>
            <p className="mt-4 font-mono text-xs text-navy-foreground/70">
              Yoga · Meditation · Aerobics · Dance &amp; movement · Martial arts
            </p>
            <Button
              type="button"
              onClick={toggleBreathing}
              className="mt-7 h-11 rounded-lg px-6 text-sm font-medium"
            >
              {breathState === "idle"
                ? "Try one minute of calm breathing"
                : breathState === "done"
                  ? "Go again"
                  : "Stop"}
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SAMPLE WEEK HORIZONTAL SCROLLER */}
      <section className="vk-band border-b border-border bg-card" aria-label="A sample week in Khel Vidya">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">A week of movement</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                What a week can look like
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A sample week for Grade 6. Timetables differ by grade.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Scroll week left"
                onClick={() => scrollWeek(-1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Scroll week right"
                onClick={() => scrollWeek(1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div ref={weekRef} className="vk-hs">
            {WEEK_SCHEDULE.map((w) => (
              <article
                key={w.day}
                className={`flex min-h-[300px] flex-col gap-4 rounded-xl border p-5 ${
                  w.sat
                    ? "border-navy bg-navy text-card"
                    : "border-border bg-background text-foreground"
                }`}
              >
                <h3
                  className={`flex items-baseline justify-between font-display text-xl font-medium ${
                    w.sat ? "text-card" : "text-navy"
                  }`}
                >
                  <span>{w.day}</span>
                  {w.tag && (
                    <small className="font-mono text-xs text-gold">{w.tag}</small>
                  )}
                </h3>
                <ol className="space-y-3">
                  {w.rows.map(([time, title, note]) => (
                    <li
                      key={`${w.day}-${title}`}
                      className={`grid grid-cols-[80px_1fr] gap-3 border-t pt-3 ${
                        w.sat ? "border-white/20" : "border-border"
                      }`}
                    >
                      <time
                        className={`font-mono text-xs ${
                          w.sat ? "text-gold" : "text-muted-foreground"
                        }`}
                      >
                        {time}
                      </time>
                      <div>
                        <b className={`block text-sm font-medium ${w.sat ? "text-card" : "text-navy"}`}>
                          {title}
                        </b>
                        <span
                          className={`text-xs ${
                            w.sat ? "text-card/80" : "text-muted-foreground"
                          }`}
                        >
                          {note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPORTS DAY PROGRAMME & DOCUMENTARY PHOTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="vk-kicker">The big day</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Sports Day, lane by lane
            </h2>
            <p className="mt-3 text-base text-foreground">
              Our yearly celebration of races, games and team spirit across every house.
            </p>
            <ol className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
              {[
                ["01", "Opening", "March past", "Houses parade with flags, the torch is lit and the sports oath is taken."],
                ["02", "Track", "Races & relays", "Sprints, hurdles and relays for every age group, from tiny-tot races upwards."],
                ["03", "Field", "Jumps & throws", "Long jump, high jump and throws for older students."],
                ["04", "Display", "Yoga, drill & dance", "Whole-class displays showcasing months of practice."],
                ["05", "Finale", "Prize-giving", "Medals, house trophy and recognition for every participant."],
              ].map(([n, k, title, desc]) => (
                <li key={n} className="grid gap-2 px-5 py-4 sm:grid-cols-[44px_140px_1fr] sm:items-baseline">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{n}</span>
                  <div>
                    <span className="block text-xs text-muted-foreground">{k}</span>
                    <b className="font-display text-base font-medium text-navy">{title}</b>
                  </div>
                  <p className="text-sm text-foreground">{desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <figure>
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={khel4}
                  alt="Students passing a relay baton during athletics training at HKS"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Track relays and house athletics on campus</span>
                <span className="shrink-0 font-mono tabular-nums">Plate 02</span>
              </figcaption>
            </figure>

            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-medium text-muted-foreground">Beyond the school day</p>
              <h3 className="mt-1 font-display text-xl font-medium text-navy">
                After-school coaching &amp; holiday camps
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Optional batch-wise coaching (Cricket, Football, Basketball, Badminton, Skating,
                Swimming) and summer/winter multi-sport camps run outside regular hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "PE uniform and sports shoes on PE days",
          "A labelled water bottle",
          "A cap for outdoor sessions",
          "A small towel",
          "Protective gear recommended by your child's coach",
        ]}
        progress={[
          "PE remarks in every report card",
          "Team selections and match results in school updates",
          "Certificates for inter-school participation",
          "Sports Day performances families can watch",
        ]}
        join={[
          "Cheer from the stands on Sports Day",
          "Watch home matches against other schools",
          "Volunteer as a parent helper on Sports Day",
          "Share any health condition so coaches can plan safely",
        ]}
        safety={[
          "Warm-up and cool-down in every session",
          "Trained coaches supervise all practice",
          "First aid and a medical room on campus",
          "Water breaks and shaded play in hot weather",
          "Protective gear wherever the sport requires it",
          "Health plans shared with coaches in confidence",
        ]}
      />

      <VidyaFaqSection
        name="Khel Vidya"
        intro="Practical details on coaching, choosing sports, health and safety."
        faqs={FAQS}
      />

      <VidyaTail active="khel" />
    </div>
  );
}
