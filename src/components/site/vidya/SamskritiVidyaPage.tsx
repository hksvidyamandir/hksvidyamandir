import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Camera,
  Drama,
  Music,
  Palette,
  PenLine,
  Users,
} from "lucide-react";
import samskruti1 from "@/assets/vidya-samskruti-1.jpg";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import samskruti3 from "@/assets/vidya-samskruti-3.jpg";
import samskruti4 from "@/assets/vidya-samskruti-4.jpg";
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

const WELCOME_WORDS = [
  { text: "Welcome", label: "English", lang: "en" },
  { text: "स्वागत है", label: "हिन्दी", lang: "hi" },
  { text: "ಸುಸ್ವಾಗತ", label: "ಕನ್ನಡ", lang: "kn" },
] as const;

const FESTIVAL_MONTHS = [
  { month: "January", season: "Winter", items: [["Makara Sankranti", "Harvest festival: ellu-bella and kite making"], ["Republic Day", "Flag hoisting and cultural programme"]] },
  { month: "February", season: "Winter", items: [["Science & reading week", "Heritage science stories and book fair"]] },
  { month: "March", season: "Summer", items: [["Ugadi", "Kannada New Year: bevu-bella and new beginnings*"], ["Holi", "Colours, songs and spring*"], ["Eid al-Fitr", "Sharing, kindness and community*"]] },
  { month: "April", season: "Summer", items: [["Ambedkar Jayanti", "The Constitution, equality and justice"]] },
  { month: "May", season: "Summer", items: [["Summer camp", "Art, music and dance holiday camp"]] },
  { month: "June", season: "Monsoon", items: [["International Yoga Day", "Whole-school yoga with Khel Vidya"]] },
  { month: "July", season: "Monsoon", items: [["Guru Purnima", "Honouring teachers and mentors*"]] },
  { month: "August", season: "Monsoon", items: [["Independence Day", "Patriotic songs, dance and drama"], ["Raksha Bandhan", "Friendship and care"]] },
  { month: "September", season: "Monsoon", items: [["Ganesh Chaturthi", "Clay eco-Ganesha workshop*"], ["Teachers' Day", "Students lead the classes"]] },
  { month: "October", season: "Festive season", items: [["Dasara", "Gombe habba doll display and Mysuru heritage*"], ["Gandhi Jayanti", "Service and cleanliness drive"]] },
  { month: "November", season: "Festive season", items: [["Kannada Rajyotsava", "Celebrating Karnataka on 1 November"], ["Deepavali", "Diyas, rangoli and a green celebration*"], ["Children's Day", "Teachers perform for students"]] },
  { month: "December", season: "Festive season", items: [["Christmas", "Carols and a season of giving"], ["Annual Day", "Our biggest stage of the year"]] },
] as const;

const ART_FORMS = [
  { title: "Music", desc: "Vocal and instruments, Indian classical and western.", Icon: Music },
  { title: "Dance", desc: "Classical and contemporary dance for expression and rhythm.", Icon: Users },
  { title: "Theatre & drama", desc: "Acting, plays and expression, from class skits to Annual Day.", Icon: Drama },
  { title: "Art & craft", desc: "Drawing, painting and traditional Indian craft forms.", Icon: Palette },
  { title: "Creative writing & reading", desc: "Stories, poems and book circles in the Literary Club.", Icon: PenLine },
  { title: "Photography & film", desc: "Photos, video and short films by the Photography & Film Club.", Icon: Camera },
] as const;

const KARNATAKA_CRAFTS = [
  { title: "Channapatna toys", region: "Ramanagara", desc: "Lacquered wooden craft from the toy town near Bengaluru." },
  { title: "Mysuru painting", region: "Mysuru", desc: "Traditional gold-leaf painting from the royal courts of Mysuru." },
  { title: "Kasuti embroidery", region: "North Karnataka", desc: "Counted-thread hand embroidery rooted in folk geometry." },
  { title: "Bidriware", region: "Bidar", desc: "Silver inlay work on dark alloy, a centuries-old craft of Bidar." },
  { title: "Yakshagana", region: "Coastal Karnataka", desc: "Karnataka's dance-drama uniting costume, live percussion and story." },
] as const;

const ANNUAL_ACTS = [
  { num: "01", tag: "Act 1 · Term 1", title: "Every child auditions", text: "Nobody is left in the wings. Teachers find a role for every child — singing, dancing, acting, narrating or backstage.", image: samskruti1, caption: "Student voice and audition workshops" },
  { num: "02", tag: "Act 2", title: "Rehearsals begin", text: "Weekly rehearsals build teamwork, memory and discipline. Older students help direct and choreograph younger groups.", image: samskruti3, caption: "Music and dance rehearsals with faculty" },
  { num: "03", tag: "Act 3", title: "Sets, costumes and music", text: "The art and craft clubs design sets and props, and the music group rehearses live accompaniment.", image: samskruti2, caption: "Traditional rangoli, decor and stage preparation" },
  { num: "04", tag: "Act 4", title: "Dress rehearsal", text: "A full run-through on the real stage, with lights and sound, for an audience of younger students.", image: samskruti4, caption: "Student stage teams coordinating cues and schedules" },
  { num: "05", tag: "Act 5 · Curtain up", title: "Annual Day", text: "Families fill the hall to celebrate a year of student talent, and every child takes a bow.", image: samskruti3, caption: "Annual Day performance showcase" },
] as const;

const GLANCE: GlanceItem[] = [
  { icon: "users", label: "Who takes part", value: "Every child, Nursery to Grade 12" },
  { icon: "clock", label: "When", value: "Weekly music, art & language periods, plus clubs" },
  { icon: "pin", label: "Where", value: "Creative Arts Studio, Heritage zone & school stage" },
  { icon: "teacher", label: "Led by", value: "Music, dance, art and language teachers" },
  { icon: "wallet", label: "Fees", value: "Part of the school programme" },
  { icon: "bag", label: "Your child brings", value: "An art apron; costume details shared in advance" },
];

const GRADES: GradeBandContent[] = [
  {
    focus: "Rhythm, colour and stories",
    doItems: [
      "Rhymes and action songs",
      "Finger painting, clay and simple crafts",
      "Movement and dance to music",
      "Festival stories and dress-up days",
    ],
    often: "Music, movement and art through the week, woven into class themes.",
    home: "Songs you'll hear all week, and new art for every wall.",
  },
  {
    focus: "Finding a voice",
    doItems: [
      "Vocal basics or a first instrument",
      "Class plays and storytelling",
      "Drawing, painting and traditional crafts",
      "Recitation in English, Hindi and Kannada",
    ],
    often: "Weekly music, dance and art periods.",
    home: "Performances in the living room and more confidence in front of people.",
  },
  {
    focus: "Practice and performance",
    doItems: [
      "Clubs in music, dance, theatre, art, writing or photography",
      "Heritage projects on Karnataka's crafts and history",
      "Festival assemblies and celebrations",
      "Creative writing and book discussions",
    ],
    often: "Weekly arts periods plus club time.",
    home: "Stronger opinions about books and music, and a rehearsal timetable on the fridge.",
  },
  {
    focus: "Leading on stage and behind it",
    doItems: [
      "Lead roles, choreography and stage management",
      "Art-integrated projects for CBSE",
      "Inter-school cultural competitions",
      "School magazine and film club work",
    ],
    often: "Club time, plus rehearsal blocks before events.",
    home: "Better time management between rehearsals and studies.",
  },
  {
    focus: "Creative leadership",
    doItems: [
      "Directing and mentoring younger performers",
      "Portfolio work for design and arts careers",
      "Organising cultural festivals",
      "Community arts and service projects",
    ],
    often: "Flexible club time planned around board exams.",
    home: "A young person who can plan an event and lead a team.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Which languages does my child learn?",
    a: "English, Hindi and Kannada, in line with CBSE and state guidance. Extra spoken-language practice is available through Spoken English and language clubs.",
  },
  {
    q: "Are festivals of all faiths celebrated?",
    a: "Yes. Festivals are celebrated as shared cultural learning, with stories, crafts and food from across India's regions and faiths.",
  },
  {
    q: "Do we need to buy costumes for Annual Day?",
    a: "The school shares costume details well in advance and keeps them simple. Many props and sets are made by the art and craft clubs.",
  },
  {
    q: "Are music and dance classes available after school?",
    a: "Vocal, instrument, classical and contemporary dance classes are offered as optional after-school batches with timings shared each term.",
  },
  {
    q: "Is taking part in religious festivals compulsory?",
    a: "No. Festivals are celebrated as shared culture through stories, crafts, music and food. Families can choose to have their child sit out any activity.",
  },
  {
    q: "My child is shy. Will they be pushed on stage?",
    a: "Never pushed. Shy children often start with group songs, backstage roles or narration, and grow at their own pace.",
  },
  {
    q: "We are new to Karnataka. How will my child manage Kannada?",
    a: "Kannada is taught from beginner level, with extra support for children who are new to the language.",
  },
  {
    q: "Are photos and videos of performances shared?",
    a: "Only with parent consent, and only on the school's own channels. You can opt out of photography at any time.",
  },
];

export function SamskritiVidyaPage() {
  const [welcomeIdx, setWelcomeIdx] = useState(0);
  const [actStage, setActStage] = useState(0);
  const [nowMonth, setNowMonth] = useState(-1);
  const monthsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNowMonth(new Date().getMonth());
  }, []);

  const scrollMonths = (dir: number) => {
    monthsRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const activeWord = WELCOME_WORDS[welcomeIdx] ?? WELCOME_WORDS[0];
  const activeAct = ANNUAL_ACTS[actStage] ?? ANNUAL_ACTS[0];

  return (
    <div className="vk-page" data-track="samskriti">
      {/* 1. ASYMMETRIC DOCUMENTARY HERO */}
      <section className="border-b border-border bg-background pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/campus-life" className="transition-colors hover:text-navy">Co-Curricular</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Samskriti Vidya</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-mono tabular-nums text-navy">04 of 04</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Culture, performing arts, languages and heritage</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-navy md:text-6xl">
                Roots that give children wings
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                Music, dance, theatre, visual art, three languages and shared festivals. Samskriti
                Vidya helps children understand where they come from, find their voice and share it
                confidently on any stage.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button asChild className="h-11 rounded-lg px-6 text-sm font-medium">
                  <Link to="/admissions" hash="enquire">
                    Schedule a campus visit
                    <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Button>
                <a
                  href="#year"
                  className="inline-flex items-center gap-2 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  See the festival year
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={samskruti2}
                  alt="Students celebrating campus festivals with traditional flower rangoli"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>Students creating flower rangoli during campus festival celebrations</span>
                <span className="shrink-0 font-mono tabular-nums">Plate 01</span>
              </figcaption>
            </figure>
          </div>

          <div className="vk-stats">
            <div>
              <b>3</b>
              <span>Languages</span>
              <small>English, Hindi and Kannada</small>
            </div>
            <div>
              <b>6</b>
              <span>Art forms</span>
              <small>Music, dance, theatre, art, writing, film</small>
            </div>
            <div>
              <b>Year-round</b>
              <span>Festivals</span>
              <small>Celebrated together on campus</small>
            </div>
            <div>
              <b>Annual Day</b>
              <span>Main stage</span>
              <small>Every child, every year</small>
            </div>
          </div>
        </div>
      </section>

      <VidyaTrackNav active="samskriti" />
      <VidyaGlance name="Samskriti Vidya" items={GLANCE} />

      {/* 2. THREE-LANGUAGE EDITORIAL BAND */}
      <section className="border-b border-border bg-cream py-14 md:py-20" aria-label="Welcome in three languages">
        <div className="container-site grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-muted-foreground">Trilingual fluency</p>
            <p
              lang={activeWord.lang}
              className="mt-3 font-display text-5xl font-medium leading-tight text-navy md:text-6xl"
            >
              {activeWord.text}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {WELCOME_WORDS.map((w, i) => (
                <button
                  key={w.lang}
                  type="button"
                  onClick={() => setWelcomeIdx(i)}
                  className={`rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    welcomeIdx === i
                      ? "border-navy bg-navy text-card"
                      : "border-border bg-card text-navy hover:border-navy/50"
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-base leading-relaxed text-foreground md:text-lg lg:col-span-7">
            Children grow up confident in three languages: English for the world, Hindi for the
            nation and Kannada for the place they call home. Spoken-language practice, recitation
            and storytelling run through every grade.
          </p>
        </div>
      </section>

      {/* 3. 12-MONTH FESTIVAL CALENDAR */}
      <section className="vk-band vk-ground-paper" id="year">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="vk-kicker">The festival year</p>
              <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
                Twelve months, many celebrations
              </h2>
              <p className="mt-2 max-w-xl text-sm text-foreground">
                Festivals are lessons in history, science, food, art and togetherness across faiths
                and regions.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous months"
                onClick={() => scrollMonths(-1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next months"
                onClick={() => scrollMonths(1)}
                className="h-9 w-9 rounded-lg bg-card"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div ref={monthsRef} className="vk-hs" aria-label="Festival calendar">
            {FESTIVAL_MONTHS.map((m, i) => {
              const isNow = i === nowMonth;
              return (
                <article
                  key={m.month}
                  className={`flex min-h-[240px] flex-col rounded-xl border p-5 ${
                    isNow
                      ? "border-navy bg-navy text-card"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <small className={`text-xs ${isNow ? "text-gold" : "text-muted-foreground"}`}>
                      {m.season}
                    </small>
                    {isNow && <span className="font-mono text-[11px] text-gold">This month</span>}
                  </div>
                  <h3
                    className={`mt-1 font-display text-2xl font-medium ${
                      isNow ? "text-card" : "text-navy"
                    }`}
                  >
                    {m.month}
                  </h3>
                  <ul className="mt-4 space-y-3 border-t border-current/15 pt-4">
                    {m.items.map(([title, desc]) => (
                      <li key={title} className="text-sm">
                        <b className={`block font-medium ${isNow ? "text-card" : "text-navy"}`}>
                          {title}
                        </b>
                        <span
                          className={`block text-xs ${
                            isNow ? "text-card/80" : "text-muted-foreground"
                          }`}
                        >
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            * Lunar-calendar festivals shift dates each year. Exact dates are published in the annual
            school calendar.
          </p>
        </div>
      </section>

      <VidyaGradeFinder name="Samskriti Vidya" grades={GRADES} />

      {/* 4. PERFORMING & VISUAL ARTS + KARNATAKA CRAFTS */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Performing &amp; visual arts</p>
              <h2>Six art forms, one welcoming stage</h2>
            </div>
            <p className="vk-lede">
              Every child tries music, dance, theatre, visual art, creative writing and media across
              their school years.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ART_FORMS.map(({ title, desc, Icon }) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-medium text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-14">
            <div className="vk-head">
              <div>
                <p className="vk-kicker">Heritage &amp; Cultural Learning Zone</p>
                <h2>The crafts of Karnataka, in children&apos;s hands</h2>
              </div>
              <p className="vk-lede">
                Living craft traditions brought into the classroom through artefacts, stories and
                hands-on workshops.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {KARNATAKA_CRAFTS.map((craft, i) => (
                <article key={craft.title} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="text-xs text-muted-foreground">{craft.region}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium text-navy">{craft.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground">{craft.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VidyaTagline
        text="A child who has stood on a stage and heard the applause walks into every room a little braver."
        note="That is why every child has a part to play at Annual Day."
      />

      {/* 5. ANNUAL DAY 5-ACT DOCUMENTARY LEDGER */}
      <section className="vk-band vk-ground-paper">
        <div className="container-site">
          <div className="vk-head">
            <div>
              <p className="vk-kicker">Annual Day</p>
              <h2>From first audition to curtain call</h2>
            </div>
            <p className="vk-lede">
              Select any act to see how our annual production comes together across the school year.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <figure className="lg:sticky lg:top-36 lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={activeAct.image}
                  alt={activeAct.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span>{activeAct.caption}</span>
                <span className="shrink-0 font-mono tabular-nums">{activeAct.tag}</span>
              </figcaption>
            </figure>

            <ol className="divide-y divide-border border-y border-border lg:col-span-7">
              {ANNUAL_ACTS.map((act, i) => {
                const isOn = actStage === i;
                return (
                  <li key={act.num}>
                    <button
                      type="button"
                      aria-expanded={isOn}
                      onClick={() => setActStage(i)}
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
                          {act.num}
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">{act.tag}</p>
                          <h3 className="mt-0.5 font-display text-xl font-medium text-navy">
                            {act.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">{act.text}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Beyond the timetable */}
          <div className="mt-14 grid gap-5 border-t border-border pt-14 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-medium text-muted-foreground">Optional batches</p>
              <h3 className="mt-1 font-display text-2xl font-medium text-navy">
                After-school arts and language classes
              </h3>
              <p className="mt-2 text-sm text-foreground">
                Small batches for children who want extra practice in vocal music, instruments,
                classical or contemporary dance, Spoken English, Hindi, Kannada or weekend art.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-medium text-muted-foreground">Values in action</p>
              <h3 className="mt-1 font-display text-2xl font-medium text-navy">
                Student Leadership Council &amp; service
              </h3>
              <p className="mt-2 text-sm text-foreground">
                Culture is also how we treat each other — through neighbourhood community service
                drives, the Student Leadership Council and the Reading &amp; Literary Club.
              </p>
            </article>
          </div>
        </div>
      </section>

      <VidyaEssentials
        kit={[
          "An art apron or old shirt on art days",
          "A labelled water bottle",
          "Costume details, shared well in advance",
          "Traditional wear on festival days, always optional",
          "Class instruments and art materials stay at school",
        ]}
        progress={[
          "Art portfolios and writing pieces sent home",
          "Performances at assemblies and Annual Day",
          "Remarks on creative and language skills in the report card",
          "Certificates for competitions and club work",
        ]}
        join={[
          "Watch Annual Day and festival celebrations",
          "Share a festival tradition or recipe in class",
          "Volunteer with costumes or sets",
          "Lead a craft or storytelling session from your culture",
        ]}
        safety={[
          "Teachers supervise every rehearsal",
          "Child-safe art materials",
          "Clear exits and trained staff for stage events",
          "No child is required to take part in religious rituals",
          "Water and rest breaks in long rehearsals",
          "Photos shared only with parent consent",
        ]}
      />

      <VidyaFaqSection
        name="Samskriti Vidya"
        intro="Languages, festivals, performances and what you may need to provide."
        faqs={FAQS}
      />

      <VidyaTail active="samskriti" />
    </div>
  );
}
