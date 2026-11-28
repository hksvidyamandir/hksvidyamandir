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

const WELCOME_WORDS = [
  { text: "Welcome", label: "English", lang: "en" },
  { text: "स्वागत है", label: "हिन्दी", lang: "hi" },
  { text: "ಸುಸ್ವಾಗತ", label: "ಕನ್ನಡ", lang: "kn" },
] as const;

const FESTIVAL_MONTHS = [
  { month: "January", season: "Winter", accent: "#ee8a2c", items: [["Makara Sankranti", "Harvest festival: ellu-bella and kite making", "#ee8a2c"], ["Republic Day", "Flag hoisting and cultural programme", "#2f7d4a"]] },
  { month: "February", season: "Winter", accent: "#4352d1", items: [["Science & reading week", "Heritage science stories and book fair", "#4352d1"]] },
  { month: "March", season: "Summer", accent: "#2f7d4a", items: [["Ugadi", "Kannada New Year: bevu-bella and new beginnings*", "#2f7d4a"], ["Holi", "Colours, songs and spring*", "#e86a92"], ["Eid al-Fitr", "Sharing, kindness and community*", "#3a7d6b"]] },
  { month: "April", season: "Summer", accent: "#4352d1", items: [["Ambedkar Jayanti", "The Constitution, equality and justice", "#4352d1"]] },
  { month: "May", season: "Summer", accent: "#ee8a2c", items: [["Summer camp", "Art, music and dance holiday camp", "#ee8a2c"]] },
  { month: "June", season: "Monsoon", accent: "#4352d1", items: [["International Yoga Day", "Whole-school yoga with Khel Vidya", "#4352d1"]] },
  { month: "July", season: "Monsoon", accent: "#a3264f", items: [["Guru Purnima", "Honouring teachers and mentors*", "#a3264f"]] },
  { month: "August", season: "Monsoon", accent: "#ee8a2c", items: [["Independence Day", "Patriotic songs, dance and drama", "#ee8a2c"], ["Raksha Bandhan", "Friendship and care", "#e86a92"]] },
  { month: "September", season: "Monsoon", accent: "#c4631a", items: [["Ganesh Chaturthi", "Clay eco-Ganesha workshop*", "#c4631a"], ["Teachers' Day", "Students lead the classes", "#4352d1"]] },
  { month: "October", season: "Festive season", accent: "#a3264f", items: [["Dasara", "Gombe habba doll display and Mysuru heritage*", "#a3264f"], ["Gandhi Jayanti", "Service and cleanliness drive", "#2f7d4a"]] },
  { month: "November", season: "Festive season", accent: "#ffb02e", items: [["Kannada Rajyotsava", "Celebrating Karnataka on 1 November", "#ffb02e"], ["Deepavali", "Diyas, rangoli and a green celebration*", "#ee8a2c"], ["Children's Day", "Teachers perform for students", "#4352d1"]] },
  { month: "December", season: "Festive season", accent: "#2f7d4a", items: [["Christmas", "Carols and a season of giving", "#2f7d4a"], ["Annual Day", "Our biggest stage of the year", "#a3264f"]] },
] as const;

const ANNUAL_ACTS = [
  { num: "01", tag: "Act 1 · Term 1", title: "Every child auditions", text: "Nobody is left in the wings. Teachers find a role for every child — singing, dancing, acting, narrating or backstage." },
  { num: "02", tag: "Act 2", title: "Rehearsals begin", text: "Weekly rehearsals build teamwork, memory and discipline. Older students help direct and choreograph younger groups." },
  { num: "03", tag: "Act 3", title: "Sets, costumes and music", text: "The art and craft clubs design sets and props, and the music group rehearses live accompaniment." },
  { num: "04", tag: "Act 4", title: "Dress rehearsal", text: "A full run-through on the real stage, with lights and sound, for an audience of younger students." },
  { num: "05", tag: "Act 5 · Curtain up", title: "Annual Day", text: "Families fill the hall to celebrate a year of student talent, and every child takes a bow." },
] as const;

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Who takes part", value: "Every child, Nursery to Grade 12" },
  { icon: "clock", label: "When", value: "Weekly music, art & language periods, plus clubs" },
  { icon: "pin", label: "Where", value: "Creative Arts Studio, Heritage zone & school stage" },
  { icon: "teacher", label: "Led by", value: "Music, dance, art and language teachers" },
  { icon: "wallet", label: "Fees", value: "Part of the school programme" },
  { icon: "bag", label: "Your child brings", value: "An art apron; costume details shared in advance" },
];

const GRADES: GradeBandContent[] = [
  {
    focus: "Rhythm, colour and stories",
    doItems: [
      "Rhymes and action songs",
      "Finger painting, clay and simple crafts",
      "Movement and dance to music",
      "Festival stories and dress-up days",
    ],
    often: "Music, movement and art through the week, woven into class themes.",
    home: "Songs you'll hear all week, and new art for every wall.",
  },
  {
    focus: "Finding a voice",
    doItems: [
      "Vocal basics or a first instrument",
      "Class plays and storytelling",
      "Drawing, painting and traditional crafts",
      "Recitation in English, Hindi and Kannada",
    ],
    often: "Weekly music, dance and art periods.",
    home: "Performances in the living room and more confidence in front of people.",
  },
  {
    focus: "Practice and performance",
    doItems: [
      "Clubs in music, dance, theatre, art, writing or photography",
      "Heritage projects on Karnataka's crafts and history",
      "Festival assemblies and celebrations",
      "Creative writing and book discussions",
    ],
    often: "Weekly arts periods plus club time.",
    home: "Stronger opinions about books and music, and a rehearsal timetable on the fridge.",
  },
  {
    focus: "Leading on stage and behind it",
    doItems: [
      "Lead roles, choreography and stage management",
      "Art-integrated projects for CBSE",
      "Inter-school cultural competitions",
      "School magazine and film club work",
    ],
    often: "Club time, plus rehearsal blocks before events.",
    home: "Better time management between rehearsals and studies.",
  },
  {
    focus: "Creative leadership",
    doItems: [
      "Directing and mentoring younger performers",
      "Portfolio work for design and arts careers",
      "Organising cultural festivals",
      "Community arts and service projects",
    ],
    often: "Flexible club time planned around board exams.",
    home: "A young person who can plan an event and lead a team.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Which languages does my child learn?",
    a: "English, Hindi and Kannada, in line with CBSE and state guidance. Extra spoken-language practice is available through Spoken English and language clubs.",
  },
  {
    q: "Are festivals of all faiths celebrated?",
    a: "Yes. Festivals are celebrated as shared cultural learning, with stories, crafts and food from across India's regions and faiths.",
  },
  {
    q: "Do we need to buy costumes for Annual Day?",
    a: "The school shares costume details well in advance and keeps them simple. Many props and sets are made by the art and craft clubs.",
  },
  {
    q: "Are music and dance classes available after school?",
    a: "Vocal, instrument, classical and contemporary dance classes are offered as optional after-school batches with timings shared each term.",
  },
  {
    q: "Is taking part in religious festivals compulsory?",
    a: "No. Festivals are celebrated as shared culture through stories, crafts, music and food. Families can choose to have their child sit out any activity.",
  },
  {
    q: "My child is shy. Will they be pushed on stage?",
    a: "Never pushed. Shy children often start with group songs, backstage roles or narration, and grow at their own pace.",
  },
  {
    q: "We are new to Karnataka. How will my child manage Kannada?",
    a: "Kannada is taught from beginner level, with extra support for children who are new to the language.",
  },
  {
    q: "Are photos and videos of performances shared?",
    a: "Only with parent consent, and only on the school's own channels. You can opt out of photography at any time.",
  },
];

const r2 = (n: number) => Math.round(n * 100) / 100;

/* Precomputed deterministic SVG geometries (SSR-safe) */
const TORAN_ITEMS = Array.from({ length: 28 }, (_, i) => {
  const x = 25 + i * 50;
  const y = r2(4 + 36 * (1 - Math.pow((x - 700) / 700, 2)) * 0.9);
  return { x, y, i };
});

const RANGOLI_DOTS = (() => {
  const list: { cx: number; cy: number; r: number; d: number }[] = [];
  let d = 0;
  for (const radius of [86, 214]) {
    const n = radius < 100 ? 16 : 36;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      list.push({
        cx: r2(250 + radius * Math.cos(a)),
        cy: r2(250 + radius * Math.sin(a)),
        r: radius < 100 ? 4 : 3.2,
        d: d++,
      });
    }
  }
  return list;
})();

const AUDIENCE_DOTS = (() => {
  const colors = ["#7a1533", "#8e1a3c", "#5c1129"];
  const dots: { cx: number; cy: number; fill: string }[] = [];
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 12; i++) {
      dots.push({
        cx: 18 + i * 34 + (row % 2) * 16,
        cy: 392 + row * 30,
        fill: colors[row]!,
      });
    }
  }
  return dots;
})();

export function SamskritiVidyaPage() {
  const [welcomeIdx, setWelcomeIdx] = useState(0);
  const [welcomeAuto, setWelcomeAuto] = useState(true);
  const [actStage, setActStage] = useState(0);
  const [nowMonth, setNowMonth] = useState(-1);
  const [curtainOpen, setCurtainOpen] = useState(0);
  const [rangoliPaused, setRangoliPaused] = useState(false);

  const monthsRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const actsRef = useRef<HTMLElement>(null);
  const craftsReveal = useInViewOnce<HTMLDivElement>(0.15);

  useEffect(() => {
    setNowMonth(new Date().getMonth());
  }, []);

  /* Auto-morph Welcome -> स्वागत है -> ಸುಸ್ವಾಗತ */
  useEffect(() => {
    if (!welcomeAuto) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setWelcomeIdx((v) => (v + 1) % WELCOME_WORDS.length), 2400);
    return () => clearInterval(id);
  }, [welcomeAuto]);

  /* Scroll-pinned velvet curtains + scroll-pinned 5-Act Annual Day spotlight (stays sticky until finished) */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight || 800;
        const headerH = window.innerWidth >= 1024 ? 132 : 80;
        const pinViewportH = Math.max(360, vh - headerH);

        const el = stageRef.current;
        if (el) {
          if (window.innerWidth < 1024) {
            setCurtainOpen(1);
          } else {
            const r = el.getBoundingClientRect();
            const travel = Math.max(1, r.height - pinViewportH);
            const scrolled = headerH - r.top;
            const p = Math.min(1, Math.max(0, scrolled / (travel * 0.8)));
            setCurtainOpen(p);
          }
        }

        const acts = actsRef.current;
        if (acts && window.innerWidth >= 1024) {
          const ar = acts.getBoundingClientRect();
          const travel = Math.max(1, ar.height - pinViewportH);
          const scrolled = headerH - ar.top;
          const clamped = Math.min(1, Math.max(0, scrolled / (travel * 0.88)));
          setActStage(Math.min(4, Math.floor(clamped * 4 + 0.3)));
        }
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const selectActStage = (idx: number) => {
    setActStage(idx);
    const acts = actsRef.current;
    if (acts && window.innerWidth >= 1024) {
      const vh = window.innerHeight || 800;
      const headerH = 132;
      const pinViewportH = Math.max(360, vh - headerH);
      const travel = Math.max(1, acts.offsetHeight - pinViewportH);
      const sectionTop = acts.getBoundingClientRect().top + window.scrollY;
      const targetY = sectionTop - headerH + (idx / 4) * (travel * 0.88);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const scrollMonths = (dir: number) => {
    monthsRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-track="samskriti">
      {/* 1. UNIFIED KUMKUM MAROON HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="vk-shero pt-14 pb-12 md:pt-18 md:pb-16">
        <svg
          className="vk-toran"
          viewBox="0 0 1400 70"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 4 Q700 40 1400 4" stroke="#2f7d4a" strokeWidth="3" fill="none" />
          {TORAN_ITEMS.map(({ x, y, i }) => (
            <g key={i} style={{ animationDelay: `${r2(i * 0.14)}s` }}>
              <line x1={x} y1={y} x2={x} y2={r2(y + 22)} stroke="#2f7d4a" strokeWidth="2" />
              <circle cx={x} cy={r2(y + 24)} r="7" fill={i % 2 ? "#ffb02e" : "#ee8a2c"} />
              <path d={`M${x - 5} ${r2(y + 30)} L${x} ${r2(y + 42)} L${x + 5} ${r2(y + 30)}Z`} fill="#2f7d4a" />
            </g>
          ))}
        </svg>

        <div className="container-site relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/85">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-white">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Samskriti Vidya</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#ffd27a]">
                Culture, arts &amp; heritage
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Roots that give children wings
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/92 md:text-lg">
                Music, dance, theatre, visual art, three languages and year-round festivals — with a
                stage for every child.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#year"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  See the festival year
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
                context="Samskriti Vidya — Culture, Arts & Heritage"
                title="Explore Samskriti Vidya"
                subtitle="Book a campus visit & receive the 2026–27 fee & co-curricular guide."
                ctaLabel="Book a Campus Tour"
                accentColor="#a3264f"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>3</b>
              <span>Languages</span>
              <small>English, Hindi &amp; Kannada</small>
            </div>
            <div>
              <b>6</b>
              <span>Art forms</span>
              <small>Music, dance, theatre, art, writing &amp; film</small>
            </div>
            <div>
              <b>Year-round</b>
              <span>Festivals</span>
              <small>Celebrated together on campus</small>
            </div>
            <div>
              <b>Annual Day</b>
              <span>Main stage</span>
              <small>Every child, every year</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Samskriti Vidya" items={GLANCE} />

      {/* 2. MORPHING THREE-LANGUAGE WELCOME BANNER */}
      <section className="vk-welcome" aria-label="Welcome in three languages">
        <div className="container-site">
          <div className="vk-welcome-word" aria-live="polite">
            {WELCOME_WORDS.map((w, i) => (
              <span key={w.lang} lang={w.lang} className={welcomeIdx === i ? "is-on" : ""}>
                {w.text}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5c1129]">
            Children grow up confident in three languages: English for the world, Hindi for the
            nation and Kannada for the place they call home.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {WELCOME_WORDS.map((w, i) => (
              <button
                key={w.lang}
                type="button"
                onClick={() => {
                  setWelcomeAuto(false);
                  setWelcomeIdx(i);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  welcomeIdx === i
                    ? "bg-[#5c1129] text-[#ffd27a]"
                    : "border border-[#5c1129]/30 bg-transparent text-[#5c1129] hover:bg-[#5c1129]/10"
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2B. ANIMATED SPINNING RANGOLI SHOWCASE (MOVED BELOW HERO) */}
      <section className="vk-band vk-ground-paper border-b border-border">
        <div className="container-site">
          <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-[#7d1838] p-6 text-white shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12">
            <DoodleMarginMotif
              theme="samskriti"
              className="absolute -bottom-8 -left-6 h-40 w-40 text-white opacity-[0.07]"
            />
            <div className="relative z-10 lg:col-span-5">
              <p className="vk-kicker" style={{ color: "#ffd27a" }}>Living tradition</p>
              <h2 className="font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
                Where heritage meets confident self-expression
              </h2>
              <DoodleUnderline className="mt-2.5 w-28" color="#ffd27a" />
              <p className="mt-4 text-sm leading-relaxed text-white/88 md:text-base">
                From Karnataka&apos;s living crafts to classical and contemporary music, theatre and
                film, Samskriti Vidya helps every child find their voice.
              </p>
              <div className="mt-5">
                <MotionToggleButton
                  paused={rangoliPaused}
                  onToggle={() => setRangoliPaused((p) => !p)}
                  tone="dark"
                />
              </div>
            </div>
            <div className={`vk-rangoli relative z-10 lg:col-span-7 ${rangoliPaused ? "is-motion-paused" : ""}`}>
              <svg viewBox="0 0 500 500" role="img" aria-label="Animated rangoli pattern drawing and rotating gently">
                <g className="spin2">
                  <g className="r-draw" fill="none" stroke="#ffd27a" strokeWidth="2.4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <path
                        key={i}
                        transform={`rotate(${i * 30} 250 250)`}
                        d="M250 40 C296 90 296 130 250 170 C204 130 204 90 250 40Z"
                      />
                    ))}
                  </g>
                </g>
                <g className="spin">
                  <g>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <path
                        key={i}
                        transform={`rotate(${i * 45} 250 250)`}
                        d="M250 110 C280 150 276 190 250 200 C224 190 220 150 250 110Z"
                        fill={i % 2 ? "#ee8a2c" : "#ffffff"}
                        opacity={i % 2 ? 0.95 : 0.9}
                      />
                    ))}
                  </g>
                </g>
                <g className="r-draw" fill="none" stroke="#ffffff" strokeWidth="2">
                  <circle cx="250" cy="250" r="64" />
                  <circle cx="250" cy="250" r="190" strokeDasharray="2 8" />
                </g>
                <circle cx="250" cy="250" r="40" fill="#ffd27a" />
                <circle cx="250" cy="250" r="22" fill="#ee8a2c" />
                <circle cx="250" cy="250" r="9" fill="#a3264f" />
                <g className="dots" fill="#ffffff">
                  {RANGOLI_DOTS.map((dot) => (
                    <circle
                      key={dot.d}
                      cx={dot.cx}
                      cy={dot.cy}
                      r={dot.r}
                      style={{ ["--d" as string]: dot.d }}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 12-MONTH FESTIVAL CALENDAR WITH LOTUS MOTIFS */}
      <section className="vk-band vk-ground-paper" id="year">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">The festival year</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                Twelve months, many celebrations
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground">
                Festivals are lessons in history, science, food, art and togetherness across faiths
                and regions.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous months"
                onClick={() => scrollMonths(-1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next months"
                onClick={() => scrollMonths(1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div ref={monthsRef} className="vk-hs" aria-label="Festival calendar">
            {FESTIVAL_MONTHS.map((m, i) => {
              const isNow = i === nowMonth;
              return (
                <article
                  key={m.month}
                  className={`flex min-h-[268px] flex-col rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-1 ${
                    isNow
                      ? "border-[#a3264f] bg-[#a3264f] text-white"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <small className={`text-xs font-semibold ${isNow ? "text-[#ffd27a]" : "text-muted-foreground"}`}>
                      {m.season}
                    </small>
                    {isNow && (
                      <span className="rounded-full bg-[#ffd27a] px-2.5 py-0.5 text-[11px] font-bold text-[#5c1129]">
                        This month
                      </span>
                    )}
                  </div>
                  <h3 className={`mt-1 font-display text-2xl font-medium ${isNow ? "text-white" : "text-navy"}`}>
                    {m.month}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {m.items.map(([title, desc, dotColor]) => (
                      <li key={title} className="flex gap-2.5 text-sm">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: isNow ? "#ffd27a" : dotColor }}
                        />
                        <span>
                          <b className={`block font-semibold ${isNow ? "text-white" : "text-navy"}`}>
                            {title}
                          </b>
                          <span className={`block text-xs ${isNow ? "text-white/85" : "text-muted-foreground"}`}>
                            {desc}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <svg className="mt-auto ml-auto pt-3 opacity-80" width="46" height="46" viewBox="0 0 54 54" aria-hidden="true">
                    <g fill="none" stroke={isNow ? "#ffd27a" : m.accent} strokeWidth="2">
                      {[0, 45, 90, 135].map((a) => (
                        <ellipse key={a} cx="27" cy="27" rx="22" ry="8" transform={`rotate(${a} 27 27)`} />
                      ))}
                    </g>
                  </svg>
                </article>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            * Lunar-calendar festivals shift dates each year. Exact dates are published in the annual
            school calendar.
          </p>
        </div>
      </section>

      <VidyaGradeFinder name="Samskriti Vidya" grades={GRADES} />

      {/* 4. VELVET CURTAIN STAGE REVEAL (SCROLL-PINNED UNTIL CURTAINS PART) */}
      <section ref={stageRef} className="vk-ground-cream relative lg:h-[190vh]">
        <div className="py-12 lg:sticky lg:top-[132px] lg:flex lg:h-[calc(100vh-132px)] lg:items-center lg:py-6">
          <div className="container-site">
            <div className="vk-stagebox">
            <div className="vk-valance" aria-hidden="true" />
            <div
              className="vk-curtain is-l"
              aria-hidden="true"
              style={{
                transform: `translateX(${-curtainOpen * 100}%) skewX(${r2(curtainOpen * 4)}deg)`,
              }}
            />
            <div
              className="vk-curtain is-r"
              aria-hidden="true"
              style={{
                transform: `translateX(${curtainOpen * 100}%) skewX(${r2(-curtainOpen * 4)}deg)`,
              }}
            />
            <div className="vk-stage-inner">
              <div className="text-center">
                <p className="vk-kicker justify-center" style={{ color: "#ffd27a" }}>
                  The performing &amp; visual arts
                </p>
                <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                  Find your stage
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-[#e7c6d1] md:text-base">
                  Six art forms to try, practise and perform, with a showcase for every child.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Music",
                    desc: "Vocal and instruments, Indian classical and western.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <path d="M12 26V8l16-4v18" />
                        <circle cx="8" cy="26" r="4" />
                        <circle cx="24" cy="22" r="4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Dance",
                    desc: "Classical and western dance for expression and fitness.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <circle cx="17" cy="6" r="3" />
                        <path d="M17 9v10l-6 10M17 19l6 10M8 13l9 2 9-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Theatre & drama",
                    desc: "Acting, plays and expression, from class skits to the Annual Day stage.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <path d="M4 6h12v10a6 6 0 0 1-12 0Z" />
                        <path d="M18 12h12v10a6 6 0 0 1-12 0Z" />
                        <path d="M7 11h2M11 11h2M22 18q2 2 4 0" />
                      </svg>
                    ),
                  },
                  {
                    title: "Art & craft",
                    desc: "Drawing, painting and craft, including traditional Indian art forms.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <path d="M17 4a13 13 0 1 0 0 26c2 0 2-3 0-4s0-4 3-4h4a6 6 0 0 0 6-6c0-7-6-12-13-12Z" />
                        <circle cx="10" cy="15" r="1.6" />
                        <circle cx="15" cy="10" r="1.6" />
                        <circle cx="22" cy="11" r="1.6" />
                      </svg>
                    ),
                  },
                  {
                    title: "Creative writing & reading",
                    desc: "Stories, poems and book clubs in the Literary and Creative Writing Clubs.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <path d="M24 4l6 6L12 28H6v-6Z" />
                        <path d="M20 8l6 6" />
                      </svg>
                    ),
                  },
                  {
                    title: "Photography & film",
                    desc: "Photos, video and short films made by the Photography and Film Club.",
                    svg: (
                      <svg viewBox="0 0 34 34" className="h-8 w-8" fill="none" stroke="#ffd27a" strokeWidth="2.1" aria-hidden="true">
                        <rect x="3" y="9" width="28" height="19" rx="3" />
                        <circle cx="17" cy="18" r="5" />
                        <path d="M11 9l2-4h8l2 4" />
                      </svg>
                    ),
                  },
                ].map((art) => (
                  <article
                    key={art.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 text-[#e7c6d1] transition-colors hover:bg-[#ffd27a]/10"
                  >
                    {art.svg}
                    <h3 className="mt-3 font-display text-xl font-medium text-white">{art.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed">{art.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 5. FIVE CRAFTS OF KARNATAKA WITH VECTOR MEDALLIONS */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Heritage &amp; Cultural Learning Zone</p>
              <h2>The crafts of Karnataka, in children&apos;s hands</h2>
            </div>
            <p className="vk-lede">
              Our heritage zone brings the state&apos;s living traditions into the classroom through
              artefacts, stories and hands-on craft sessions.
            </p>
          </div>

          <div ref={craftsReveal.ref} className={`vk-reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 ${craftsReveal.inView ? "is-in" : ""}`}>
            {[
              {
                title: "Channapatna toys",
                desc: "Lacquered wooden toys from the toy town near Bengaluru.",
                bg: "#ffd27a",
                svg: (
                  <>
                    <circle cx="50" cy="30" r="14" fill="#d9482b" />
                    <rect x="34" y="44" width="32" height="34" rx="16" fill="#2f7d4a" />
                    <circle cx="50" cy="61" r="7" fill="#ffd27a" />
                    <rect x="40" y="80" width="20" height="8" rx="4" fill="#4352d1" />
                  </>
                ),
              },
              {
                title: "Mysuru painting",
                desc: "Fine gold-leaf painting from the royal courts of Mysuru.",
                bg: "#5c1129",
                svg: (
                  <>
                    <rect x="18" y="14" width="64" height="72" rx="4" fill="none" stroke="#ffd27a" strokeWidth="4" />
                    <path d="M30 76 Q50 30 70 76Z" fill="#ffd27a" />
                    <circle cx="50" cy="38" r="8" fill="#ee8a2c" />
                  </>
                ),
              },
              {
                title: "Kasuti embroidery",
                desc: "Counted-thread embroidery from North Karnataka.",
                bg: "#f6ede3",
                svg: (
                  <g fill="none" stroke="#a3264f" strokeWidth="3">
                    <path d="M50 14 L86 50 L50 86 L14 50Z" />
                    <path d="M50 30 L70 50 L50 70 L30 50Z" />
                    <path d="M50 14V86M14 50H86" />
                  </g>
                ),
              },
              {
                title: "Bidriware",
                desc: "Silver inlay on dark metal, a craft of Bidar.",
                bg: "#1c1f3f",
                svg: (
                  <>
                    <path d="M36 22h28l8 18-8 46H36l-8-46Z" fill="#2c2f4d" stroke="#c9ccdd" strokeWidth="2" />
                    <path d="M40 46 q10-10 20 0 q-10 10-20 0Z M44 66 q6-6 12 0 q-6 6-12 0Z" fill="#e6e8f2" />
                  </>
                ),
              },
              {
                title: "Yakshagana",
                desc: "Karnataka's dance-drama of colour, music and story.",
                bg: "#ee8a2c",
                svg: (
                  <>
                    <path d="M20 52 Q50 0 80 52Z" fill="#ffd27a" />
                    <circle cx="50" cy="62" r="22" fill="#d9482b" />
                    <path d="M40 58h6M54 58h6M42 72q8 6 16 0" stroke="#fff" strokeWidth="3" />
                    <circle cx="50" cy="32" r="6" fill="#2f7d4a" />
                  </>
                ),
              },
            ].map((craft, idx) => (
              <article key={craft.title} style={{ ["--ri" as string]: idx }} className="vk-craft">
                <div className="vk-craft-pat" style={{ backgroundColor: craft.bg }}>
                  <svg viewBox="0 0 100 100" aria-hidden="true">{craft.svg}</svg>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-medium text-navy sm:text-lg">
                    {craft.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{craft.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="A child who has stood on a stage and heard the applause walks into every room *a *little *braver."
        note="That is why every child has a part to play at Annual Day."
      />

      {/* 6. ANNUAL DAY 5-ACT ANIMATED SPOTLIGHT STAGE (STAYS STICKY UNTIL CURTAIN UP) */}
      <section ref={actsRef} className="vk-ground-soft relative border-y border-border lg:h-[340vh]">
        <div className="py-12 lg:sticky lg:top-[132px] lg:flex lg:h-[calc(100vh-132px)] lg:flex-col lg:justify-center lg:py-6">
          <div className="container-site">
            <div className="mb-6 grid items-end gap-4 lg:mb-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <p className="vk-kicker">Annual Day</p>
                <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
                  From first audition to curtain call
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-foreground lg:justify-self-end lg:text-base">
                Scroll (or select any act) to watch the spotlight widen, performers enter and the hall
                fill for Annual Day.
              </p>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="vk-spot border border-border" data-stage={actStage}>
                  <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMax meet" className="overflow-visible" aria-hidden="true">
                    <defs>
                      <linearGradient id="sv-bm" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffe7b0" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#ffd27a" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                    <path className="beam" d="M200 0 L320 340 L80 340Z" fill="url(#sv-bm)" />
                    <rect x="-200" y="330" width="800" height="40" fill="#5c1129" />
                    <rect x="-200" y="330" width="800" height="5" fill="#ffd27a" />
                    <g className="props">
                      <rect x="30" y="250" width="40" height="80" rx="4" fill="#2f7d4a" />
                      <circle cx="50" cy="240" r="26" fill="#3a9a5c" />
                      <rect x="330" y="270" width="40" height="60" rx="4" fill="#7a4b2a" />
                    </g>
                    <g className="fig">
                      <circle cx="200" cy="232" r="14" fill="#ffd0a8" />
                      <path d="M184 330 L190 252 h20 L216 330Z" fill="#ee8a2c" />
                      <path d="M190 262 L168 236 M210 262 L232 236" stroke="#ffd0a8" strokeWidth="6" strokeLinecap="round" />
                    </g>
                    <g className="fig f2">
                      <circle cx="140" cy="252" r="12" fill="#c98e63" />
                      <path d="M127 330 L132 266 h16 L153 330Z" fill="#4352d1" />
                    </g>
                    <g className="fig f3">
                      <circle cx="262" cy="252" r="12" fill="#ffd0a8" />
                      <path d="M249 330 L254 266 h16 L275 330Z" fill="#a3264f" />
                    </g>
                    <g className="audience">
                      {AUDIENCE_DOTS.map((d, idx) => (
                        <circle key={idx} cx={d.cx} cy={d.cy} r="13" fill={d.fill} />
                      ))}
                    </g>
                  </svg>
                  <span className="absolute left-5 top-5 rounded-md bg-black/45 px-3 py-1 font-mono text-xs font-semibold text-[#ffd27a] backdrop-blur-xs">
                    {actStage === 4 ? "Curtain up" : `Act ${actStage + 1} of 5`}
                  </span>
                </div>
              </div>

              <ol className="divide-y divide-border border-y border-border lg:col-span-7">
                {ANNUAL_ACTS.map((act, i) => {
                  const isOn = actStage === i;
                  return (
                    <li key={act.num}>
                      <button
                        type="button"
                        aria-expanded={isOn}
                        onClick={() => selectActStage(i)}
                        className={`relative block w-full py-3.5 pl-5 pr-3 text-left transition-all duration-300 ${
                          isOn ? "bg-card opacity-100" : "opacity-60 hover:bg-card/60 hover:opacity-100"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-y-0 left-0 w-1 transition-colors ${
                            isOn ? "bg-[#a3264f]" : "bg-transparent"
                          }`}
                        />
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs tabular-nums text-muted-foreground">
                            {act.num}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-x-3">
                              <p className="text-xs font-semibold" style={{ color: "var(--vt)" }}>
                                {act.tag}
                              </p>
                              <h3 className="font-display text-lg font-medium text-navy md:text-xl">
                                {act.title}
                              </h3>
                            </div>
                            <p
                              className={`mt-1.5 text-sm leading-relaxed text-foreground ${
                                isOn ? "block" : "line-clamp-1 lg:hidden"
                              }`}
                            >
                              {act.text}
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BEYOND THE TIMETABLE */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Beyond the timetable</p>
              <h2>More ways to take part</h2>
            </div>
            <p className="vk-lede">
              Optional classes for children who want more practice, and student roles that turn
              culture into service.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <span className="rounded-md bg-[#fff3e3] px-2.5 py-1 text-xs font-medium text-[#c4631a]">
                Optional batches
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-navy">
                After-school arts and language classes
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Small batches for children who want to go further with an art form or a language.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Vocal music", "Instruments", "Classical dance", "Western dance", "Spoken English", "Hindi", "Kannada", "Weekend art workshops"].map((c) => (
                  <span key={c} className="rounded-lg border border-border bg-background px-3 py-1 text-xs font-medium text-navy">
                    {c}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-[#5c1129] p-6 text-white/90 sm:p-7">
              <h3 className="font-display text-2xl font-medium text-white">Values in action</h3>
              <p className="mt-2 text-sm text-white/90">
                Culture is also how we treat each other. Older students lead, serve and look after
                the community around the school.
              </p>
              <ul className="mt-4 space-y-3 border-t border-white/15 pt-4 text-sm">
                <li><b className="block text-white">Community service initiatives</b><span>Drives and projects that help our neighbourhood</span></li>
                <li><b className="block text-white">Student Leadership Council</b><span>Students who help run school life and events</span></li>
                <li><b className="block text-white">Reading and Literary Club</b><span>Books, discussion and the school magazine</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "An art apron or old shirt on art days",
          "A labelled water bottle",
          "Costume details, shared well in advance",
          "Traditional wear on festival days, always optional",
          "Class instruments and art materials stay at school",
        ]}
        progress={[
          "Art portfolios and writing pieces sent home",
          "Performances at assemblies and Annual Day",
          "Remarks on creative and language skills in the report card",
          "Certificates for competitions and club work",
        ]}
        join={[
          "Watch Annual Day and festival celebrations",
          "Share a festival tradition or recipe in class",
          "Volunteer with costumes or sets",
          "Lead a craft or storytelling session from your culture",
        ]}
        safety={[
          "Teachers supervise every rehearsal",
          "Child-safe art materials",
          "Clear exits and trained staff for stage events",
          "No child is required to take part in religious rituals",
          "Water and rest breaks in long rehearsals",
          "Photos shared only with parent consent",
        ]}
      />

      <VidyaFaqSection
        name="Samskriti Vidya"
        intro="Languages, festivals, performances and what you may need to provide."
        faqs={FAQS}
      />

      <VidyaTail active="samskriti" />
    </div>
  );
}
