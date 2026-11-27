import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Atom,
  Bot,
  Brain,
  Calendar,
  Check,
  Code2,
  Cpu,
  FlaskConical,
  Globe2,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  MessageSquare,
  Settings,
  Telescope,
  Triangle,
  Users,
  Wrench,
} from "lucide-react";
import anubhav1 from "@/assets/vidya-anubhav-1.jpg";
import anubhav4 from "@/assets/vidya-anubhav-4.jpg";
import { Button } from "@/components/ui/button";
import {
  VidyaEssentials,
  VidyaFaqSection,
  VidyaGlance,
  VidyaGradeFinder,
  VidyaTagline,
  VidyaTail,
  VidyaTrackNav,
  type FaqItem,
  type GlanceItem,
  type GradeBandContent,
} from "./VidyaShared";

const ZONES = [
  {
    name: "Virtual Reality Room",
    kind: "Immersive",
    text: "Virtual reality sessions that bring lessons alive: walk through a human heart, stand on the Moon or tour an ancient city.",
    points: [
      "Science and geography field trips in VR",
      "Short, supervised sessions by grade",
      "Reflection journals after each visit",
    ],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Augmented Reality Room",
    kind: "Immersive",
    text: "Augmented reality lets children see ideas in 3D, turning flat diagrams into models they can rotate and explore.",
    points: [
      "3D models of molecules, organs and machines",
      "Interactive textbook overlays",
      "Ideal for early and primary grades",
    ],
    span: "",
  },
  {
    name: "Astronomy & Space Zone",
    kind: "Discovery",
    text: "A space to explore stars, planets and space, with sky-watching sessions and models of the solar system.",
    points: [
      "Telescope and sky-watching sessions",
      "Planetary models and space missions",
      "Links to the Astronomy Laboratory",
    ],
    span: "md:row-span-2",
  },
  {
    name: "Innovation & Discovery Centre",
    kind: "Make",
    text: "A place to try ideas, build and test. Children prototype solutions to real problems they notice around them.",
    points: [
      "Design-thinking challenges",
      "Prototype, test, improve",
      "Showcase at the Science Exhibition",
    ],
    span: "",
  },
  {
    name: "Creative Arts & Design Studio",
    kind: "Create",
    text: "Art, craft and design for creative expression, from sketching and colour to product and graphic design.",
    points: [
      "Drawing, painting and mixed media",
      "Design projects with real briefs",
      "Exhibitions through the year",
    ],
    span: "",
  },
  {
    name: "Environmental & Sustainability Zone",
    kind: "Discovery",
    text: "Learning about nature and sustainable living, closely linked to our Krishi Vidya gardens.",
    points: [
      "Pollinator and biodiversity studies",
      "Water and energy audits",
      "Hands-on projects with Krishi Vidya",
    ],
    span: "md:col-span-2",
  },
  {
    name: "Entrepreneurship & Business Simulation",
    kind: "Life skills",
    text: "Running a small business to learn money skills: planning, pricing, selling and keeping accounts.",
    points: [
      "Mock companies and market days",
      "Budgeting and simple accounts",
      "Pitching ideas to a panel",
    ],
    span: "md:row-span-2",
  },
  {
    name: "Public Speaking & Debate Centre",
    kind: "Voice",
    text: "A space to practise speaking, debate and confidence, preparing children for MUN and stage events.",
    points: [
      "Elocution, extempore and debate",
      "Model United Nations preparation",
      "Coaching in voice and presence",
    ],
    span: "md:col-span-2",
  },
  {
    name: "Heritage & Cultural Learning Zone",
    kind: "Roots",
    text: "Learning about our culture and heritage through artefacts, stories and crafts, shared with Samskriti Vidya.",
    points: [
      "Karnataka and Indian heritage studies",
      "Craft and artefact sessions",
      "Heritage walks and storytelling",
    ],
    span: "",
  },
] as const;

const LOOP_STEPS = [
  { num: "01", title: "Wonder", desc: "A question, a story or an object starts the lesson, not a chapter heading." },
  { num: "02", title: "Explore", desc: "Children investigate with immersive tools: VR, AR, telescopes and simulations." },
  { num: "03", title: "Build", desc: "They make something real: a model, a prototype, a business plan or an argument." },
  { num: "04", title: "Share", desc: "They present, debate or exhibit it, and learn to take feedback." },
] as const;

const LABS = [
  { name: "Physics Laboratory", desc: "Experiments on force, light, sound and energy", Icon: Atom },
  { name: "Chemistry Laboratory", desc: "Safe experiments with materials and reactions", Icon: FlaskConical },
  { name: "Biology Laboratory", desc: "Studying plants, animals and the human body", Icon: Leaf },
  { name: "Mathematics Laboratory", desc: "Learning maths through models and activity", Icon: Triangle },
  { name: "Computer Science Laboratory", desc: "Computers for digital skills and projects", Icon: Code2 },
  { name: "Robotics Laboratory", desc: "Building and programming simple robots", Icon: Bot },
  { name: "AI & Machine Learning Lab", desc: "An introduction to how smart machines learn", Icon: Brain },
  { name: "Coding & Programming Lab", desc: "Learning to write programs step by step", Icon: Code2 },
  { name: "Electronics Prototyping Lab", desc: "Making simple circuits and working models", Icon: Cpu },
  { name: "Astronomy Laboratory", desc: "Observing the sky and learning about space", Icon: Telescope },
  { name: "Environmental Science Lab", desc: "Studying air, water, soil and ecosystems", Icon: Globe2 },
  { name: "Tinkering & Innovation Lab", desc: "A corner to tinker, test and invent", Icon: Settings },
  { name: "Maker Space & Design Lab", desc: "Building real things with tools and design", Icon: Wrench },
] as const;

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
  const [zoneIdx, setZoneIdx] = useState(0);
  const [qty, setQty] = useState(80);
  const [unitCost, setUnitCost] = useState(12);
  const [price, setPrice] = useState(25);
  const [soldPct, setSoldPct] = useState(75);
  const labsRef = useRef<HTMLDivElement>(null);

  const activeZone = ZONES[zoneIdx] ?? ZONES[0];
  const soldCups = Math.round((qty * soldPct) / 100);
  const totalCost = qty * unitCost;
  const revenue = soldCups * price;
  const profit = revenue - totalCost;
  const maxVal = Math.max(totalCost, revenue, 1);
  const breakEven = price > 0 ? Math.ceil(totalCost / price) : 0;

  const scrollLabs = (dir: number) => {
    labsRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="vk-page" data-track="anubhav">
      {/* 1. ASYMMETRIC DOCUMENTARY HERO */}
      <section className="border-b border-border bg-background pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-navy">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Anubhav Vidya</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-mono tabular-nums text-navy">03 of 04</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Experiential learning, 13 labs and Olympiads</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy md:text-6xl">
                Learning you can step inside
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                Nine experiential zones and thirteen laboratories turn lessons into experiences.
                Children explore anatomy in VR, run a small enterprise, argue a motion and build
                working robots before sitting an exam on it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button asChild className="h-11 rounded-lg px-6 text-sm font-medium">
                  <Link to="/admissions" hash="enquire">
                    Visit the learning zones
                    <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Button>
                <a
                  href="#zones"
                  className="inline-flex items-center gap-2 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Explore the floor plan
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={anubhav4}
                  alt="Students assembling and programming a working robot in the HKS Robotics Lab"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Students assembling and coding robots in the Robotics Lab</span>
                <span className="shrink-0 font-mono tabular-nums">Plate 01</span>
              </figcaption>
            </figure>
          </div>

          <div className="vk-stats">
            <div>
              <b>9 zones</b>
              <span>Experiential spaces</span>
              <small>VR, AR, astronomy and enterprise</small>
            </div>
            <div>
              <b>13 labs</b>
              <span>Specialized laboratories</span>
              <small>Science, maths, coding, AI and maker</small>
            </div>
            <div>
              <b>Grade 4+</b>
              <span>Olympiad tracks</span>
              <small>IMO, NSO, IEO, ICSO, IGKO and MUN</small>
            </div>
            <div>
              <b>Grade 6+</b>
              <span>Exam foundations</span>
              <small>NEET, JEE, SAT, AP and IELTS</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaTrackNav active="anubhav" />
      <VidyaGlance name="Anubhav Vidya" items={GLANCE} />

      {/* 2. 4-STEP LEARNING CYCLE */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">How every zone works</p>
              <h2>One loop, repeated until curiosity becomes skill</h2>
            </div>
            <p className="vk-lede">
              Every experiential session moves students from asking a question to building and
              presenting their own answer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {LOOP_STEPS.map((st, i) => {
              const isOn = loopIdx === i;
              return (
                <button
                  key={st.title}
                  type="button"
                  onClick={() => setLoopIdx(i)}
                  className={`rounded-xl border p-6 text-left transition-colors ${
                    isOn
                      ? "border-navy bg-card"
                      : "border-border bg-card/60 hover:border-navy/40"
                  }`}
                >
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {st.num}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-navy">{st.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{st.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 9-ZONE FLOOR PLAN */}
      <section className="vk-band border-y border-border bg-card" id="zones">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Nine experiential zones</p>
              <h2>Walk the floor plan</h2>
            </div>
            <p className="vk-lede">
              Each room offers a different mode of inquiry. Select any room on the plan to inspect
              how students use it.
            </p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div
              role="tablist"
              aria-label="Experiential zones"
              className="grid grid-flow-dense grid-cols-2 gap-2.5 rounded-xl border border-border bg-background p-3 md:grid-cols-4 md:auto-rows-[108px]"
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
                    className={`flex min-h-[96px] cursor-pointer flex-col justify-between rounded-lg border p-3.5 text-left transition-colors ${z.span} ${
                      isOn
                        ? "border-navy bg-navy text-card"
                        : "border-border bg-card text-navy hover:border-navy/50"
                    }`}
                  >
                    <small
                      className={`font-mono text-[11px] ${
                        isOn ? "text-gold" : "text-muted-foreground"
                      }`}
                    >
                      0{i + 1} · {z.kind}
                    </small>
                    <b
                      className={`font-display text-sm font-medium leading-snug ${
                        isOn ? "text-card" : "text-navy"
                      }`}
                    >
                      {z.name}
                    </b>
                  </button>
                );
              })}
            </div>

            <aside
              role="tabpanel"
              aria-live="polite"
              className="flex min-h-[340px] flex-col rounded-xl bg-ink p-6 text-navy-foreground lg:sticky lg:top-36"
            >
              <span className="font-mono text-xs tabular-nums text-gold">
                Zone 0{zoneIdx + 1} of 09 · {activeZone.kind}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-card md:text-3xl">
                {activeZone.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/85">
                {activeZone.text}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5">
                {activeZone.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-card/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <VidyaGradeFinder name="Anubhav Vidya" grades={GRADES} />

      {/* 4. THIRTEEN LABORATORIES SCROLLER */}
      <section className="vk-band vk-ground-paper" aria-label="Thirteen laboratories">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">Thirteen laboratories</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                Where theory gets its hands dirty
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground">
                From force and light to code and circuits, every lab is scheduled for supervised
                practical work.
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
            {LABS.map(({ name, desc, Icon }, i) => (
              <article
                key={name}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-navy/35"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / 13
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-lg font-medium text-navy">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VidyaTagline
        text="Children remember what they build, test and explain long after they forget what they copied from the board."
        note="Every zone and lab is designed around that one principle."
      />

      {/* 5. SKILLS BEYOND MARKS + LAB PLATE */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="vk-kicker">Student development</p>
            <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
              Skills beyond marks
            </h2>
            <p className="mt-3 text-sm text-foreground">
              Structured habits that report cards rarely capture on their own.
            </p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                [Users, "Leadership and team building", "Leading others, working in teams and the Student Leadership Council"],
                [Lightbulb, "Critical thinking and problem solving", "Breaking problems down and testing ideas with evidence"],
                [Settings, "Creativity and innovation", "Trying new ideas and building models that work"],
                [MessageSquare, "Communication and public speaking", "Speaking clearly and with confidence, on stage and in class"],
                [Heart, "Emotional intelligence", "Understanding feelings, our own and others'"],
                [GraduationCap, "Career awareness and counselling", "Guidance on subjects, streams and career choices"],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Users;
                return (
                  <div
                    key={title as string}
                    className="grid items-start gap-3 py-4 sm:grid-cols-[28px_210px_1fr]"
                  >
                    <I className="mt-0.5 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                    <h3 className="text-sm font-medium text-navy">{title as string}</h3>
                    <p className="text-sm text-foreground">{desc as string}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={anubhav1}
                alt="Students conducting supervised science practicals in the HKS laboratory"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
              <span>Supervised laboratory practicals across core sciences</span>
              <span className="shrink-0 font-mono tabular-nums">Plate 02</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 6. OLYMPIADS & COMPETITIONS */}
      <section className="vk-band border-y border-border bg-card" id="olympiads">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="vk-kicker">Olympiads and competitions</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-navy">
              From Grade 4, a stage to test what they know
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Olympiads stretch strong learners and build exam temperament early. Preparation runs
              alongside regular studies without adding external coaching pressure.
            </p>
            <div className="mt-6 space-y-3">
              {[
                [GraduationCap, "A clear method", "Step-by-step preparation planned by faculty"],
                [Calendar, "Subject-wise plans", "Dedicated tracks for each Olympiad subject"],
                [Check, "Practice tests and mocks", "Timed practice papers and mock assessments"],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Check;
                return (
                  <div
                    key={title as string}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <I className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                    <div>
                      <b className="block text-sm font-medium text-navy">{title as string}</b>
                      <span className="text-xs text-muted-foreground">{desc as string}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-7">
            {[
              {
                heading: "School Olympiads from Grade 4",
                items: [
                  ["Sci", "Science"], ["Math", "Maths"], ["Eng", "English"],
                  ["Cyber", "Computers"], ["GK", "General knowledge"],
                ],
              },
              {
                heading: "International and national Olympiads",
                items: [
                  ["IMO", "Mathematics"], ["NSO", "Science"], ["IEO", "English"],
                  ["ICSO", "Computer science"], ["IGKO", "General knowledge"],
                ],
              },
              {
                heading: "Debate, diplomacy and innovation",
                items: [
                  ["MUN", "Model UN"], ["Debate", "Public speaking"], ["Robotics", "Competitions"],
                  ["Expo", "Science exhibition"], ["Pitch", "Business ideas"],
                ],
              },
            ].map((row) => (
              <div key={row.heading}>
                <h3 className="mb-3 text-sm font-medium text-navy">{row.heading}</h3>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                  {row.items.map(([code, label]) => (
                    <div
                      key={code}
                      className="rounded-lg border border-border bg-background p-3 text-left"
                    >
                      <b className="block font-display text-lg font-medium text-navy">{code}</b>
                      <small className="mt-0.5 block text-xs text-muted-foreground">{label}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE LEMONADE STALL BUSINESS SIMULATOR (Product Moment) */}
      <section className="vk-band vk-ground-paper">
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

          <div className="grid gap-8 rounded-xl border border-border bg-card p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div>
                <label htmlFor="sim-qty" className="flex justify-between text-sm font-medium text-navy">
                  <span>Lemonade cups made</span>
                  <span className="font-mono text-sm tabular-nums text-navy">{qty}</span>
                </label>
                <input
                  id="sim-qty"
                  type="range"
                  min={10}
                  max={200}
                  step={10}
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="mt-1 h-8 w-full accent-navy"
                />
              </div>
              <div>
                <label htmlFor="sim-cost" className="flex justify-between text-sm font-medium text-navy">
                  <span>Cost to make one cup (₹)</span>
                  <span className="font-mono text-sm tabular-nums text-navy">₹{unitCost}</span>
                </label>
                <input
                  id="sim-cost"
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={unitCost}
                  onChange={(e) => setUnitCost(Number(e.target.value))}
                  className="mt-1 h-8 w-full accent-navy"
                />
              </div>
              <div>
                <label htmlFor="sim-price" className="flex justify-between text-sm font-medium text-navy">
                  <span>Selling price per cup (₹)</span>
                  <span className="font-mono text-sm tabular-nums text-navy">₹{price}</span>
                </label>
                <input
                  id="sim-price"
                  type="range"
                  min={5}
                  max={60}
                  step={1}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="mt-1 h-8 w-full accent-navy"
                />
              </div>
              <div>
                <label htmlFor="sim-sold" className="flex justify-between text-sm font-medium text-navy">
                  <span>Cups sold</span>
                  <span className="font-mono text-sm tabular-nums text-navy">
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
                  className="mt-1 h-8 w-full accent-navy"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Cups sold is a percentage of cups made. Sample classroom exercise.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-border bg-background p-6">
              <div className="space-y-4">
                {[
                  { label: "Revenue", value: revenue, color: "var(--navy)" },
                  { label: "Costs", value: totalCost, color: "color-mix(in oklab, var(--foreground) 35%, transparent)" },
                ].map((bar) => (
                  <div
                    key={bar.label}
                    className="grid grid-cols-[72px_1fr_84px] items-center gap-3 text-sm text-navy"
                  >
                    <span className="font-medium">{bar.label}</span>
                    <div className="h-5 overflow-hidden rounded bg-card border border-border">
                      <div
                        className="h-full transition-[width] duration-200"
                        style={{ width: `${(bar.value / maxVal) * 100}%`, background: bar.color }}
                      />
                    </div>
                    <span className="text-right font-mono text-xs tabular-nums">
                      {formatInr(bar.value)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-xs text-muted-foreground">Net result</p>
                <div
                  aria-live="polite"
                  className="mt-1 font-display text-3xl font-medium tabular-nums md:text-4xl"
                  style={{ color: profit >= 0 ? "#16a34a" : "#dc2626" }}
                >
                  {profit >= 0 ? "Profit " : "Loss "}
                  {formatInr(Math.abs(profit))}
                </div>
                <p className="mt-2 text-sm text-foreground">
                  {profit >= 0
                    ? `Break-even point: ${breakEven} cups sold.`
                    : `Break-even requires ${breakEven} cups. Adjust selling price or production volume.`}
                </p>
              </div>
            </div>
          </div>

          {/* 5 Field Journeys */}
          <div className="mt-14 border-t border-border pt-14">
            <p className="vk-kicker">Journeys beyond the classroom</p>
            <h2 className="font-display text-2xl font-medium text-navy md:text-3xl">
              Field trips, exhibitions and study tours
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["01", "Field trips", "Age-graded educational excursions across Bengaluru"],
                ["02", "Guest lectures", "Workshops led by scientists, engineers and founders"],
                ["03", "Science exhibition", "Annual showcase of student models and research"],
                ["04", "Robotics contests", "Inter-school engineering and innovation competitions"],
                ["05", "Study tours", "Curated visits (ISRO, NASA, Singapore) announced in advance"],
              ].map(([num, title, sub]) => (
                <div key={num} className="rounded-xl border border-border bg-card p-5">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{num}</span>
                  <h3 className="mt-2 font-display text-lg font-medium text-navy">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "Notebook and pencil case on lab days",
          "Closed shoes for lab sessions",
          "Long hair tied back in labs",
          "Goggles and gloves provided when an experiment needs them",
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
