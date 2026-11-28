import {
  Activity,
  Atom,
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Bus,
  Calculator,
  Calendar,
  Camera,
  Clock,
  Compass,
  Cpu,
  Dumbbell,
  Eye,
  Feather,
  Flame,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Languages,
  Layers,
  Leaf,
  Library,
  Lightbulb,
  MapPin,
  Medal,
  Mic,
  Microscope,
  Music,
  Palette,
  Pause,
  Play,
  Puzzle,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Target,
  Theater,
  Trees,
  Trophy,
  Users,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type DoodleTheme =
  | "sports"
  | "experiential"
  | "labs"
  | "olympiad"
  | "compete"
  | "development"
  | "welfare"
  | "events"
  | "services"
  | "overview"
  | "academics"
  | "krishi"
  | "samskriti";

const KEYWORD_ICONS: [RegExp, LucideIcon][] = [
  [/robot|ai|coding|maker|3d|circuit|drone|tech|computer|stem/i, Cpu],
  [/bot|automation|arduino/i, Bot],
  [/physics|atom|quantum|mechanics/i, Atom],
  [/chem|flask|lab|experiment|science/i, FlaskConical],
  [/bio|microscope|cell|botany/i, Microscope],
  [/math|number|algebra|calculus|geometry|abacus/i, Calculator],
  [/space|astro|planet|vr|ar|immersive|galaxy|star/i, Rocket],
  [/cricket|football|basketball|athletics|track|field|outdoor|sport|match|coach/i, Trophy],
  [/yoga|meditat|mindful|wellness|breath|martial|karate|gym|fitness|strength/i, Activity],
  [/swim|badminton|tennis|chess|indoor|olympic|archery|table/i, Dumbbell],
  [/olympiad|medal|merit|rank|award|recognition|honour|prize/i, Medal],
  [/jee|neet|sat|cuet|ielts|exam|test|mock|score|target|prep|foundation/i, Target],
  [/mun|diplom|global|international|world|abroad|tour|exchange|travel/i, Globe],
  [/debate|speech|elocution|podcast|radio|voice|public speaking|communication/i, Mic],
  [/business|enterprise|startup|finance|commerce|economy|entrepreneur/i, Briefcase],
  [/music|choir|sing|instrument|rhythm|melody/i, Music],
  [/theatre|drama|stage|perform|annual day|act/i, Theater],
  [/art|paint|craft|clay|pottery|design|sketch|visual|sculpture/i, Palette],
  [/photo|film|media|cinema|video/i, Camera],
  [/write|story|literary|poet|journal|essay/i, Feather],
  [/read|library|book|study|ncert|cbse|curriculum|academic|homework/i, BookOpen],
  [/language|kannada|hindi|sanskrit|english|french/i, Languages],
  [/leader|council|house|prefect|team|peer|club|society|community/i, Users],
  [/counsel|empathy|mentor|parent|workshop|support|care|guidance/i, HeartHandshake],
  [/health|nurse|medical|infirmary|first aid|doctor|hygiene/i, HeartPulse],
  [/safe|security|cctv|protect|shield|guard|policy|fire/i, ShieldCheck],
  [/bus|transport|gps|route|commute/i, Bus],
  [/food|dining|meal|nutrition|kitchen|canteen/i, Utensils],
  [/farm|krishi|soil|garden|seed|compost|horticulture|organic/i, Sprout],
  [/eco|nature|green|sustain|solar|water|tree|environment/i, Leaf],
  [/campus|classroom|building|auditorium|infrastructure|facility|hall/i, Landmark],
  [/event|festival|celebrat|exhibition|calendar|annual|trip|camp/i, Calendar],
  [/after school|day care|timing|schedule|hour|evening|extended/i, Clock],
  [/skill|vocational|carpentry|craft|hands-on|workshop|build/i, Wrench],
  [/puzzle|logic|reasoning|critical|quiz|problem/i, Puzzle],
  [/idea|innovat|curiosity|discover|think|inquiry|creative/i, Lightbulb],
  [/graduat|university|college|degree|senior|career|alumni/i, GraduationCap],
  [/map|field trip|excursion|expedition|explore|heritage/i, Compass],
  [/layer|framework|stage|progress|step/i, Layers],
  [/ethics|value|character|integrity|balance/i, Scale],
];

const FALLBACK_BY_THEME: Record<DoodleTheme, LucideIcon> = {
  sports: Trophy,
  experiential: Compass,
  labs: FlaskConical,
  olympiad: Award,
  compete: Target,
  development: Users,
  welfare: ShieldCheck,
  events: Calendar,
  services: Clock,
  overview: Sparkles,
  academics: BookOpen,
  krishi: Trees,
  samskriti: Palette,
};

export function pickTopicIcon(label: string, theme: DoodleTheme = "academics"): LucideIcon {
  for (const [re, Icon] of KEYWORD_ICONS) {
    if (re.test(label)) return Icon;
  }
  return FALLBACK_BY_THEME[theme] ?? Star;
}

export function TopicIconBadge({
  label,
  theme = "academics",
  tone = "soft",
  className = "",
}: {
  label: string;
  theme?: DoodleTheme;
  tone?: "soft" | "dark" | "outline";
  className?: string;
}) {
  const Icon = pickTopicIcon(label, theme);
  const style =
    tone === "dark"
      ? { backgroundColor: "rgba(255,255,255,0.12)", color: "#ffd27a" }
      : tone === "outline"
        ? { borderColor: "var(--border)", color: "var(--vt)" }
        : { backgroundColor: "var(--vt-soft)", color: "var(--vt)" };

  return (
    <span
      aria-hidden="true"
      className={`inline-grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
        tone === "outline" ? "border bg-card" : ""
      } ${className}`}
      style={style}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.65} />
    </span>
  );
}

/** Delicate hand-drawn ink underline accent for editorial display headings */
export function DoodleUnderline({
  className = "w-28",
  color = "var(--vt)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 14"
      fill="none"
      aria-hidden="true"
      className={`edu-doodle-underline block h-3 ${className}`}
    >
      <path
        d="M3 10.5 C36 4.5, 98 3.5, 137 8.5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        className="edu-doodle-stroke"
      />
      <path
        d="M18 12.2 C54 8.2, 92 7.8, 122 11.2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.45"
        className="edu-doodle-stroke-2"
      />
    </svg>
  );
}

/** Quiet editorial section divider with a single line-art education motif */
export function DoodleDivider({
  theme = "academics",
  label,
}: {
  theme?: DoodleTheme;
  label?: string;
}) {
  const Icon = FALLBACK_BY_THEME[theme] ?? BookOpen;
  return (
    <div
      className="flex items-center justify-center gap-3 py-2 text-muted-foreground/70"
      aria-hidden="true"
    >
      <span className="h-px max-w-[120px] flex-1 bg-border" />
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
        <Icon className="h-3.5 w-3.5" style={{ color: "var(--vt)" }} strokeWidth={1.6} />
        {label && <span>{label}</span>}
      </span>
      <span className="h-px max-w-[120px] flex-1 bg-border" />
    </div>
  );
}

/** Subtle low-opacity ink-sketch corner watermark tailored to each education theme */
export function DoodleMarginMotif({
  theme = "academics",
  className = "",
}: {
  theme?: DoodleTheme;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {theme === "labs" || theme === "experiential" ? (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="90" cy="90" rx="64" ry="24" transform="rotate(-24 90 90)" />
          <ellipse cx="90" cy="90" rx="64" ry="24" transform="rotate(36 90 90)" />
          <circle cx="90" cy="90" r="8" />
          <circle cx="144" cy="64" r="4" fill="currentColor" />
          <path d="M26 146 l14 -14 m-10 0 h10 v10" />
          <path d="M138 142 l6 -14 l6 14 m-10 -4 h8" />
        </g>
      ) : theme === "sports" ? (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="90" cy="90" r="56" strokeDasharray="5 6" />
          <path d="M34 90 h112 M90 34 v112" strokeOpacity="0.55" />
          <path d="M54 54 c22 22 22 50 0 72 M126 54 c-22 22 -22 50 0 72" />
          <path d="M28 152 q36 -18 72 0 t56 -12" strokeDasharray="3 5" />
        </g>
      ) : theme === "olympiad" || theme === "compete" ? (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 138 L90 36 L140 138" />
          <path d="M56 106 A44 44 0 0 0 124 106" strokeDasharray="4 5" />
          <circle cx="90" cy="36" r="7" />
          <path d="M90 22 v-10 M34 148 h112" />
          <path d="M138 44 l4 10 l10 2 l-7 7 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -7 l10 -2 z" />
        </g>
      ) : theme === "welfare" || theme === "krishi" ? (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M90 154 V46" />
          <path d="M90 124 C58 118 44 96 48 76 C68 80 84 96 90 124Z" />
          <path d="M90 98 C120 92 136 72 132 52 C112 56 96 72 90 98Z" />
          <path d="M90 64 C74 52 72 34 86 24 C98 34 98 52 90 64Z" />
          <circle cx="42" cy="144" r="3" />
          <circle cx="142" cy="134" r="4" />
        </g>
      ) : theme === "events" || theme === "development" || theme === "samskriti" ? (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 46 Q90 88 160 46" />
          <path d="M44 58 l10 24 l14 -18" />
          <path d="M84 68 l10 26 l14 -24" />
          <path d="M124 62 l12 22 l10 -22" />
          <path d="M62 146 v-38 l36 -10 v36" />
          <circle cx="56" cy="148" r="7" />
          <circle cx="92" cy="136" r="7" />
        </g>
      ) : (
        /* Notebook, ruler & geometric pencil motif for academics & services */
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="36" y="34" width="96" height="114" rx="10" />
          <path d="M54 34 v114 M68 62 h46 M68 82 h38 M68 102 h42 M68 122 h26" />
          <path d="M148 44 l12 12 l-28 28 l-16 4 l4 -16 z" />
          <path d="M30 58 h12 M30 88 h12 M30 118 h12" />
        </g>
      )}
    </svg>
  );
}

/** Accessible WCAG 2.2.2 Pause / Play control for persistent animated vector illustrations */
export function MotionToggleButton({
  paused,
  onToggle,
  tone = "dark",
}: {
  paused: boolean;
  onToggle: () => void;
  tone?: "dark" | "light";
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
        tone === "dark"
          ? "border-white/25 bg-white/10 text-white/90 hover:bg-white/20 focus-visible:outline-[#ffd27a]"
          : "border-border bg-card text-navy hover:bg-muted focus-visible:outline-navy"
      }`}
    >
      {paused ? (
        <>
          <Play className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          <span>Play animation</span>
        </>
      ) : (
        <>
          <Pause className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          <span>Pause animation</span>
        </>
      )}
    </button>
  );
}

export { Eye, Flame, Library, MapPin };
