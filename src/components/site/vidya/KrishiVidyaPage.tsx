import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import krishi1 from "@/assets/vidya-krishi-1.jpg";
import krishi2 from "@/assets/vidya-krishi-2.jpg";
import krishi3 from "@/assets/vidya-krishi-3.jpg";
import krishi4 from "@/assets/vidya-krishi-4.jpg";
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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SEASONS = [
  {
    id: "kharif",
    name: "Kharif",
    sub: "Monsoon season",
    months: [5, 6, 7, 8, 9],
    fill: "var(--teal)",
    crops: ["Ragi", "Beans", "Tomato", "Brinjal", "Marigold", "Chillies"],
    text: "The monsoon fills our rain gauges and the beds. Children sow hardy native crops, track rainfall and learn how water moves through soil.",
  },
  {
    id: "rabi",
    name: "Rabi",
    sub: "Cool season",
    months: [10, 11, 0, 1],
    fill: "var(--navy)",
    crops: ["Spinach", "Methi", "Coriander", "Carrot", "Radish", "Peas"],
    text: "Cool, dry days are ideal for leafy greens and root vegetables. It is our busiest harvest season, and children often take produce home to share.",
  },
  {
    id: "zaid",
    name: "Zaid",
    sub: "Summer season",
    months: [2, 3, 4],
    fill: "var(--cta)",
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
    image: krishi1,
    caption: "Preparing raised beds and sowing native seedlings",
  },
  {
    num: "02",
    tag: "Sprout",
    title: "The first green",
    text: "Germination journals begin. Children sketch, measure and date every seedling, learning to observe closely and record honestly.",
    image: krishi3,
    caption: "Observing young plants and logging weekly growth",
  },
  {
    num: "03",
    tag: "Tend",
    title: "Water, mulch, repeat",
    text: "Daily rotas teach responsibility: natural mulching, companion planting and mindful watering, with rainwater awareness during monsoon weeks.",
    image: krishi4,
    caption: "Mulching and returning leaf compost to garden beds",
  },
  {
    num: "04",
    tag: "Bloom",
    title: "Pollinators arrive",
    text: "Flowers bring bees and butterflies. Lessons move to living biology: pollination, food chains and why biodiversity matters on a city campus.",
    image: krishi3,
    caption: "Biodiversity observation in the outdoor learning zone",
  },
  {
    num: "05",
    tag: "Harvest",
    title: "From bed to table",
    text: "Children measure yield, share produce and record growth logs. Then the leftover stems go to the compost pit, and the cycle begins again.",
    image: krishi2,
    caption: "Seasonal vegetable harvest with educators",
  },
] as const;

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

  useEffect(() => {
    const d = new Date();
    const m = d.getMonth();
    setNowMonth(m);
    setNowYear(d.getFullYear());
    const idx = SEASONS.findIndex((s) => (s.months as readonly number[]).includes(m));
    if (idx >= 0) setSeasonIdx(idx);
  }, []);

  const activeSeason = SEASONS[seasonIdx] ?? SEASONS[0];
  const wheelAngle = -(activeSeason.months[0] + activeSeason.months.length / 2) * 30;
  const monthArcStep = (Math.PI * 2) / 12;
  const currentSeed = SEED_STAGES[seedStage] ?? SEED_STAGES[0];

  return (
    <div className="vk-page" data-track="krishi">
      {/* 1. ASYMMETRIC DOCUMENTARY HERO */}
      <section className="border-b border-border bg-background pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-navy">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Krishi Vidya</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-mono tabular-nums text-navy">01 of 04</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Farming, horticulture and ecological care</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy md:text-6xl">
                Nature becomes the classroom
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                At HKS Vidyamandir, organic farming, horticulture, composting and environmental
                science are part of the weekly timetable, giving children direct contact with soil,
                seasons and sustainable living.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button asChild className="h-11 rounded-lg px-6 text-sm font-medium">
                  <Link to="/admissions" hash="enquire">
                    Schedule a campus visit
                    <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Button>
                <a
                  href="#seasons"
                  className="inline-flex items-center gap-2 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  See what&apos;s growing now
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={krishi2}
                  alt="Students harvesting seasonal vegetables in the HKS organic campus garden"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Students harvesting seasonal greens in the campus garden</span>
                <span className="shrink-0 font-mono tabular-nums">Plate 01</span>
              </figcaption>
            </figure>
          </div>

          <div className="vk-stats">
            <div>
              <b>K–12</b>
              <span>All grade levels</span>
              <small>Age-graded outdoor beds</small>
            </div>
            <div>
              <b>4</b>
              <span>Learning tracks</span>
              <small>Farming, ecology, soil and care</small>
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

      <VidyaTrackNav active="krishi" />
      <VidyaGlance name="Krishi Vidya" items={GLANCE} />

      {/* 2. EDITORIAL MANIFESTO */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="vk-kicker">Why Krishi Vidya</p>
            <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-[-0.015em] text-navy md:text-4xl">
              Children who grow their own food think differently about the world
            </h2>
            <blockquote className="mt-6 border-l-2 border-navy pl-5 font-display text-xl font-medium leading-snug text-navy">
              “A seed teaches patience no worksheet can replicate: you prepare the soil, tend it
              daily, and learn to work with the rhythm of the seasons.”
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

      {/* 3. INTERACTIVE BENGALURU SEASON WHEEL (Data Moment) */}
      <section className="vk-band border-y border-border bg-card" id="seasons">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">The growing calendar</p>
              <h2>Three seasons, one living timetable</h2>
            </div>
            <p className="vk-lede">
              Bengaluru&apos;s climate lets our beds work all year. Select a season to rotate the
              calendar and see what children sow, tend and harvest.
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
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "12px solid var(--navy)",
                }}
              />
              <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden="true">
                <g
                  style={{
                    transformOrigin: "250px 250px",
                    transform: `rotate(${wheelAngle}deg)`,
                    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
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
                        opacity={si === seasonIdx ? 0.95 : 0.2}
                        className="cursor-pointer transition-opacity duration-200"
                        onClick={() => setSeasonIdx(si)}
                      />
                    )),
                  )}
                  {MONTHS.map((m, i) => {
                    const [x, y] = polar(250, 250, 194, (i + 0.5) * monthArcStep);
                    const deg = (i + 0.5) * 30 + (i >= 3 && i < 9 ? 180 : 0);
                    return (
                      <text
                        key={m}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${deg} ${x} ${y})`}
                        className="pointer-events-none fill-white text-[12px] font-medium"
                      >
                        {m}
                      </text>
                    );
                  })}
                </g>
              </svg>
              <div className="absolute inset-[33%] grid place-items-center rounded-full border border-border bg-card p-3 text-center">
                <div>
                  <small className="block font-mono text-[11px] text-muted-foreground">Today</small>
                  <b className="mt-0.5 block font-display text-xl font-medium tabular-nums text-navy">
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

              <div className="mt-6" role="tabpanel" aria-live="polite">
                <p className="font-mono text-xs tabular-nums text-muted-foreground">
                  {seasonIdx === currentSeasonIdx
                    ? `In season now · ${activeSeason.months.map((m) => MONTHS[m]).join(", ")}`
                    : `Months · ${activeSeason.months.map((m) => MONTHS[m]).join(", ")}`}
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium text-navy">
                  {activeSeason.name}: {activeSeason.sub.toLowerCase()}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {activeSeason.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeSeason.crops.map((crop) => (
                    <span
                      key={crop}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-navy"
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

      {/* 4. SEED-TO-HARVEST DOCUMENTARY LEDGER */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Seed-to-harvest cycle</p>
              <h2>Follow one seed through a season</h2>
            </div>
            <p className="vk-lede">
              Select any stage to inspect the corresponding campus photograph and learning step.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <figure className="lg:sticky lg:top-36 lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={currentSeed.image}
                  alt={currentSeed.caption}
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>{currentSeed.caption}</span>
                <span className="shrink-0 font-mono tabular-nums">Stage {currentSeed.num}</span>
              </figcaption>
            </figure>

            <ol className="divide-y divide-border border-y border-border lg:col-span-7">
              {SEED_STAGES.map((st, i) => {
                const isOn = seedStage === i;
                return (
                  <li key={st.num}>
                    <button
                      type="button"
                      aria-expanded={isOn}
                      onClick={() => setSeedStage(i)}
                      className={`relative block w-full py-5 pl-5 pr-2 text-left transition-colors ${
                        isOn ? "bg-card" : "hover:bg-card/60"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-y-0 left-0 w-0.5 ${
                          isOn ? "bg-navy" : "bg-transparent"
                        }`}
                      />
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs tabular-nums text-muted-foreground">
                          {st.num}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">{st.tag}</p>
                          <h3 className="mt-0.5 font-display text-xl font-medium text-navy">
                            {st.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">{st.text}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. FOUR PLOTS + COMPOST LOOP */}
      <section className="vk-band border-t border-border bg-card">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">What children do</p>
              <h2>Four strands of campus ecology</h2>
            </div>
            <p className="vk-lede">
              Each strand of Krishi Vidya builds a practical habit of hand, observation and care.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                num: "01",
                tag: "Life skills education",
                title: "Organic farming & horticulture",
                text: "Students prepare raised beds, sow native seeds, follow watering rotas and harvest seasonal greens and herbs without synthetic chemicals.",
                points: ["Soil texture, moisture and aeration", "Bengaluru seasonal herbs and vegetables", "Mulching and companion planting", "Yield logs and tasting sessions"],
              },
              {
                num: "02",
                tag: "Experiential zone",
                title: "Environmental & sustainability zone",
                text: "Outdoor zones connect classroom biology and geography with living pollinators, rainwater awareness and campus biodiversity.",
                points: ["Environmental Science Lab tests", "Drip irrigation and rainwater tracking", "Pollinator garden observation", "Low-waste classroom habits"],
              },
              {
                num: "03",
                tag: "Circular ecology",
                title: "Composting & living soil",
                text: "Fallen leaves and garden trimmings return to aerobic and vermicompost pits, showing children how natural cycles waste nothing.",
                points: ["Leaf-litter collection drives", "Green and brown pit layering", "Moisture, warmth and pH checks", "Returning finished compost to beds"],
              },
              {
                num: "04",
                tag: "Compassion & community",
                title: "Environmental Club, Pet Day & service",
                text: "Respect for plants widens into empathy for animals and neighbourhood care through Pet Day and student-led sapling drives.",
                points: ["Annual Pet Day on the front lawn", "Gentle animal-care workshops", "Street-animal kindness pledges", "Neighbourhood sapling drives"],
              },
            ].map((plot) => (
              <article
                key={plot.num}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs font-medium text-muted-foreground">{plot.tag}</span>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {plot.num}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-medium text-navy">{plot.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{plot.text}</p>
                <ul className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                  {plot.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy" strokeWidth={1.5} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VidyaGradeFinder name="Krishi Vidya" grades={GRADES} />

      <VidyaTagline
        text="A child who has grown one plant from seed understands patience, care and where food really comes from."
        note="That is the whole idea behind Krishi Vidya, starting in Nursery."
      />

      {/* 6. PET DAY DOCUMENTARY SPREAD */}
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
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {[
                ["01", "Meet and greet", "Children ask the owner first, offer a hand slowly and read an animal's body language."],
                ["02", "Care corner", "Owners and teachers demonstrate feeding, grooming, fresh water and quiet rest."],
                ["03", "Kindness pledge", "Each class writes a pledge for the street animals and birds around campus."],
              ].map(([n, title, desc]) => (
                <li key={n} className="grid grid-cols-[32px_1fr] gap-3 py-4">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{n}</span>
                  <div>
                    <h3 className="text-sm font-medium text-navy">{title}</h3>
                    <p className="mt-1 text-sm text-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-muted-foreground">
              Pets stay on a lead with their owners at all times. Children with allergies or fears
              join from the art and story corner.
            </p>
          </div>

          <figure className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={krishi3}
                alt="Students tending plants and learning outdoor care with an educator"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
              <span>Guided outdoor care and empathy sessions on campus</span>
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
