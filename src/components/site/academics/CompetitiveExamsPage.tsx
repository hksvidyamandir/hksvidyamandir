import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
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
  { icon: "star", label: "Olympiads", value: "From Grade 4: IMO, NSO, IEO, ICSO, IGKO" },
  { icon: "first", label: "NEET and JEE", value: "Foundation from Grade 6" },
  { icon: "globe", label: "International", value: "SAT, ACT, PSAT, AP, Cambridge English, TOEFL, IELTS" },
  { icon: "clock", label: "When", value: "Within the school day" },
  { icon: "chart", label: "Tracking", value: "Mock tests with performance analytics" },
  { icon: "teacher", label: "Support", value: "Doubt clearing with subject experts" },
];

const LADDER = [
  {
    grade: "Grade 4 onwards",
    title: "Olympiads",
    desc: "IMO, NSO, IEO, ICSO and IGKO, plus school-level Olympiads",
  },
  {
    grade: "Grade 6 onwards",
    title: "NEET and JEE foundation",
    desc: "Concept-first Physics, Chemistry, Biology and Maths, with aptitude and reasoning",
  },
  {
    grade: "Middle and high school",
    title: "Model United Nations",
    desc: "Diplomacy, research and public speaking on global issues",
  },
  {
    grade: "Grades 9 to 12",
    title: "International tests",
    desc: "PSAT, Digital SAT, ACT, AP, Cambridge English, TOEFL and IELTS",
  },
  {
    grade: "Grades 11 and 12",
    title: "NEET, JEE and CUET",
    desc: "Full preparation alongside CBSE board exams",
  },
] as const;

const WEEK_BREAKDOWN = [
  { label: "Regular CBSE lessons", pct: 62, color: "#cbd0e2" },
  { label: "Foundation concept classes", pct: 16, color: "#a16207" },
  { label: "Aptitude and reasoning", pct: 7, color: "#ee8a2c" },
  { label: "Practice and mock tests", pct: 9, color: "#2c6fd1" },
  { label: "Doubt clearing", pct: 6, color: "#0f8a84" },
] as const;

const OLYMPIADS = [
  { code: "IMO", title: "Mathematics", desc: "International Mathematics Olympiad training and practice papers." },
  { code: "NSO", title: "Science", desc: "National Science Olympiad preparation with lab reinforcement." },
  { code: "IEO", title: "English", desc: "International English Olympiad grammar, reading and vocabulary." },
  { code: "ICSO", title: "Cyber", desc: "International Computer Science Olympiad readiness." },
  { code: "IGKO", title: "General knowledge", desc: "Current affairs, reasoning and world knowledge." },
  { code: "MUN", title: "Model United Nations", desc: "Diplomacy, research and public speaking on global issues." },
] as const;

const MOCK_SCORES = [52, 58, 61, 67, 72, 78] as const;

const TOPIC_MASTERY = [
  { topic: "Algebra", pct: 84, color: "#0f8a84" },
  { topic: "Chemical reactions", pct: 76, color: "#0f8a84" },
  { topic: "Motion", pct: 71, color: "#2c6fd1" },
  { topic: "Electricity", pct: 54, color: "#ee8a2c" },
] as const;

const INTL_TESTS = [
  {
    name: "Digital SAT",
    desc: "A US college admissions test in reading, writing and maths, taken digitally.",
    grades: "Grades 11 – 12",
  },
  {
    name: "ACT",
    desc: "A US college admissions test covering English, maths, reading and an optional science section.",
    grades: "Grades 11 – 12",
  },
  {
    name: "PSAT",
    desc: "A practice version of the SAT that helps students see where they stand early.",
    grades: "Grades 9 – 10",
  },
  {
    name: "AP Examinations",
    desc: "College-level exams in individual subjects, used for credit or advanced standing at many universities.",
    grades: "Grades 10 – 12",
  },
  {
    name: "Cambridge English",
    desc: "Internationally recognised English qualifications across progressive proficiency levels.",
    grades: "Grades 8 – 12",
  },
  {
    name: "TOEFL",
    desc: "An English proficiency test widely accepted by universities, especially in the US.",
    grades: "Grades 11 – 12",
  },
  {
    name: "IELTS",
    desc: "An English proficiency test widely used for study in the UK, Australia, Canada and beyond.",
    grades: "Grades 11 – 12",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    q: "Does my child need outside coaching?",
    a: "No. Foundation and Olympiad preparation is built into the school day, so most students do not need separate coaching.",
  },
  {
    q: "Will this add a lot of pressure?",
    a: "Preparation grows gradually with age. Younger children meet Olympiads as fun challenges, and mock tests are used to learn, not to label.",
  },
  {
    q: "Is Olympiad participation compulsory?",
    a: "Every child is encouraged to try, and families choose which Olympiads to register for.",
  },
  {
    q: "Are Olympiad registration fees included?",
    a: "External Olympiad bodies charge their own registration fees. The school shares exact details before each registration window.",
  },
  {
    q: "How do you track progress?",
    a: "Regular mock tests with performance analytics, shared with parents, plus doubt-clearing sessions after each test.",
  },
  {
    q: "Which international tests do you prepare for?",
    a: "Digital SAT, ACT, PSAT, AP Examinations, Cambridge English, TOEFL and IELTS, with guidance on which ones each university needs.",
  },
  {
    q: "Can a Commerce student prepare for CUET?",
    a: "Yes. CUET preparation is part of the Senior Secondary programme for both Science and Commerce students.",
  },
  {
    q: "When should we start thinking about studying abroad?",
    a: "Ideally by Grade 9, so there is time for PSAT practice, subject choices and building a strong university profile.",
  },
];

/* Precomputed coordinates for responsive 480x200 trend chart SVG */
const CHART_W = 480;
const CHART_H = 200;
const CHART_PAD = 34;
const chartX = (i: number) => CHART_PAD + (i * (CHART_W - 2 * CHART_PAD)) / (MOCK_SCORES.length - 1);
const chartY = (v: number) => CHART_H - CHART_PAD - ((v - 40) / 60) * (CHART_H - 2 * CHART_PAD);
const trendLinePath = MOCK_SCORES.map((v, i) => `${i === 0 ? "M" : "L"}${chartX(i)} ${chartY(v)}`).join(" ");
const trendAreaPath = `${trendLinePath} L${chartX(5)} ${CHART_H - CHART_PAD} L${chartX(0)} ${CHART_H - CHART_PAD}Z`;

export function CompetitiveExamsPage() {
  const [testIdx, setTestIdx] = useState(0);
  const ladderReveal = useInViewOnce<HTMLDivElement>(0.2);
  const weekReveal = useInViewOnce<HTMLDivElement>(0.25);

  const activeTest = INTL_TESTS[testIdx] ?? INTL_TESTS[0];

  return (
    <div className="vk-page" data-stage="compete">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Competitive Exams</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Competitive edge
                </span>
                Grade 4 onwards
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Preparing champions, early and confidently
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                Olympiads from Grade 4, NEET/JEE foundation from Grade 6, and SAT/IELTS — all built
                into the school day.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#ladder"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  See the exam ladder
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
                context="Competitive Exams & Olympiads"
                title="Enquire About Integrated Prep"
                subtitle="Ask about Olympiads, NEET/JEE foundation & mock analytics — zero outside coaching."
                defaultGrade="Grade 6"
                ctaLabel="Ask About the Programme"
                accentColor="#a16207"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>Grade 4</b>
              <span>Olympiads begin</span>
              <small>IMO, NSO, IEO, ICSO &amp; IGKO</small>
            </div>
            <div>
              <b>Grade 6</b>
              <span>NEET &amp; JEE foundation</span>
              <small>Inside the school day</small>
            </div>
            <div>
              <b>7</b>
              <span>International tests</span>
              <small>SAT, ACT, AP, IELTS &amp; more</small>
            </div>
            <div>
              <b>0</b>
              <span>Outside coaching</span>
              <small>Built into the timetable</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Competitive Exams" items={GLANCE} />

      {/* 1B. ANIMATED PODIUM, MEDAL & TARGET ARROW SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#5a3604"
        kicker="Steady, age-right milestones"
        title="Concept mastery first, exam speed second"
        description="Every student builds confidence gradually through Olympiads, analytical foundation classes and parent-visible mock reports."
        theme="compete"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="A podium with medals and a target">
          <g className="ac-podium">
            <g style={{ ["--i" as string]: 1 }}>
              <rect x="80" y="260" width="120" height="120" rx="8" fill="#ffffff" />
              <text x="140" y="320" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="44" fill="#5a3604">2</text>
            </g>
            <g style={{ ["--i" as string]: 0 }}>
              <rect x="200" y="200" width="120" height="180" rx="8" fill="#ffd27a" />
              <text x="260" y="260" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="56" fill="#5a3604">1</text>
            </g>
            <g style={{ ["--i" as string]: 2 }}>
              <rect x="320" y="290" width="120" height="90" rx="8" fill="#ee8a2c" />
              <text x="380" y="345" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="40" fill="#ffffff">3</text>
            </g>
          </g>
          <g className="ac-medal">
            <path d="M246 60 L260 110 L274 60" fill="#2c6fd1" />
            <circle cx="260" cy="140" r="38" fill="#ffd27a" stroke="#ffffff" strokeWidth="6" />
            <path d="M260 120l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2Z" fill="#a16207" />
          </g>
          <g transform="translate(440 110)">
            <circle r="44" fill="none" stroke="#ffffff" strokeWidth="6" />
            <circle r="28" fill="none" stroke="#ee8a2c" strokeWidth="6" />
            <circle r="10" fill="#ffd27a" className="ac-node-pulse" />
            <g className="ac-arrow">
              <path d="M-110 -70 L-6 -4" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
              <path d="M-6 -4 l-14 -2 l6 -10Z" fill="#ffffff" />
            </g>
          </g>
          <line x1="40" y1="382" x2="480" y2="382" stroke="rgba(255,255,255,0.32)" strokeWidth="2" />
        </svg>
      </AcademicVectorShowcase>

      {/* 2. STAGGERED RISING EXAM LADDER */}
      <section className="vk-band vk-ground-paper" id="ladder">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The exam ladder</p>
              <h2>The right challenge at the right age</h2>
            </div>
            <p className="vk-lede">
              Each rung opens when a child is ready for it. Nothing is rushed, and nothing is left
              to the last year.
            </p>
          </div>

          <div
            ref={ladderReveal.ref}
            className={`ac-ladder ${ladderReveal.inView ? "is-in" : ""}`}
          >
            {LADDER.map((rung, i) => (
              <div key={rung.title} className="ac-rung" style={{ ["--ri" as string]: i }}>
                <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                  {rung.grade}
                </small>
                <b className="font-display text-xl font-medium text-navy">{rung.title}</b>
                <span className="text-sm text-foreground">{rung.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED NEET/JEE FOUNDATION + WEEKLY BREAKDOWN BAR */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="vk-kicker">Integrated programme</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              NEET and JEE foundation from Grade 6
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Progressive, concept-first preparation that grows with your child, so no separate
              outside coaching is needed.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Conceptual depth in Physics, Chemistry, Biology and Maths",
                "Mental ability, aptitude and logical reasoning",
                "Scholastic Aptitude Test (SAT) practice",
                "Regular mock tests and performance analytics",
                "Doubt-clearing sessions with subject experts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--vt)" }} strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={weekReveal.ref}
            className={`ac-week rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8 ${
              weekReveal.inView ? "is-in" : ""
            }`}
          >
            <h3 className="font-display text-2xl font-medium text-navy">
              How it fits a school week
            </h3>
            <p className="mt-1 mb-5 text-xs text-muted-foreground">
              Illustrative Grade 8 weekly balance
            </p>
            <div className="ac-wbar" aria-label="Weekly timetable allocation">
              {WEEK_BREAKDOWN.map((seg, k) => (
                <i
                  key={seg.label}
                  title={`${seg.label}: ${seg.pct}%`}
                  style={{
                    flex: seg.pct,
                    backgroundColor: seg.color,
                    ["--k" as string]: k,
                  }}
                />
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {WEEK_BREAKDOWN.map((seg) => (
                <div key={seg.label} className="flex items-start gap-2.5 text-sm">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-3.5 w-3.5 shrink-0 rounded-xs"
                    style={{ backgroundColor: seg.color }}
                  />
                  <div>
                    <b className="block font-semibold text-navy">{seg.label}</b>
                    <span className="text-xs text-muted-foreground">{seg.pct}% of the week</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OLYMPIAD PREPARATION */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Olympiads · Grade 4 onwards</p>
              <h2>Olympiad preparation</h2>
            </div>
            <p className="vk-lede">
              Early competitive exposure builds confidence, analytical thinking and a love of
              challenge.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OLYMPIADS.map((o) => (
              <article
                key={o.code}
                className="rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <b
                  className="block font-display text-4xl leading-none font-medium"
                  style={{ color: "var(--vt)" }}
                >
                  {o.code}
                </b>
                <h3 className="mt-3 font-display text-xl font-medium text-navy">{o.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{o.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAMPLE MOCK TEST PERFORMANCE ANALYTICS */}
      <section className="vk-band vk-ground-deep">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="vk-kicker">Performance analytics</p>
            <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
              What parents see after every mock test
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Each mock comes with a clear report: the score trend, strong and developing topics,
              and the concrete next step agreed with the teacher.
            </p>
            <p className="mt-4 text-xs text-white/65">
              Illustrative sample report showing parent feedback format.
            </p>
          </div>

          <div className="rounded-2xl bg-card p-6 text-foreground shadow-soft lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <b className="font-semibold text-navy">Sample student · Grade 9 foundation</b>
              <span className="text-xs text-muted-foreground">Last 6 mock tests</span>
            </div>

            <div className="my-4 w-full">
              <svg
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                className="h-auto w-full"
                role="img"
                aria-label="Sample score trend rising from 52 to 78 percent over six mocks"
              >
                {[40, 60, 80, 100].map((val) => (
                  <g key={val}>
                    <line
                      x1={CHART_PAD}
                      x2={CHART_W - CHART_PAD}
                      y1={chartY(val)}
                      y2={chartY(val)}
                      stroke="#e3e1ea"
                    />
                    <text x="0" y={chartY(val) + 4} fontSize="11" fill="#575a78">
                      {val}%
                    </text>
                  </g>
                ))}
                <path d={trendAreaPath} fill="rgba(161, 98, 7, 0.12)" />
                <path
                  d={trendLinePath}
                  fill="none"
                  stroke="#a16207"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {MOCK_SCORES.map((val, i) => (
                  <g key={i}>
                    <circle
                      cx={chartX(i)}
                      cy={chartY(val)}
                      r="5"
                      fill="#ffffff"
                      stroke="#a16207"
                      strokeWidth="3"
                    />
                    <text
                      x={chartX(i)}
                      y={CHART_H - 8}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#575a78"
                    >
                      Mock {i + 1}
                    </text>
                  </g>
                ))}
                <text
                  x={chartX(5)}
                  y={chartY(78) - 12}
                  textAnchor="end"
                  fontSize="13"
                  fontWeight="700"
                  fill="#5a3604"
                >
                  78%
                </text>
              </svg>
            </div>

            <div className="space-y-2.5">
              {TOPIC_MASTERY.map((tp) => (
                <div key={tp.topic} className="grid grid-cols-[125px_1fr_44px] items-center gap-3 text-sm">
                  <span className="font-medium text-navy">{tp.topic}</span>
                  <div className="h-2.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${tp.pct}%`, backgroundColor: tp.color }}
                    />
                  </div>
                  <span className="text-right font-mono text-xs font-bold tabular-nums text-navy">
                    {tp.pct}%
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-xl px-4 py-3 text-sm text-foreground"
              style={{ backgroundColor: "var(--vt-soft)" }}
            >
              <strong className="mr-1.5 font-semibold" style={{ color: "var(--vt-deep)" }}>
                Next step:
              </strong>
              Two extra practice sets on Electricity, and a doubt-clearing slot on Thursday.
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE INTERNATIONAL TEST EXPLORER */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Study abroad</p>
              <h2>International test preparation</h2>
            </div>
            <p className="vk-lede">
              Exam-wise modules, mock assessments and guidance for international university
              admissions. Select a test to see what it is for.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="International tests">
            {INTL_TESTS.map((t, i) => {
              const isOn = testIdx === i;
              return (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={isOn}
                  onClick={() => setTestIdx(i)}
                  className="min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: isOn ? "var(--vt)" : "var(--border)",
                    backgroundColor: isOn ? "var(--vt)" : "var(--card)",
                    color: isOn ? "#ffffff" : "var(--navy)",
                  }}
                >
                  {t.name}
                </button>
              );
            })}
          </div>

          <div
            key={activeTest.name}
            className="vk-fadeswap mt-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
            role="tabpanel"
            aria-live="polite"
          >
            <h3 className="font-display text-2xl font-medium text-navy">{activeTest.name}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground">
              {activeTest.desc}
            </p>
            <span
              className="mt-4 inline-block rounded-full px-3.5 py-1 text-xs font-semibold"
              style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
            >
              Usually taken in {activeTest.grades}
            </span>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Competitive exams reward *deep *understanding. So that is exactly what we teach, *from *the *start."
        note="Strong concepts first. Test skills follow naturally."
      />

      <VidyaFaqSection
        name="Competitive Exams"
        intro="Workload, Olympiad choices, international tests and how preparation fits the school day."
        faqs={FAQS}
      />

      <AcademicTail active="compete" />
    </div>
  );
}
