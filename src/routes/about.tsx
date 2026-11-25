import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bus, Cctv, Compass, HeartPulse, Leaf, Quote, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import { img } from "@/assets/site";
import gree from "@/assets/recognitions/gree.asset.json";
import cbse from "@/assets/recognitions/cbse.asset.json";
import microsoft from "@/assets/recognitions/microsoft.asset.json";
import fit from "@/assets/recognitions/fit-india.asset.json";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us - Our Story, Leadership & Why HKS", "Learn about HKS Vidyamandir: our story since 2010, vision, mission, Chairman and Principal messages, faculty, why families choose HKS, and school life in Kengeri, Bengaluru.", "/about"),
  component: About,
});

const glance = [["2010", "Learning since"], ["K-12", "Nursery to Grade 12"], ["CBSE", "Curriculum"], ["4 Vidyas", "Holistic model"]];

const timeline = [
  ["2010", "HKS Group of Institutions founded with an English-medium CBSE vision."],
  ["2014", "Expanded campus facilities, welcoming students from across Karnataka."],
  ["2018", "Middle & High School expansion with modern science and computer labs."],
  ["2022", "Senior Secondary (Grade 11-12) and integrated NEET/JEE foundation introduced."],
  ["2026", "Experiential learning centres and upgraded labs for a new decade."],
];

const founders = [
  { name: "Mrs. N. Komala Suresh", role: "Chairperson", org: "HKS Group of Institutions", image: img.leaderChairperson },
  { name: "Mr. H. K. Suresh", role: "General Secretary", org: "HKS Group of Institutions", image: img.leaderGeneralSecretary },
];

const managementMessage = [
  "Most of our first-generation learners need to be cared for by second-generation teachers, and those teachers should be guided by third-generation administrators. As the Indian Education Commission observes, of all the factors contributing to national development, the quality, competence and character of teachers are undoubtedly the most significant. Nothing is more important than securing a sufficient supply of high-quality recruits to the teaching profession, providing them with the best possible professional preparation, and creating state-of-the-art facilities. I am sure that the children under our care shall grow to their fullest.",
  "Serving the people of our land in every positive and productive way, our vision has been to provide a cosmopolitan environment where students truly enjoy learning. As a token of that dream, we have brought together a dedicated community of educators from Kindergarten through Senior Secondary and Pre-University, enriched with personality development activities and competitive examination preparation (SOF, JEE, NEET and CET), backed by modern, purpose-built facilities that continue to grow with our students' aspirations.",
];

const leaderProfiles = [
  {
    name: "Mr. H. S. Prashanth",
    role: "Secretary",
    org: "HKS Group of Institutions",
    heading: "Secretary's Message",
    image: img.leaderSecretary,
    paragraphs: [
      "At HKS, we believe that education is not just about knowledge, but about shaping the next generation of global leaders. Where academic excellence meets innovation, we create a nurturing and dynamic learning environment that encourages students to explore, question, and grow.",
      "Every student is empowered not only to excel academically but also to cultivate the values of empathy, responsibility, and resilience, which are key to thriving in today's fast-evolving global landscape.",
      "Our dedicated educators are at the heart of this mission, guiding students with passion and expertise, while our modern, well-equipped facilities create an ideal setting for exploration and growth. Our diverse community represents a wide range of cultures and backgrounds, offering a rich and vibrant atmosphere where students engage with new ideas, perspectives, and experiences.",
    ],
  },
  {
    name: "Dr. Gouri S. V.",
    role: "Principal",
    org: "HKS Group of Institutions",
    heading: "Principal's Message",
    image: img.leaderPrincipal,
    paragraphs: [
      "It is with great honour and excitement that I serve as Principal at our esteemed institution. As we embark on this journey together, I am filled with a sense of privilege to lead such a renowned school community towards new horizons of excellence.",
      "Affiliated with the CBSE, HKS has consistently set benchmarks in education, standing tall among the top-performing schools in Karnataka. We pride ourselves on incorporating best practices from across international curricula while delivering the CBSE curriculum with utmost effectiveness — built on our trinity of excellence: a dedicated team of educators, modern infrastructure, and a mission-driven approach focused on academic excellence, extracurricular development and character building.",
      "We believe in nurturing not just scholars, but well-rounded individuals equipped with the values and skills necessary to contribute positively to society. In today's rapidly evolving educational landscape, adaptability is key — our faculty members are continuously equipped with the tools and resources to embrace change and drive innovation in education.",
    ],
  },
];

const whyReasons = [
  { t: "Academic excellence with global standards", i: img.progCbse, pts: ["Strong foundation from early years", "Activity-based learning", "Practical understanding over rote memorisation", "Individual attention for every student"] },
  { t: "State-of-the-art infrastructure", i: img.infra1, pts: ["Smart classrooms", "Science, computer & robotics labs", "Library and reading spaces", "Spacious playgrounds and sports courts"] },
  { t: "Safe, caring campus", i: img.infra4, pts: ["CCTV-monitored, secure campus perimeter", "Medical and first-aid support on campus", "Convenient school bus transportation", "Regular parent communication"] },
  { t: "Future-ready skills", i: img.campus2, pts: ["Coding, AI and app development", "NEET/JEE foundation from Grade 6", "Public speaking and leadership", "Financial literacy and life skills"] },
];

const recognitions = [{ n: "GREE", s: gree.url }, { n: "CBSE", s: cbse.url }, { n: "Microsoft Showcase School", s: microsoft.url }, { n: "Fit India", s: fit.url }];

function About() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About HKS Vidyamandir" title="Strengthening your wings of success" intro="Since 2010, HKS Group of Institutions has given children in Karnataka a consistent, accessible and holistic CBSE education - from Nursery to Grade 12." image={img.building} />

      {/* At a glance */}
      <Section tone="cream">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {glance.map(([v, l]) => (
            <div key={l} className="rounded-3xl bg-card p-6 text-center shadow-soft"><dt className="font-display text-3xl font-semibold text-navy">{v}</dt><dd className="mt-1 text-sm font-semibold text-muted-foreground">{l}</dd></div>
          ))}
        </dl>
      </Section>

      {/* Our story */}
      <Section id="story">
        <Split image={img.building} alt="HKS Vidyamandir main building">
          <SectionHead eyebrow="Our story" title="A school built for its community" />
          <p className="mt-5 text-lg text-muted-foreground">Located on S.M. Krishna Rd near Sulikere in Kengeri, Bengaluru, HKS Vidyamandir ensures uninterrupted learning with easy city connectivity. Our curriculum supports growth from early learning to senior secondary, nurturing future-ready students who carry strong values wherever they go.</p>
          <p className="mt-4 text-muted-foreground">Our motto, <strong className="text-navy">"Strengthening Your Wings of Success"</strong>, is our promise: roots of discipline and knowledge, and wings of confidence and creativity.</p>
        </Split>
      </Section>

      {/* Vision & mission */}
      <Section tone="navy" id="vision">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-navy-foreground/15 p-8"><p className="text-sm font-bold uppercase tracking-widest text-gold">Vision</p><h2 className="mt-3 text-3xl font-semibold">Globally competent. Culturally rooted.</h2><p className="mt-3 text-navy-foreground/80">To be a centre of excellence that nurtures compassionate citizens who lead with integrity.</p></div>
          <div className="rounded-3xl border border-navy-foreground/15 p-8"><p className="text-sm font-bold uppercase tracking-widest text-gold">Mission</p><h2 className="mt-3 text-3xl font-semibold">Holistic learning for every child.</h2><p className="mt-3 text-navy-foreground/80">To deliver accessible, high-quality education through concept-based learning, modern facilities and individual care for every learner.</p></div>
        </div>
      </Section>

      {/* Growth pathway */}
      <Section id="philosophy">
        <SectionHead center eyebrow="From understanding to confident action" title="The Proposed HKS Growth Pathway" intro="Meaningful learning takes a child from first understanding to confident application. The proposed HKS Growth Pathway brings together teaching, exploration, expression and reflection." />
        <ol className="mt-10 grid gap-5 md:grid-cols-5">
          {[["Know the Learner", "Understand each child's starting point, interests, strengths and support needs."], ["Build the Foundations", "Make concepts clear through teaching, modelling, practice, reading, numeracy and feedback."], ["Explore Ideas", "Ask questions, investigate, discuss and connect ideas through age-appropriate inquiry."], ["Apply and Express", "Use learning through projects, demonstrations, presentations, performance and problem-solving."], ["Reflect and Grow", "Recognise progress, use feedback, set next steps and seek support when needed."]].map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-muted p-6"><span className="font-display text-3xl font-semibold text-flame">0{i + 1}</span><h3 className="mt-2 text-lg font-semibold text-navy">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>
          ))}
        </ol>
        <p className="mt-8 text-center font-display text-xl text-navy">Know the child. Build the foundations. Open up the world. Help the child reflect and grow.</p>
      </Section>

      {/* Learning model */}
      <Section tone="muted" id="model">
        <SectionHead center eyebrow="The HKS learning model" title="Four Vidyas. One holistic education." intro="Our signature programmes help students learn through nature, movement, experience and culture." />
        <div className="mt-10"><CardGrid cols={4} items={[
          { icon: <Leaf className="h-6 w-6" />, title: "Krishi Vidya", text: "Hands-on gardening and farming that build responsibility and respect for nature." },
          { icon: <Trophy className="h-6 w-6" />, title: "Khel Vidya", text: "Sport, fitness and play that develop teamwork, resilience and discipline." },
          { icon: <Compass className="h-6 w-6" />, title: "Anubhav Vidya", text: "Experiential projects that connect classroom concepts to real life." },
          { icon: <Sparkles className="h-6 w-6" />, title: "Samskriti Vidya", text: "Music, dance, art and celebrations that root children in culture." },
        ]} /></div>
      </Section>

      {/* HKS advantage */}
      <Section id="values">
        <SectionHead center eyebrow="The HKS advantage" title="Right choice for your child's education" />
        <div className="mt-10"><CardGrid cols={4} items={([["Personalized Attention", "Small Class Sizes"], ["Practical Skills", "Real-World Application"], ["Innovative Learning", "Modern Teaching Methods"], ["Global Exposure", "International Programs"], ["Holistic Development", "Beyond Academics"], ["Hands-On Learning", "Practical Experience"], ["Individual Support", "Tailored Guidance"], ["Modern Facilities", "State-of-the-Art Infrastructure"]] as const).map(([title, text]) => ({ title, text }))} /></div>
      </Section>

      {/* Beyond academics */}
      <Section tone="muted" id="activities">
        <Split image={img.welcome} alt="Students together at HKS Vidyamandir">
          <SectionHead eyebrow="One school. A world of possibility." title="A childhood full of wonder" />
          <div className="mt-6 space-y-5">
            {[[Trophy, "Sports and Fitness", "Cricket, football, basketball, badminton, athletics, table tennis, Yoga and More."], [Sparkles, "Arts and Culture", "Music, dance, visual arts, performances and cultural celebrations."], [Users, "Clubs and Leadership", "Public speaking, student clubs, house activities and competitions."]].map(([Icon, t, d]) => { const I = Icon as typeof Trophy; return <div key={t as string} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card text-primary"><I className="h-5 w-5" /></span><div><h3 className="font-semibold text-navy">{t as string}</h3><p className="text-sm text-muted-foreground">{d as string}</p></div></div>; })}
          </div>
        </Split>
      </Section>

      {/* Journey */}
      <Section tone="cream" id="journey">
        <SectionHead center eyebrow="Milestones" title="Our journey" />
        <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-5">
          {timeline.map(([y, t]) => (
            <li key={y} className="rounded-3xl border-t-4 border-flame bg-card p-5 shadow-soft"><p className="font-display text-2xl font-semibold text-navy">{y}</p><p className="mt-2 text-sm text-muted-foreground">{t}</p></li>
          ))}
        </ol>
      </Section>

      {/* Leadership */}
      <Section id="leadership">
        <SectionHead center eyebrow="Leadership Team" title="Education for a better tomorrow" intro="Meet the founders, management and principal guiding HKS Group of Institutions." />

        {/* Founders & Message by Management */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
            <div className="grid grid-cols-2 gap-4">
              {founders.map((f) => (
                <figure key={f.name} className="overflow-hidden rounded-2xl border border-border bg-muted/40 text-center">
                  <img src={f.image} alt={`${f.name}, ${f.role}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
                  <figcaption className="p-3.5">
                    <p className="font-display text-base font-semibold leading-snug text-navy">{f.name}</p>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-flame">{f.role}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{f.org}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div>
              <Quote className="h-9 w-9 text-gold" />
              <h3 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">Message by Management</h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                {managementMessage.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
              </div>
            </div>
          </div>
        </div>

        {/* Secretary & Principal Messages */}
        <div className="mt-8 space-y-8">
          {leaderProfiles.map((leader, idx) => (
            <article key={leader.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
              <div className={`grid gap-8 lg:items-start ${idx % 2 === 1 ? "lg:grid-cols-[1fr_minmax(0,260px)]" : "lg:grid-cols-[minmax(0,260px)_1fr]"}`}>
                <figure className={`mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-border bg-muted/40 text-center ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={leader.image} alt={`${leader.name}, ${leader.role}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
                  <figcaption className="p-4">
                    <p className="font-display text-lg font-semibold text-navy">{leader.name}</p>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-flame">{leader.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{leader.org}</p>
                  </figcaption>
                </figure>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <Quote className="h-9 w-9 text-gold" />
                  <h3 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">{leader.heading}</h3>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                    {leader.paragraphs.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CardGrid cols={4} items={[
          { title: "Qualified Teachers", text: "Subject specialists trained in CBSE pedagogy and child development." },
          { title: "Continuous Training", text: "Regular workshops on new methods, technology and assessment." },
          { title: "Mentorship", text: "Every student has a mentor tracking academic and personal growth." },
          { title: "Student Care & Safety", text: "Dedicated staff supporting student wellbeing and campus safety every day." },
        ]} />
      </Section>

      {/* Why HKS */}
      <Section tone="cream" id="why-hks">
        <SectionHead center eyebrow="Why choose us" title="Why HKS is recognised as the best school in Karnataka" intro="Education is not just about marks - it is about shaping confident, responsible and future-ready leaders." />
        <div className="mt-14 space-y-16">
          {whyReasons.map((r, i) => (
            <Split key={r.t} image={r.i} alt={r.t} reverse={i % 2 === 1}>
              <SectionHead eyebrow={`Reason ${i + 1}`} title={r.t} />
              <CheckList items={r.pts} />
            </Split>
          ))}
        </div>
      </Section>

      {/* Our offers */}
      <Section tone="muted" id="wellbeing">
        <Split image={img.campus4} alt="Students at HKS campus">
          <SectionHead eyebrow="Care beyond the classroom" title="Our Offers" />
          <div className="mt-6 space-y-5">
            {[[Bus, "Transportation", "School buses connect the city and nearby areas, making the daily journey to and from HKS convenient for students and families."], [Cctv, "CCTV", "CCTV monitoring supports campus safety, helping maintain a secure environment where students can learn, play and grow."], [ShieldCheck, "Security", "A secure campus perimeter and safety measures help create a protected environment for students throughout the school day."], [HeartPulse, "Medical & First Aid", "Medical and first-aid support helps address minor injuries and everyday health concerns, keeping student wellbeing at the heart of school life."]].map(([Icon, t, d]) => { const I = Icon as typeof HeartPulse; return <div key={t as string} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card text-primary"><I className="h-5 w-5" /></span><div><h3 className="font-semibold text-navy">{t as string}</h3><p className="text-sm text-muted-foreground">{d as string}</p></div></div>; })}
          </div>
        </Split>
      </Section>

      {/* Recognitions */}
      <Section id="recognitions">
        <SectionHead center eyebrow="Affiliations & recognitions" title="Recognised for quality learning" />
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 items-center gap-8 md:grid-cols-4">
          {recognitions.map(r => <li key={r.n} className="flex justify-center"><img src={r.s} alt={`${r.n} logo`} loading="lazy" className="h-20 w-auto object-contain" /></li>)}
        </ul>
      </Section>

      {/* Parent voices */}
      <Section tone="cream" id="parents">
        <SectionHead center eyebrow="Our parent stories" title="What parents say" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[["There was a consistent focus on discipline, and academic performance. Teachers explain concepts clearly and give personal attention. I was seeing a good balance of academics and co-curricular activities, opportunities for sports, cultural programmes and competitions that help build confidence and communication skills.", "Mr. Kariappa", "Parent of Lakshitha"], ["Teachers always go that extra mile to bring out the best in every child under the valuable guidance of their principal. The curriculum gives equal importance to both mental and physical health. The teachers emphasise creativity right from the nursery level and work on the best talent of each child.", "Dr Maimoona Arshi", "Parent of Abdul Majeeb"]].map(([q, n, r]) => (
            <figure key={n} className="rounded-3xl bg-card p-8 shadow-soft"><blockquote className="text-muted-foreground">"{q}"</blockquote><figcaption className="mt-4 font-semibold text-navy">{n} <span className="font-normal text-muted-foreground">- {r}</span></figcaption></figure>
          ))}
        </div>
      </Section>

      {/* Explore */}
      <Section>
        <SectionHead center eyebrow="Explore further" title="Discover more about HKS" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {([["/academics", "Academics", "Our CBSE curriculum, stage by stage."], ["/campus-life", "Campus Life", "Clubs, sports, labs and student growth."], ["/campus", "Our campus", "Classrooms, labs, library and playgrounds."]] as const).map(([to, t, d]) => (
            <Link key={to} to={to} className="group rounded-3xl bg-navy p-8 text-navy-foreground"><BookOpen className="h-6 w-6 text-gold" /><h3 className="mt-3 text-2xl font-semibold">{t}</h3><p className="mt-2 text-navy-foreground/75">{d}</p><span className="mt-4 inline-flex items-center gap-1 font-bold text-gold">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
          ))}
        </div>
      </Section>

      <CtaBand text="Admissions are open for 2027-28, from Nursery to Grade 12. Visit our campus or speak to our admissions team today." />
    </>
  );
}
