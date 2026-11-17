import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bus, Cctv, Compass, HeartPulse, Leaf, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import { img } from "@/assets/site";
import gree from "@/assets/recognitions/gree.asset.json";
import cbse from "@/assets/recognitions/cbse.asset.json";
import microsoft from "@/assets/recognitions/microsoft.asset.json";
import fit from "@/assets/recognitions/fit-india.asset.json";
import { seo } from "@/lib/seo";
import { CardGrid, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us - Our Story, Vision & Values", "Learn about HKS Vidyamandir: our story since 2010, vision, mission, philosophy, learning model, leadership, wellbeing, recognitions and school life in Kenchattahalli.", "/about"),
  component: About,
});

const glance = [["2010", "Learning since"], ["N-12", "Nursery to Grade 12"], ["CBSE", "Curriculum"], ["Day + Residential", "Learning options"]];

const timeline = [
  ["2010", "HKS Vidyamandir founded in Kenchattahalli with an English-medium CBSE vision."],
  ["2014", "Residential programme launched, welcoming students from across Karnataka."],
  ["2018", "Middle & High School expansion with modern science and computer labs."],
  ["2022", "Senior Secondary (Grade 11-12) and integrated NEET/JEE foundation introduced."],
  ["2026", "Experiential learning centres and flexi-boarding for a new decade."],
];

const recognitions = [{ n: "GREE", s: gree.url }, { n: "CBSE", s: cbse.url }, { n: "Microsoft Showcase School", s: microsoft.url }, { n: "Fit India", s: fit.url }];

function About() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About HKS Vidyamandir" title="Strengthening your wings of success" intro="Since 2010, HKS Group of Institutions has given children in Karnataka a consistent, accessible and holistic CBSE education - from Nursery to Grade 12." image={img.acad1} />

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
        <Split image={img.acad4} alt="HKS Vidyamandir academic block">
          <SectionHead eyebrow="Our story" title="A school built for its community" />
          <p className="mt-5 text-lg text-muted-foreground">Located on the Bengaluru-Mangaluru highway at Kenchattahalli, HKS ensures uninterrupted learning with all-weather accessibility. Our curriculum supports growth from early learning to senior secondary, nurturing future-ready students who carry strong values wherever they go.</p>
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
        <SectionHead center eyebrow="Leadership" title="Guided by people who care" intro="Our management, principal and educators work together to keep every child known, supported and challenged." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {[["Management", "Sets the vision and long-term direction of HKS Group of Institutions."], ["Principal's desk", "Leads academics, culture and day-to-day school life."], ["Our educators", "Qualified, caring teachers trained in activity-based learning."]].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-muted p-6"><Users className="h-6 w-6 text-primary" /><h3 className="mt-3 text-xl font-semibold text-navy">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/leadership" className="site-cta inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold">Read leadership messages <ArrowRight className="h-4 w-4" /></Link></div>
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
          {([["/why-hks", "Why choose HKS?", "What makes our school different."], ["/academics", "Academics", "Our CBSE curriculum, stage by stage."], ["/campus", "Our campus", "Classrooms, labs, grounds and boarding."]] as const).map(([to, t, d]) => (
            <Link key={to} to={to} className="group rounded-3xl bg-navy p-8 text-navy-foreground"><BookOpen className="h-6 w-6 text-gold" /><h3 className="mt-3 text-2xl font-semibold">{t}</h3><p className="mt-2 text-navy-foreground/75">{d}</p><span className="mt-4 inline-flex items-center gap-1 font-bold text-gold">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
          ))}
        </div>
      </Section>

      <CtaBand text="Admissions are open for 2027-28, from Nursery to Grade 12. Visit our campus or speak to our admissions team today." />
    </>
  );
}
