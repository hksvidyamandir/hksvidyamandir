import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
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

const ZONES = [
  {
    name: "Virtual Reality Room",
    short: "VR room",
    kind: "Immersive",
    color: "#7f8cff",
    text: "Virtual reality sessions that bring lessons alive: walk through a human heart, stand on the Moon or tour an ancient city.",
    points: [
      "Science and geography field trips in VR",
      "Short, supervised sessions by grade",
      "Reflection journals after each visit",
    ],
    span: "md:col-span-2 md:row-span-2",
    x: 180,
    y: 110,
  },
  {
    name: "Augmented Reality Room",
    short: "AR room",
    kind: "Immersive",
    color: "#5fc4e8",
    text: "Augmented reality lets children see ideas in 3D, turning flat diagrams into models they can rotate and explore.",
    points: [
      "3D models of molecules, organs and machines",
      "Interactive textbook overlays",
      "Ideal for early and primary grades",
    ],
    span: "",
    x: 390,
    y: 60,
  },
  {
    name: "Astronomy & Space Zone",
    short: "Astronomy",
    kind: "Discovery",
    color: "#b6bdff",
    text: "A space to explore stars, planets and space, with sky-watching sessions and models of the solar system.",
    points: [
      "Telescope and sky-watching sessions",
      "Planetary models and space missions",
      "Links to the Astronomy Laboratory",
    ],
    span: "md:row-span-2",
    x: 600,
    y: 140,
  },
  {
    name: "Innovation & Discovery Centre",
    short: "Innovation",
    kind: "Make",
    color: "#ee8a2c",
    text: "A place to try ideas, build and test. Children prototype solutions to real problems they notice around them.",
    points: [
      "Design-thinking challenges",
      "Prototype, test, improve",
      "Showcase at the Science Exhibition",
    ],
    span: "",
    x: 820,
    y: 70,
  },
  {
    name: "Creative Arts & Design Studio",
    short: "Arts studio",
    kind: "Create",
    color: "#e86a92",
    text: "Art, craft and design for creative expression, from sketching and colour to product and graphic design.",
    points: [
      "Drawing, painting and mixed media",
      "Design projects with real briefs",
      "Exhibitions through the year",
    ],
    span: "",
    x: 1030,
    y: 150,
  },
  {
    name: "Environmental & Sustainability Zone",
    short: "Sustainability",
    kind: "Discovery",
    color: "#6cc58b",
    text: "Learning about nature and sustainable living, closely linked to our Krishi Vidya gardens.",
    points: [
      "Pollinator and biodiversity studies",
      "Water and energy audits",
      "Hands-on projects with Krishi Vidya",
    ],
    span: "md:col-span-2",
    x: 940,
    y: 300,
  },
  {
    name: "Entrepreneurship & Business Simulation",
    short: "Business sim",
    kind: "Life skills",
    color: "#ffd166",
    text: "Running a small business to learn money skills: planning, pricing, selling and keeping accounts.",
    points: [
      "Mock companies and market days",
      "Budgeting and simple accounts",
      "Pitching ideas to a panel",
    ],
    span: "md:row-span-2",
    x: 700,
    y: 320,
  },
  {
    name: "Public Speaking & Debate Centre",
    short: "Debate",
    kind: "Voice",
    color: "#ff8e72",
    text: "A space to practise speaking, debate and confidence, preparing children for MUN and stage events.",
    points: [
      "Elocution, extempore and debate",
      "Model United Nations preparation",
      "Coaching in voice and presence",
    ],
    span: "md:col-span-2",
    x: 430,
    y: 290,
  },
  {
    name: "Heritage & Cultural Learning Zone",
    short: "Heritage",
    kind: "Roots",
    color: "#d98cb0",
    text: "Learning about our culture and heritage through artefacts, stories and crafts, shared with Samskriti Vidya.",
    points: [
      "Karnataka and Indian heritage studies",
      "Craft and artefact sessions",
      "Heritage walks and storytelling",
    ],
    span: "",
    x: 200,
    y: 300,
  },
] as const;

const CONSTELLATION_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 0], [2, 6], [1, 7],
];

const LOOP_STEPS = [
  { title: "Wonder", desc: "A question, a story or an object starts the lesson, not a chapter heading." },
  { title: "Explore", desc: "Children investigate with immersive tools: VR, AR, telescopes and simulations." },
  { title: "Build", desc: "They make something real: a model, a prototype, a business plan or an argument." },
  { title: "Share", desc: "They present, debate or exhibit it, and learn to take feedback." },
] as const;

type LabGlyphKey = "atom" | "flask" | "leaf" | "tri" | "code" | "bot" | "brain" | "chip" | "scope" | "globe" | "gear" | "tool";

const LABS: { name: string; desc: string; glyph: LabGlyphKey; color: string }[] = [
  { name: "Physics Laboratory", desc: "Experiments on force, light, sound and energy", glyph: "atom", color: "#4352d1" },
  { name: "Chemistry Laboratory", desc: "Safe experiments with materials and reactions", glyph: "flask", color: "#d9482b" },
  { name: "Biology Laboratory", desc: "Studying plants, animals and the human body", glyph: "leaf", color: "#2f7d4a" },
  { name: "Mathematics Laboratory", desc: "Learning maths through models and activity", glyph: "tri", color: "#c4631a" },
  { name: "Computer Science Laboratory", desc: "Computers for digital skills and projects", glyph: "code", color: "#23286b" },
  { name: "Robotics Laboratory", desc: "Building and programming simple robots", glyph: "bot", color: "#a3264f" },
  { name: "AI & Machine Learning Lab", desc: "An introduction to how smart machines learn", glyph: "brain", color: "#6c3fc4" },
  { name: "Coding & Programming Lab", desc: "Learning to write programs step by step", glyph: "code", color: "#2b6f8f" },
  { name: "Electronics Prototyping Lab", desc: "Making simple circuits and working models", glyph: "chip", color: "#3a7d6b" },
  { name: "Astronomy Laboratory", desc: "Observing the sky and learning about space", glyph: "scope", color: "#1d2470" },
  { name: "Environmental Science Lab", desc: "Studying air, water, soil and ecosystems", glyph: "globe", color: "#2f7d4a" },
  { name: "Tinkering & Innovation Lab", desc: "A corner to tinker, test and invent", glyph: "gear", color: "#ee8a2c" },
  { name: "Maker Space & Design Lab", desc: "Building real things with tools and design", glyph: "tool", color: "#7a4b2a" },
];

function LabVectorGlyph({ kind }: { kind: LabGlyphKey }) {
  switch (kind) {
    case "atom":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="44" cy="44" r="6" fill="#fff" />
          <ellipse cx="44" cy="44" rx="34" ry="12" fill="none" stroke="#fff" strokeWidth="3" />
          <ellipse cx="44" cy="44" rx="34" ry="12" fill="none" stroke="#fff" strokeWidth="3" transform="rotate(60 44 44)" />
          <ellipse cx="44" cy="44" rx="34" ry="12" fill="none" stroke="#fff" strokeWidth="3" transform="rotate(-60 44 44)" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M34 12h20M38 12v22L18 72a6 6 0 0 0 5 8h42a6 6 0 0 0 5-8L50 34V12" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M26 60h36l6 12H20Z" fill="#fff" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M44 80V34M44 56C26 52 18 36 22 22C38 26 44 40 44 56ZM44 46C62 42 70 28 66 14C50 18 44 32 44 46Z" fill="#fff" />
        </svg>
      );
    case "tri":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M44 14L76 72H12Z" fill="none" stroke="#fff" strokeWidth="3.5" />
          <path d="M12 72L44 40" stroke="#fff" strokeWidth="3" />
          <circle cx="44" cy="14" r="5" fill="#fff" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M30 28L14 44l16 16M58 28l16 16-16 16M50 20L38 68" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bot":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <rect x="20" y="28" width="48" height="38" rx="10" fill="none" stroke="#fff" strokeWidth="3.5" />
          <circle cx="35" cy="46" r="5" fill="#fff" />
          <circle cx="53" cy="46" r="5" fill="#fff" />
          <path d="M44 28V16M38 74h12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="44" cy="14" r="4" fill="#fff" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="44" cy="44" r="30" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="30" cy="36" r="4" fill="#fff" />
          <circle cx="56" cy="32" r="4" fill="#fff" />
          <circle cx="44" cy="54" r="4" fill="#fff" />
          <circle cx="60" cy="56" r="4" fill="#fff" />
          <path d="M30 36L56 32L44 54L60 56M30 36L44 54" stroke="#fff" strokeWidth="2" />
        </svg>
      );
    case "chip":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <rect x="24" y="24" width="40" height="40" rx="6" fill="none" stroke="#fff" strokeWidth="3.5" />
          <rect x="36" y="36" width="16" height="16" fill="#fff" />
          <path d="M34 14v10M44 14v10M54 14v10M34 64v10M44 64v10M54 64v10M14 34h10M14 44h10M14 54h10M64 34h10M64 44h10M64 54h10" stroke="#fff" strokeWidth="3" />
        </svg>
      );
    case "scope":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M16 56L62 30l6 10-46 26Z" fill="#fff" />
          <path d="M40 52L30 78M44 50l12 28" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="72" cy="18" r="3" fill="#fff" />
          <circle cx="60" cy="12" r="2" fill="#fff" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="44" cy="44" r="30" fill="none" stroke="#fff" strokeWidth="3.5" />
          <path d="M14 44h60M44 14c-12 16-12 44 0 60M44 14c12 16 12 44 0 60" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="44" cy="44" r="14" fill="none" stroke="#fff" strokeWidth="4" />
          <path d="M44 12v12M44 64v12M12 44h12M64 44h12M21 21l9 9M58 58l9 9M21 67l9-9M58 30l9-9" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "tool":
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M60 14a16 16 0 0 0-20 20L16 58a6 6 0 0 0 8 8l24-24a16 16 0 0 0 20-20l-10 10-8-8Z" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" />
        </svg>
      );
  }
}

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Who takes part", value: "Every child, Nursery to Grade 12" },
  { icon: "clock", label: "When", value: "Zone and lab periods every week" },
  { icon: "pin", label: "Where", value: "Nine experiential zones and thirteen labs" },
  { icon: "teacher", label: "Led by", value: "Subject teachers in every zone and lab" },
  { icon: "wallet", label: "Fees", value: "Part of the school programme" },
  { icon: "bag", label: "Your child brings", value: "A notebook and curiosity; devices stay at school" },
];

const GRADES: GradeBandContent[] = [
  {
    focus: "Wonder through the senses",
    doItems: [
      "AR picture books and 3D models",
      "Show and tell in the Heritage zone",
      "Watching the sun, moon and seasons",
      "Building with blocks in the Innovation corner",
    ],
    often: "Short zone visits each week, built into class themes.",
    home: "Lots of questions that start with why, and stories about planets.",
  },
  {
    focus: "Learning by making",
    doItems: [
      "Maths lab models and simple science experiments",
      "First steps in block coding",
      "VR and AR sessions linked to EVS topics",
      "Elocution and show and tell",
    ],
    often: "Weekly zone and lab periods, plus project weeks.",
    home: "Models and experiments brought home to show you.",
  },
  {
    focus: "Building and testing",
    doItems: [
      "Robotics and electronics kits",
      "Coding small games and apps",
      "Market days in the Business Simulation Centre",
      "Debates and a first taste of Model UN",
    ],
    often: "Regular lab periods in science, maths, computers and robotics.",
    home: "Prototypes on the dining table and sharper arguments at dinner.",
  },
  {
    focus: "Deeper labs and competitions",
    doItems: [
      "Physics, chemistry and biology practicals for CBSE",
      "An introduction to AI and machine learning",
      "Olympiads, science exhibitions and robotics contests",
      "Model United Nations and debate",
    ],
    often: "CBSE practical periods plus clubs and competition preparation.",
    home: "More confidence presenting ideas, and real project deadlines.",
  },
  {
    focus: "Research, innovation and careers",
    doItems: [
      "Independent research and innovation projects",
      "Advanced coding and electronics",
      "Career awareness and counselling sessions",
      "Mentoring juniors in the labs",
    ],
    often: "Practical periods and project time, planned around board exams.",
    home: "Clearer ideas about the subjects and careers they want.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Is VR safe for young children?",
    a: "VR sessions are short, supervised and age-appropriate. Younger children mostly use AR on tablets and screens, and move to headsets in later grades.",
  },
  {
    q: "Does experiential learning replace the CBSE syllabus?",
    a: "No. The zones and labs teach the same CBSE topics in a hands-on way, so children understand concepts more deeply and remember them longer.",
  },
  {
    q: "How often does each class use the zones and labs?",
    a: "Every class has timetabled slots in the zones and labs each week, with more lab time from the middle grades onwards.",
  },
  {
    q: "Are field trips and the study tour included in the fees?",
    a: "The school shares the details and any costs for each trip in advance. Study tours abroad are optional and confirmed with parents ahead of time.",
  },
  {
    q: "Which Olympiads can my child take part in?",
    a: "From Grade 4, children can take Science, Maths, English, Cyber and General Knowledge Olympiads, including IMO, NSO, IEO, ICSO and IGKO. Older students can also join Model United Nations.",
  },
  {
    q: "How much screen time does this involve?",
    a: "Screens are one tool among many. Most zone time is hands-on: building, testing, speaking and making. VR and AR sessions are short and planned for specific topics.",
  },
  {
    q: "Does my child need a laptop or tablet at home?",
    a: "No. Devices for VR, AR, coding and robotics are used at school. Any home project can be done on paper or with simple materials.",
  },
  {
    q: "Is Olympiad preparation compulsory?",
    a: "No. Every child is encouraged to try, and preparation runs alongside regular classes. Families decide which Olympiads their child registers for.",
  },
];

function formatInr(n: number) {
  return `${n < 0 ? "−₹" : "₹"}${Math.abs(Math.round(n)).toLocaleString("en-IN")}`;
}

export function AnubhavVidyaPage() {
  const [loopIdx, setLoopIdx] = useState(0);
  const [loopAuto, setLoopAuto] = useState(true);
  const [zoneIdx, setZoneIdx] = useState(0);
  const [qty, setQty] = useState(80);
  const [unitCost, setUnitCost] = useState(12);
  const [price, setPrice] = useState(25);
  const [soldPct, setSoldPct] = useState(75);
  const [constelReady, setConstelReady] = useState(false);

  const skyCanvasRef = useRef<HTMLCanvasElement>(null);
  const labsRef = useRef<HTMLDivElement>(null);
  const skillsReveal = useInViewOnce<HTMLDivElement>(0.2);
  const medalsReveal = useInViewOnce<HTMLDivElement>(0.2);
  const stampsReveal = useInViewOnce<HTMLDivElement>(0.2);

  /* Draw constellation lines on mount */
  useEffect(() => {
    const t = setTimeout(() => setConstelReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* Live twinkling starfield canvas */
  useEffect(() => {
    const cv = skyCanvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext?.("2d");
    if (!ctx) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let stars: { x: number; y: number; r: number; p: number; s: number }[] = [];
    const resize = () => {
      const r = cv.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const d = window.devicePixelRatio || 1;
      cv.width = r.width * d;
      cv.height = r.height * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const count = Math.min(180, Math.max(40, Math.round((r.width * r.height) / 3200)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * r.width,
        y: Math.random() * r.height,
        r: Math.random() * 1.3 + 0.25,
        p: Math.random() * 6.28,
        s: 0.5 + Math.random() * 1.4,
      }));
    };

    let raf = 0;
    const paint = (t: number) => {
      const r = cv.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);
      for (const s of stars) {
        ctx.globalAlpha = 0.32 + 0.65 * Math.abs(Math.sin(s.p + (t / 1000) * s.s));
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(paint);
    };

    resize();
    if (reduce) {
      paint(0);
    } else {
      raf = requestAnimationFrame(paint);
    }

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { resize(); if (reduce) paint(0); }) : null;
    ro?.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, []);

  /* Learning loop autoplay */
  useEffect(() => {
    if (!loopAuto) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setLoopIdx((v) => (v + 1) % 4), 2600);
    return () => clearInterval(id);
  }, [loopAuto]);

  const activeZone = ZONES[zoneIdx] ?? ZONES[0];
  const soldCups = Math.round((qty * soldPct) / 100);
  const totalCost = qty * unitCost;
  const revenue = soldCups * price;
  const profit = revenue - totalCost;
  const maxVal = Math.max(totalCost, revenue, 1);
  const breakEven = price > 0 ? Math.ceil(totalCost / price) : 0;

  const scrollLabs = (dir: number) => {
    labsRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-track="anubhav">
      {/* 1. UNIFIED NIGHT-SKY HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="vk-ahero pt-8 pb-12 md:pt-12 md:pb-16">
        <canvas
          ref={skyCanvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        <div className="container-site relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-white">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Anubhav Vidya</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#ffd27a]">
                Experiential learning &amp; 13 laboratories
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Learning you can step inside
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                Nine experiential zones — VR, AR, astronomy, robotics, AI &amp; entrepreneurship —
                plus thirteen dedicated laboratories.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#zones"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Explore the floor plan
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
                context="Anubhav Vidya — Experiential Learning & 13 Labs"
                title="Tour Our Labs & Learning Zones"
                subtitle="See VR, Robotics, AI & Science labs in action + get the 2026–27 fee guide."
                ctaLabel="Book a Lab Tour"
                accentColor="#4352d1"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>9 zones</b>
              <span>Experiential spaces</span>
              <small>VR, AR, astronomy &amp; enterprise</small>
            </div>
            <div>
              <b>13 labs</b>
              <span>Dedicated laboratories</span>
              <small>Science, maths, coding, AI &amp; maker</small>
            </div>
            <div>
              <b>Grade 4+</b>
              <span>Olympiad subjects</span>
              <small>IMO, NSO, IEO, ICSO, IGKO &amp; MUN</small>
            </div>
            <div>
              <b>Grade 6+</b>
              <span>Exam foundations</span>
              <small>NEET, JEE, SAT, AP &amp; IELTS</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Anubhav Vidya" items={GLANCE} />

      {/* 1B. ANIMATED 9-ZONE CONSTELLATION & RINGED PLANET SHOWCASE (MOVED BELOW HERO) */}
      <section className="vk-band vk-ground-paper border-b border-border">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-2xl bg-[#10144a] p-6 text-white shadow-soft sm:p-10">
            <svg
              className="vk-planet-float pointer-events-none absolute top-6 right-6 z-10 hidden h-36 w-36 lg:block"
              viewBox="0 0 220 220"
              aria-hidden="true"
            >
              <ellipse cx="110" cy="110" rx="88" ry="26" fill="none" stroke="#ffd27a" strokeWidth="5" transform="rotate(-18 110 110)" opacity="0.85" />
              <ellipse cx="110" cy="110" rx="70" ry="18" fill="none" stroke="#ee8a2c" strokeWidth="2.5" transform="rotate(-18 110 110)" opacity="0.9" />
              <circle cx="110" cy="110" r="46" fill="#4352d1" />
              <circle cx="102" cy="102" r="42" fill="#5b6ae0" opacity="0.8" />
              <path d="M30 132 A88 26 -18 0 0 190 88" fill="none" stroke="#ffd27a" strokeWidth="5" opacity="0.9" />
              <g className="vk-planet-moon">
                <circle cx="192" cy="110" r="8" fill="#e8e9f7" />
              </g>
            </svg>

            <div className="max-w-xl">
              <p className="vk-kicker" style={{ color: "#ffd27a" }}>Interactive zone map</p>
              <h2 className="font-display text-3xl font-medium leading-[1.12] text-white md:text-4xl">
                Nine connected worlds of hands-on discovery
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                Tap any star in the constellation to jump straight to that learning zone below.
              </p>
            </div>

            <div className={`vk-constel mt-6 ${constelReady ? "is-in" : ""}`}>
              <svg
                viewBox="0 0 1200 380"
                className="block h-auto w-full overflow-visible"
                role="img"
                aria-label="Interactive constellation of the nine experiential learning zones"
              >
                <g>
                  {CONSTELLATION_EDGES.map(([a, b], idx) => (
                    <line
                      key={`${a}-${b}`}
                      className="edge"
                      style={{ transitionDelay: `${idx * 70}ms` }}
                      x1={ZONES[a]!.x}
                      y1={ZONES[a]!.y}
                      x2={ZONES[b]!.x}
                      y2={ZONES[b]!.y}
                    />
                  ))}
                </g>
                {ZONES.map((z, i) => (
                  <a
                    key={z.name}
                    className="star"
                    href="#zones"
                    aria-label={z.name}
                    onClick={() => setZoneIdx(i)}
                  >
                    <circle className="halo" cx={z.x} cy={z.y} r="22" />
                    <circle
                      className="dot"
                      cx={z.x}
                      cy={z.y}
                      r="6"
                      fill={z.color}
                      style={{ ["--d" as string]: `${i * 0.3}s` }}
                    />
                    <text
                      x={z.x}
                      y={z.y + 42}
                      textAnchor="middle"
                      fill="#dfe2ff"
                      fontSize="14"
                      fontWeight="600"
                      className="hidden sm:block"
                    >
                      {z.short}
                    </text>
                  </a>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED ORBITAL LEARNING LOOP */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="vk-orbit" aria-hidden="true">
            <div className="vk-orbit-ring" />
            <div className="vk-orbit-hub">
              Learn by
              <br />
              doing
            </div>
            {LOOP_STEPS.map((st, i) => (
              <button
                key={st.title}
                type="button"
                tabIndex={-1}
                onClick={() => {
                  setLoopAuto(false);
                  setLoopIdx(i);
                }}
                className={`vk-orbit-pl p${i} ${loopIdx === i ? "is-on" : ""}`}
              >
                {st.title}
              </button>
            ))}
          </div>

          <div>
            <p className="vk-kicker">How every zone works</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
              One loop, repeated until curiosity becomes skill
            </h2>
            <div className="mt-6 grid gap-2">
              {LOOP_STEPS.map((st, i) => {
                const isOn = loopIdx === i;
                return (
                  <button
                    key={st.title}
                    type="button"
                    onClick={() => {
                      setLoopAuto(false);
                      setLoopIdx(i);
                    }}
                    className={`grid gap-1 rounded-xl border p-4 text-left transition-all sm:grid-cols-[110px_1fr] sm:items-baseline sm:gap-4 ${
                      isOn
                        ? "border-navy/25 bg-card shadow-soft"
                        : "border-transparent hover:bg-card/60"
                    }`}
                  >
                    <b className="font-display text-xl font-medium text-navy">{st.title}</b>
                    <span className="text-sm leading-relaxed text-muted-foreground">{st.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 9-ZONE FLOOR PLAN */}
      <section className="vk-band vk-ground-soft border-y border-border" id="zones">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Nine experiential zones</p>
              <h2>Walk the floor plan</h2>
            </div>
            <p className="vk-lede">
              Each room is a different way to learn. Select any room on the floor plan to step
              inside.
            </p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div
              role="tablist"
              aria-label="Experiential zones"
              className="grid grid-flow-dense grid-cols-2 gap-2.5 rounded-2xl bg-[#d9dcf3] p-2.5 md:grid-cols-4 md:auto-rows-[112px]"
            >
              {ZONES.map((z, i) => {
                const isOn = zoneIdx === i;
                return (
                  <button
                    key={z.name}
                    type="button"
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => setZoneIdx(i)}
                    className={`relative flex min-h-[96px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl p-3.5 text-left transition-all ${z.span} ${
                      isOn
                        ? "bg-[#4352d1] text-white"
                        : "bg-card text-navy hover:scale-[0.985]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: z.color }}
                    />
                    <small className={`text-[11px] font-semibold ${isOn ? "text-white/80" : "text-muted-foreground"}`}>
                      {z.kind}
                    </small>
                    <b className={`pr-4 font-display text-sm font-medium leading-snug sm:text-base ${isOn ? "text-white" : "text-navy"}`}>
                      {z.name}
                    </b>
                  </button>
                );
              })}
            </div>

            <aside
              role="tabpanel"
              aria-live="polite"
              className="flex min-h-[340px] flex-col rounded-2xl bg-ink p-6 text-navy-foreground lg:sticky lg:top-36"
            >
              <div key={activeZone.name} className="vk-fadeswap flex h-full flex-1 flex-col">
                <span className="self-start rounded-md bg-white/15 px-2.5 py-1 font-mono text-xs tabular-nums text-[#ffd27a]">
                  {activeZone.kind} · zone {zoneIdx + 1} of 9
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-white md:text-3xl">
                  {activeZone.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{activeZone.text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5">
                  {activeZone.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-white/95">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd27a]" strokeWidth={1.7} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <svg
                  className="mt-auto ml-auto pt-4 opacity-90"
                  width="76"
                  height="76"
                  viewBox="0 0 90 90"
                  aria-hidden="true"
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="38"
                    fill="none"
                    stroke={activeZone.color}
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />
                  <circle cx="45" cy="45" r="14" fill={activeZone.color} />
                </svg>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <VidyaGradeFinder name="Anubhav Vidya" grades={GRADES} />

      {/* 4. THIRTEEN LABORATORIES VECTOR ART SCROLLER */}
      <section className="vk-band vk-ground-paper" aria-label="Thirteen laboratories">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">Thirteen laboratories</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                Where theory gets its hands dirty
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground">
                From force and light to code and circuits, every lab is set up for doing rather than
                watching.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous laboratories"
                onClick={() => scrollLabs(-1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next laboratories"
                onClick={() => scrollLabs(1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div ref={labsRef} className="vk-hs">
            {LABS.map((lab) => (
              <article
                key={lab.name}
                className="vk-lab-card flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="vk-lab-art" style={{ backgroundColor: lab.color }}>
                  <LabVectorGlyph kind={lab.glyph} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-navy">{lab.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{lab.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Children remember what they *build, *test *and *explain, long after they forget what they copied from the board."
        note="Every zone and lab is designed around that one principle."
      />

      {/* 5. SKILLS BEYOND MARKS */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Student development</p>
              <h2>Skills beyond marks</h2>
            </div>
            <p className="vk-lede">
              Alongside the zones and labs, structured programmes build the habits that report cards
              rarely capture.
            </p>
          </div>
          <div ref={skillsReveal.ref} className={`vk-reveal divide-y divide-border border-y border-border ${skillsReveal.inView ? "is-in" : ""}`}>
            {[
              [Users, "Leadership and team building", "Leading others, working in teams and the Student Leadership Council"],
              [Lightbulb, "Critical thinking and problem solving", "Breaking problems down and testing ideas with evidence"],
              [Settings, "Creativity and innovation", "Trying new ideas and building models that work"],
              [MessageSquare, "Communication and public speaking", "Speaking clearly and with confidence, on stage and in class"],
              [Heart, "Emotional intelligence", "Understanding feelings, our own and others'"],
              [GraduationCap, "Career awareness and counselling", "Guidance on subjects, streams and career choices"],
            ].map(([Icon, title, desc], idx) => {
              const I = Icon as typeof Users;
              return (
                <div
                  key={title as string}
                  style={{ ["--ri" as string]: idx }}
                  className="grid items-center gap-3 px-2 py-5 transition-colors hover:bg-[#e8eafc]/60 sm:grid-cols-[40px_1fr_1.3fr] sm:gap-6"
                >
                  <I className="h-5 w-5" style={{ color: "var(--vt)" }} strokeWidth={1.6} />
                  <h3 className="font-display text-lg font-medium text-navy">{title as string}</h3>
                  <p className="text-sm text-muted-foreground">{desc as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OLYMPIAD MEDALS POP-IN REVEAL */}
      <section className="vk-band vk-ground-soft border-y border-border" id="olympiads">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div>
            <p className="vk-kicker">Olympiads and competitions</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy md:text-4xl">
              From Grade 4, a stage to test what they know
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              Olympiads stretch strong learners and build exam temperament early. Preparation runs
              alongside regular studies without adding external coaching pressure.
            </p>
            <div className="mt-6 space-y-3">
              {[
                [GraduationCap, "A clear method", "Step-by-step preparation planned by faculty"],
                [Calendar, "Subject-wise plans", "Dedicated preparation plans for each Olympiad subject"],
                [Check, "Practice tests and mocks", "Timed practice papers and mock assessments"],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Check;
                return (
                  <div
                    key={title as string}
                    className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                      style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                    >
                      <I className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <div>
                      <b className="block text-sm font-semibold text-navy">{title as string}</b>
                      <span className="text-xs text-muted-foreground">{desc as string}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={medalsReveal.ref}
            className={`vk-medals space-y-7 ${medalsReveal.inView ? "is-in" : ""}`}
          >
            {[
              {
                heading: "School Olympiads from Grade 4",
                color: "#4352d1",
                items: [
                  ["Sci", "Science"], ["Math", "Maths"], ["Eng", "English"],
                  ["Cyber", "Computers"], ["GK", "General knowledge"],
                ],
              },
              {
                heading: "International and national Olympiads",
                color: "#c4631a",
                items: [
                  ["IMO", "Mathematics"], ["NSO", "Science"], ["IEO", "English"],
                  ["ICSO", "Computer science"], ["IGKO", "General knowledge"],
                ],
              },
              {
                heading: "Debate, diplomacy and innovation",
                color: "#2f7d4a",
                items: [
                  ["MUN", "Model UN"], ["Debate", "Public speaking"], ["Robotics", "Competitions"],
                  ["Expo", "Science exhibition"], ["Pitch", "Business ideas"],
                ],
              },
            ].map((row, rowIdx) => (
              <div key={row.heading}>
                <h3 className="mb-3 font-display text-lg font-medium text-navy">{row.heading}</h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {row.items.map(([code, label], idx) => (
                    <div
                      key={code}
                      style={{ borderColor: row.color, ["--i" as string]: rowIdx * 3 + idx }}
                      className="vk-medal grid aspect-square place-items-center rounded-full border-2 bg-card p-2 text-center"
                    >
                      <div>
                        <b className="block font-display text-base font-semibold leading-none sm:text-lg" style={{ color: row.color }}>
                          {code}
                        </b>
                        <small className="mt-1 block text-[10.5px] font-semibold leading-tight text-muted-foreground">
                          {label}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE LEMONADE STALL BUSINESS SIMULATOR */}
      <section className="vk-band vk-ground-cream">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Entrepreneurship &amp; business simulation</p>
              <h2>Run a stall, learn the numbers</h2>
            </div>
            <p className="vk-lede">
              In our Business Simulation Centre, students plan, price and run small ventures. Try
              the same break-even exercise a Grade 6 team runs before a school fair.
            </p>
          </div>

          <div className="grid gap-8 rounded-2xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div>
                <label htmlFor="sim-qty" className="flex justify-between text-sm font-semibold text-navy">
                  <span>Lemonade cups made</span>
                  <span className="font-display text-base tabular-nums" style={{ color: "var(--vt)" }}>{qty}</span>
                </label>
                <input
                  id="sim-qty"
                  type="range"
                  min={10}
                  max={200}
                  step={10}
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="mt-1 h-9 w-full accent-[#4352d1]"
                />
              </div>
              <div>
                <label htmlFor="sim-cost" className="flex justify-between text-sm font-semibold text-navy">
                  <span>Cost to make one cup (₹)</span>
                  <span className="font-display text-base tabular-nums" style={{ color: "var(--vt)" }}>₹{unitCost}</span>
                </label>
                <input
                  id="sim-cost"
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={unitCost}
                  onChange={(e) => setUnitCost(Number(e.target.value))}
                  className="mt-1 h-9 w-full accent-[#4352d1]"
                />
              </div>
              <div>
                <label htmlFor="sim-price" className="flex justify-between text-sm font-semibold text-navy">
                  <span>Selling price per cup (₹)</span>
                  <span className="font-display text-base tabular-nums" style={{ color: "var(--vt)" }}>₹{price}</span>
                </label>
                <input
                  id="sim-price"
                  type="range"
                  min={5}
                  max={60}
                  step={1}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="mt-1 h-9 w-full accent-[#4352d1]"
                />
              </div>
              <div>
                <label htmlFor="sim-sold" className="flex justify-between text-sm font-semibold text-navy">
                  <span>Cups sold</span>
                  <span className="font-display text-base tabular-nums" style={{ color: "var(--vt)" }}>
                    {soldPct}% · {soldCups}
                  </span>
                </label>
                <input
                  id="sim-sold"
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={soldPct}
                  onChange={(e) => setSoldPct(Number(e.target.value))}
                  className="mt-1 h-9 w-full accent-[#4352d1]"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Cups sold is a percentage of cups made. Sample classroom exercise.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "var(--vt-soft)" }}>
              <div className="space-y-4">
                {[
                  { label: "Revenue", value: revenue, color: "#2f7d4a" },
                  { label: "Costs", value: totalCost, color: "#d9482b" },
                ].map((bar) => (
                  <div
                    key={bar.label}
                    className="grid grid-cols-[68px_1fr_76px] items-center gap-3 text-sm font-semibold text-navy"
                  >
                    <span>{bar.label}</span>
                    <div className="h-6 overflow-hidden rounded-md bg-card">
                      <div
                        className="h-full rounded-md transition-all duration-500"
                        style={{
                          width: `${Math.round((bar.value / maxVal) * 100)}%`,
                          backgroundColor: bar.color,
                        }}
                      />
                    </div>
                    <span className="text-right font-mono text-xs tabular-nums">
                      {formatInr(bar.value)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-5">
                <p
                  aria-live="polite"
                  className="font-display text-3xl font-medium tabular-nums sm:text-5xl"
                  style={{ color: profit >= 0 ? "#2f7d4a" : "#d9482b" }}
                >
                  {profit >= 0 ? "Profit " : "Loss "}
                  {formatInr(Math.abs(profit))}
                </p>
                <p className="mt-2 text-sm text-foreground">
                  {profit >= 0
                    ? `Nice work. You needed to sell ${breakEven} cups to break even.`
                    : `You need to sell ${breakEven} cups to break even. Try adjusting the price or making fewer cups.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PASSPORT STAMPS SLAM-IN REVEAL */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Journeys beyond the classroom</p>
              <h2>Stamps in every learner&apos;s passport</h2>
            </div>
            <p className="vk-lede">
              Trips, talks and competitions that connect classroom lessons to the real world.
            </p>
          </div>

          <div
            ref={stampsReveal.ref}
            className={`vk-stamps ${stampsReveal.inView ? "is-in" : ""}`}
          >
            {[
              { title: "Field trips", sub: "Educational excursions", color: "#4352d1", rot: "-7deg", sq: false },
              { title: "Guest lectures", sub: "Workshops by experts", color: "#2f7d4a", rot: "5deg", sq: true },
              { title: "Science exhibition", sub: "Projects on show", color: "#d9482b", rot: "-3deg", sq: false },
              { title: "Robotics", sub: "Innovation competitions", color: "#a3264f", rot: "7deg", sq: true },
              { title: "Study tour abroad", sub: "Planned", color: "#c4631a", rot: "-5deg", sq: false },
            ].map((s, i) => (
              <div
                key={s.title}
                className={`vk-stamp ${s.sq ? "is-sq" : ""}`}
                style={{
                  ["--c" as string]: s.color,
                  ["--r" as string]: s.rot,
                  ["--i" as string]: i,
                }}
              >
                <b className="font-display text-base font-medium leading-tight sm:text-lg">{s.title}</b>
                <small className="mt-1.5 text-[11px] font-semibold opacity-85">{s.sub}</small>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-sm text-muted-foreground">
            Study tours to science and innovation centres are planned optionally and confirmed with
            families in advance.
          </p>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "Notebook and pencil case on lab days",
          "Closed shoes for lab sessions",
          "Long hair tied back in labs",
          "Goggles and gloves provided whenever an experiment needs them",
          "VR headsets, tablets and computers stay at school",
        ]}
        progress={[
          "Project portfolios shared each term",
          "Science Exhibition and innovation showcases",
          "Olympiad participation certificates",
          "Teacher remarks on thinking and communication",
        ]}
        join={[
          "Visit the Science Exhibition",
          "Speak at a careers or guest lecture session",
          "Volunteer on a field trip",
          "Encourage safe tinkering at home",
        ]}
        safety={[
          "Lab rules taught before any experiment",
          "A teacher present in every lab and zone session",
          "Short, age-appropriate VR sessions",
          "Filtered, supervised internet in computer labs",
          "Safety equipment and first aid in every lab",
          "Signed consent and staff supervision on every trip",
        ]}
      />

      <VidyaFaqSection
        name="Anubhav Vidya"
        intro="What experiential learning means for your child day to day."
        faqs={FAQS}
      />

      <VidyaTail active="anubhav" />
    </div>
  );
}
