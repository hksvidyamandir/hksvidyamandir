import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  FlaskConical,
  Heart,
  Link2,
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
  type FaqItem,
  type GlanceItem,
} from "@/components/site/vidya/VidyaShared";
import {
  AcademicPhotoGallery,
  AcademicTail,
  AcademicVectorShowcase,
} from "@/components/site/academics/AcademicShared";

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Grades", value: "3, 4 and 5 (ages 8 to 10)" },
  { icon: "book", label: "Textbooks", value: "CBSE, light and concept-based" },
  { icon: "teacher", label: "Approach", value: "Activity-based, theme-connected learning" },
  { icon: "star", label: "New from Grade 4", value: "Robotics and Olympiads" },
  { icon: "eye", label: "Assessment", value: "Continuous, with a 360-degree progress card" },
  { icon: "heart", label: "Balance", value: "Sports, arts and values every week" },
];

const PILLARS = [
  {
    icon: Link2,
    title: "Connected learning",
    text: "Students link ideas across languages, maths, science, social studies and technology.",
  },
  {
    icon: BookOpen,
    title: "Literacy and communication",
    text: "Reading, writing, speaking and listening help learners express ideas and understand other viewpoints.",
  },
  {
    icon: FlaskConical,
    title: "Mathematical and scientific thinking",
    text: "Investigations and problem-solving build reasoning, conceptual understanding and curiosity.",
  },
  {
    icon: Heart,
    title: "Character and personal growth",
    text: "Arts, sport, life skills and teamwork build creativity, resilience, empathy and good decisions.",
  },
] as const;

type ThemeKey = "Water" | "Food" | "Our city";

const THEMES: Record<ThemeKey, { subject: string; activity: string }[]> = {
  Water: [
    { subject: "Maths", activity: "Measure and graph a week of rainfall" },
    { subject: "Science and EVS", activity: "The water cycle and where our tap water comes from" },
    { subject: "English", activity: "Write a rain poem and a letter about saving water" },
    { subject: "Social studies", activity: "The Kaveri and the rivers of Karnataka" },
    { subject: "Art", activity: "Paint a river from source to sea" },
    { subject: "Technology", activity: "Record rainfall in a simple spreadsheet" },
  ],
  Food: [
    { subject: "Maths", activity: "Price and budget a class picnic" },
    { subject: "Science and EVS", activity: "Food groups and how plants make food" },
    { subject: "English", activity: "Write a recipe in clear steps" },
    { subject: "Social studies", activity: "What India eats, region by region" },
    { subject: "Art", activity: "Design a menu card" },
    { subject: "Krishi Vidya", activity: "Grow and taste leafy greens" },
  ],
  "Our city": [
    { subject: "Maths", activity: "Read a Bengaluru metro map and count stops" },
    { subject: "Science and EVS", activity: "Trees, birds and lakes of the city" },
    { subject: "English", activity: "Interview a community helper" },
    { subject: "Social studies", activity: "How Bengaluru grew over time" },
    { subject: "Art", activity: "Draw a street from our neighbourhood" },
    { subject: "Kannada", activity: "Learn the names of places and signs" },
  ],
};

const YEAR_GRADES = [
  {
    grade: "Grade 3",
    cols: [
      {
        heading: "New this year",
        items: [
          "Joined-up handwriting and longer reading",
          "Multiplication and division through games",
          "Library card and weekly library period",
        ],
      },
      {
        heading: "Explore",
        items: [
          "Plants, animals and our environment",
          "Map reading of school and neighbourhood",
          "Class garden bed in Krishi Vidya",
        ],
      },
      {
        heading: "Grow",
        items: [
          "First class assembly presentation",
          "Taking turns as class monitor",
          "Team games in Khel Vidya",
        ],
      },
    ],
  },
  {
    grade: "Grade 4",
    cols: [
      {
        heading: "New this year",
        items: [
          "Early robotics, hands-on",
          "Olympiads in Maths, Science and English",
          "Fractions and measurement projects",
        ],
      },
      {
        heading: "Explore",
        items: [
          "Simple experiments and recording results",
          "Block coding basics",
          "Heritage stories of Karnataka",
        ],
      },
      {
        heading: "Grow",
        items: [
          "Show and tell with longer talks",
          "Group projects with roles",
          "Inter-house activities",
        ],
      },
    ],
  },
  {
    grade: "Grade 5",
    cols: [
      {
        heading: "New this year",
        items: [
          "Longer research projects",
          "Decimals, data and simple graphs",
          "Writing reports and opinion pieces",
        ],
      },
      {
        heading: "Explore",
        items: [
          "Science models for the exhibition",
          "Robotics challenges",
          "Reading clubs and book talks",
        ],
      },
      {
        heading: "Grow",
        items: [
          "Leadership roles in class and house",
          "Getting ready for middle school routines",
          "Planning and organising their own work",
        ],
      },
    ],
  },
] as const;

const LITERACY_NODES = [
  { label: "Read", color: "#2c6fd1", x: 200, y: 60 },
  { label: "Write", color: "#ee8a2c", x: 340, y: 200 },
  { label: "Speak", color: "#0f8a84", x: 200, y: 340 },
  { label: "Listen", color: "#e86a92", x: 60, y: 200 },
] as const;

const SUBJECTS = [
  "English literacy",
  "Numeracy",
  "Science and EVS",
  "Fine and performing arts",
  "Information practices",
  "Second languages",
  "Personal, social and physical education",
];

const FAQS: FaqItem[] = [
  {
    q: "How much homework will my child get?",
    a: "Homework is light and purposeful, usually reading and short practice that reinforces the day's learning.",
  },
  {
    q: "When do Olympiads and robotics start?",
    a: "Both start in Grade 4. Olympiads cover Maths, Science and English, and robotics is introduced through hands-on activities.",
  },
  {
    q: "Which second language can my child take?",
    a: "Hindi or Kannada, taught alongside English, with spoken practice and recitation.",
  },
  {
    q: "How do you support a child who finds reading hard?",
    a: "Teachers spot this early through daily reading. Small-group remedial sessions and extra library time help children catch up.",
  },
  {
    q: "Are there exams in Primary?",
    a: "Assessment is mostly continuous, through class work, projects and short checks, and is shared through the Holistic Progress Card.",
  },
  {
    q: "How do you stretch a child who is ahead?",
    a: "Enrichment tasks, Olympiads and advanced learning opportunities keep able learners challenged.",
  },
  {
    q: "Is there a garden or outdoor learning?",
    a: "Yes. Primary classes learn in the campus garden through Krishi Vidya, and use outdoor spaces for science and sport.",
  },
  {
    q: "How can I track my child's progress?",
    a: "Through the 360-degree progress card, parent-teacher meetings and the work your child brings home.",
  },
];

export function PrimaryPage() {
  const [theme, setTheme] = useState<ThemeKey>("Water");
  const [yearIdx, setYearIdx] = useState(0);

  const activeThemeItems = THEMES[theme];
  const activeYear = YEAR_GRADES[yearIdx] ?? YEAR_GRADES[0];

  return (
    <div className="vk-page" data-stage="primary">
      {/* 1. UNIFIED HERO + FULL CRO ENQUIRY FORM (SAME BACKGROUND) */}
      <section className="ac-hero pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/academics" className="transition-colors hover:text-white">Academics</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#ffd27a]">Primary</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd27a]">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
                  Grades 3 to 5
                </span>
                Preparatory stage
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Where curiosity becomes confidence
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                Concept-led CBSE learning with daily literacy, early robotics and Olympiads from
                Grade 4.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="#theme"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  See connected learning
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
                context="Primary School (Grades 3 – 5)"
                title="Primary Admissions 2026–27"
                subtitle="Book a Primary campus tour & request the Grade 3–5 fee guide."
                defaultGrade="Grade 3"
                ctaLabel="Book Primary Visit"
                accentColor="#2c6fd1"
              />
            </div>
          </div>

          <div className="vk-stats vk-stats-dark">
            <div>
              <b>3</b>
              <span>Grades</span>
              <small>Grades 3, 4 and 5</small>
            </div>
            <div>
              <b>Grade 4</b>
              <span>Olympiads &amp; Robotics</span>
              <small>Maths, Science &amp; English</small>
            </div>
            <div>
              <b>Daily</b>
              <span>Reading</span>
              <small>Reading, writing &amp; speaking</small>
            </div>
            <div>
              <b>360°</b>
              <span>Progress card</span>
              <small>Teacher, self, peer &amp; parent</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaGlance name="Primary" items={GLANCE} />

      {/* 1B. ANIMATED OPEN BOOK & FLOATING GLYPHS SHOWCASE (MOVED BELOW HERO) */}
      <AcademicVectorShowcase
        bg="#173f7a"
        kicker="Active discovery"
        title="Light textbooks, deeper understanding"
        description="Reading, numeracy, science and nature connect every week so children ask sharper questions instead of memorising answers."
        theme="academics"
      >
        <svg viewBox="0 0 520 420" role="img" aria-label="An open book with letters, numbers and a leaf rising from it">
          <path d="M60 330 Q160 300 260 330 V370 Q160 340 60 370Z" fill="#ffffff" />
          <path d="M260 330 Q360 300 460 330 V370 Q360 340 260 370Z" fill="#e6effc" />
          <path d="M260 330V370" stroke="#173f7a" strokeWidth="3" />
          <g className="ac-float" fontFamily="Fraunces, serif">
            <text style={{ ["--i" as string]: 0 }} x="150" y="270" fontSize="56" fill="#ffd27a">a</text>
            <text style={{ ["--i" as string]: 1 }} x="230" y="210" fontSize="64" fill="#ffffff">7</text>
            <text style={{ ["--i" as string]: 2 }} x="330" y="250" fontSize="52" fill="#ee8a2c">+</text>
            <text style={{ ["--i" as string]: 3 }} x="380" y="170" fontSize="48" fill="#7fb4ff">?</text>
            <g style={{ ["--i" as string]: 4 }}>
              <path d="M190 150 C170 120 180 90 210 80 C220 110 212 136 190 150Z" fill="#6cc58b" />
            </g>
          </g>
          <g className="ac-magnify">
            <circle cx="400" cy="300" r="34" fill="rgba(255,210,122,0.12)" stroke="#ffd27a" strokeWidth="8" />
            <path d="M424 324 L454 354" stroke="#ffd27a" strokeWidth="10" strokeLinecap="round" />
          </g>
        </svg>
      </AcademicVectorShowcase>

      {/* 2. INTRO SPLIT WITH REAL PHOTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="vk-kicker">Preparatory stage</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Building strong academic foundations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              In Grades 3 to 5, students move from early discovery to structured inquiry.
              Experiments, storytelling, library reading and group projects help children understand
              concepts rather than memorise them.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "CBSE textbooks paired with activity-based learning",
                "Daily reading, writing and speaking practice",
                "Hands-on science, nature exploration and early robotics from Grade 4",
                "Olympiad exposure in Maths, Science and English from Grade 4",
                "Equal emphasis on sports, arts, values and teamwork",
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
              src={img.primary}
              alt="Primary students at HKS Vidyamandir"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs font-semibold text-navy">
              Concepts before memorising in Primary classrooms
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
              <h2>How students grow in Primary</h2>
            </div>
            <p className="vk-lede">What every Primary classroom at HKS is designed to nurture.</p>
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

      {/* 4. INTERACTIVE CONNECTED LEARNING THEME WEB */}
      <section className="vk-band vk-ground-paper" id="theme">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Connected learning</p>
              <h2>One theme, every subject</h2>
            </div>
            <p className="vk-lede">
              Primary classes often learn through a shared theme, so a single idea connects maths,
              science, English and art. Pick a theme to see how it links together.
            </p>
          </div>

          <div className="vk-chips" role="tablist" aria-label="Connected learning themes">
            {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={theme === key}
                onClick={() => setTheme(key)}
                className="vk-chip"
              >
                {key}
              </button>
            ))}
          </div>

          <div key={theme} className="ac-web vk-fadeswap mt-7" role="tabpanel" aria-live="polite">
            <div className="ac-web-core">{theme}</div>
            {activeThemeItems.map((node, i) => (
              <div
                key={node.subject}
                className={`ac-web-n${i} rounded-2xl border border-border bg-card p-5 shadow-soft`}
              >
                <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                  {node.subject}
                </small>
                <b className="mt-1 block text-sm font-semibold text-navy sm:text-base">
                  {node.activity}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE YEAR-BY-YEAR GRADE 3 / 4 / 5 TABS */}
      <section className="vk-band vk-ground-cream border-y border-border">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Year by year</p>
              <h2>What&apos;s new in each grade</h2>
            </div>
            <p className="vk-lede">
              Each year adds something new: more independence, new subjects to explore and new
              firsts to celebrate.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <div className="relative flex flex-wrap gap-2 pb-4" role="tablist" aria-label="Primary grades">
              {YEAR_GRADES.map((yr, i) => (
                <button
                  key={yr.grade}
                  type="button"
                  role="tab"
                  aria-selected={yearIdx === i}
                  onClick={() => setYearIdx(i)}
                  className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: yearIdx === i ? "var(--vt)" : "transparent",
                    color: yearIdx === i ? "#ffffff" : "var(--muted-foreground)",
                  }}
                >
                  {yr.grade}
                </button>
              ))}
              <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden rounded-full bg-border">
                <span
                  aria-hidden="true"
                  className="block h-full w-1/3 rounded-full transition-transform duration-500"
                  style={{
                    backgroundColor: "var(--vt)",
                    transform: `translateX(${yearIdx * 100}%)`,
                  }}
                />
              </div>
            </div>

            <div
              key={activeYear.grade}
              className="vk-fadeswap mt-6 grid gap-4 md:grid-cols-3"
              role="tabpanel"
              aria-live="polite"
            >
              {activeYear.cols.map((col) => (
                <div
                  key={col.heading}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "var(--vt-soft)" }}
                >
                  <h3 className="font-sans text-sm font-bold" style={{ color: "var(--vt-deep)" }}>
                    {col.heading}
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-foreground">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DAILY LITERACY LOOP SVG */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="mx-auto w-full max-w-[360px] lg:col-span-5">
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
              <circle cx="200" cy="200" r="140" fill="none" stroke="#e3e1ea" strokeWidth="2" strokeDasharray="4 10" />
              {LITERACY_NODES.map((node) => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r="46" fill={node.color} />
                  <text
                    x={node.x}
                    y={node.y + 6}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Fraunces, serif"
                    fontSize="20"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
              <circle r="10" fill="#ffd27a">
                <animateMotion dur="8s" repeatCount="indefinite" path="M200 60 A140 140 0 1 1 199.9 60" />
              </circle>
              <text x="200" y="196" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="22" fill="#173f7a">
                every
              </text>
              <text x="200" y="222" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="22" fill="#173f7a">
                day
              </text>
            </svg>
          </div>

          <div className="lg:col-span-7">
            <p className="vk-kicker">Every day</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              The daily literacy loop
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground">
              Reading, writing, speaking and listening feed each other. Children practise all four
              every day, in English and in their second language.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Read", desc: "Library time, class readers and reading aloud" },
                { title: "Write", desc: "Journals, stories, letters and short reports" },
                { title: "Speak", desc: "Show and tell, recitation and class discussions" },
                { title: "Listen", desc: "Stories, audio and listening to classmates' ideas" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-4">
                  <b className="block font-display text-xl font-medium" style={{ color: "var(--vt)" }}>
                    {item.title}
                  </b>
                  <span className="mt-1 block text-sm text-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. 360 DEGREE VIEW */}
      <section className="vk-band vk-ground-deep">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">How progress is shared</p>
              <h2>A 360-degree view of your child</h2>
            </div>
            <p className="vk-lede">
              The Holistic Progress Card for this stage brings together four voices, so you see the
              whole learner and not just a mark.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Star, title: "Teacher", desc: "Observations and evidence from class activities and projects" },
              { icon: BookOpen, title: "Self", desc: "Your child reflects: I learned something new, I tried my best" },
              { icon: Users, title: "Peers", desc: "Kind, guided feedback from classmates on group work" },
              { icon: Heart, title: "Parents", desc: "What you notice at home, shared at parent meetings" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/8 p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-[#ffd27a]">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <b className="mt-4 block font-display text-xl font-medium text-white">{item.title}</b>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUBJECT CHIPS */}
      <section className="vk-band vk-ground-soft border-y border-border">
        <div className="container-site text-center">
          <p className="vk-kicker justify-center">Subjects and learning areas</p>
          <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
            A balanced CBSE preparatory curriculum
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground md:text-base">
            Academics, languages, technology and the arts, in balance.
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
        </div>
      </section>

      <VidyaTagline
        text="We want children to leave Primary *asking *better *questions, not just giving faster answers."
        note="Curiosity is the skill that keeps paying off, all the way to Grade 12."
      />

      <AcademicPhotoGallery
        stageName="Primary"
        intro="Hands-on classrooms, library corners, science experiments and teamwork across Grades 3 to 5."
        photos={programmePhotos.primary}
      />

      <VidyaEssentials
        kit={[
          "School bag with the day's books, as per timetable",
          "A labelled water bottle and a healthy lunch",
          "PE uniform on sports days",
          "A library book to return each week",
          "Robotics kits and lab materials stay at school",
        ]}
        progress={[
          "A 360-degree Holistic Progress Card",
          "Notebooks, journals and project work",
          "Olympiad certificates from Grade 4",
          "Parent-teacher meetings each term",
        ]}
        join={[
          "Read with your child for 15 minutes a day",
          "Visit exhibitions and open days",
          "Talk about the class theme at home",
          "Volunteer for a class trip or reading session",
        ]}
        safety={[
          "Teachers supervise every activity and lab",
          "Safe, age-appropriate robotics and science kits",
          "CCTV-monitored campus",
          "On-campus medical and first-aid support",
          "School bus transport with staff on board",
          "Anti-bullying and kindness charter",
        ]}
      />

      <VidyaFaqSection
        name="Primary"
        intro="Homework, Olympiads, robotics, languages and reading support."
        faqs={FAQS}
      />

      <AcademicTail active="primary" />
    </div>
  );
}
