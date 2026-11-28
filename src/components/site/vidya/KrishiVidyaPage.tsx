import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, PawPrint } from "lucide-react";
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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SEASONS = [
  {
    id: "kharif",
    name: "Kharif",
    sub: "Monsoon season",
    months: [5, 6, 7, 8, 9],
    fill: "#2f7d4a",
    crops: ["Ragi", "Beans", "Tomato", "Brinjal", "Marigold", "Chillies"],
    text: "The monsoon fills our rain gauges and the beds. Children sow hardy native crops, track rainfall and learn how water moves through soil.",
  },
  {
    id: "rabi",
    name: "Rabi",
    sub: "Cool season",
    months: [10, 11, 0, 1],
    fill: "#2b6f8f",
    crops: ["Spinach", "Methi", "Coriander", "Carrot", "Radish", "Peas"],
    text: "Cool, dry days are ideal for leafy greens and root vegetables. It is our busiest harvest season, and children often take produce home to share.",
  },
  {
    id: "zaid",
    name: "Zaid",
    sub: "Summer season",
    months: [2, 3, 4],
    fill: "#c4631a",
    crops: ["Cucumber", "Okra", "Bottle gourd", "Sunflower", "Mint"],
    text: "Warm, dry months teach water wisdom: mulching, drip watering and selecting hardy crops that thrive in Bengaluru's summer.",
  },
] as const;

const SEED_STAGES = [
  {
    num: "01",
    tag: "Prepare",
    title: "Soil before seed",
    text: "Children test texture, moisture and natural aeration before sowing. Raised beds are loosened, enriched with our own compost and marked out by class.",
  },
  {
    num: "02",
    tag: "Sprout",
    title: "The first green",
    text: "Germination journals begin. Children sketch, measure and date every seedling, learning to observe closely and record honestly.",
  },
  {
    num: "03",
    tag: "Tend",
    title: "Water, mulch, repeat",
    text: "Daily rotas teach responsibility: natural mulching, companion planting and mindful watering, with rainwater awareness during monsoon weeks.",
  },
  {
    num: "04",
    tag: "Bloom",
    title: "Pollinators arrive",
    text: "Flowers bring bees and butterflies. Lessons move to living biology: pollination, food chains and why biodiversity matters on a city campus.",
  },
  {
    num: "05",
    tag: "Harvest",
    title: "From bed to table",
    text: "Children measure yield, share produce and record growth logs. Then the leftover stems go to the compost pit, and the cycle begins again.",
  },
] as const;

const COMPOST_NODES = [
  ["Leaves", "fallen & trimmed"],
  ["Pit", "layered"],
  ["Turn", "air & water"],
  ["Compost", "rich & dark"],
  ["Beds", "fed again"],
] as const;

const PAW_TRAIL: [number, number][] = [
  [60, 410], [96, 388], [128, 352], [150, 318], [190, 300], [232, 310],
  [270, 340], [312, 336], [344, 300], [372, 250], [398, 200], [420, 150],
];

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Who takes part", value: "Every child, Nursery to Grade 12" },
  { icon: "clock", label: "When", value: "Timetabled every week, plus club time" },
  { icon: "pin", label: "Where", value: "Garden beds, compost pits & Environmental Lab" },
  { icon: "teacher", label: "Led by", value: "Trained educators, in small groups" },
  { icon: "wallet", label: "Fees", value: "Part of the school programme" },
  { icon: "bag", label: "Your child brings", value: "Water bottle, cap & spare set of clothes" },
];

const GRADES: GradeBandContent[] = [
  {
    focus: "Sensory wonder in nature",
    doItems: [
      "Watering young plants and digging in safe soil trays",
      "Sprouting seeds in classroom cups and checking them daily",
      "Nature walks to spot insects, leaves and birds",
      "Meeting calm, friendly animals on Pet Day",
    ],
    often: "One outdoor garden session a week, plus short watering turns.",
    home: "Your child may want to water every plant at home and will start naming seeds, leaves and insects.",
  },
  {
    focus: "Hands-on gardening and care",
    doItems: [
      "Class vegetable beds, from sowing to harvest",
      "Leaf collection and simple composting",
      "Plant journals with drawings and measurements",
      "Rain and temperature readings on the class chart",
    ],
    often: "One garden period a week, with a weekly watering rota.",
    home: "Expect questions about where food comes from, and requests to grow herbs on a balcony or window sill.",
  },
  {
    focus: "Applied ecology",
    doItems: [
      "Soil and water tests in the Environmental Science Lab",
      "Companion planting and natural pest control trials",
      "Vermicompost pits run by student teams",
      "Surveys of the birds, insects and trees on campus",
    ],
    often: "A weekly garden or lab period, plus Environmental Club time.",
    home: "Your child may start sorting waste at home and paying closer attention to water and electricity use.",
  },
  {
    focus: "Sustainability projects and leadership",
    doItems: [
      "Green audits of water, waste and energy use on campus",
      "Environmental Club leadership roles",
      "Raising saplings in the school nursery",
      "Linking garden data to CBSE science and geography",
    ],
    often: "Weekly club and lab time, with project weeks each term.",
    home: "Look for project notebooks full of measurements, and thoughtful habits around reducing plastic.",
  },
  {
    focus: "Research and community impact",
    doItems: [
      "Environmental science research projects",
      "Mentoring younger classes in the garden",
      "Neighbourhood sustainability drives",
      "Presenting findings at the Science Exhibition",
    ],
    often: "Project-based, planned around board exam preparation.",
    home: "Your child may lead a neighbourhood drive or mentor younger classes.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Are garden sessions safe and supervised for young children?",
    a: "Yes. Every session is led by trained educators, with child-sized tools, gloves and age-appropriate tasks. Younger children work in small groups at raised beds that are easy to reach.",
  },
  {
    q: "Do parents need to buy gardening tools or uniforms?",
    a: "No special purchases are needed. The school provides tools, seeds and compost. We only ask that children wear their regular PE uniform and bring a water bottle on garden days.",
  },
  {
    q: "How does Krishi Vidya connect to CBSE academics?",
    a: "Garden work is mapped to CBSE topics in EVS, science and geography: plant lifecycles, soil types, water cycles, ecosystems and sustainability.",
  },
  {
    q: "What happens during heavy rains or peak summer?",
    a: "Sessions move to shaded or indoor work: seed sorting, journal reviews, compost checks and Environmental Science Lab experiments.",
  },
  {
    q: "Will my child come home muddy?",
    a: "Sometimes, and that is part of the learning. Younger children wear aprons for messy work and a spare set of clothes stays in their bag. Hand washing is built into every session.",
  },
  {
    q: "What if my child has allergies to pollen, insects or animals?",
    a: "Share allergy notes with the class teacher at the start of the year. Students are given suitable tasks away from triggers, and on Pet Day they can join from the art and story corner.",
  },
  {
    q: "Does my child eat what the class grows?",
    a: "Classes hold small tasting sessions with washed produce under teacher supervision, and children often take produce home. Families can opt out of tasting at any time.",
  },
  {
    q: "Is Krishi Vidya assessed?",
    a: "There are no exams. Teachers review garden journals, project work and participation, and share remarks on responsibility and teamwork in the report card.",
  },
];

const r2 = (n: number) => Math.round(n * 100) / 100;
function polar(cx: number, cy: number, r: number, a: number): [number, number] {
  return [r2(cx + r * Math.sin(a)), r2(cy - r * Math.cos(a))];
}
function arcPath(cx: number, cy: number, r1: number, r0: number, a0: number, a1: number): string {
  const [x0, y0] = polar(cx, cy, r1, a0);
  const [x1, y1] = polar(cx, cy, r1, a1);
  const [x2, y2] = polar(cx, cy, r0, a1);
  const [x3, y3] = polar(cx, cy, r0, a0);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${x0} ${y0}A${r1} ${r1} 0 ${large} 1 ${x1} ${y1}L${x2} ${y2}A${r0} ${r0} 0 ${large} 0 ${x3} ${y3}Z`;
}

export function KrishiVidyaPage() {
  const [nowMonth, setNowMonth] = useState(5);
  const [nowYear, setNowYear] = useState(2026);
  const currentSeasonIdx = Math.max(
    0,
    SEASONS.findIndex((s) => (s.months as readonly number[]).includes(nowMonth)),
  );
  const [seasonIdx, setSeasonIdx] = useState(0);
  const [seedStage, setSeedStage] = useState(0);
  const [seedProgress, setSeedProgress] = useState(0);
  const [pawProgress, setPawProgress] = useState(0);
  const [gardenPaused, setGardenPaused] = useState(false);

  const storyRef = useRef<HTMLDivElement>(null);
  const petFigureRef = useRef<HTMLElement>(null);
  const quoteMark = useInViewOnce<HTMLQuoteElement>(0.3);
  const plotsReveal = useInViewOnce<HTMLDivElement>(0.18);
  const compostReveal = useInViewOnce<HTMLOListElement>(0.2);

  useEffect(() => {
    const d = new Date();
    const m = d.getMonth();
    setNowMonth(m);
    setNowYear(d.getFullYear());
    const idx = SEASONS.findIndex((s) => (s.months as readonly number[]).includes(m));
    if (idx >= 0) setSeasonIdx(idx);
  }, []);

  /* Continuous scroll-pinned plant growth (stays sticky until Stage 5 Harvest finishes) + progressive Pet Day paws */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight || 800;
        const headerH = window.innerWidth >= 1024 ? 132 : 80;
        const story = storyRef.current;
        if (story && window.innerWidth >= 1024) {
          const r = story.getBoundingClientRect();
          const pinViewportH = Math.max(360, vh - headerH);
          const travel = Math.max(1, r.height - pinViewportH);
          const scrolled = headerH - r.top;
          /* Finish Stage 5 (progress = 4) at 88% of pinned travel so it stays sticky until finished */
          const clamped = Math.min(1, Math.max(0, scrolled / (travel * 0.88)));
          const prog = clamped * 4;
          setSeedProgress(prog);
          setSeedStage(Math.min(4, Math.floor(prog + 0.3)));
        }
        const pet = petFigureRef.current;
        if (pet) {
          const pr = pet.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (vh * 0.92 - pr.top) / (vh * 0.72)));
          setPawProgress(p);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const selectSeedStage = (idx: number) => {
    setSeedStage(idx);
    setSeedProgress(idx);
    const story = storyRef.current;
    if (story && window.innerWidth >= 1024) {
      const vh = window.innerHeight || 800;
      const headerH = 132;
      const pinViewportH = Math.max(360, vh - headerH);
      const travel = Math.max(1, story.offsetHeight - pinViewportH);
      const sectionTop = story.getBoundingClientRect().top + window.scrollY;
      const targetY = sectionTop - headerH + (idx / 4) * (travel * 0.88);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  /* Continuous interpolated values for smooth scroll-driven plant SVG */
  const stemScale = r2(Math.min(1, Math.max(0, (seedProgress - 0.15) / 2.65)));
  const seedOpacity = r2(Math.max(0, 1 - seedProgress * 1.4));
  const l1Progress = r2(Math.min(1, Math.max(0, (seedProgress - 0.55) / 0.65)));
  const l2Progress = r2(Math.min(1, Math.max(0, (seedProgress - 1.55) / 0.65)));
  const rainOpacity = r2(seedProgress >= 1.5 && seedProgress <= 2.65 ? Math.min(1, (seedProgress - 1.5) * 2.5, (2.65 - seedProgress) * 2.5) : 0);
  const flowerScale = r2(Math.min(1, Math.max(0, (seedProgress - 2.45) / 0.55)));
  const flowerOpacity = r2(seedProgress > 3.45 ? Math.max(0.28, 1 - (seedProgress - 3.45) * 1.4) : flowerScale);
  const beeOpacity = r2(seedProgress >= 2.55 && seedProgress <= 3.55 ? 1 : 0);
  const fruitScale = r2(Math.min(1, Math.max(0, (seedProgress - 3.3) / 0.6)));

  const activeSeason = SEASONS[seasonIdx] ?? SEASONS[0];
  const wheelAngle = -(activeSeason.months[0] + activeSeason.months.length / 2) * 30;
  const monthArcStep = (Math.PI * 2) / 12;

  return (
    <div className="vk-page" data-track="krishi">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="border-b border-border bg-background pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-navy">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Krishi Vidya</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#1d4d2e]">
                Farming, horticulture &amp; ecological care
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy sm:text-5xl md:text-6xl">
                Nature becomes the classroom
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                Weekly organic farming, horticulture, composting and environmental science — built
                into the timetable from Nursery to Grade 12.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#seasons"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2f7d4a]/30 bg-[#e6f1e6] px-5 py-2.5 text-sm font-semibold text-[#1d4d2e] transition-colors hover:bg-[#2f7d4a] hover:text-white"
                >
                  See what&apos;s growing now
                  <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <Link
                  to="/application-form"
                  className="inline-flex items-center gap-2 border-b-2 border-[#2f7d4a] pb-1 text-sm font-semibold text-navy transition-colors hover:text-[#2f7d4a]"
                >
                  Online Application Form
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroEnquiryCard
                context="Krishi Vidya — Organic Farming & Horticulture"
                title="Visit Our Campus Gardens"
                subtitle="Book a tour & receive the 2026–27 CBSE + Four Vidyas fee guide."
                ctaLabel="Book a Garden Tour"
                accentColor="#2f7d4a"
              />
            </div>
          </div>

          <div className="vk-stats">
            <div>
              <b>K–12</b>
              <span>All grade levels</span>
              <small>Age-graded outdoor beds</small>
            </div>
            <div>
              <b>4</b>
              <span>Learning strands</span>
              <small>Farming, ecology, soil &amp; care</small>
            </div>
            <div>
              <b>100%</b>
              <span>Organic methods</span>
              <small>Chemical-free campus gardens</small>
            </div>
            <div>
              <b>Weekly</b>
              <span>Timetable hours</span>
              <small>Guided by trained educators</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Krishi Vidya" items={GLANCE} />

      {/* 1B. ANIMATED GARDEN VECTOR SHOWCASE (MOVED BELOW HERO) */}
      <section className="vk-band vk-ground-paper border-b border-border">
        <div className="container-site">
          <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12">
            <DoodleMarginMotif
              theme="krishi"
              className="absolute -bottom-8 -left-6 h-40 w-40 text-navy opacity-[0.06]"
            />
            <div className="relative z-10 lg:col-span-5">
              <p className="vk-kicker">Campus organic garden</p>
              <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
                Hands in real soil, every single week
              </h2>
              <DoodleUnderline className="mt-2.5 w-28" color="var(--vt)" />
              <p className="mt-4 text-sm leading-relaxed text-foreground md:text-base">
                Every class tends its own raised bed across Bengaluru&apos;s three growing seasons —
                watering, observing pollinators, composting and harvesting together.
              </p>
              <div className="mt-5">
                <MotionToggleButton
                  paused={gardenPaused}
                  onToggle={() => setGardenPaused((p) => !p)}
                  tone="light"
                />
              </div>
            </div>
            <figure className={`relative z-10 lg:col-span-7 ${gardenPaused ? "is-motion-paused" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-[#dff0e0]">
                <svg
                  className="vk-garden block aspect-[5/4] w-full"
                  viewBox="0 0 600 480"
                  role="img"
                  aria-label="Animated campus garden with growing seedlings, watering can and butterfly"
                >
                  <defs>
                    <linearGradient id="kv-sky" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fdf1dc" />
                      <stop offset="1" stopColor="#e3f1df" />
                    </linearGradient>
                  </defs>
                  <rect width="600" height="480" fill="url(#kv-sky)" />
                  <g className="ray" fill="#f7b866" opacity="0.55">
                    <rect x="446" y="40" width="8" height="26" rx="4" />
                    <rect x="446" y="154" width="8" height="26" rx="4" />
                    <rect x="380" y="106" width="26" height="8" rx="4" />
                    <rect x="494" y="106" width="26" height="8" rx="4" />
                    <rect x="446" y="40" width="8" height="26" rx="4" transform="rotate(45 450 110)" />
                    <rect x="446" y="154" width="8" height="26" rx="4" transform="rotate(45 450 110)" />
                    <rect x="380" y="106" width="26" height="8" rx="4" transform="rotate(45 450 110)" />
                    <rect x="494" y="106" width="26" height="8" rx="4" transform="rotate(45 450 110)" />
                  </g>
                  <circle cx="450" cy="110" r="36" fill="#f4a24a" />
                  <path d="M0 250 Q150 180 300 230 T600 210 V480 H0Z" fill="#b9dcb4" />
                  <path d="M0 290 Q200 240 380 280 T600 270 V480 H0Z" fill="#8fc48d" />
                  <g fill="#2f7d4a" opacity="0.85">
                    <circle cx="70" cy="250" r="34" />
                    <circle cx="110" cy="236" r="26" />
                    <rect x="84" y="250" width="8" height="40" fill="#6b4a2b" />
                  </g>
                  <g>
                    <path d="M40 350 L560 350 L590 420 L10 420Z" fill="#7a4b2a" />
                    <path d="M40 350 L560 350 L566 362 L34 362Z" fill="#9a6a40" />
                  </g>
                  {Array.from({ length: 9 }).map((_, i) => {
                    const x = 70 + i * 58;
                    const s = r2(0.8 + (i % 3) * 0.15);
                    return (
                      <g key={i} transform={`translate(${x} 352) scale(${s})`}>
                        <g className="sprout" style={{ ["--d" as string]: i }}>
                          <rect x="-2" y="-46" width="4" height="46" rx="2" fill="#2f7d4a" />
                          <path className="lf" d="M0 -30 C-16 -34 -22 -46 -18 -54 C-6 -50 -1 -40 0 -30Z" fill="#4ea653" />
                          <path className="lf" d="M0 -38 C16 -42 22 -54 18 -62 C6 -58 1 -48 0 -38Z" fill="#5fb563" />
                        </g>
                      </g>
                    );
                  })}
                  <g className="can">
                    <path d="M170 150 h60 v44 a8 8 0 0 1 -8 8 h-44 a8 8 0 0 1 -8 -8Z" fill="#ee8a2c" />
                    <path d="M230 160 L272 136" stroke="#ee8a2c" strokeWidth="9" strokeLinecap="round" />
                    <path d="M180 150 a20 20 0 0 1 40 0" fill="none" stroke="#c4631a" strokeWidth="6" />
                  </g>
                  <g fill="#5aa9d6">
                    <circle className="drop" style={{ ["--d" as string]: "0s" }} cx="276" cy="140" r="3.5" />
                    <circle className="drop" style={{ ["--d" as string]: "0.5s" }} cx="284" cy="146" r="3" />
                    <circle className="drop" style={{ ["--d" as string]: "1s" }} cx="270" cy="150" r="3" />
                  </g>
                  <g>
                    <path d="M0 0 q-12 -14 -14 2 q8 6 14 -2 q12 -14 14 2 q-8 6 -14 -2" fill="#a3264f">
                      <animateMotion
                        dur="14s"
                        repeatCount="indefinite"
                        path="M80 200 C200 120 320 260 420 180 S560 220 520 300 S200 320 80 200"
                        rotate="auto"
                      />
                    </path>
                  </g>
                </svg>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Seasonal raised beds in the campus organic garden</span>
                <span className="shrink-0 font-mono tabular-nums">Krishi Vidya</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL MANIFESTO WITH ANIMATED HIGHLIGHT SWEEP */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="vk-kicker">Why Krishi Vidya</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-[-0.015em] text-navy md:text-4xl">
              Children who grow their own food think differently about the world
            </h2>
            <blockquote
              ref={quoteMark.ref}
              className="mt-6 font-display text-xl font-medium leading-snug text-[#1d4d2e] md:text-2xl"
            >
              “A seed teaches patience no worksheet can replicate:{" "}
              <mark className={`vk-mark ${quoteMark.inView ? "is-in" : ""}`}>
                you prepare the soil, tend it daily, and learn to work with the rhythm of the seasons.
              </mark>
              ”
            </blockquote>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-span-6 lg:pt-8">
            <p>
              Most urban schooling separates children from where food comes from and how natural
              ecosystems sustain daily life. Krishi Vidya restores that connection directly on our
              Kengeri campus through structured organic gardening, horticulture and ecological
              inquiry.
            </p>
            <p>
              Every class adopts seasonal garden beds, keeps observation journals, turns fallen
              leaves into rich compost and tests soil and water in our Environmental Science
              Laboratory. What starts as sensory wonder in Nursery grows into practical ecological
              science and community stewardship by Senior Secondary.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BENGALURU SEASON WHEEL */}
      <section className="vk-band vk-ground-cream border-y border-border" id="seasons">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The growing calendar</p>
              <h2>Three seasons, one living timetable</h2>
            </div>
            <p className="vk-lede">
              Bengaluru&apos;s climate lets our beds work all year. Tap a season to turn the wheel
              and see what children sow, tend and harvest.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 -top-1 z-10 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "15px solid var(--gold)",
                }}
              />
              <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden="true">
                <g
                  style={{
                    transformOrigin: "250px 250px",
                    transform: `rotate(${wheelAngle}deg)`,
                    transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {SEASONS.map((s, si) =>
                    s.months.map((m) => (
                      <path
                        key={`${s.id}-${m}`}
                        d={arcPath(
                          250,
                          250,
                          234,
                          154,
                          m * monthArcStep + 0.012,
                          (m + 1) * monthArcStep - 0.012,
                        )}
                        fill={s.fill}
                        opacity={si === seasonIdx ? 0.96 : 0.25}
                        className="cursor-pointer transition-opacity duration-300"
                        onClick={() => setSeasonIdx(si)}
                      />
                    )),
                  )}
                  {MONTHS.map((m, i) => {
                    const [x, y] = polar(250, 250, 194, (i + 0.5) * monthArcStep);
                    const deg = r2((i + 0.5) * 30 + (i >= 3 && i < 9 ? 180 : 0));
                    return (
                      <text
                        key={m}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${deg} ${x} ${y})`}
                        className="pointer-events-none fill-white text-[12px] font-semibold"
                      >
                        {m}
                      </text>
                    );
                  })}
                </g>
              </svg>
              <div className="absolute inset-[31%] grid place-items-center rounded-full border border-border bg-card p-3 text-center shadow-soft">
                <div>
                  <small className="block font-mono text-[11px] text-muted-foreground">Today</small>
                  <b className="mt-0.5 block font-display text-lg font-medium tabular-nums text-navy sm:text-xl">
                    {MONTHS[nowMonth]} {nowYear}
                  </b>
                  <small className="block text-xs text-muted-foreground">
                    {SEASONS[currentSeasonIdx]!.name} season
                  </small>
                </div>
              </div>
            </div>

            <div>
              <div className="vk-chips" role="tablist" aria-label="Growing seasons">
                {SEASONS.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={seasonIdx === i}
                    onClick={() => setSeasonIdx(i)}
                    className="vk-chip"
                  >
                    {s.name}
                  </button>
                ))}
              </div>

              <div key={activeSeason.id} className="vk-fadeswap mt-6" role="tabpanel" aria-live="polite">
                <p className="font-mono text-xs tabular-nums text-muted-foreground">
                  {seasonIdx === currentSeasonIdx
                    ? `In season now · ${activeSeason.months.map((m) => MONTHS[m]).join(", ")}`
                    : `Months · ${activeSeason.months.map((m) => MONTHS[m]).join(", ")}`}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-navy sm:text-3xl">
                  {activeSeason.name}: {activeSeason.sub.toLowerCase()}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {activeSeason.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeSeason.crops.map((crop) => (
                    <span
                      key={crop}
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-navy"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEED-TO-HARVEST SCROLL-PINNED PLANT GROWTH (STAYS STICKY UNTIL HARVEST FINISHES) */}
      <section ref={storyRef} className="vk-ground-deep relative lg:h-[340vh]">
        <div className="py-12 lg:sticky lg:top-[132px] lg:flex lg:h-[calc(100vh-132px)] lg:flex-col lg:justify-center lg:py-6">
          <div className="container-site">
            <div className="mb-6 grid items-end gap-4 lg:mb-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <p className="vk-kicker">Seed-to-harvest cycle</p>
                <h2 className="font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
                  Follow one seed through a season
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/85 lg:justify-self-end lg:text-base">
                Scroll (or select any stage) to watch the bed come alive — from preparing soil and
                sprouting leaves to rain, pollination and harvest.
              </p>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="vk-plant border border-white/15" data-stage={seedStage}>
                  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet" className="overflow-visible" aria-hidden="true">
                    <g className="sun-halo" fill="#f7b866" opacity="0.35">
                      <rect x="317" y="34" width="6" height="16" rx="3" />
                      <rect x="317" y="110" width="6" height="16" rx="3" />
                      <rect x="274" y="77" width="16" height="6" rx="3" />
                      <rect x="350" y="77" width="16" height="6" rx="3" />
                      <rect x="317" y="34" width="6" height="16" rx="3" transform="rotate(45 320 80)" />
                      <rect x="317" y="110" width="6" height="16" rx="3" transform="rotate(45 320 80)" />
                      <rect x="274" y="77" width="16" height="6" rx="3" transform="rotate(45 320 80)" />
                      <rect x="350" y="77" width="16" height="6" rx="3" transform="rotate(45 320 80)" />
                    </g>
                    <circle cx="320" cy="80" r="30" fill="#f4a24a" opacity="0.95" />
                    <g className="g rain" stroke="#9fd3f0" strokeWidth="3" strokeLinecap="round" style={{ opacity: rainOpacity }}>
                      <line x1="90" y1="60" x2="84" y2="80" />
                      <line x1="130" y1="40" x2="124" y2="60" style={{ animationDelay: "0.3s" }} />
                      <line x1="170" y1="70" x2="164" y2="90" style={{ animationDelay: "0.6s" }} />
                      <line x1="230" y1="50" x2="224" y2="70" style={{ animationDelay: "0.2s" }} />
                      <line x1="270" y1="80" x2="264" y2="100" style={{ animationDelay: "0.8s" }} />
                    </g>
                    <path d="M-200 390 Q200 345 600 390 V540 H-200Z" fill="#6a3f22" />
                    <path d="M-200 390 Q200 345 600 390 V406 Q200 363 -200 406Z" fill="#8a5a33" />
                    <ellipse
                      className="g sd"
                      cx="200"
                      cy="392"
                      rx="12"
                      ry="8"
                      fill="#e9c58a"
                      style={{ opacity: seedOpacity, transform: `scale(${r2(0.5 + seedOpacity * 0.5)})` }}
                    />
                    <rect
                      className="g stem"
                      x="196"
                      y="140"
                      width="8"
                      height="240"
                      rx="4"
                      fill="#7cc47f"
                      style={{ transform: `scaleY(${stemScale})` }}
                    />
                    <path
                      className="g l1"
                      d="M200 300 C150 280 130 250 140 230 C175 240 195 265 200 300Z"
                      fill="#5fb563"
                      style={{ opacity: l1Progress, transform: `scale(${r2(0.25 + l1Progress * 0.75)})` }}
                    />
                    <path
                      className="g l1"
                      d="M200 280 C250 260 270 230 262 210 C228 222 206 246 200 280Z"
                      fill="#4ea653"
                      style={{ opacity: l1Progress, transform: `scale(${r2(0.25 + l1Progress * 0.75)})` }}
                    />
                    <path
                      className="g l2"
                      d="M200 220 C155 200 140 170 150 150 C182 162 198 188 200 220Z"
                      fill="#5fb563"
                      style={{ opacity: l2Progress, transform: `scale(${r2(0.25 + l2Progress * 0.75)})` }}
                    />
                    <path
                      className="g l2"
                      d="M200 200 C246 182 262 152 254 134 C222 146 204 170 200 200Z"
                      fill="#4ea653"
                      style={{ opacity: l2Progress, transform: `scale(${r2(0.25 + l2Progress * 0.75)})` }}
                    />
                    <g
                      className="g fl"
                      style={{ opacity: flowerOpacity, transform: `scale(${r2(0.2 + flowerScale * 0.8)})` }}
                    >
                      <circle cx="200" cy="140" r="26" fill="#f6d04d" />
                      <circle cx="200" cy="140" r="11" fill="#c4631a" />
                    </g>
                    <g
                      className="g fr"
                      style={{ opacity: fruitScale, transform: `scale(${r2(0.2 + fruitScale * 0.8)})` }}
                    >
                      <circle cx="160" cy="250" r="18" fill="#e0512f" />
                      <circle cx="244" cy="226" r="16" fill="#e0512f" />
                      <circle cx="196" cy="160" r="19" fill="#e0512f" />
                    </g>
                    <g className="g bee" style={{ opacity: beeOpacity }}>
                      <ellipse cx="260" cy="120" rx="10" ry="7" fill="#f6d04d" />
                      <path d="M256 114v12M262 114v12" stroke="#1c1f3f" strokeWidth="2.5" />
                      <ellipse cx="258" cy="110" rx="6" ry="4" fill="#ffffff" opacity="0.85" />
                    </g>
                  </svg>
                  <div className="absolute left-5 top-5 flex gap-1.5" aria-hidden="true">
                    {SEED_STAGES.map((st, idx) => (
                      <span
                        key={st.num}
                        className="h-1.5 w-7 rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: idx <= seedStage ? "#ee8a2c" : "rgba(255,255,255,0.28)",
                        }}
                      />
                    ))}
                  </div>
                  <span className="absolute bottom-4 left-5 rounded-md bg-black/45 px-3 py-1 font-mono text-xs text-white backdrop-blur-xs">
                    Stage {SEED_STAGES[seedStage]?.num} · {SEED_STAGES[seedStage]?.tag}
                  </span>
                </div>
              </div>

              <ol className="divide-y divide-white/15 border-y border-white/15 lg:col-span-7">
                {SEED_STAGES.map((st, i) => {
                  const isOn = seedStage === i;
                  return (
                    <li key={st.num}>
                      <button
                        type="button"
                        aria-expanded={isOn}
                        onClick={() => selectSeedStage(i)}
                        className={`relative block w-full py-3.5 pl-5 pr-3 text-left transition-all duration-300 ${
                          isOn ? "bg-white/12 opacity-100" : "opacity-60 hover:bg-white/6 hover:opacity-100"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-y-0 left-0 w-1 transition-colors ${
                            isOn ? "bg-[#ffd27a]" : "bg-transparent"
                          }`}
                        />
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs tabular-nums text-[#ffd27a]">
                            {st.num}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-x-3">
                              <p className="text-xs font-semibold text-[#ffd27a]">{st.tag}</p>
                              <h3 className="font-display text-lg font-medium text-white md:text-xl">
                                {st.title}
                              </h3>
                            </div>
                            <p
                              className={`mt-1.5 text-sm leading-relaxed text-white/90 ${
                                isOn ? "block" : "line-clamp-1 lg:hidden"
                              }`}
                            >
                              {st.text}
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

      {/* 5. FOUR PLOTS BENTO WITH VECTOR MOTIFS */}
      <section className="vk-band vk-ground-card border-b border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">What children do</p>
              <h2>Four plots of learning</h2>
            </div>
            <p className="vk-lede">
              Each strand of Krishi Vidya builds a different habit: of hand, of mind and of heart.
            </p>
          </div>

          <div ref={plotsReveal.ref} className={`vk-reveal grid gap-5 lg:grid-cols-6 ${plotsReveal.inView ? "is-in" : ""}`}>
            <article style={{ ["--ri" as string]: 0 }} className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-[#2f7d4a] p-6 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-4 lg:p-7">
              <svg className="pointer-events-none absolute -top-5 -right-5 w-48 opacity-20 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-105" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50 95V40M50 60C30 55 22 40 25 28C40 32 48 45 50 60ZM50 48C70 42 78 28 74 16C60 20 52 34 50 48Z" fill="#fff" />
              </svg>
              <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium">Life skills education</span>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">Organic farming &amp; horticulture</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
                Students prepare raised beds, sow native seeds, follow watering schedules and harvest seasonal greens and herbs without synthetic chemicals.
              </p>
              <ul className="mt-4 grid gap-3 border-t border-white/15 pt-4 text-xs sm:grid-cols-2">
                <li><b className="block text-white">Soil preparation</b><span className="text-white/75">Texture, moisture and aeration before sowing</span></li>
                <li><b className="block text-white">Seasonal planting</b><span className="text-white/75">Herbs, leafy greens and vegetables suited to Bengaluru</span></li>
                <li><b className="block text-white">Organic plant care</b><span className="text-white/75">Mulching, companion planting, mindful watering</span></li>
                <li><b className="block text-white">Harvest observation</b><span className="text-white/75">Measuring yield and recording growth logs</span></li>
              </ul>
            </article>

            <article style={{ ["--ri" as string]: 1 }} className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-[#2b6f8f] p-6 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-2 lg:p-7">
              <svg className="pointer-events-none absolute -top-5 -right-5 w-44 opacity-20 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-105" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50 10C30 40 22 55 22 68a28 28 0 0 0 56 0C78 55 70 40 50 10Z" fill="#fff" />
              </svg>
              <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium">Experiential zone</span>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">Environmental &amp; sustainability zone</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Outdoor zones connect biology and geography with living pollinators, rainwater awareness and local biodiversity.
              </p>
            </article>

            <article style={{ ["--ri" as string]: 2 }} className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-[#7a4b2a] p-6 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-3 lg:p-7">
              <svg className="pointer-events-none absolute -top-5 -right-5 w-44 opacity-20 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-105" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50 15a35 35 0 1 1 -33 24" fill="none" stroke="#fff" strokeWidth="10" />
                <path d="M8 30l10 12 12-10" fill="none" stroke="#fff" strokeWidth="10" />
              </svg>
              <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium">Circular ecology</span>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">Composting &amp; living soil</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Fallen leaves and garden trimmings return to campus compost pits, showing children first-hand how natural cycles waste nothing.
              </p>
            </article>

            <article style={{ ["--ri" as string]: 3 }} className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-3 lg:p-7">
              <svg className="pointer-events-none absolute -top-5 -right-5 w-44 opacity-20 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-105" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50 85S15 62 15 38a18 18 0 0 1 35-6 18 18 0 0 1 35 6c0 24-35 47-35 47Z" fill="#fff" />
              </svg>
              <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium">Compassion &amp; community</span>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">Environmental Club, Pet Day &amp; service</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Respect for plants grows into empathy for animals and responsibility for the neighbourhood through Pet Day and student-led green action.
              </p>
            </article>
          </div>
        </div>
      </section>

      <VidyaGradeFinder name="Krishi Vidya" grades={GRADES} />

      {/* 6. ANIMATED COMPOST CYCLE LOOP SVG */}
      <section className="vk-band vk-ground-cream border-b border-border">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="mx-auto w-full max-w-[440px] lg:col-span-6">
            <svg
              className="vk-cyc block w-full"
              viewBox="0 0 440 440"
              role="img"
              aria-label="Animated compost cycle: leaves, pit, turning, compost, garden beds"
            >
              <circle cx="220" cy="220" r="150" fill="none" stroke="#d9c2a8" strokeWidth="3" strokeDasharray="4 10" />
              <circle cx="220" cy="220" r="84" fill="#7a4b2a" />
              <text x="220" y="214" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="500" fontFamily="Fraunces, serif">
                Nothing
              </text>
              <text x="220" y="240" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="500" fontFamily="Fraunces, serif">
                is wasted
              </text>
              <circle r="9" fill="#ee8a2c">
                <animateMotion dur="10s" repeatCount="indefinite" path="M220 70 A150 150 0 1 1 219.9 70" />
              </circle>
              {COMPOST_NODES.map(([label, sub], i) => {
                const a = (i / COMPOST_NODES.length) * Math.PI * 2;
                const x = r2(220 + 150 * Math.sin(a));
                const y = r2(220 - 150 * Math.cos(a));
                return (
                  <g key={label} className="node" style={{ ["--n" as string]: i }}>
                    <circle cx={x} cy={y} r="42" />
                    <text x={x} y={r2(y - 2)} textAnchor="middle" fill="#181c55" fontSize="13" fontWeight="700">
                      {label}
                    </text>
                    <text x={x} y={r2(y + 15)} textAnchor="middle" fill="#575a78" fontSize="11">
                      {sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="lg:col-span-6">
            <p className="vk-kicker" style={{ color: "#7a4b2a" }}>Circular ecology</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
              The compost loop children run themselves
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              A living lesson in chemistry, biology and patience that turns campus leaf litter into
              the food for next season&apos;s beds.
            </p>
            <ol ref={compostReveal.ref} className={`vk-reveal mt-6 space-y-4 ${compostReveal.inView ? "is-in" : ""}`}>
              {[
                ["1", "Collect", "Leaf-litter drives and garden trimmings gathered by class teams."],
                ["2", "Layer", "Greens and browns layered in aerobic and vermicompost pits."],
                ["3", "Turn & check", "Students monitor moisture, warmth and soil pH, and log the changes."],
                ["4", "Return", "Finished compost goes back to the beds it came from."],
              ].map(([n, title, desc], idx) => (
                <li key={n} style={{ ["--ri" as string]: idx }} className="grid grid-cols-[40px_1fr] items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#7a4b2a] font-display text-base font-medium text-white">
                    {n}
                  </span>
                  <div>
                    <b className="block text-sm font-semibold text-navy">{title}</b>
                    <span className="text-sm text-foreground">{desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="A child who has grown one plant from seed understands patience, care and *where *food *really *comes *from."
        note="That is the whole idea behind Krishi Vidya, starting in Nursery."
      />

      {/* 7. PET DAY WITH ANIMATED PAW-PRINT TRAIL SVG */}
      <section className="vk-band vk-ground-paper" id="pet-day">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="vk-kicker">Compassion and community</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
              Pet Day: where caring for plants becomes caring for animals
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Once a year, families bring calm, vaccinated pets to school. Children learn how
              animals eat, rest and signal how they feel, and how to approach them gently.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Meet and greet", "Children ask the owner first, offer a hand slowly and read an animal's body language."],
                ["Care corner", "Owners and teachers demonstrate feeding, grooming, fresh water and quiet rest."],
                ["Kindness pledge", "Each class writes a pledge for the street animals and birds around campus."],
              ].map(([title, desc]) => (
                <li key={title} className="grid grid-cols-[44px_1fr] items-start gap-4">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                  >
                    <PawPrint className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-sm text-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Pets stay on a lead with their owners at all times. Children with allergies or fears
              join from the art and story corner.
            </p>
          </div>

          <figure ref={petFigureRef} className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-[#f6ede3]">
              <svg
                viewBox="0 0 480 480"
                className="block aspect-square w-full"
                role="img"
                aria-label="Illustration of a dog and a cat with an animated trail of paw prints"
              >
                <rect width="480" height="480" fill="#f6ede3" />
                <path
                  d="M40 420 C120 380 120 300 200 300 S300 380 360 300 S420 160 440 120"
                  fill="none"
                  stroke="#e7d6c2"
                  strokeWidth="2"
                  strokeDasharray="4 10"
                />
                <g fill="#c4631a">
                  {PAW_TRAIL.map(([x, y], i) => {
                    const threshold = i / PAW_TRAIL.length;
                    const visible = pawProgress >= threshold;
                    return (
                      <g
                        key={`${x}-${y}`}
                        transform={`translate(${x} ${y}) rotate(${i % 2 ? -20 : 20}) scale(${visible ? 1 : 0.25})`}
                        style={{
                          opacity: visible ? 1 : 0,
                          transition: "opacity 320ms cubic-bezier(0.22,1,0.36,1), transform 420ms cubic-bezier(0.34,1.56,0.64,1)",
                        }}
                      >
                        <ellipse cx="0" cy="4" rx="7" ry="6" />
                        <circle cx="-7" cy="-5" r="2.6" />
                        <circle cx="-2.5" cy="-9" r="2.6" />
                        <circle cx="2.5" cy="-9" r="2.6" />
                        <circle cx="7" cy="-5" r="2.6" />
                      </g>
                    );
                  })}
                </g>
                <g transform="translate(120 120)">
                  <ellipse cx="0" cy="40" rx="62" ry="46" fill="#c98e63" />
                  <ellipse cx="-50" cy="20" rx="18" ry="38" fill="#8a5a33" transform="rotate(20 -50 20)" />
                  <ellipse cx="50" cy="20" rx="18" ry="38" fill="#8a5a33" transform="rotate(-20 50 20)" />
                  <circle cx="-20" cy="30" r="6" fill="#1c1f3f" />
                  <circle cx="20" cy="30" r="6" fill="#1c1f3f" />
                  <ellipse cx="0" cy="54" rx="12" ry="8" fill="#1c1f3f" />
                  <path d="M0 62 v10" stroke="#1c1f3f" strokeWidth="3" />
                </g>
                <g transform="translate(330 360)">
                  <path d="M-46 -10 L-40 -62 L-14 -36 Z M46 -10 L40 -62 L14 -36Z" fill="#5c6080" />
                  <circle cx="0" cy="0" r="48" fill="#5c6080" />
                  <circle cx="-16" cy="-6" r="6" fill="#f4c55a" />
                  <circle cx="16" cy="-6" r="6" fill="#f4c55a" />
                  <path d="M-6 12 h12 l-6 6Z" fill="#e8a0b4" />
                  <path d="M-30 14h-24M-30 20h-22M30 14h24M30 20h22" stroke="#e3e1ea" strokeWidth="2" />
                </g>
                <path
                  d="M400 96 c-10 -18 -34 -8 -24 10 l24 22 24 -22 c10 -18 -14 -28 -24 -10Z"
                  fill="#a3264f"
                />
              </svg>
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
              <span>Pet Day on the front lawn</span>
              <span className="shrink-0 font-mono tabular-nums">Plate 02</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "A labelled water bottle",
          "A cap or sun hat on garden days",
          "A spare set of clothes for younger children",
          "Closed shoes, as for PE",
          "Tools, gloves, seeds and compost come from the school",
        ]}
        progress={[
          "Garden journals that come home each term",
          "Photos of class beds in school updates",
          "Life skills remarks in the report card",
          "Harvest displays at open house",
        ]}
        join={[
          "Harvest Day at the end of each term",
          "Weekend garden mornings for families",
          "Sharing a family recipe that uses what we grow",
          "Bringing a calm, vaccinated pet on Pet Day",
        ]}
        safety={[
          "Small tools and gloves sized for children",
          "Small groups with an educator at every bed",
          "No chemical fertilisers or pesticides on campus",
          "Hand washing after every session",
          "Shaded or indoor work on very hot or wet days",
          "Pets stay on a lead with their owners",
        ]}
      />

      <VidyaFaqSection
        name="Krishi Vidya"
        intro="Practical answers on supervision, clothing, allergies and how the garden links to CBSE learning."
        faqs={FAQS}
      />

      <VidyaTail active="krishi" />
    </div>
  );
}
