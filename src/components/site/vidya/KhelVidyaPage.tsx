import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import {
  DoodleMarginMotif,
  DoodleUnderline,
  MotionToggleButton,
} from "@/components/site/EducationDoodles";
import {
  useInViewOnce,
  VidyaEssentials,
  VidyaFaqSection,
  VidyaGlance,
  VidyaGradeFinder,
  VidyaTagline,
  VidyaTail,
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

const CAT_COLORS: Record<SportCat, string> = {
  out: "#2f8a4f",
  in: "#4352d1",
  oly: "#d9482b",
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

const SPORTS_DAY_LANES = [
  { tag: "Opening", title: "March past", desc: "Houses parade with flags, the torch is lit and the sports oath is taken.", speed: 1.0 },
  { tag: "Track", title: "Races & relays", desc: "Sprints, hurdles and relays for every age group, from tiny-tot races upwards.", speed: 0.86 },
  { tag: "Field", title: "Jumps & throws", desc: "Long jump, high jump and throws for older students.", speed: 0.94 },
  { tag: "Display", title: "Yoga, drill & dance", desc: "Whole-class displays that show off months of practice.", speed: 0.78 },
  { tag: "Finale", title: "Prize-giving", desc: "Medals, house trophy and a cheer for every participant.", speed: 1.05 },
] as const;

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

function ArenaIcon({ cat }: { cat: SportCat }) {
  if (cat === "out") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3c3 3 3 15 0 18M3 12h18" />
      </svg>
    );
  }
  if (cat === "in") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <circle cx="7" cy="10" r="4" />
      <circle cx="17" cy="10" r="4" />
      <circle cx="12" cy="15" r="4" />
    </svg>
  );
}

export function KhelVidyaPage() {
  const [filter, setFilter] = useState<"all" | SportCat>("all");
  const [lapText, setLapText] = useState("00:00.0");
  const [breathState, setBreathState] = useState<"idle" | "inhale" | "hold" | "exhale" | "done">("idle");
  const [breathLabel, setBreathLabel] = useState("Ready");
  const [laneProgress, setLaneProgress] = useState(0);
  const [trackPaused, setTrackPaused] = useState(false);

  const breathTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const weekRef = useRef<HTMLDivElement>(null);
  const lanesRef = useRef<HTMLDivElement>(null);
  const podiumReveal = useInViewOnce<HTMLDivElement>(0.2);
  const pillarsReveal = useInViewOnce<HTMLDivElement>(0.2);

  /* Live lap timer */
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setLapText("00:58.4");
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const s = ((t - t0) / 1000) % 60;
      setLapText(`00:${s.toFixed(1).padStart(4, "0")}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Sports Day scroll-linked runners */
  useEffect(() => {
    const el = lanesRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.55)));
      setLaneProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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
        setBreathLabel("Well done");
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
    weekRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-track="khel">
      {/* 1. UNIFIED DARK STADIUM HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="vk-khero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-white">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Khel Vidya</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#ffd27a]">
                Sports, fitness &amp; wellbeing
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Every child finds their game
              </h1>
              <p className="vk-khero-lede mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                24 sports and wellness disciplines with trained coaches, outdoor grounds, indoor
                arenas and inter-school teams.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#arena"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Explore all 24 sports
                  <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <Link
                  to="/application-form"
                  className="inline-flex items-center gap-2 border-b-2 border-[#ffd27a] pb-1 text-sm font-medium text-white transition-colors hover:text-[#ffd27a]"
                >
                  Online Application Form
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroEnquiryCard
                context="Khel Vidya — Sports, Fitness & Wellbeing"
                title="Tour Our Sports Grounds"
                subtitle="Book a campus visit & get the 2026–27 fee & sports curriculum guide."
                ctaLabel="Book a Sports Campus Tour"
                accentColor="#d9482b"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>24</b>
              <span>Sports &amp; disciplines</span>
              <small>Outdoor, indoor &amp; Olympic-style</small>
            </div>
            <div>
              <b>3</b>
              <span>Arenas</span>
              <small>Outdoor, indoor &amp; wellness</small>
            </div>
            <div>
              <b>Coached</b>
              <span>Training batches</span>
              <small>Trained coaches, regular practice</small>
            </div>
            <div>
              <b>Inter-school</b>
              <span>Competitions</span>
              <small>Matches &amp; tournaments</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Khel Vidya" items={GLANCE} />

      {/* 2. SPORTS MARQUEE TICKER */}
      <div className="vk-ticker" aria-hidden="true">
        <div className="vk-marquee">
          <div className="vk-marquee-track">
            {SPORTS.map((s) => (
              <span key={`m1-${s.name}`}>{s.name}</span>
            ))}
          </div>
          <div className="vk-marquee-track">
            {SPORTS.map((s) => (
              <span key={`m2-${s.name}`}>{s.name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 2B. ANIMATED RUNNING TRACK & LIVE LAP TIMER SHOWCASE (MOVED BELOW HERO) */}
      <section className="vk-band vk-ground-paper border-b border-border">
        <div className="container-site">
          <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-[#181c55] p-6 text-white shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12">
            <DoodleMarginMotif
              theme="sports"
              className="absolute -bottom-8 -left-6 h-40 w-40 text-white opacity-[0.07]"
            />
            <div className="relative z-10 lg:col-span-5">
              <p className="vk-kicker" style={{ color: "#ffd27a" }}>Active every week</p>
              <h2 className="font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
                Built into the timetable, not squeezed after school
              </h2>
              <DoodleUnderline className="mt-2.5 w-28" color="#ffd27a" />
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                Every student rotates through athletics, team games, indoor sports and mindful
                movement with dedicated coaches on campus.
              </p>
              <div className="mt-5">
                <MotionToggleButton
                  paused={trackPaused}
                  onToggle={() => setTrackPaused((p) => !p)}
                  tone="dark"
                />
              </div>
            </div>
            <div className={`vk-trackfig relative z-10 lg:col-span-7 ${trackPaused ? "is-motion-paused" : ""}`}>
              <svg
                viewBox="0 0 560 480"
                role="img"
                aria-label="Animated running track with runners in three lanes and bouncing ball"
              >
                <defs>
                  <linearGradient id="kv-tr" x1="0" x2="1">
                    <stop offset="0" stopColor="#c9472b" />
                    <stop offset="1" stopColor="#e0623e" />
                  </linearGradient>
                </defs>
                <rect x="20" y="70" width="520" height="340" rx="170" fill="url(#kv-tr)" />
                <rect x="110" y="160" width="340" height="160" rx="80" fill="#2f8a4f" />
                <rect x="150" y="190" width="260" height="100" rx="50" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <line x1="280" y1="160" x2="280" y2="320" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <circle cx="280" cy="240" r="22" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <g>
                  <path className="lane" d="M190 92 H370 A148 148 0 0 1 370 388 H190 A148 148 0 0 1 190 92Z" />
                  <path className="lane" d="M190 114 H370 A126 126 0 0 1 370 366 H190 A126 126 0 0 1 190 114Z" />
                  <path className="lane" d="M190 136 H370 A104 104 0 0 1 370 344 H190 A104 104 0 0 1 190 136Z" />
                </g>
                <line x1="300" y1="70" x2="300" y2="160" stroke="#ffffff" strokeWidth="4" />
                <g>
                  <circle r="8" fill="#ffffff">
                    <animateMotion dur="7s" repeatCount="indefinite" path="M190 103 H370 A137 137 0 0 1 370 377 H190 A137 137 0 0 1 190 103Z" />
                  </circle>
                  <circle r="8" fill="#ffd0a8">
                    <animateMotion dur="7.6s" repeatCount="indefinite" path="M190 125 H370 A115 115 0 0 1 370 355 H190 A115 115 0 0 1 190 125Z" />
                  </circle>
                  <circle r="8" fill="#ee8a2c">
                    <animateMotion dur="8.3s" repeatCount="indefinite" path="M190 147 H370 A93 93 0 0 1 370 333 H190 A93 93 0 0 1 190 147Z" />
                  </circle>
                </g>
                <g transform="translate(250 230)">
                  <circle r="13" fill="#ffffff" />
                  <path d="M-9 -9 Q0 0 -9 9 M9 -9 Q0 0 9 9" stroke="#c9472b" strokeWidth="2" fill="none">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
                  </path>
                  <animateTransform attributeName="transform" type="translate" values="250 230;320 210;250 250;250 230" dur="4s" repeatCount="indefinite" />
                </g>
              </svg>
              <div className="vk-scoreboard" aria-hidden="true">
                Lap timer
                <b>{lapText}</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE 24-SPORT ARENA DIRECTORY */}
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

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredSports.map((sport) => {
              const col = CAT_COLORS[sport.cat];
              return (
                <article
                  key={sport.name}
                  className="vk-fadeswap group relative flex min-h-[152px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-[0.18] transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: col }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${col} 14%, white)`,
                        color: col,
                      }}
                    >
                      <ArenaIcon cat={sport.cat} />
                    </span>
                    {sport.note && (
                      <span className="rounded-full bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground">
                        *
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-medium text-navy">{sport.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{sport.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Offered with available facilities. Schedules are confirmed by the school each term.
          </p>
        </div>
      </section>

      <VidyaGradeFinder name="Khel Vidya" grades={GRADES} />

      {/* 4. RISING PODIUM ATHLETE PATHWAY */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The athlete pathway</p>
              <h2>From first kick to the podium</h2>
            </div>
            <p className="vk-lede">
              Each stage builds on the last. Students who want to compete can climb all the way;
              every child gains fitness, teamwork and confidence.
            </p>
          </div>

          <div ref={podiumReveal.ref} className={`vk-podium ${podiumReveal.inView ? "is-in" : ""}`}>
            {[
              { i: 0, h: "76px", band: "Nursery – Grade 2", title: "Play", desc: "Running, balancing, throwing and catching through joyful movement games." },
              { i: 1, h: "130px", band: "Grades 3 – 5", title: "Explore", desc: "A taste of every arena through PE: team games, racquets and athletics." },
              { i: 2, h: "184px", band: "Grades 6 – 8", title: "Train", desc: "Children choose their sports and train in coached batches with clear skill goals." },
              { i: 3, h: "238px", band: "Grades 9 – 12", title: "Compete", desc: "School teams enter inter-school competitions and tournaments." },
              { i: 4, h: "292px", band: "Senior students", title: "Lead", desc: "Captains and sports leaders run warm-ups, mentor juniors and help organise Sports Day." },
            ].map((p) => (
              <div key={p.title} className="vk-pstep" style={{ ["--i" as string]: p.i }}>
                <div className="pb-4">
                  <small className="text-xs font-semibold" style={{ color: "var(--vt)" }}>
                    {p.band}
                  </small>
                  <h3 className="mt-1 font-display text-2xl font-medium text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="blk" style={{ ["--h" as string]: p.h }}>
                  {p.i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOUR SCOREBOARD COACHING PILLARS */}
      <section className="vk-band vk-ground-navy">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">How we coach</p>
              <h2>Four pillars behind every match</h2>
            </div>
            <p className="vk-lede">
              Sport at HKS is taught like any other subject: with a curriculum, qualified coaches,
              proper spaces and real assessment.
            </p>
          </div>
          <div ref={pillarsReveal.ref} className={`vk-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${pillarsReveal.inView ? "is-in" : ""}`}>
            {[
              ["Coach", "Professional coaching & training", "Trained coaches and regular practice sessions, batch-wise by age and skill."],
              ["Space", "Indoor & outdoor facilities", "Dedicated indoor and outdoor spaces where children play, train, stretch and unwind."],
              ["Match", "Inter-school competitions", "Matches and tournaments with other schools that give children real competitive experience."],
              ["PE", "Physical education curriculum", "A planned PE syllabus for each year: fitness, motor skills, rules and sportsmanship."],
            ].map(([led, title, desc], idx) => (
              <article
                key={led}
                style={{ ["--ri" as string]: idx }}
                className="rounded-2xl border border-white/15 bg-[#0f1240] p-6 transition-colors hover:border-[#ffd27a]/60"
              >
                <div className="font-display text-4xl font-medium text-[#ffd27a]">{led}</div>
                <h3 className="mt-4 font-display text-xl font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Sport teaches what no textbook can: how to *win *with *grace, *lose *with *courage and *try *again *tomorrow."
        note="Every child plays. Every child learns to be a good teammate."
      />

      {/* 6. CALM BREATHING INTERACTIVE ORB */}
      <section className="vk-band" style={{ backgroundColor: "#1b1f5a", color: "#c5c8ea" }}>
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
            <div
              className={`vk-orb-core ${breathState === "idle" ? "is-idle" : ""}`}
              aria-hidden="true"
            />
            <div className="absolute text-center" aria-live="polite">
              <span className="block font-display text-2xl font-medium text-white drop-shadow">
                {breathLabel}
              </span>
              <span className="mt-1 block font-mono text-xs text-white/75">
                4s in · 4s hold · 4s out
              </span>
            </div>
          </div>

          <div>
            <p className="vk-kicker" style={{ color: "#ffd27a" }}>Wellness in Khel Vidya</p>
            <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
              Strong bodies, calm minds
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
              Fitness is only half the story. Yoga builds strength and flexibility, meditation gives
              children quiet time to focus, and aerobics and dance keep movement joyful.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Yoga", "Meditation", "Aerobics", "Dance & movement", "Martial arts"].map((w) => (
                <span
                  key={w}
                  className="rounded-lg border border-white/25 px-3 py-1.5 text-xs font-medium text-white"
                >
                  {w}
                </span>
              ))}
            </div>
            <Button
              type="button"
              onClick={toggleBreathing}
              className="mt-7 h-11 rounded-lg bg-[#ee8a2c] px-6 text-sm font-medium text-white hover:bg-[#ffd27a] hover:text-[#1b1f5a]"
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

      {/* 7. SAMPLE WEEK SCROLLER */}
      <section className="vk-band vk-ground-cream border-b border-border" aria-label="A sample week in Khel Vidya">
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
                className={`flex min-h-[300px] flex-col gap-4 rounded-2xl border p-5 ${
                  w.sat
                    ? "border-[#d9482b] bg-[#d9482b] text-white"
                    : "border-border bg-card text-foreground"
                }`}
              >
                <h3
                  className={`flex items-baseline justify-between font-display text-xl font-medium ${
                    w.sat ? "text-white" : "text-navy"
                  }`}
                >
                  <span>{w.day}</span>
                  {w.tag && <small className="font-mono text-xs text-white/90">{w.tag}</small>}
                </h3>
                <ol className="space-y-3">
                  {w.rows.map(([time, title, note]) => (
                    <li
                      key={`${w.day}-${title}`}
                      className={`grid grid-cols-[78px_1fr] gap-3 border-t pt-3 ${
                        w.sat ? "border-white/25" : "border-border"
                      }`}
                    >
                      <time
                        className={`font-mono text-xs ${
                          w.sat ? "text-white/85" : "text-muted-foreground"
                        }`}
                      >
                        {time}
                      </time>
                      <div>
                        <b className={`block text-sm font-medium ${w.sat ? "text-white" : "text-navy"}`}>
                          {title}
                        </b>
                        <span className={`text-xs ${w.sat ? "text-white/85" : "text-muted-foreground"}`}>
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

      {/* 8. SPORTS DAY ANIMATED SCROLL-LINKED LANES */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The big day</p>
              <h2>Sports Day, lane by lane</h2>
            </div>
            <p className="vk-lede">
              Our yearly celebration of races, games and team spirit. Scroll and watch the runners
              move down the lanes.
            </p>
          </div>

          <div ref={lanesRef} className="vk-lanes">
            {SPORTS_DAY_LANES.map((lane) => {
              const pct = Math.min(94, Math.round(laneProgress * lane.speed * 94));
              return (
                <div key={lane.title} className="vk-lane-row">
                  <div>
                    <small className="block text-xs font-semibold text-white/80">{lane.tag}</small>
                    <b className="font-display text-xl font-medium text-white">{lane.title}</b>
                  </div>
                  <p className="text-sm text-white/90">{lane.desc}</p>
                  <i
                    className="vk-runner"
                    aria-hidden="true"
                    style={{ left: `calc(12px + ${pct}% * 0.92)` }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6">
              <span className="rounded-md bg-[#fff3e3] px-2.5 py-1 text-xs font-medium text-[#c4631a]">
                Optional batches
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-navy">
                After-school coaching
              </h3>
              <p className="mt-2 text-sm text-foreground">
                Batch-wise coaching by age and skill level, with regular practice and match play.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Cricket", "Football", "Basketball", "Badminton", "Skating", "Swimming"].map((s) => (
                  <span key={s} className="rounded-lg border border-border bg-background px-3 py-1 text-xs font-medium text-navy">
                    {s}
                  </span>
                ))}
              </div>
            </article>
            <article className="rounded-2xl bg-ink p-6 text-white">
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gold">
                Holiday programmes
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">
                Summer and winter camps
              </h3>
              <p className="mt-2 text-sm text-[#c5c8ea]">
                Holiday camps that keep children active and learning a new sport during school breaks.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Multi-sport", "Athletics", "Skating", "Yoga", "Martial arts"].map((s) => (
                  <span key={s} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {s}
                  </span>
                ))}
              </div>
            </article>
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
