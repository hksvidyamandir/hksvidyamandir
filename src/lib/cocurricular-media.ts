import type { CoCurricularSection } from "@/lib/cocurricular-pages-data";
import khel1 from "@/assets/vidya-khel-1.jpg";
import khel2 from "@/assets/vidya-khel-2.jpg";
import khel3 from "@/assets/vidya-khel-3.jpg";
import khel4 from "@/assets/vidya-khel-4.jpg";
import khelYoga from "@/assets/khel-yoga.jpg";
import anubhav1 from "@/assets/vidya-anubhav-1.jpg";
import anubhav2 from "@/assets/vidya-anubhav-2.jpg";
import anubhav3 from "@/assets/vidya-anubhav-3.jpg";
import anubhav4 from "@/assets/vidya-anubhav-4.jpg";
import labImg from "@/assets/learning-laboratory.jpg";
import olympiadImg from "@/assets/learning-olympiad.jpg";
import examImg from "@/assets/learning-exam-preparation.jpg";
import industryImg from "@/assets/learning-industry.jpg";
import samskruti1 from "@/assets/vidya-samskruti-1.jpg";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import samskruti3 from "@/assets/vidya-samskruti-3.jpg";
import samskruti4 from "@/assets/vidya-samskruti-4.jpg";
import clubPerfImg from "@/assets/samskruti-club-performance.jpg";
import krishi1 from "@/assets/vidya-krishi-1.jpg";
import krishi2 from "@/assets/vidya-krishi-2.jpg";
import krishi4 from "@/assets/vidya-krishi-4.jpg";
import progPrimary3 from "@/assets/programme-primary-3.jpg";
import progHigh1 from "@/assets/programme-high-1.jpg";
import progHigh3 from "@/assets/programme-high-3.jpg";
import progSenior1 from "@/assets/programme-senior-1.jpg";
import progSenior2 from "@/assets/programme-senior-2.jpg";
import progEarly2 from "@/assets/programme-early-2.jpg";
import heroCampus from "@/assets/hero-campus-drawn.jpg";
import heroChoir from "@/assets/hero-choir-drawn.jpg";
import heroCommunity from "@/assets/hero-community-drawn.jpg";

export type CoCurricularPhoto = {
  src: string;
  caption: string;
  tag: string;
};

export type CoCurricularHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type CoCurricularSectionMedia = {
  galleryTitle: string;
  galleryKicker: string;
  photos: [CoCurricularPhoto, CoCurricularPhoto, CoCurricularPhoto];
  highlights: [
    CoCurricularHighlight,
    CoCurricularHighlight,
    CoCurricularHighlight,
    CoCurricularHighlight,
  ];
};

const SECTION_MEDIA: Record<CoCurricularSection, CoCurricularSectionMedia> = {
  sports: {
    galleryKicker: "On the fields & courts",
    galleryTitle: "Active movement built into the school week",
    photos: [
      { src: khel1, tag: "Outdoor coaching", caption: "Structured morning drills with dedicated sports coaches" },
      { src: khelYoga, tag: "Mind & balance", caption: "Yoga, breathwork and flexibility sessions across grades" },
      { src: khel3, tag: "Team spirit", caption: "Inter-house fixtures, athletics relays and seasonal tournaments" },
    ],
    highlights: [
      { label: "Participation", value: "Every child", detail: "Timetabled physical education from Nursery to Grade 12" },
      { label: "Coaching", value: "24 disciplines", detail: "Outdoor field sports, indoor courts, wellness and athletics" },
      { label: "Progression", value: "Skills to fixtures", detail: "Foundational coordination in early years to team selection" },
      { label: "Safety", value: "Trained coaches", detail: "Age-matched gear, warm-up routines and medical standby" },
    ],
  },
  experiential: {
    galleryKicker: "Learning by doing",
    galleryTitle: "Inside our nine experiential discovery zones",
    photos: [
      { src: anubhav1, tag: "Discovery zone", caption: "Hands-on exploration that turns abstract concepts into experience" },
      { src: anubhav3, tag: "Inquiry & making", caption: "Collaborative prototypes, model building and problem solving" },
      { src: industryImg, tag: "Real-world readiness", caption: "Connecting classroom theory to enterprise, speech and design" },
    ],
    highlights: [
      { label: "Approach", value: "Hands-on first", detail: "Concepts explored through models, zones and live inquiry" },
      { label: "Spaces", value: "9 dedicated zones", detail: "VR/AR, astronomy, debate, studio, finance and maker studios" },
      { label: "Expression", value: "Voice & confidence", detail: "Presentations, debates and student-led showcase sessions" },
      { label: "Integration", value: "Linked to CBSE", detail: "Mapped to NCERT chapters so projects deepen subject mastery" },
    ],
  },
  labs: {
    galleryKicker: "Practical discovery",
    galleryTitle: "Modern, supervised science, math & technology labs",
    photos: [
      { src: labImg, tag: "Science practicals", caption: "Individual benchwork in Physics, Chemistry and Biology" },
      { src: anubhav4, tag: "Tech & robotics", caption: "Robotics, electronics, AI thinking and structured coding" },
      { src: progHigh1, tag: "Guided inquiry", caption: "Lab manuals, observation logs and mentor-led experiments" },
    ],
    highlights: [
      { label: "Access", value: "Weekly lab hours", detail: "Regular practicals rather than end-of-term demonstrations" },
      { label: "Breadth", value: "13 specialised labs", detail: "Core sciences, mathematics, language, AI and robotics" },
      { label: "Lab safety", value: "Supervised benches", detail: "Standard lab coats, safety protocols and trained lab assistants" },
      { label: "Outcome", value: "Board & beyond", detail: "Strong practical record for CBSE boards and STEM Olympiads" },
    ],
  },
  olympiad: {
    galleryKicker: "Analytical stretch",
    galleryTitle: "Calm, concept-first Olympiad & MUN mentoring",
    photos: [
      { src: olympiadImg, tag: "Olympiad circles", caption: "Non-routine problem solving in Maths, Science and reasoning" },
      { src: progHigh3, tag: "Peer discussion", caption: "Small-group analytical workshops and collaborative proofs" },
      { src: progSenior1, tag: "Global diplomacy", caption: "Research, committee debates and resolution drafting in MUN" },
    ],
    highlights: [
      { label: "Starting point", value: "From Grade 4", detail: "Gentle curiosity-led puzzles before formal competition tracks" },
      { label: "Method", value: "Concept depth", detail: "Focus on reasoning steps rather than rote speed tricks" },
      { label: "Mentorship", value: "In-school faculty", detail: "Integrated practice circles without weekend coaching burnout" },
      { label: "Recognition", value: "National & global", detail: "SOF, SilverZone, national Olympiads and Model UN conferences" },
    ],
  },
  compete: {
    galleryKicker: "Structured readiness",
    galleryTitle: "Steady preparation inside the school timetable",
    photos: [
      { src: examImg, tag: "Focused mentoring", caption: "Concept reviews, mock analysis and individual doubt clearing" },
      { src: progSenior2, tag: "Senior pathways", caption: "Aligned tracks for NEET, JEE, CUET, SAT and IELTS" },
      { src: olympiadImg, tag: "Analytics & feedback", caption: "Clear topic-level progress shared regularly with parents" },
    ],
    highlights: [
      { label: "Pacing", value: "Multi-year climb", detail: "Foundation from Grade 6 evolving into Grade 11–12 mastery" },
      { label: "Balance", value: "Zero burnout", detail: "Integrated with CBSE boards so school remains joyful" },
      { label: "Pathways", value: "India & abroad", detail: "Engineering, medicine, law, commerce and global admissions" },
      { label: "Guidance", value: "1-on-1 counselling", detail: "Stream choice, mock reviews and university shortlisting" },
    ],
  },
  development: {
    galleryKicker: "Character & creativity",
    galleryTitle: "Clubs, student leadership and expressive arts",
    photos: [
      { src: clubPerfImg, tag: "Performing arts", caption: "Music, dance, theatre and confident stage presence" },
      { src: samskruti1, tag: "Clubs & societies", caption: "Student-driven clubs spanning literature, eco-action and craft" },
      { src: heroCommunity, tag: "Student leadership", caption: "House captains, councils and collaborative team projects" },
    ],
    highlights: [
      { label: "Voice", value: "Student councils", detail: "Houses, prefect roles and real campus responsibility" },
      { label: "Arts", value: "Music, dance & art", detail: "Dedicated studios for visual arts, rhythm and theatre" },
      { label: "Life skills", value: "Empathy & poise", detail: "Public speaking, teamwork, reflection and community service" },
      { label: "Clubs", value: "Choice-driven", detail: "Rotating term clubs so every child finds their spark" },
    ],
  },
  welfare: {
    galleryKicker: "Care & green campus",
    galleryTitle: "A safe, airy, student-first campus in Kengeri",
    photos: [
      { src: heroCampus, tag: "Campus design", caption: "Sunlit classrooms, ventilated corridors and open green lawns" },
      { src: krishi1, tag: "Eco-friendly grounds", caption: "Tree-lined gardens and calm outdoor learning spaces" },
      { src: progEarly2, tag: "Attentive care", caption: "Trained staff, infirmary support and child-safe spaces" },
    ],
    highlights: [
      { label: "Safety", value: "CCTV & protocols", detail: "Verified campus access, attentive staff and safety drills" },
      { label: "Transport", value: "GPS-tracked buses", detail: "Dedicated routes with trained attendants and parent updates" },
      { label: "Wellbeing", value: "Nurse & counsellor", detail: "On-campus medical care and emotional support when needed" },
      { label: "Spaces", value: "Green & airy", detail: "Purpose-built classrooms, library, dining and play areas" },
    ],
  },
  events: {
    galleryKicker: "Shared milestones",
    galleryTitle: "Celebrations, exhibitions and memorable field trips",
    photos: [
      { src: samskruti2, tag: "Annual showcases", caption: "Stage performances, music ensembles and cultural evenings" },
      { src: heroChoir, tag: "Assemblies & choir", caption: "Morning choirs, festival assemblies and student anchors" },
      { src: krishi4, tag: "Exhibitions & trips", caption: "Science expos, harvest fairs and guided educational visits" },
    ],
    highlights: [
      { label: "Inclusion", value: "Every child on stage", detail: "Showcases designed for broad participation, not a select few" },
      { label: "Exhibitions", value: "Parent showcases", detail: "Science, art, robotics and harvest fairs open to families" },
      { label: "Excursions", value: "Curated trips", detail: "Age-appropriate heritage, museum, nature and industry visits" },
      { label: "Culture", value: "Living traditions", detail: "Karnataka heritage alongside national and global festivals" },
    ],
  },
  services: {
    galleryKicker: "Extended support",
    galleryTitle: "Thoughtful programmes built around busy families",
    photos: [
      { src: progPrimary3, tag: "After-school care", caption: "Supervised study, reading corners and hobby sessions" },
      { src: khel2, tag: "Evening coaching", caption: "Extended sports practice and seasonal holiday camps" },
      { src: krishi2, tag: "Parent partnership", caption: "Workshops, open houses and shared community events" },
    ],
    highlights: [
      { label: "Convenience", value: "One safe campus", detail: "After-school enrichment without extra Bengaluru commute" },
      { label: "Flexibility", value: "Modular choices", detail: "Pick study support, sports, arts or holiday camps as needed" },
      { label: "Families", value: "Parent workshops", detail: "Regular talks on wellbeing, study habits and digital balance" },
      { label: "Supervision", value: "Known faculty", detail: "Led by trusted HKS mentors in familiar school spaces" },
    ],
  },
  overview: {
    galleryKicker: "Beyond the classroom",
    galleryTitle: "Life across gardens, grounds, labs and stage",
    photos: [
      { src: krishi2, tag: "Krishi Vidya", caption: "Campus gardens, organic farming and ecological stewardship" },
      { src: khel4, tag: "Khel Vidya", caption: "Twenty-four sports and daily physical vitality" },
      { src: samskruti3, tag: "Samskriti Vidya", caption: "Music, theatre, languages and living heritage" },
    ],
    highlights: [
      { label: "Balance", value: "Four Vidyas", detail: "Soil, field, lab and stage woven into the CBSE week" },
      { label: "Breadth", value: "9 co-curricular areas", detail: "Sports, labs, Olympiads, clubs, welfare, events and services" },
      { label: "Discovery", value: "Every temperament", detail: "Space for athletes, makers, thinkers, artists and leaders" },
      { label: "Community", value: "Parent-visible", detail: "Exhibitions, showcases and open communication all year" },
    ],
  },
};

const SLUG_PHOTO_OVERRIDES: Partial<Record<string, [CoCurricularPhoto, CoCurricularPhoto, CoCurricularPhoto]>> = {
  "outdoor-sports": [
    { src: khel1, tag: "Field sports", caption: "Morning athletics, cricket, football and team conditioning" },
    { src: khel3, tag: "Inter-house play", caption: "Regular fixtures that build sportsmanship and resilience" },
    { src: khel4, tag: "Coaching", caption: "Dedicated coaches tracking stamina, form and teamwork" },
  ],
  "indoor-wellness-olympic-sports": [
    { src: khelYoga, tag: "Yoga & calm", caption: "Guided posture, breathing and quiet focus routines" },
    { src: khel2, tag: "Indoor courts", caption: "Precision indoor games, badminton, chess and table tennis" },
    { src: khel4, tag: "Olympic pathway", caption: "Structured conditioning for archery, martial arts and athletics" },
  ],
  "technology-ai-maker-labs": [
    { src: anubhav4, tag: "Robotics & coding", caption: "Building circuits, sensors and autonomous logic models" },
    { src: anubhav2, tag: "Maker studio", caption: "Prototyping, 3D design thinking and hands-on engineering" },
    { src: labImg, tag: "STEM integration", caption: "Connecting code and hardware to real science questions" },
  ],
  "creative-speech-enterprise": [
    { src: clubPerfImg, tag: "Speech & stage", caption: "Debate circles, elocution and confident stage delivery" },
    { src: industryImg, tag: "Student enterprise", caption: "Budgeting, teamwork and mini-venture showcases" },
    { src: samskruti4, tag: "Creative studio", caption: "Storytelling, podcasting and collaborative media projects" },
  ],
};

export function getCoCurricularMedia(
  slug: string,
  sec: CoCurricularSection,
): CoCurricularSectionMedia {
  const base = SECTION_MEDIA[sec] ?? SECTION_MEDIA.overview;
  const photos = SLUG_PHOTO_OVERRIDES[slug] ?? base.photos;
  return { ...base, photos };
}
