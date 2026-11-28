import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Cpu,
  Heart,
  Layers,
} from "lucide-react";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import { Button } from "@/components/ui/button";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import {
  VidyaEssentials,
  VidyaFaqSection,
  VidyaGlance,
  VidyaTagline,
  useInViewOnce,
  type FaqItem,
  type GlanceItem,
} from "@/components/site/vidya/VidyaShared";
import {
  AcademicPhotoGallery,
  AcademicTail,
  AcademicVectorShowcase,
} from "@/components/site/academics/AcademicShared";

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Grades", value: "6 to 10 (ages 11 to 15)" },
  { icon: "book", label: "Curriculum", value: "CBSE, with board exams in Grade 10" },
  { icon: "star", label: "Foundation", value: "NEET, JEE and Olympiads from Grade 6" },
  { icon: "teacher", label: "Labs", value: "Physics, Chemistry, Biology, Robotics and AI" },
  { icon: "calendar", label: "Bagless days", value: "Ten days of vocational learning in Grades 6 to 8" },
  { icon: "heart", label: "Support", value: "Mentoring, remedial classes and counselling" },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Subject depth",
    text: "Deeper study of languages, maths, science, social sciences and technology.",
  },
  {
    icon: Compass,
    title: "Independent enquiry",
    text: "Research, experiments and projects that teach students to question, weigh evidence and reach their own conclusions.",
  },
  {
    icon: Heart,
    title: "Personal growth",
    text: "Life skills, wellbeing, arts and sport that build self-awareness, resilience, communication and confidence.",
  },
  {
    icon: Cpu,
    title: "Innovation in action",
    text: "Coding, design challenges and entrepreneurship that turn ideas into working solutions.",
  },
] as const;

const ROADMAP = [
  {
    grade: "Grade 6",
    num: 6,
    title: "Settling into middle school",
    items: [
      "NEET and JEE foundation and Olympiad coaching begin",
      "Coding and app development introduced",
      "First bagless days with visiting craftspeople",
    ],
  },
  {
    grade: "Grade 7",
    num: 7,
    title: "Going deeper",
    items: [
      "More lab practicals in Physics, Chemistry and Biology",
      "Robotics and design challenges",
      "Debates and public speaking clubs",
    ],
  },
  {
    grade: "Grade 8",
    num: 8,
    title: "Building independence",
    items: [
      "Bagless days completed",
      "Interdisciplinary projects and research skills",
      "AI and data basics in the lab",
    ],
  },
  {
    grade: "Grade 9",
    num: 9,
    title: "The board syllabus begins",
    items: [
      "CBSE secondary syllabus and practical records",
      "Career counselling and interest mapping",
      "Mock tests with performance feedback",
    ],
  },
  {
    grade: "Grade 10",
    num: 10,
    title: "Board ready",
    items: [
      "Pre-boards and doubt-clearing sessions",
      "Main board exam in February, optional second exam in May",
      "Stream guidance for Grade 11",
    ],
  },
] as const;

const BAGLESS_CRAFTS = [
  {
    title: "Carpentry",
    desc: "Measuring, sawing and joining wood safely to make a simple stand or box.",
    svg: (
      <>
        <path d="M8 40l26-26 8 8-26 26Z" fill="#c98e63" />
        <path d="M34 14l6-6 8 8-6 6" fill="#6b2610" />
      </>
    ),
  },
  {
    title: "Pottery",
    desc: "Shaping clay on the wheel and by hand, and learning how it is fired.",
    svg: <path d="M18 16h20l-4 8c8 4 10 14 4 24H18c-6-10-4-20 4-24Z" fill="#b4451f" />,
  },
  {
    title: "Gardening",
    desc: "Seed beds, grafting and nursery skills, with our Krishi Vidya team.",
    svg: (
      <path
        d="M28 50V24M28 34C18 32 14 24 16 16C24 18 28 26 28 34ZM28 30C38 28 42 20 40 12C32 14 28 22 28 30Z"
        fill="#2f7d4a"
      />
    ),
  },
  {
    title: "Electrical work",
    desc: "Simple circuits, switches and safety, guided by a trained technician.",
    svg: <path d="M30 6L14 32h12l-4 22 18-28H28Z" fill="#ffb02e" />,
  },
  {
    title: "Metal work",
    desc: "Cutting, bending and finishing metal into small useful objects.",
    svg: (
      <>
        <rect x="10" y="22" width="36" height="12" rx="2" fill="#5c6080" />
        <path d="M20 22v-10h16v10" fill="none" stroke="#5c6080" strokeWidth="4" />
      </>
    ),
  },
  {
    title: "Local arts",
    desc: "Working with artists on traditional Karnataka crafts and folk art.",
    svg: (
      <>
        <circle cx="28" cy="28" r="20" fill="#a3264f" />
        <circle cx="22" cy="22" r="4" fill="#ffd27a" />
        <circle cx="34" cy="24" r="4" fill="#ffffff" />
        <circle cx="26" cy="34" r="4" fill="#7fd3cf" />
      </>
    ),
  },
] as const;

const SUBJECTS = [
  "English",
  "Mathematics",
  "Science (Physics, Chemistry and Biology)",
  "Social studies",
  "Hindi or Kannada",
  "Computer applications and coding",
  "Fine arts, music or dance",
  "Physical education",
];

const FAQS: FaqItem[] = [
  {
    q: "How does the Class 10 two-exam system work?",
    a: "The February board exam is compulsory. An optional second exam in May lets students improve their scores in up to three subjects.",
  },
  {
    q: "Is NEET and JEE foundation compulsory?",
    a: "It is integrated into the school day from Grade 6, so every student builds strong concepts. The intensity grows gradually and stays age-appropriate.",
  },
  {
    q: "What happens on bagless days?",
    a: "Students learn hands-on skills from visiting experts and on field visits, such as gardening, pottery, carpentry or electrical work, without books or bags.",
  },
  {
    q: "How much time is spent in labs?",
    a: "Physics, Chemistry, Biology, Robotics and AI sessions run regularly through the year, alongside CBSE practicals.",
  },
  {
    q: "Is there help for students who struggle?",
    a: "Yes. Small-group remedial support, doubt-clearing sessions and mentoring are part of every term.",
  },
  {
    q: "What clubs can my child join?",
    a: "Debate and public speaking, creative writing, reading, environmental, entrepreneurship, photography and film, music, theatre and art clubs.",
  },
  {
    q: "How do you manage exam stress?",
    a: "Regular low-stakes practice, mentoring, counselling and sport keep preparation balanced.",
  },
  {
    q: "When do students choose a stream for Grade 11?",
    a: "Career counselling starts in Grade 9 and stream decisions are made after Grade 10, guided by interests and results.",
  },
];

export function HighSchoolPage() {
  const [roadIdx, setRoadIdx] = useState(0);
  const [roadProgress, setRoadProgress] = useState(0);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const roadRef = useRef<HTMLElement>(null);
  const boardReveal = useInViewOnce<HTMLDivElement>(0.25);

  /* Sticky scroll-pinned Grade 6 -> 10 roadmap (stays pinned until Grade 10 finishes) */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = roadRef.current;
        if (!el || window.innerWidth < 1024) return;
        const vh = window.innerHeight || 800;
        const headerH = 132;
        const pinViewportH = Math.max(360, vh - headerH);
        const r = el.getBoundingClientRect();
        const travel = Math.max(1, r.height - pinViewportH);
        const scrolled = headerH - r.top;
        const clamped = Math.min(1, Math.max(0, scrolled / (travel * 0.88)));
        setRoadProgress(clamped);
        setRoadIdx(Math.min(4, Math.floor(clamped * 4 + 0.3)));
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

  const selectRoadStep = (idx: number) => {
    setRoadIdx(idx);
    setRoadProgress(idx / 4);
    const el = roadRef.current;
    if (el && window.innerWidth >= 1024) {
      const vh = window.innerHeight || 800;
      const headerH = 132;
      const pinViewportH = Math.max(360, vh - headerH);
      const travel = Math.max(1, el.offsetHeight - pinViewportH);
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const targetY = sectionTop - headerH + (idx / 4) * (travel * 0.88);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const activeRoad = ROADMAP[roadIdx] ?? ROADMAP[0];

  return (
    <div className="vk-page" data-stage="high">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">High School</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Grades 6 to 10
                </span>
                Middle &amp; secondary stage
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Deeper understanding. Independent thinking.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                CBSE depth, science &amp; AI labs, ten bagless days and integrated NEET/JEE
                foundation inside the school day.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#road"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Five years to Grade 10
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
                context="High School (Grades 6 – 10)"
                title="High School Admissions 2026–27"
                subtitle="Tour our labs & get the Grade 6–10 CBSE + foundation fee guide."
                defaultGrade="Grade 6"
                ctaLabel="Book High School Visit"
                accentColor="#b4451f"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>5</b>
              <span>Years</span>
              <small>Grades 6 to 10</small>
            </div>
            <div>
              <b>10</b>
              <span>Bagless days</span>
              <small>Hands-on vocational learning</small>
            </div>
            <div>
              <b>Grade 6</b>
              <span>NEET &amp; JEE foundation</span>
              <small>Inside the school day</small>
            </div>
            <div>
              <b>2</b>
              <span>Board exam chances</span>
              <small>In Class 10, from 2026</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="High School" items={GLANCE} />

      {/* 1B. ANIMATED ATOM, RISING GRAPH & CIRCUIT SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#6b2610"
        kicker="Analytical enquiry"
        title="Science, coding & problem solving in motion"
        description="Students progress from lab experiments and block coding to Physics, Chemistry, Biology practicals and Grade 10 board readiness."
        theme="labs"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="An atom, a circuit and a rising graph">
          <g transform="translate(170 190)">
            <circle r="16" fill="#ffd27a" className="ac-node-pulse" />
            <g fill="none" stroke="#ffffff" strokeWidth="3">
              <ellipse rx="110" ry="38" />
              <ellipse rx="110" ry="38" transform="rotate(60)" />
              <ellipse rx="110" ry="38" transform="rotate(-60)" />
            </g>
            <circle r="8" fill="#ee8a2c">
              <animateMotion dur="4s" repeatCount="indefinite" path="M110 0 A110 38 0 1 1 -110 0 A110 38 0 1 1 110 0" />
            </circle>
            <g transform="rotate(60)">
              <circle r="7" fill="#ffd27a">
                <animateMotion dur="4.8s" begin="-1.6s" repeatCount="indefinite" path="M110 0 A110 38 0 1 1 -110 0 A110 38 0 1 1 110 0" />
              </circle>
            </g>
            <g transform="rotate(-60)">
              <circle r="6" fill="#ffffff">
                <animateMotion dur="5.4s" begin="-2.9s" repeatCount="indefinite" path="M110 0 A110 38 0 1 1 -110 0 A110 38 0 1 1 110 0" />
              </circle>
            </g>
          </g>
          <g className="ac-draw" fill="none" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="300,360 350,310 390,330 440,250 490,200" />
          </g>
          <g fill="#ffd27a">
            <circle cx="490" cy="200" r="6" className="ac-node-pulse" />
          </g>
          <g stroke="rgba(255,255,255,0.45)" strokeWidth="3" fill="none">
            <path d="M300 120h60v40h60" />
            <path d="M300 150h40v40h80" />
          </g>
          <g stroke="#ffd27a" strokeWidth="3" fill="none" className="ac-circuit-flow">
            <path d="M300 120h60v40h60" />
            <path d="M300 150h40v40h80" />
          </g>
          <circle cx="430" cy="160" r="10" fill="#ee8a2c" className="ac-node-pulse" />
          <circle cx="430" cy="190" r="10" fill="#ffffff" />
          <rect x="280" y="96" width="34" height="78" rx="6" fill="#ffffff" />
        </svg>
      </AcademicVectorShowcase>

      {/* 2. INTRO SPLIT WITH REAL PHOTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={img.high}
              alt="High School students at HKS Vidyamandir"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs font-semibold text-navy">
              Science laboratory exploration and analytical enquiry
            </figcaption>
          </figure>
          <div>
            <p className="vk-kicker">Middle and secondary stage</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Preparing confident, analytical learners
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              From Grade 6 to Grade 10, students move into abstract ideas in science, maths,
              humanities and technology. Regular practicals, vocational crafts, ten bagless days and
              an integrated NEET and JEE foundation prepare them for board exams and beyond.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Strong CBSE conceptual depth leading to Grade 10 board readiness",
                "Integrated NEET and JEE foundation and Olympiad coaching from Grade 6",
                "Hands-on Physics, Chemistry, Biology, Robotics and AI lab sessions",
                "Vocational crafts, ten bagless days and interdisciplinary projects",
                "Public speaking, leadership clubs, sports and mentoring support",
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
              <h2>What defines High School at HKS</h2>
            </div>
            <p className="vk-lede">Depth, independence, character and the confidence to build things.</p>
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

      {/* 4. SCROLL-PINNED 5-YEAR GRADE 6 TO 10 ROADMAP */}
      <section ref={roadRef} className="vk-ground-deep relative lg:h-[300vh]" id="road" aria-label="Five years to Grade 10">
        <div className="py-14 lg:sticky lg:top-[132px] lg:flex lg:h-[calc(100vh-132px)] lg:flex-col lg:justify-center lg:py-8">
          <div className="container-site">
            <p className="vk-kicker">The road to Grade 10</p>
            <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
              Five years, one clear path
            </h2>

            {/* Track & interactive Grade 6-10 nodes */}
            <div className="relative my-10 h-1 rounded-full bg-white/20 sm:my-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 origin-left rounded-full bg-[#ffd27a] transition-transform duration-200"
                style={{ transform: `scaleX(${roadProgress})` }}
              />
              <div className="relative flex justify-between" role="tablist" aria-label="Grades 6 to 10">
                {ROADMAP.map((step, i) => {
                  const isActive = i <= roadIdx;
                  const isCurrent = i === roadIdx;
                  return (
                    <button
                      key={step.grade}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={step.grade}
                      onClick={() => selectRoadStep(i)}
                      className={`-mt-6 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-lg font-medium transition-all duration-300 sm:-mt-7 sm:h-14 sm:w-14 sm:text-xl ${
                        isActive
                          ? "border-[#ffd27a] bg-[#ffd27a] text-[#6b2610]"
                          : "border-white/40 bg-[#6b2610] text-white hover:border-[#ffd27a]"
                      } ${isCurrent ? "scale-110" : ""}`}
                    >
                      {step.num}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              key={activeRoad.grade}
              className="vk-fadeswap grid gap-6 rounded-2xl border border-white/15 bg-white/8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
              role="tabpanel"
              aria-live="polite"
            >
              <div>
                <small className="text-xs font-bold text-[#ffd27a]">{activeRoad.grade}</small>
                <h3 className="mt-1 font-display text-2xl font-medium text-white sm:text-3xl">
                  {activeRoad.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {activeRoad.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ffd27a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLASS 10 TWO BOARD EXAM CHANCES */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Class 10 board exams</p>
              <h2>Two chances, less pressure</h2>
            </div>
            <p className="vk-lede">
              From 2026, Class 10 has a compulsory board exam in February and an optional second
              exam in May to improve scores. Here is how a typical year plays out.
            </p>
          </div>

          <div
            ref={boardReveal.ref}
            className={`ac-bt rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10 ${
              boardReveal.inView ? "is-in" : ""
            }`}
          >
            <div className="ac-bline">
              <i />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl p-4">
                <small className="text-xs font-bold text-muted-foreground">June – January</small>
                <b className="mt-1 block font-display text-xl font-medium text-navy">
                  Learn, practise, revise
                </b>
                <span className="mt-1 block text-sm text-foreground">
                  Syllabus, practicals, pre-boards and mock exams
                </span>
              </div>
              <div className="rounded-xl p-4 text-white" style={{ backgroundColor: "var(--vt)" }}>
                <small className="text-xs font-bold text-[#ffd27a]">February</small>
                <b className="mt-1 block font-display text-xl font-medium text-white">
                  Main board exam
                </b>
                <span className="mt-1 block text-sm text-white/90">
                  Compulsory for every Class 10 student
                </span>
              </div>
              <div className="rounded-xl p-4">
                <small className="text-xs font-bold text-muted-foreground">After results</small>
                <b className="mt-1 block font-display text-xl font-medium text-navy">
                  Results and reflection
                </b>
                <span className="mt-1 block text-sm text-foreground">
                  Teachers and parents decide together if a second attempt helps
                </span>
              </div>
              <div
                className="rounded-xl border-2 border-dashed p-4"
                style={{ borderColor: "var(--vt)" }}
              >
                <small className="text-xs font-bold text-muted-foreground">May</small>
                <b className="mt-1 block font-display text-xl font-medium text-navy">
                  Optional second exam
                </b>
                <span className="mt-1 block text-sm text-foreground">
                  For improving scores in up to three subjects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEN BAGLESS DAYS 3D FLIP CARDS */}
      <section className="vk-band vk-ground-cream border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Ten bagless days</p>
              <h2>Leave the bag. Pick up a skill.</h2>
            </div>
            <p className="vk-lede">
              Over Grades 6 to 8, students spend ten days without school bags, learning from local
              experts and craftspeople. Hover or tap a card to see what they learn.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BAGLESS_CRAFTS.map((craft) => {
              const isFlipped = !!flipped[craft.title];
              return (
                <div
                  key={craft.title}
                  className={`ac-flip relative ${isFlipped ? "is-flipped" : ""}`}
                >
                  <button
                    type="button"
                    aria-label={`${craft.title}: ${craft.desc}`}
                    aria-pressed={isFlipped}
                    onClick={() =>
                      setFlipped((prev) => ({ ...prev, [craft.title]: !prev[craft.title] }))
                    }
                    className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
                  />
                  <div className="ac-flip-inner">
                    <div className="ac-flip-front">
                      <svg viewBox="0 0 56 56" className="h-14 w-14" aria-hidden="true">
                        {craft.svg}
                      </svg>
                      <div>
                        <b className="block font-display text-2xl font-medium text-navy">
                          {craft.title}
                        </b>
                        <span className="text-xs font-medium text-muted-foreground">
                          Tap or hover to flip
                        </span>
                      </div>
                    </div>
                    <div className="ac-flip-back">
                      <b className="font-display text-xl font-medium text-white">{craft.title}</b>
                      <p className="text-sm leading-relaxed text-white/92">{craft.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SUBJECTS & ACADEMIC PATHWAYS */}
      <section className="vk-band vk-ground-soft border-b border-border">
        <div className="container-site text-center">
          <p className="vk-kicker justify-center">Subjects and academic pathways</p>
          <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
            Structured progression across core subjects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground md:text-base">
            Core CBSE subjects, languages, technology and co-scholastic pursuits.
          </p>
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {SUBJECTS.map((sub) => (
              <span
                key={sub}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-navy"
              >
                {sub}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" className="h-11 rounded-lg bg-card px-5 text-sm font-semibold">
              <Link to="/anubhav-vidya">Experiential learning &amp; labs</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg bg-card px-5 text-sm font-semibold">
              <Link to="/competitive-exams">NEET, JEE foundation &amp; Olympiads</Link>
            </Button>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="By Grade 10 we want students who can *think *for *themselves, and who are ready for any exam because of it."
        note="Board readiness is the result, not the only goal."
      />

      <AcademicPhotoGallery
        stageName="High School"
        intro="Independent inquiry, lab experiments, coding, robotics and confident public speaking."
        photos={programmePhotos.high}
      />

      <VidyaEssentials
        kit={[
          "Books and notebooks as per the day's timetable",
          "Lab coat and closed shoes on practical days",
          "A geometry box and scientific calculator when advised",
          "PE uniform on sports days",
          "Devices for coding and AI stay at school",
        ]}
        progress={[
          "Holistic Progress Card each term",
          "Unit tests, pre-boards and mock exam reports",
          "Lab records and project portfolios",
          "Parent-teacher meetings and mentor updates",
        ]}
        join={[
          "Attend parent meetings and board orientation sessions",
          "Visit the Science Exhibition",
          "Speak at a careers talk",
          "Help your child plan a balanced study timetable",
        ]}
        safety={[
          "Lab safety rules taught before every practical",
          "Supervised, filtered internet in computer labs",
          "CCTV-monitored campus",
          "On-campus medical and first-aid support",
          "Counselling for stress and wellbeing",
          "School bus transport with staff on board",
        ]}
      />

      <VidyaFaqSection
        name="High School"
        intro="Board exams, NEET & JEE foundation, labs, bagless days and student support."
        faqs={FAQS}
      />

      <AcademicTail active="high" />
    </div>
  );
}
