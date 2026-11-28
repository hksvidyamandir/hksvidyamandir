import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Coins,
  Cpu,
  FlaskConical,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import {
  VidyaFaqSection,
  VidyaGlance,
  VidyaTagline,
  useInViewOnce,
  type FaqItem,
  type GlanceItem,
} from "@/components/site/vidya/VidyaShared";
import { AcademicTail, AcademicVectorShowcase } from "@/components/site/academics/AcademicShared";

const GLANCE: GlanceItem[] = [
  { icon: "first", label: "Board", value: "CBSE, Nursery to Grade 12" },
  { icon: "users", label: "Medium", value: "English" },
  { icon: "teacher", label: "Languages", value: "English, Hindi and Kannada" },
  { icon: "calendar", label: "Stages", value: "Early Years, Primary, Middle, High, Senior Secondary" },
  { icon: "star", label: "Streams", value: "Science and Commerce in Grades 11 and 12" },
  { icon: "eye", label: "Assessment", value: "Continuous, plus CBSE boards in Grades 10 and 12" },
];

const DOB_STAGES: ReadonlyArray<{
  grade: string;
  stage: string;
  to: "/early-years" | "/primary" | "/high-school" | "/senior-secondary";
}> = [
  { grade: "Nursery", stage: "Early Years", to: "/early-years" },
  { grade: "LKG", stage: "Early Years", to: "/early-years" },
  { grade: "UKG", stage: "Early Years", to: "/early-years" },
  { grade: "Grade 1", stage: "Early Years", to: "/early-years" },
  { grade: "Grade 2", stage: "Early Years", to: "/early-years" },
  { grade: "Grade 3", stage: "Primary", to: "/primary" },
  { grade: "Grade 4", stage: "Primary", to: "/primary" },
  { grade: "Grade 5", stage: "Primary", to: "/primary" },
  { grade: "Grade 6", stage: "Middle School", to: "/high-school" },
  { grade: "Grade 7", stage: "Middle School", to: "/high-school" },
  { grade: "Grade 8", stage: "Middle School", to: "/high-school" },
  { grade: "Grade 9", stage: "High School", to: "/high-school" },
  { grade: "Grade 10", stage: "High School", to: "/high-school" },
  { grade: "Grade 11", stage: "Senior Secondary", to: "/senior-secondary" },
  { grade: "Grade 12", stage: "Senior Secondary", to: "/senior-secondary" },
];

const FIVE_STAGES = [
  {
    grades: "Nursery – Grade 2",
    title: "Early Years",
    color: "#0f8a84",
    to: "/early-years" as const,
    desc: "A five-year, flexible, activity-based foundation guided by ECCE principles, with continuous assessment through observation and documentation.",
    subjects: [
      "Creative expression",
      "Numeracy",
      "Communication, language & literacy",
      "Environmental education",
      "Physical development",
      "Personal, social & emotional development",
    ],
  },
  {
    grades: "Grades 3 – 5",
    title: "Primary School",
    color: "#2c6fd1",
    to: "/primary" as const,
    desc: "Play, exploration and activity-based learning with light, concept-focused textbooks, building strong foundations while nurturing curiosity.",
    subjects: [
      "English literacy",
      "Numeracy",
      "Science & EVS",
      "Fine & performing arts",
      "Information practices",
      "Second languages",
      "Personal, social & physical education",
    ],
  },
  {
    grades: "Grades 6 – 8",
    title: "Middle School",
    color: "#b4451f",
    to: "/high-school" as const,
    desc: "Deeper concepts across science, maths, arts and social sciences, plus hands-on vocational crafts, ten bagless days and future-ready subjects like app development, coding and AI.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social studies",
      "Hindi or Kannada (II & III)",
      "Fine arts",
      "Music or dance",
      "Physical education",
    ],
  },
  {
    grades: "Grades 9 – 10",
    title: "High School",
    color: "#8a3315",
    to: "/high-school" as const,
    desc: "A multi-disciplinary framework that sharpens critical thinking and subject expertise, with vocational pathways and cultural exchange modules.",
    subjects: [
      "English",
      "Science",
      "Mathematics",
      "Social studies",
      "Hindi or Kannada",
      "Computer applications",
    ],
  },
  {
    grades: "Grades 11 – 12",
    title: "Senior Secondary",
    color: "#0e5a8a",
    to: "/senior-secondary" as const,
    desc: "Focused Science and Commerce streams with career counselling and integrated competitive exam preparation, for universities in India and abroad.",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer science",
      "Accountancy",
      "Business studies",
      "Economics",
    ],
  },
] as const;

const CBSE_CHANGES = [
  {
    tag: "Grade 10 · from 2026",
    title: "Two board exam chances in Class 10",
    desc: "Class 10 students now have two board exam windows in one year. The first, in February, is compulsory. A second, in May, is optional for improving scores.",
    meaning:
      "Less pressure riding on a single exam. We plan revision so students are ready for February and can use May only if they want to.",
  },
  {
    tag: "All stages",
    title: "The Holistic Progress Card",
    desc: "A 360-degree report card that looks beyond marks, drawing on teacher observations, the child's own reflections, feedback from classmates and input from parents.",
    meaning:
      "You see creativity, teamwork and wellbeing alongside academics, with real examples from class.",
  },
  {
    tag: "Grades 6 – 8",
    title: "Ten bagless days",
    desc: "Students spend ten days without school bags, learning from local experts such as carpenters, gardeners, potters and artists.",
    meaning:
      "Hands-on vocational crafts and field visits built into the year, not added on top of it.",
  },
] as const;

const METHODOLOGY = [
  { icon: BarChart3, title: "Mathematics", text: "Foundational maths, logical reasoning and Vedic Mathematics." },
  { icon: FlaskConical, title: "Science", text: "Physics, Chemistry, Biology and General Science, with daily lab practice." },
  { icon: BookOpen, title: "English", text: "Grammar, reading, writing and confident communication." },
  { icon: Languages, title: "Languages", text: "Hindi, Kannada and other applicable languages." },
  { icon: Cpu, title: "Computer science", text: "Digital literacy, coding and computational thinking." },
  { icon: Coins, title: "Mental ability and finance", text: "Aptitude, analytical reasoning, money management and basic economics." },
] as const;

const GROWTH_PATHWAY = [
  {
    title: "Know the learner",
    desc: "Understand each child's starting point, interests, strengths and support needs.",
    color: "#ffd27a",
  },
  {
    title: "Build the foundations",
    desc: "Secure literacy, numeracy and habits of learning before moving faster.",
    color: "#ee8a2c",
  },
  {
    title: "Explore ideas",
    desc: "Open up the world through questions, projects, labs and the four Vidyas.",
    color: "#2c6fd1",
  },
  {
    title: "Apply and express",
    desc: "Use what they know to make, solve, present and perform.",
    color: "#0f8a84",
  },
  {
    title: "Reflect and grow",
    desc: "Look back with teachers and parents, set new goals and go again.",
    color: "#b4451f",
  },
] as const;

const STUDENT_STORIES = [
  {
    quote: "My teachers explain every concept until it really clicks.",
    name: "Ananya R.",
    role: "Grade 10 student",
  },
  {
    quote: "Sports practice every evening has made me fitter and more confident.",
    name: "Rohan K.",
    role: "Grade 8 student",
  },
  {
    quote: "The NEET foundation classes alongside regular CBSE studies saved me so much time.",
    name: "Diya S.",
    role: "Grade 12 student",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    q: "Which board does HKS follow?",
    a: "HKS Vidyamandir follows the CBSE curriculum from Nursery to Grade 12, with English as the medium of instruction.",
  },
  {
    q: "Which languages will my child learn?",
    a: "English, Hindi and Kannada. Hindi or Kannada is offered as the second and third language in the middle years.",
  },
  {
    q: "How are young children assessed?",
    a: "In Early Years there are no exams. Teachers observe, document and share progress with parents through the year.",
  },
  {
    q: "What changes with the Class 10 board exams?",
    a: "Class 10 students take a compulsory board exam in February and can choose an optional second attempt in May to improve their scores.",
  },
  {
    q: "Is NEET and JEE preparation extra?",
    a: "The NEET and JEE foundation from Grade 6 runs within the school day, so students do not need separate coaching.",
  },
  {
    q: "Which streams are offered in Grades 11 and 12?",
    a: "Science (PCM or PCB, with Computer Science) and Commerce (Accountancy, Business Studies, Economics, with Mathematics or Computer Science).",
  },
  {
    q: "Does my child get extra help if they fall behind?",
    a: "Yes. Remedial support runs in small groups, and advanced enrichment sessions stretch children who are ready for more.",
  },
  {
    q: "Can my child join in the middle of the year?",
    a: "Mid-year admissions depend on seats in that grade. Please speak to our admissions team.",
  },
];

const r2 = (n: number) => Math.round(n * 100) / 100;
function polar(cx: number, cy: number, r: number, a: number): [number, number] {
  return [r2(cx + r * Math.sin(a)), r2(cy - r * Math.cos(a))];
}

function getDobPlacement(dobStr: string) {
  const d = new Date(dobStr);
  if (Number.isNaN(d.getTime())) {
    return { status: "empty" as const };
  }
  const ref = new Date("2026-06-01");
  let years = ref.getFullYear() - d.getFullYear();
  let months = ref.getMonth() - d.getMonth();
  if (months < 0 || (months === 0 && ref.getDate() < d.getDate())) {
    years -= 1;
    months += 12;
  }
  if (months < 0) months += 12;
  const idx = years - 3;
  if (idx < 0) {
    return { status: "young" as const, years, months };
  }
  if (idx >= DOB_STAGES.length) {
    return { status: "old" as const, years, months };
  }
  return { status: "match" as const, years, months, stage: DOB_STAGES[idx]! };
}

export function CbseCurriculumPage() {
  const [dob, setDob] = useState("2019-08-14");
  const [gpIdx, setGpIdx] = useState(0);
  const stagesRef = useRef<HTMLDivElement>(null);
  const pathwayRef = useRef<HTMLElement>(null);
  const spectrumReveal = useInViewOnce<HTMLDivElement>(0.25);

  const placement = getDobPlacement(dob);

  useEffect(() => {
    const el = pathwayRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        if (r.top < vh * 0.65 && r.bottom > vh * 0.25) {
          const p = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / Math.max(1, r.height * 0.75)));
          setGpIdx(Math.min(4, Math.floor(p * 5)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollStages = (dir: number) => {
    stagesRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-stage="cbse">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">CBSE Curriculum</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Scholastic
                </span>
                Nursery to Grade 12
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                A CBSE journey from first steps to graduation
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                Built on India&apos;s national 5+3+3+4 framework — from play-based Early Years to
                Senior Secondary Science &amp; Commerce.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#finder"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Find your child&apos;s stage
                  <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <a
                  href="#stages"
                  className="inline-flex items-center gap-2 border-b-2 border-[#ffd27a] pb-1 text-sm font-medium text-white transition-colors hover:text-[#ffd27a]"
                >
                  See all five stages
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroEnquiryCard
                context="CBSE Curriculum (Nursery – Grade 12)"
                title="CBSE Admissions Enquiry 2026–27"
                subtitle="Get the 2026–27 fee guide, CBSE curriculum brochure & campus tour slots."
                ctaLabel="Get Fee & Curriculum Guide"
                accentColor="#ee8a2c"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>2010</b>
              <span>Learning since</span>
              <small>HKS Group of Institutions</small>
            </div>
            <div>
              <b>N–12</b>
              <span>Grades</span>
              <small>Nursery to Grade 12</small>
            </div>
            <div>
              <b>5</b>
              <span>Stages</span>
              <small>One continuous journey</small>
            </div>
            <div>
              <b>3</b>
              <span>Languages</span>
              <small>English, Hindi &amp; Kannada</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Academics at HKS" items={GLANCE} />

      {/* 1B. ANIMATED 5+3+3+4 STRUCTURE SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#151947"
        kicker="National 5+3+3+4 framework"
        title="Four rising steps, one steady climb"
        description="Every stage builds naturally on the previous one — from observation-led Early Years to Grade 10 & 12 boards and competitive readiness."
        theme="academics"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="The 5+3+3+4 stages of school drawn as rising steps">
          <g className="ac-stair">
            <g style={{ ["--i" as string]: 0 }}>
              <rect x="20" y="300" width="110" height="90" rx="10" fill="#0f8a84" />
              <text x="75" y="338" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="30">5</text>
              <text x="75" y="364" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">Foundational</text>
            </g>
            <g style={{ ["--i" as string]: 1 }}>
              <rect x="140" y="236" width="110" height="154" rx="10" fill="#2c6fd1" />
              <text x="195" y="274" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="30">3</text>
              <text x="195" y="300" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">Preparatory</text>
            </g>
            <g style={{ ["--i" as string]: 2 }}>
              <rect x="260" y="172" width="110" height="218" rx="10" fill="#b4451f" />
              <text x="315" y="210" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="30">3</text>
              <text x="315" y="236" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">Middle</text>
            </g>
            <g style={{ ["--i" as string]: 3 }}>
              <rect x="380" y="92" width="120" height="298" rx="10" fill="#ee8a2c" />
              <text x="440" y="130" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="30">4</text>
              <text x="440" y="156" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">Secondary</text>
            </g>
          </g>
          <path
            d="M75 288 Q135 230 195 224 Q255 165 315 160 Q375 85 440 80"
            fill="none"
            stroke="rgba(255,210,122,0.45)"
            strokeWidth="2.5"
            strokeDasharray="5 7"
            className="cc-anim-dash"
          />
          <g>
            <circle r="11" fill="#ffd27a" />
            <circle r="4" fill="#151947" cx="3" cy="-2" />
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              keyPoints="0;0.25;0.5;0.75;1;1"
              keyTimes="0;0.2;0.4;0.6;0.8;1"
              calcMode="linear"
              path="M75 288 Q135 230 195 224 Q255 165 315 160 Q375 85 440 80 L440 80"
            />
          </g>
          <g transform="translate(440 20)">
            <line x1="0" y1="0" x2="0" y2="54" stroke="#ffd27a" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 0 l30 11 l-30 11 Z" fill="#ffd27a" className="ac-flag-wave" />
          </g>
          <line x1="20" y1="396" x2="500" y2="396" stroke="rgba(255,255,255,0.32)" strokeWidth="2" />
        </svg>
      </AcademicVectorShowcase>

      {/* 2. INTERACTIVE DATE-OF-BIRTH STAGE FINDER */}
      <section className="vk-band vk-ground-paper" id="finder">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">For parents</p>
              <h2>Which stage is my child in?</h2>
            </div>
            <p className="vk-lede">
              Enter your child&apos;s date of birth to see the class and stage they would usually
              join for 2026–27.
            </p>
          </div>

          <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft md:grid-cols-[0.85fr_1.15fr] md:p-8">
            <div>
              <label htmlFor="cbse-dob" className="block text-sm font-semibold text-navy">
                Child&apos;s date of birth
              </label>
              <input
                id="cbse-dob"
                type="date"
                value={dob}
                max="2026-06-01"
                onChange={(e) => setDob(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15"
              />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Guide based on age as of 1 June 2026. Final grade placement is confirmed by our
                admissions team during interaction.
              </p>
            </div>

            <div
              className="flex flex-col justify-center rounded-xl p-6"
              style={{ backgroundColor: "var(--vt-soft)" }}
              aria-live="polite"
            >
              {placement.status === "empty" && (
                <p className="text-sm text-foreground">Choose a date of birth to see the matching grade.</p>
              )}
              {placement.status === "young" && (
                <div key="young" className="vk-fadeswap">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Age on 1 June 2026: {placement.years} years {placement.months} months
                  </p>
                  <p className="mt-1 font-display text-3xl font-medium text-navy">Not quite yet</p>
                  <p className="mt-2 text-sm text-foreground">
                    Nursery usually begins at age 3. We&apos;d love to welcome you for a campus
                    visit when the time comes.
                  </p>
                </div>
              )}
              {placement.status === "old" && (
                <div key="old" className="vk-fadeswap">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Age on 1 June 2026: {placement.years} years {placement.months} months
                  </p>
                  <p className="mt-1 font-display text-3xl font-medium text-navy">Beyond Grade 12</p>
                  <p className="mt-2 text-sm text-foreground">
                    Please verify the date of birth or speak directly with our admissions desk.
                  </p>
                </div>
              )}
              {placement.status === "match" && (
                <div key={placement.stage.grade} className="vk-fadeswap">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Age on 1 June 2026: {placement.years} years {placement.months} months
                  </p>
                  <p className="mt-1 font-display text-3xl font-medium text-navy sm:text-4xl">
                    {placement.stage.grade}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground">
                    Stage: <strong className="font-semibold text-navy">{placement.stage.stage}</strong>
                  </p>
                  <div className="mt-4">
                    <Link
                      to={placement.stage.to}
                      className="inline-flex items-center gap-1.5 border-b-2 border-cta pb-0.5 text-sm font-semibold text-navy transition-colors hover:text-cta"
                    >
                      Explore {placement.stage.stage}
                      <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIVE STAGES HORIZONTAL JOURNEY */}
      <section className="vk-band vk-ground-cream border-y border-border" id="stages" aria-label="Five stages">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">Grade-wise structure</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                Five stages, one continuous journey
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground md:text-base">
                Walk from Nursery to Grade 12. Every stage has its own dedicated page with full
                curriculum details.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous stages"
                onClick={() => scrollStages(-1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next stages"
                onClick={() => scrollStages(1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div ref={stagesRef} className="vk-hs vk-hs-wide">
            {FIVE_STAGES.map((stg) => (
              <article
                key={stg.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-soft"
                style={{ borderTopWidth: "5px", borderTopColor: stg.color }}
              >
                <div>
                  <small className="text-xs font-bold" style={{ color: stg.color }}>
                    {stg.grades}
                  </small>
                  <h3 className="mt-1 font-display text-2xl font-medium text-navy">{stg.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground">{stg.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {stg.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-navy"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <Link
                  to={stg.to}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-navy transition-colors hover:text-cta"
                >
                  Explore {stg.title}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT HAS CHANGED IN CBSE */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">What has changed in CBSE</p>
              <h2>New rules, explained for parents</h2>
            </div>
            <p className="vk-lede">
              Three recent national changes that shape your child&apos;s school years, and what each
              one means at HKS.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {CBSE_CHANGES.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span
                  className="self-start rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
                >
                  {item.tag}
                </span>
                <h3 className="font-display text-xl font-medium text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground">{item.desc}</p>
                <div
                  className="mt-auto rounded-xl p-4 text-sm text-foreground"
                  style={{ backgroundColor: "var(--vt-soft)" }}
                >
                  <b className="mb-1 block text-xs font-semibold text-navy">
                    What it means for your child
                  </b>
                  {item.meaning}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUBJECT-WISE METHODOLOGY */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Subject-wise methodology</p>
              <h2>Beyond the textbook</h2>
            </div>
            <p className="vk-lede">
              Each subject has its own way of making ideas stick, from Vedic maths to daily lab
              practice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {METHODOLOGY.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt)" }}
                >
                  <m.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-navy">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ASSESSMENT & SUPPORT SPECTRUM */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Assessment and support</p>
              <h2>Every learner, supported</h2>
            </div>
            <p className="vk-lede">
              Whether your child needs a little more time or a bigger challenge, there is a planned
              next step.
            </p>
          </div>

          <div
            ref={spectrumReveal.ref}
            className={`ac-spectrum rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10 ${
              spectrumReveal.inView ? "is-in" : ""
            }`}
          >
            <div className="ac-spectrum-bar">
              <i />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <b className="block font-display text-xl font-medium text-navy">Remedial support</b>
                <span className="mt-1 block text-sm text-foreground">
                  Small-group sessions to strengthen foundations
                </span>
              </div>
              <div className="md:text-center">
                <b className="block font-display text-xl font-medium text-navy">
                  Continuous assessment
                </b>
                <span className="mt-1 block text-sm text-foreground">
                  Formative and summative checks aligned with CBSE norms
                </span>
              </div>
              <div className="md:text-right">
                <b className="block font-display text-xl font-medium text-navy">Advanced learning</b>
                <span className="mt-1 block text-sm text-foreground">
                  Enrichment programmes for high achievers
                </span>
              </div>
            </div>

            <div
              className="mt-8 flex items-start gap-4 rounded-xl p-5"
              style={{ backgroundColor: "var(--vt-soft)" }}
            >
              <Brain className="mt-0.5 h-7 w-7 shrink-0 text-navy" strokeWidth={1.6} />
              <div>
                <b className="block font-display text-lg font-medium text-navy">
                  Brain memory mapping
                </b>
                <span className="text-sm text-foreground">
                  Techniques for recall, focus and study skills, taught for every learner across
                  stages.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Every stage builds on the last, so your child never starts over, *they *simply *go *further."
        note="One school, one philosophy, from Nursery to Grade 12."
      />

      {/* 7. INTERACTIVE HKS GROWTH PATHWAY WHEEL */}
      <section ref={pathwayRef} className="vk-band vk-ground-navy" id="pathway">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="vk-kicker">From understanding to confident action</p>
            <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
              The HKS Growth Pathway
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              Know the child. Build the foundations. Open up the world. Help the child reflect and
              grow.
            </p>

            <div className="mt-6 grid gap-2" role="tablist" aria-label="HKS Growth Pathway steps">
              {GROWTH_PATHWAY.map((step, i) => {
                const isOn = gpIdx === i;
                return (
                  <button
                    key={step.title}
                    type="button"
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => setGpIdx(i)}
                    className={`grid grid-cols-[40px_1fr] items-start gap-4 rounded-xl p-4 text-left transition-colors ${
                      isOn ? "bg-white/12" : "hover:bg-white/6"
                    }`}
                  >
                    <span className="font-display text-lg text-[#ffd27a]">0{i + 1}</span>
                    <div>
                      <b className="block text-base font-semibold text-white">{step.title}</b>
                      <span
                        className={`mt-1 block text-sm leading-relaxed text-white/80 ${
                          isOn ? "block" : "hidden"
                        }`}
                      >
                        {step.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[380px] lg:col-span-5">
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
              {GROWTH_PATHWAY.map((step, i) => {
                const a0 = (i / 5) * Math.PI * 2 + 0.025;
                const a1 = ((i + 1) / 5) * Math.PI * 2 - 0.025;
                const [x0, y0] = polar(200, 200, 170, a0);
                const [x1, y1] = polar(200, 200, 170, a1);
                const [x2, y2] = polar(200, 200, 92, a1);
                const [x3, y3] = polar(200, 200, 92, a0);
                const [tx, ty] = polar(200, 200, 131, (a0 + a1) / 2);
                const isOn = gpIdx === i;
                return (
                  <g
                    key={step.title}
                    onClick={() => setGpIdx(i)}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: isOn ? 1 : 0.35 }}
                  >
                    <path
                      d={`M${x0} ${y0}A170 170 0 0 1 ${x1} ${y1}L${x2} ${y2}A92 92 0 0 0 ${x3} ${y3}Z`}
                      fill={step.color}
                    />
                    <text
                      x={tx}
                      y={ty}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#151947"
                      fontFamily="Fraunces, serif"
                      fontSize="24"
                      fontWeight="600"
                    >
                      0{i + 1}
                    </text>
                  </g>
                );
              })}
              <circle cx="200" cy="200" r="80" fill="#151947" />
              <text x="200" y="194" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="20">
                Growth
              </text>
              <text x="200" y="218" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="20">
                pathway
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* 8. ACCREDITATIONS & STUDENT STORIES */}
      <section className="border-b border-border bg-background py-10">
        <div className="container-site flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="vk-kicker">Our recognitions</p>
            <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
              Accreditations and recognition
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["CBSE", "Microsoft Showcase School", "Fit India", "GREE"].map((badge) => (
              <span
                key={badge}
                className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-navy"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="vk-band vk-ground-cream border-b border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">In their own words</p>
              <h2>Student stories</h2>
            </div>
            <p className="vk-lede">What learning, growing and belonging at HKS feels like.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {STUDENT_STORIES.map((story) => (
              <figure
                key={story.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="font-display text-lg leading-snug font-medium text-navy">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto text-sm text-muted-foreground">
                  <b className="block font-semibold text-navy">{story.name}</b>
                  {story.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <VidyaFaqSection
        name="Academics at HKS"
        intro="Board, languages, assessment and how the five stages fit together."
        faqs={FAQS}
      />

      <AcademicTail active="cbse" />
    </div>
  );
}
