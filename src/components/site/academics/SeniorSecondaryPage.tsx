import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Layers,
  Star,
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
  { icon: "users", label: "Grades", value: "11 and 12 (ages 16 to 17)" },
  { icon: "book", label: "Streams", value: "Science (PCM, PCB) and Commerce" },
  { icon: "star", label: "Entrance prep", value: "NEET, JEE and CUET in the school day" },
  { icon: "globe", label: "Abroad", value: "SAT, IELTS and application guidance" },
  { icon: "teacher", label: "Mentoring", value: "One-to-one mentoring and career workshops" },
  { icon: "eye", label: "Assessment", value: "Mock tests, practical assessments, CBSE boards" },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Subject depth and rigour",
    text: "Deeper study of chosen subjects, building analytical thinking, communication and confident application.",
  },
  {
    icon: Users,
    title: "Personal educator guidance",
    text: "Focused academic support, regular feedback and mentoring tailored to each learner's potential.",
  },
  {
    icon: Compass,
    title: "College and career readiness",
    text: "Counselling, workshops and pathway planning to choose subjects and prepare applications.",
  },
  {
    icon: Star,
    title: "Leadership and growth",
    text: "Service, sport, clubs and leadership roles that build resilience, responsibility and confidence.",
  },
] as const;

type StreamKey = "pcm" | "pcb" | "com" | "cs";

const QUIZ_QUESTIONS = [
  {
    legend: "Which subjects does your child enjoy most?",
    options: [
      { label: "Maths and Physics", value: "pcm" },
      { label: "Biology and Chemistry", value: "pcb" },
      { label: "Business, money and economics", value: "com" },
      { label: "Computers and coding", value: "cs" },
    ],
  },
  {
    legend: "How does your child like to learn?",
    options: [
      { label: "Solving problems step by step", value: "pcm" },
      { label: "Experiments and how living things work", value: "pcb" },
      { label: "Real-world cases and numbers", value: "com" },
      { label: "Building and testing things", value: "cs" },
    ],
  },
  {
    legend: "Which careers spark interest?",
    options: [
      { label: "Engineering or technology", value: "pcm" },
      { label: "Medicine or health", value: "pcb" },
      { label: "Business, finance or law", value: "com" },
      { label: "Software or design", value: "cs" },
    ],
  },
  {
    legend: "Where might they study after school?",
    options: [
      { label: "India", value: "in" },
      { label: "Abroad", value: "ab" },
      { label: "Not sure yet", value: "ns" },
    ],
  },
] as const;

const STREAM_RESULTS: Record<
  StreamKey,
  { name: string; subjects: string[]; exams: string }
> = {
  pcm: {
    name: "Science · PCM",
    subjects: ["English Core", "Physics", "Chemistry", "Mathematics", "Computer Science"],
    exams: "JEE, state CETs and CUET",
  },
  pcb: {
    name: "Science · PCB",
    subjects: ["English Core", "Physics", "Chemistry", "Biology", "Mathematics or Computer Science"],
    exams: "NEET and CUET",
  },
  com: {
    name: "Commerce",
    subjects: ["English Core", "Accountancy", "Business Studies", "Economics", "Mathematics"],
    exams: "CUET and professional courses",
  },
  cs: {
    name: "Science · PCM with Computer Science",
    subjects: ["English Core", "Physics", "Chemistry", "Mathematics", "Computer Science"],
    exams: "JEE and CUET",
  },
};

const COMBOS = [
  {
    tag: "Science · PCM",
    title: "Engineering and technology",
    subjects: ["English Core", "Physics", "Chemistry", "Mathematics", "Computer Science"],
    desc: "Full lab practicals and integrated JEE preparation.",
  },
  {
    tag: "Science · PCB",
    title: "Medicine and life sciences",
    subjects: ["English Core", "Physics", "Chemistry", "Biology", "Mathematics or Computer Science"],
    desc: "Full lab practicals and integrated NEET preparation.",
  },
  {
    tag: "Commerce",
    title: "Business, finance and economics",
    subjects: ["English Core", "Accountancy", "Business Studies", "Economics", "Mathematics or Computer Science"],
    desc: "Analytical, financial and management foundations, with CUET preparation.",
  },
] as const;

const TWO_YEAR_PLAN = [
  { term: "Grade 11 · Term 1", title: "Settle into the stream", desc: "Core concepts, lab skills and a personal mentor" },
  { term: "Grade 11 · Term 2", title: "Foundation for entrances", desc: "NEET, JEE or CUET practice built into the timetable" },
  { term: "Summer", title: "Explore careers", desc: "Workshops, shortlists and SAT or IELTS plans if going abroad" },
  { term: "Grade 12 · Term 1", title: "Full syllabus and mocks", desc: "Mock tests with performance feedback and doubt clearing" },
  { term: "Grade 12 · Board season", title: "Board exams", desc: "Pre-boards, then the CBSE board exams" },
  { term: "After boards", title: "Entrance exams and offers", desc: "NEET, JEE and CUET, plus university applications" },
] as const;

const PATHWAYS = [
  { title: "Engineering", sub: "PCM · JEE, state CETs, university tests" },
  { title: "Medicine and health", sub: "PCB · NEET" },
  { title: "Pure and applied sciences", sub: "PCM or PCB · CUET, university tests" },
  { title: "Commerce and finance", sub: "Commerce · CUET, professional courses" },
  { title: "Computing and design", sub: "PCM or Commerce with CS · university tests, portfolios" },
  { title: "Study abroad", sub: "Any stream · SAT, IELTS or TOEFL, applications" },
] as const;

const FAQS: FaqItem[] = [
  {
    q: "Which streams are offered?",
    a: "Science (PCM or PCB) and Commerce. Computer Science is available as an option in both.",
  },
  {
    q: "Is NEET and JEE coaching included?",
    a: "Yes. NEET, JEE and CUET preparation is integrated within the school day, so students do not need separate coaching.",
  },
  {
    q: "Can my child switch streams in Grade 11?",
    a: "Early in Grade 11 a change can sometimes be arranged, depending on seats and the subjects involved. Speak with our counsellor as soon as possible.",
  },
  {
    q: "Do you help with applications abroad?",
    a: "Yes. Students get SAT and IELTS preparation and guidance on university shortlists and applications.",
  },
  {
    q: "How often are mock tests held?",
    a: "Regularly through both years, with performance feedback and doubt clearing after each one.",
  },
  {
    q: "Is there one-to-one mentoring?",
    a: "Every student has mentoring support and access to career pathway workshops.",
  },
  {
    q: "How do subject choices affect CUET?",
    a: "CUET UG lets students pick up to five subjects, and universities map courses to specific subjects. Counsellors help match Grade 11 choices to target courses.",
  },
  {
    q: "What about students who need extra help?",
    a: "Doubt-clearing sessions, remedial support and close teacher feedback are part of the timetable.",
  },
];

export function SeniorSecondaryPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const stepperReveal = useInViewOnce<HTMLDivElement>(0.2);

  const answeredCount = Object.keys(answers).length;
  const scoreMap: Record<StreamKey, number> = { pcm: 0, pcb: 0, com: 0, cs: 0 };
  for (let i = 0; i < 3; i++) {
    const val = answers[i] as StreamKey | undefined;
    if (val && val in scoreMap) scoreMap[val] += 1;
  }
  const coreAnswered = [0, 1, 2].filter((i) => !!answers[i]).length;
  const bestStream = (Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "pcm") as StreamKey;
  const result = STREAM_RESULTS[bestStream];
  const wantsAbroad = answers[3] === "ab";

  return (
    <div className="vk-page" data-stage="senior">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Senior Secondary</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Grades 11 to 12
                </span>
                Science &amp; Commerce
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Focused pathways to universities and careers
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                CBSE Science &amp; Commerce paired with integrated NEET, JEE, CUET, SAT &amp; IELTS
                preparation and 1:1 mentoring.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Find the right stream
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
                context="Senior Secondary (Grades 11 – 12)"
                title="Grade 11–12 Stream Counselling"
                subtitle="Get Science/Commerce subject guides, fee structure & counsellor slots."
                defaultGrade="Grade 11 (Science)"
                ctaLabel="Talk to a Stream Counsellor"
                accentColor="#0e5a8a"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>2</b>
              <span>Streams</span>
              <small>Science &amp; Commerce</small>
            </div>
            <div>
              <b>3</b>
              <span>Entrance exams</span>
              <small>NEET, JEE &amp; CUET in school hours</small>
            </div>
            <div>
              <b>1:1</b>
              <span>Mentoring</span>
              <small>One-to-one guidance</small>
            </div>
            <div>
              <b>SAT</b>
              <span>&amp; IELTS</span>
              <small>For universities abroad</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Senior Secondary" items={GLANCE} />

      {/* 1B. ANIMATED GRADUATION CAP & INDIA/ABROAD PATHS SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#08344f"
        kicker="India & global pathways"
        title="Two years built around your next destination"
        description="Whether aiming for IITs, medical colleges, top Indian universities via CUET, or degrees abroad with SAT & IELTS, counsellors map every milestone."
        theme="olympiad"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="A graduation cap above two paths leading to India and abroad">
          <g className="ac-draw" fill="none" strokeLinecap="round" strokeWidth="6">
            <path d="M260 400 C260 330 160 300 120 220" stroke="#ffd27a" />
            <path d="M260 400 C260 330 360 300 400 220" stroke="#7fc8f5" />
          </g>
          <circle r="6" fill="#ffffff">
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M260 400 C260 330 160 300 120 220" />
          </circle>
          <circle r="6" fill="#ffd27a">
            <animateMotion dur="4.2s" begin="-1.4s" repeatCount="indefinite" path="M260 400 C260 330 360 300 400 220" />
          </circle>
          <g>
            <rect x="80" y="160" width="80" height="60" rx="6" fill="#ffffff" />
            <path d="M76 164 L120 132 L164 164Z" fill="#ffd27a" />
            <text x="120" y="200" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="13" fill="#08344f">
              India
            </text>
          </g>
          <g>
            <circle cx="400" cy="186" r="40" fill="#ffffff" />
            <path d="M360 186h80" stroke="#0e5a8a" strokeWidth="3" fill="none" />
            <g className="ac-globe-meridian">
              <path
                d="M400 146c-14 14-14 66 0 80M400 146c14 14 14 66 0 80"
                stroke="#0e5a8a"
                strokeWidth="3"
                fill="none"
              />
            </g>
            <text x="400" y="246" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="13" fill="#ffffff">
              Abroad
            </text>
          </g>
          <g className="ac-cap">
            <path d="M260 40 L340 72 L260 104 L180 72Z" fill="#ffd27a" />
            <path d="M220 88v28c24 16 56 16 80 0V88" fill="#ee8a2c" />
            <path d="M340 72v40" stroke="#ffd27a" strokeWidth="4" />
            <circle cx="340" cy="116" r="6" fill="#ffd27a" />
          </g>
        </svg>
      </AcademicVectorShowcase>

      {/* 2. INTRO SPLIT WITH REAL PHOTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="vk-kicker">Senior secondary stage</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Academic ambition with purposeful guidance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Grades 11 and 12 are a defining bridge to higher education. Experienced faculty
              combine CBSE board preparation, integrated competitive exam training and individual
              career counselling, so students can aim for leading universities in India and abroad.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Dedicated Science (PCM or PCB) and Commerce streams",
                "Integrated NEET, JEE and CUET preparation within the school day",
                "SAT, IELTS and international university application guidance",
                "Regular mock tests, practical lab assessments and doubt clearing",
                "One-to-one mentoring and career pathway workshops",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--vt)" }} strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={img.senior}
              alt="Senior Secondary students at HKS Vidyamandir"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs font-semibold text-navy">
              Focused preparation, lab practicals and career mentoring
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3. FOUR PILLARS */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Four pillars</p>
              <h2>How Senior Secondary prepares every learner</h2>
            </div>
            <p className="vk-lede">Rigour, guidance, direction and character, in equal measure.</p>
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

      {/* 4. INTERACTIVE STREAM FINDER QUIZ */}
      <section className="vk-band vk-ground-paper" id="quiz">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Stream finder</p>
              <h2>Which stream fits your child?</h2>
            </div>
            <p className="vk-lede">
              Four quick questions to start the conversation. It is a starting point, not a verdict,
              and our counsellors go much deeper.
            </p>
          </div>

          <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft lg:grid-cols-[1.15fr_0.85fr] md:p-8">
            <div className="space-y-5">
              {QUIZ_QUESTIONS.map((q, qi) => (
                <fieldset key={q.legend} className="border-0 p-0">
                  <legend className="mb-2.5 text-sm font-semibold text-navy">{q.legend}</legend>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const isPicked = answers[qi] === opt.value;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          aria-pressed={isPicked}
                          onClick={() => setAnswers((prev) => ({ ...prev, [qi]: opt.value }))}
                          className="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                          style={{
                            borderColor: isPicked ? "var(--vt)" : "var(--border)",
                            backgroundColor: isPicked ? "var(--vt)" : "var(--background)",
                            color: isPicked ? "#ffffff" : "var(--navy)",
                          }}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            <div
              className="flex flex-col justify-center rounded-xl p-6"
              style={{ backgroundColor: "var(--vt-soft)" }}
              aria-live="polite"
            >
              {coreAnswered < 3 ? (
                <div>
                  <p className="font-display text-2xl font-medium text-navy sm:text-3xl">
                    {answeredCount === 0 ? "Answer the questions" : `${answeredCount} of 4 answered`}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {answeredCount === 0
                      ? "Your suggested stream, subject combination and entrance exams will appear here."
                      : "Answer at least the first three questions to see a suggested stream."}
                  </p>
                </div>
              ) : (
                <div key={`${bestStream}-${wantsAbroad}`} className="vk-fadeswap">
                  <small className="text-xs font-bold text-muted-foreground">
                    A good place to start
                  </small>
                  <p className="mt-1 font-display text-3xl font-medium text-navy">{result.name}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {result.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-navy"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-foreground">
                    <strong className="font-semibold text-navy">Entrance exams to plan for:</strong>{" "}
                    {result.exams}
                    {wantsAbroad ? ", plus SAT and IELTS or TOEFL" : ""}.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/admissions"
                      hash="enquire"
                      className="inline-flex items-center gap-1.5 border-b-2 border-cta pb-0.5 text-sm font-semibold text-navy hover:text-cta"
                    >
                      Book a counsellor session
                      <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STREAMS & SUBJECT COMBINATIONS */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Academic streams</p>
              <h2>Streams and subject combinations</h2>
            </div>
            <p className="vk-lede">
              Choose the pathway that matches your strengths, university goals and future ambitions.
              English Core is common to all.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {COMBOS.map((c) => (
              <article
                key={c.tag}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span
                  className="self-start rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
                >
                  {c.tag}
                </span>
                <h3 className="font-display text-2xl font-medium text-navy">{c.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-navy"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <p className="mt-auto text-sm leading-relaxed text-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TWO-YEAR ROADMAP STEPPER */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The two-year plan</p>
              <h2>From Grade 11 to the first year of college</h2>
            </div>
            <p className="vk-lede">
              Board preparation and entrance exams run side by side, so nothing is left to the last
              minute.
            </p>
          </div>

          <div
            ref={stepperReveal.ref}
            className={`ac-stepper ${stepperReveal.inView ? "is-in" : ""}`}
          >
            <span className="ac-stepper-fill" aria-hidden="true" />
            {TWO_YEAR_PLAN.map((step) => (
              <div key={step.term}>
                <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                  {step.term}
                </small>
                <h3 className="mt-1 font-display text-lg font-medium text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PATHWAYS AFTER GRADE 12 */}
      <section className="vk-band vk-ground-navy">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Where it can lead</p>
              <h2>Pathways after Grade 12</h2>
            </div>
            <p className="vk-lede">
              A few of the routes our counsellors map with students and parents.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PATHWAYS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/6 p-6 transition-colors hover:bg-white/12"
              >
                <b className="block font-display text-xl font-medium text-white">{item.title}</b>
                <small className="mt-1.5 block text-sm text-white/80">{item.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Two years, two goals: *a *strong *board *result and *a *clear *next *step."
        note="We plan for both from the first week of Grade 11."
      />

      <AcademicPhotoGallery
        stageName="Senior Secondary"
        intro="Advanced labs, focused seminar study, Commerce collaboration and university counselling."
        photos={programmePhotos.senior}
      />

      <VidyaEssentials
        kit={[
          "Books and notebooks for the stream timetable",
          "Lab coat and closed shoes on practical days",
          "A scientific calculator where the subject needs it",
          "A planner for mock test and assignment dates",
          "Practice papers are provided by the school",
        ]}
        progress={[
          "Mock test reports with performance analytics",
          "Practical and project records",
          "Mentor updates and parent meetings",
          "Counselling notes on university and career plans",
        ]}
        join={[
          "Attend career and university information evenings",
          "Share your profession at a careers workshop",
          "Plan application deadlines with the counsellor",
          "Help your child keep a healthy routine in exam season",
        ]}
        safety={[
          "Lab safety briefings before practicals",
          "Counselling for stress and wellbeing",
          "CCTV-monitored campus",
          "On-campus medical and first-aid support",
          "Balanced timetable with sport and clubs",
          "Confidential mentoring conversations",
        ]}
      />

      <VidyaFaqSection
        name="Senior Secondary"
        intro="Streams, NEET/JEE/CUET preparation, mentoring and university applications."
        faqs={FAQS}
      />

      <AcademicTail active="senior" />
    </div>
  );
}
