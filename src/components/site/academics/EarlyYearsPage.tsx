import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  BookOpen,
  Check,
  Compass,
  Eye,
  Heart,
  Play,
  Users,
} from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import {
  VidyaEssentials,
  VidyaFaqSection,
  VidyaGlance,
  VidyaTagline,
  type FaqItem,
  type GlanceItem,
} from "@/components/site/vidya/VidyaShared";
import {
  AcademicPhotoGallery,
  AcademicTail,
  AcademicVectorShowcase,
} from "@/components/site/academics/AcademicShared";

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Classes", value: "Nursery, LKG, UKG, Grade 1 and Grade 2" },
  { icon: "heart", label: "Ages", value: "3 to 8 years" },
  { icon: "teacher", label: "Approach", value: "Play-based, ECCE-aligned, with Montessori materials" },
  { icon: "eye", label: "Assessment", value: "Observation and portfolios, no exams" },
  { icon: "pin", label: "Spaces", value: "Warm, safe, child-friendly classrooms and play areas" },
  { icon: "mail", label: "Updates", value: "Regular updates and parent meetings" },
];

const PILLARS = [
  {
    icon: Play,
    title: "Play-based learning",
    text: "Purposeful play builds language, early numeracy, imagination, coordination and confidence.",
  },
  {
    icon: Compass,
    title: "Inquiry-led exploration",
    text: "Quest projects, stories and hands-on investigations help children ask questions and make connections.",
  },
  {
    icon: Blocks,
    title: "Montessori learning",
    text: "Specially designed materials build concentration, fine motor skills, sensory awareness and independent problem-solving.",
  },
  {
    icon: Heart,
    title: "Whole-child development",
    text: "Art, music, movement, outdoor play and collaboration support physical, emotional, social and creative growth.",
  },
] as const;

const DAY_SLOTS = [
  { title: "Arrival and free play", desc: "Choosing a corner: blocks, books or puzzles", color: "#0f8a84" },
  { title: "Morning circle", desc: "Greetings, the weather, today's plan", color: "#2c6fd1" },
  { title: "Story and language", desc: "Read-alouds, rhymes and new words", color: "#ee8a2c" },
  { title: "Numbers through play", desc: "Counting, sorting and patterns with real objects", color: "#e86a92" },
  { title: "Snack and rest", desc: "Washing hands, eating together, quiet time", color: "#6cc58b" },
  { title: "Outdoor play", desc: "Climbing, running, sand and garden time", color: "#ffb02e" },
  { title: "Art and music", desc: "Painting, clay, songs and movement", color: "#a3264f" },
  { title: "Goodbye circle", desc: "What did we learn? What made us happy?", color: "#23286b" },
] as const;

const PANCHAKOSHA = [
  {
    sanskrit: "Annamaya",
    label: "Physical body",
    desc: "Running, climbing, balancing, healthy eating and good sleep habits.",
    color: "#ffd27a",
  },
  {
    sanskrit: "Pranamaya",
    label: "Energy and vitality",
    desc: "Breathing games, yoga, outdoor time and calm routines that keep children energised.",
    color: "#ee8a2c",
  },
  {
    sanskrit: "Manomaya",
    label: "Feelings and mind",
    desc: "Naming feelings, taking turns, making friends and handling small disappointments.",
    color: "#e86a92",
  },
  {
    sanskrit: "Vijnanamaya",
    label: "Thinking and understanding",
    desc: "Questions, sorting, patterns, early reading and numbers, and solving small problems.",
    color: "#6cc58b",
  },
  {
    sanskrit: "Anandamaya",
    label: "Joy and wonder",
    desc: "Music, art, stories and nature: the joy that makes children want to keep learning.",
    color: "#7fd3cf",
  },
] as const;

const MONTESSORI_SHELF = [
  {
    name: "Pink tower",
    tag: "Size and order",
    desc: "Ten cubes from big to small. Children learn to see differences in size, and practise careful hand control.",
    svg: (
      <g fill="#e86a92">
        {[0, 1, 2, 3, 4].map((k) => (
          <rect key={k} x={40 + k * 6} y={130 - k * 22} width={80 - k * 12} height={22 - k * 2} rx="2" />
        ))}
      </g>
    ),
  },
  {
    name: "Number rods",
    tag: "Counting and length",
    desc: "Rods of one to ten units. Children count, compare and feel what bigger numbers really mean.",
    svg: (
      <g>
        {[0, 1, 2, 3, 4].map((k) => (
          <rect
            key={k}
            x="20"
            y={30 + k * 24}
            width={30 + k * 22}
            height="14"
            rx="2"
            fill={k % 2 ? "#2c6fd1" : "#d9482b"}
          />
        ))}
      </g>
    ),
  },
  {
    name: "Sandpaper letters",
    tag: "Sounds and writing",
    desc: "Children trace rough letters with their fingers while saying the sound, building muscle memory for early writing.",
    svg: (
      <g>
        <rect x="30" y="30" width="100" height="110" rx="8" fill="#6cc58b" />
        <text x="80" y="110" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="72" fill="#f6ede3">
          a
        </text>
      </g>
    ),
  },
  {
    name: "Knobbed cylinders",
    tag: "Focus and grip",
    desc: "Fitting cylinders into the right holes builds concentration and the pincer grip used for pencils.",
    svg: (
      <g>
        <rect x="16" y="100" width="128" height="34" rx="6" fill="#c98e63" />
        {[0, 1, 2, 3].map((k) => (
          <g key={k}>
            <rect x={24 + k * 30} y={70 + k * 4} width={22 - k * 3} height={34 - k * 4} rx="3" fill="#8a5a33" />
            <circle cx={35 + k * 30 - k * 1.5} cy={66 + k * 4} r="5" fill="#5a3a20" />
          </g>
        ))}
      </g>
    ),
  },
  {
    name: "Colour tablets",
    tag: "Seeing colours",
    desc: "Matching and grading colours trains the eye and gives children rich vocabulary for what they see.",
    svg: (
      <g>
        {["#d9482b", "#ee8a2c", "#ffd27a", "#6cc58b", "#2c6fd1"].map((c, k) => (
          <rect key={c} x={18 + k * 26} y={60 + (k % 2) * 20} width="22" height="34" rx="3" fill={c} />
        ))}
      </g>
    ),
  },
  {
    name: "Pouring jugs",
    tag: "Practical life",
    desc: "Pouring water or grains between jugs builds independence, hand-eye coordination and patience.",
    svg: (
      <g>
        <path d="M30 70h40v60H30Z" fill="#7fd3cf" />
        <path d="M70 80l14-8" stroke="#7fd3cf" strokeWidth="6" strokeLinecap="round" />
        <path d="M96 90h40v40H96Z" fill="#ffffff" stroke="#7fd3cf" strokeWidth="3" />
        <path d="M96 118h40v12H96Z" fill="#7fd3cf" />
      </g>
    ),
  },
] as const;

const LEARNING_AREAS = [
  "Creative expression",
  "Numeracy",
  "Communication, language and literacy",
  "Environmental education",
  "Physical development",
  "Personal, social and emotional development",
];

const READINESS_ITEMS = [
  "Says their name and a few words to an adult",
  "Uses the toilet or tells an adult when they need to",
  "Eats a snack independently",
  "Spends a short time apart from a parent",
  "Holds a crayon and enjoys scribbling",
  "Plays alongside other children",
  "Listens to a short story",
  "Washes hands with a little help",
] as const;

const FAQS: FaqItem[] = [
  {
    q: "How do you help children settle in?",
    a: "The first weeks use a gentle settling routine with shorter days, a familiar teacher and plenty of play. Parents receive regular updates during this time.",
  },
  {
    q: "Are there exams in Early Years?",
    a: "No. Progress is tracked through observation and documentation, and shared through a Holistic Progress Card report.",
  },
  {
    q: "Is the approach Montessori?",
    a: "We use Montessori materials for sensory and motor development within a wider play-based, ECCE-aligned programme.",
  },
  {
    q: "Will my child learn to read and write?",
    a: "Yes, gradually. Language starts with songs, stories and talk, then moves to sounds, letters and early writing as children are ready.",
  },
  {
    q: "What if my child is not toilet trained yet?",
    a: "Let the class teacher know. Our staff gently support children as they learn this, with spare clothes kept at school.",
  },
  {
    q: "How do you keep young children safe?",
    a: "Child-friendly spaces, close supervision, a CCTV-monitored campus and on-campus medical and first-aid support.",
  },
  {
    q: "How often will I hear from the teacher?",
    a: "Regularly, through updates, parent meetings and the progress card. You can also request a meeting at any time.",
  },
  {
    q: "Does my child need to know the alphabet before Nursery?",
    a: "No. Children start Nursery at many different points, and teachers plan for every one of them.",
  },
];

const r2 = (n: number) => Math.round(n * 100) / 100;
function polar(cx: number, cy: number, r: number, a: number): [number, number] {
  return [r2(cx + r * Math.sin(a)), r2(cy - r * Math.cos(a))];
}

export function EarlyYearsPage() {
  const [dayIdx, setDayIdx] = useState(0);
  const [pkIdx, setPkIdx] = useState(0);
  const [shelfIdx, setShelfIdx] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(() => READINESS_ITEMS.map(() => false));
  const dayRef = useRef<HTMLElement>(null);

  /* Scroll-driven Early Years Day Clock */
  useEffect(() => {
    const el = dayRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        if (r.top < vh * 0.65 && r.bottom > vh * 0.25) {
          const p = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / Math.max(1, r.height * 0.78)));
          setDayIdx(Math.min(7, Math.floor(p * 8)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const readyCount = checked.filter(Boolean).length;
  const readyOffset = r2(314 - (314 * readyCount) / READINESS_ITEMS.length);
  const readyMsg =
    readyCount === READINESS_ITEMS.length
      ? "Wonderful. Your child is well set for a happy start."
      : readyCount >= 4
        ? "A great start. Teachers will help with the rest in the first weeks."
        : "Every child starts somewhere. Our teachers help with all of these.";

  const activeMaterial = MONTESSORI_SHELF[shelfIdx] ?? MONTESSORI_SHELF[0];

  return (
    <div className="vk-page" data-stage="early">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Early Years</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Nursery to Grade 2
                </span>
                Foundational stage
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Small discoveries. A strong beginning.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                Play-based, ECCE-aligned learning with Montessori materials and zero exam stress.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#day"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  See a day in Early Years
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
                context="Early Years (Nursery – Grade 2)"
                title="Early Years Admissions 2026–27"
                subtitle="Book a classroom visit & get the Nursery – Grade 2 fee guide."
                defaultGrade="Nursery"
                ctaLabel="Book Early Years Visit"
                accentColor="#0f8a84"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>5</b>
              <span>Years</span>
              <small>Nursery to Grade 2</small>
            </div>
            <div>
              <b>3–8</b>
              <span>Ages</span>
              <small>Child-paced growth</small>
            </div>
            <div>
              <b>0</b>
              <span>Exams</span>
              <small>Observation, not tests</small>
            </div>
            <div>
              <b>6</b>
              <span>Learning areas</span>
              <small>Language to movement</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Early Years" items={GLANCE} />

      {/* 1B. ANIMATED EARLY YEARS BLOCKS & KITE SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#0a4f4b"
        kicker="Learning through play"
        title="Every block builds language, numbers & joy"
        description="Guided by ECCE principles, young learners explore sounds, shapes, stories and nature hands-on before formal academics begin."
        theme="development"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="Illustration of building blocks stacking up under a sun and a kite">
          <g transform="translate(430 82)">
            <g className="ac-sun-rays" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" opacity="0.72">
              <line x1="0" y1="-56" x2="0" y2="-46" />
              <line x1="0" y1="46" x2="0" y2="56" />
              <line x1="-56" y1="0" x2="-46" y2="0" />
              <line x1="46" y1="0" x2="56" y2="0" />
              <line x1="-40" y1="-40" x2="-33" y2="-33" />
              <line x1="33" y1="33" x2="40" y2="40" />
              <line x1="40" y1="-40" x2="33" y2="-33" />
              <line x1="-33" y1="33" x2="-40" y2="40" />
            </g>
            <circle cx="0" cy="0" r="36" fill="#ffd27a" />
          </g>
          <g className="ac-kite">
            <path d="M120 60 L150 100 L120 150 L90 100Z" fill="#ee8a2c" />
            <path d="M120 60V150M90 100H150" stroke="#ffffff" strokeWidth="2" />
            <path d="M120 150 q-10 30 10 50 t0 60" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 6" />
          </g>
          <path d="M0 380 Q260 340 520 380 V420 H0Z" fill="rgba(255,255,255,0.14)" />
          <g className="ac-blocks">
            <g style={{ ["--i" as string]: 0 }}>
              <rect x="150" y="300" width="80" height="80" rx="8" fill="#2c6fd1" />
              <text x="190" y="352" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="40">A</text>
            </g>
            <g style={{ ["--i" as string]: 1 }}>
              <rect x="240" y="300" width="80" height="80" rx="8" fill="#ee8a2c" />
              <text x="280" y="352" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="40">B</text>
            </g>
            <g style={{ ["--i" as string]: 2 }}>
              <rect x="330" y="300" width="80" height="80" rx="8" fill="#ffd27a" />
              <text x="370" y="352" textAnchor="middle" fill="#0a4f4b" fontFamily="Fraunces, serif" fontSize="40">C</text>
            </g>
            <g style={{ ["--i" as string]: 3 }}>
              <rect x="195" y="212" width="80" height="80" rx="8" fill="#e86a92" />
              <text x="235" y="264" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="40">1</text>
            </g>
            <g style={{ ["--i" as string]: 4 }}>
              <rect x="285" y="212" width="80" height="80" rx="8" fill="#6cc58b" />
              <text x="325" y="264" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="40">2</text>
            </g>
            <g style={{ ["--i" as string]: 5 }}>
              <rect x="240" y="124" width="80" height="80" rx="8" fill="#ffffff" />
              <text x="280" y="176" textAnchor="middle" fill="#0f8a84" fontFamily="Fraunces, serif" fontSize="40">3</text>
            </g>
          </g>
        </svg>
      </AcademicVectorShowcase>

      {/* 2. INTRO SPLIT WITH REAL PHOTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={img.early}
              alt="Early Years learners at HKS Vidyamandir"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs font-semibold text-navy">
              Learning together at the Early Years activity table
            </figcaption>
          </figure>
          <div>
            <p className="vk-kicker">Foundational stage</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Joyful learning in the early years
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Our Early Years programme nurtures curiosity, confidence and joyful discovery.
              Continuous observation and documentation help educators understand and support each
              child&apos;s own pace of growth.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Warm, safe and child-friendly learning spaces",
                "Activity-based, multi-level teaching aligned with ECCE",
                "Montessori materials for sensory and motor development",
                "Continuous, observation-led assessment without exam stress",
                "Close partnership and regular updates with parents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--vt)" }} strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Four pillars</p>
              <h2>How children learn in Early Years</h2>
            </div>
            <p className="vk-lede">
              Four ideas shape every activity, from circle time to the sand pit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-6">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                >
                  <p.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DAY CLOCK */}
      <section ref={dayRef} className="vk-band vk-ground-paper" id="day">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">A day in Early Years</p>
              <h2>Round the clock, the way little ones learn</h2>
            </div>
            <p className="vk-lede">
              Short, varied blocks that follow a young child&apos;s attention span. Scroll or tap
              any block to turn the clock through the day.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto w-full max-w-[400px]">
              <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
                <circle cx="200" cy="200" r="190" fill="#ffffff" stroke="#e3e1ea" strokeWidth="2" />
                {DAY_SLOTS.map((slot, i) => {
                  const a0 = (i / 8) * Math.PI * 2;
                  const a1 = ((i + 1) / 8) * Math.PI * 2 - 0.03;
                  const [x0, y0] = polar(200, 200, 160, a0);
                  const [x1, y1] = polar(200, 200, 160, a1);
                  const [x2, y2] = polar(200, 200, 110, a1);
                  const [x3, y3] = polar(200, 200, 110, a0);
                  return (
                    <path
                      key={slot.title}
                      d={`M${x0} ${y0}A160 160 0 0 1 ${x1} ${y1}L${x2} ${y2}A110 110 0 0 0 ${x3} ${y3}Z`}
                      fill={slot.color}
                      opacity={dayIdx === i ? 1 : 0.28}
                      className="cursor-pointer transition-opacity duration-300"
                      onClick={() => setDayIdx(i)}
                    />
                  );
                })}
                <circle cx="200" cy="200" r="100" fill="#e1f3f1" />
                <g
                  style={{
                    transformOrigin: "200px 200px",
                    transform: `rotate(${(dayIdx + 0.5) * 45}deg)`,
                    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <line x1="200" y1="200" x2="200" y2="72" stroke="#0a4f4b" strokeWidth="6" strokeLinecap="round" />
                </g>
                <circle cx="200" cy="200" r="12" fill="#0a4f4b" />
              </svg>
            </div>

            <ol className="grid gap-1.5">
              {DAY_SLOTS.map((slot, i) => {
                const isOn = dayIdx === i;
                return (
                  <li key={slot.title}>
                    <button
                      type="button"
                      onClick={() => setDayIdx(i)}
                      onMouseEnter={() => setDayIdx(i)}
                      className="grid w-full grid-cols-[18px_1fr] items-start gap-4 rounded-xl px-4 py-3 text-left transition-colors"
                      style={{ backgroundColor: isOn ? "var(--vt-soft)" : "transparent" }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-3.5 w-3.5 rounded-full"
                        style={{ backgroundColor: slot.color }}
                      />
                      <div>
                        <b className="block text-sm font-semibold text-navy sm:text-base">{slot.title}</b>
                        <span className="text-xs text-muted-foreground sm:text-sm">{slot.desc}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Sample daily rhythm for UKG. Exact timings by class are shared at orientation.
          </p>
        </div>
      </section>

      {/* 5. INTERACTIVE PANCHAKOSHA FIVE LAYERS */}
      <section className="vk-band vk-ground-deep">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="mx-auto w-full max-w-[380px] lg:col-span-5">
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
              {PANCHAKOSHA.map((layer, i) => {
                const r = 190 - i * 30;
                return (
                  <g key={layer.sanskrit}>
                    <circle
                      cx="200"
                      cy="200"
                      r={r}
                      fill={layer.color}
                      stroke="#0a4f4b"
                      strokeWidth="3"
                      className="cursor-pointer transition-opacity duration-300"
                      style={{ opacity: pkIdx === i ? 1 : 0.48 }}
                      onClick={() => setPkIdx(i)}
                    />
                    <text
                      x="200"
                      y={200 - r + 20}
                      textAnchor="middle"
                      fontFamily="Manrope, sans-serif"
                      fontSize="12"
                      fontWeight="700"
                      fill="#0a4f4b"
                      className="pointer-events-none"
                    >
                      {layer.sanskrit}
                    </text>
                  </g>
                );
              })}
              <text x="200" y="218" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="18" fill="#0a4f4b">
                the child
              </text>
            </svg>
          </div>

          <div className="lg:col-span-7">
            <p className="vk-kicker">The whole child</p>
            <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
              Five layers of growth, not just reading and counting
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              India&apos;s national framework for the foundational years describes the child through
              five layers — the panchakosha. Select any layer to see how we nurture it.
            </p>
            <div className="mt-6 grid gap-2" role="tablist" aria-label="Panchakosha layers">
              {PANCHAKOSHA.map((layer, i) => {
                const isOn = pkIdx === i;
                return (
                  <button
                    key={layer.sanskrit}
                    type="button"
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => setPkIdx(i)}
                    className={`grid grid-cols-[14px_1fr] items-start gap-4 rounded-xl p-3.5 text-left transition-colors ${
                      isOn ? "bg-white/12" : "hover:bg-white/6"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                    <div>
                      <small className="block text-xs font-bold text-[#ffd27a]">{layer.sanskrit}</small>
                      <b className="block text-base font-semibold text-white">{layer.label}</b>
                      <span className={`mt-1 block text-sm text-white/85 ${isOn ? "block" : "hidden"}`}>
                        {layer.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE MONTESSORI SHELF */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Montessori corner</p>
              <h2>What&apos;s on the shelf, and why it&apos;s there</h2>
            </div>
            <p className="vk-lede">
              Every material does one job well. Select any material on the shelf to see what it
              teaches.
            </p>
          </div>

          <div className="ac-shelf" role="tablist" aria-label="Montessori shelf materials">
            {MONTESSORI_SHELF.map((mat, i) => (
              <button
                key={mat.name}
                type="button"
                role="tab"
                aria-selected={shelfIdx === i}
                aria-label={mat.name}
                onClick={() => setShelfIdx(i)}
                className={shelfIdx === i ? "is-on" : ""}
              >
                <svg viewBox="0 0 160 150" aria-hidden="true">
                  {mat.svg}
                </svg>
              </button>
            ))}
          </div>

          <div
            className="rounded-b-2xl border border-t-0 border-border bg-card p-6 shadow-soft"
            role="tabpanel"
            aria-live="polite"
          >
            <div key={activeMaterial.name} className="vk-fadeswap">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
              >
                {activeMaterial.tag}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-navy">
                {activeMaterial.name}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-foreground">
                {activeMaterial.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CORE LEARNING AREAS + HOLISTIC PROGRESS CARD */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site text-center">
          <p className="vk-kicker justify-center">Learning areas</p>
          <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
            Core areas of development
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground md:text-base">
            Balanced exposure across language, numeracy, creativity, nature and movement.
          </p>
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {LEARNING_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-navy"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">How progress is shared</p>
              <h2>A progress card with no marks</h2>
            </div>
            <p className="vk-lede">
              Early Years follows the Holistic Progress Card approach: a picture of the whole child,
              built from what teachers observe every day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Eye, title: "Teacher observation", desc: "Notes, photos and checklists from real activities" },
              { icon: BookOpen, title: "Portfolio of work", desc: "Drawings, early writing and projects collected through the year" },
              { icon: Heart, title: "The child's own voice", desc: "Simple picture-based reflections: I tried, I liked, I learned" },
              { icon: Users, title: "Parents as partners", desc: "Your observations from home, shared at parent meetings" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full"
                  style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <b className="mt-4 block font-display text-lg font-medium text-navy">{item.title}</b>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE NURSERY READINESS CHECKLIST */}
      <section className="vk-band vk-ground-cream border-y border-border">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="vk-kicker">Starting Nursery</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Getting ready for the first day
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground md:text-base">
              None of these are entry requirements. They simply make the first weeks happier. Tick
              what your child can already do.
            </p>

            <div className="relative my-6 h-36 w-36">
              <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#ffffff" strokeWidth="12" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--vt)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="314"
                  strokeDashoffset={readyOffset}
                  transform="rotate(-90 60 60)"
                  style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
              </svg>
              <b className="absolute inset-0 grid place-items-center font-display text-xl font-medium text-navy">
                {readyCount} of {READINESS_ITEMS.length}
              </b>
            </div>
            <p className="max-w-sm text-sm font-medium text-navy" aria-live="polite">
              {readyMsg}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {READINESS_ITEMS.map((item, i) => {
              const isChecked = checked[i] ?? false;
              return (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition-colors"
                  style={{
                    borderColor: isChecked ? "var(--vt)" : "var(--border)",
                    backgroundColor: isChecked ? "var(--vt-soft)" : "var(--card)",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                    }
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[#0f8a84]"
                  />
                  <span className="text-foreground">{item}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="In the early years, play is not a break from learning. *Play *is *how *learning *happens."
        note="That idea shapes every Early Years classroom at HKS."
      />

      <AcademicPhotoGallery
        stageName="Early Years"
        intro="Warm, joyful classrooms and outdoor discovery spaces designed for ages 3 to 8."
        photos={programmePhotos.early}
      />

      <VidyaEssentials
        kit={[
          "A labelled water bottle and a healthy snack box",
          "A spare set of clothes in the school bag",
          "Comfortable shoes that are easy to take off",
          "A small towel or napkin",
          "Books and Montessori materials are provided by the school",
        ]}
        progress={[
          "A Holistic Progress Card each term",
          "Portfolios of drawings and early writing",
          "Photos and notes from class activities",
          "Parent-teacher meetings through the year",
        ]}
        join={[
          "Read a story together every evening",
          "Join class celebrations and open days",
          "Share a song, game or story from your family",
          "Tell us about changes at home that may affect your child",
        ]}
        safety={[
          "Close supervision in every activity",
          "Child-safe furniture and materials",
          "CCTV-monitored campus",
          "On-campus medical and first-aid support",
          "Gentle settling routine for new children",
          "Children handed over only to registered adults",
        ]}
      />

      <VidyaFaqSection
        name="Early Years"
        intro="Settling in, daily routines, observation-led assessment and what to send."
        faqs={FAQS}
      />

      <AcademicTail active="early" />
    </div>
  );
}
