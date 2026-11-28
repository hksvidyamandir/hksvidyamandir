import { useState } from "react";
import type { CoCurricularSection } from "@/lib/cocurricular-pages-data";
import { MotionToggleButton } from "@/components/site/EducationDoodles";

export function CoCurricularSceneArt({
  slug,
  sec,
  title,
}: {
  slug: string;
  sec: CoCurricularSection;
  title: string;
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`cc-scene-art mx-auto w-full max-w-[480px] ${paused ? "is-motion-paused" : ""}`}
      >
        <SceneSvg slug={slug} sec={sec} label={`Animated illustration for ${title}`} />
      </div>
      <div className="mt-3 flex justify-end self-end">
        <MotionToggleButton paused={paused} onToggle={() => setPaused((p) => !p)} tone="dark" />
      </div>
    </div>
  );
}

function SceneSvg({
  slug,
  sec,
  label,
}: {
  slug: string;
  sec: CoCurricularSection;
  label: string;
}) {
  /* 1. SPORTS — Outdoor vs Indoor/Wellness vs Overview */
  if (sec === "sports") {
    if (slug === "indoor-wellness-olympic-sports") {
      return (
        <svg viewBox="0 0 520 380" role="img" aria-label={label}>
          <circle cx="260" cy="190" r="145" fill="rgba(255,255,255,0.06)" className="cc-anim-breathe" />
          <circle cx="260" cy="190" r="106" fill="none" stroke="rgba(255,210,122,0.35)" strokeWidth="2" strokeDasharray="6 8" className="cc-anim-spin-slow" />
          <circle cx="260" cy="190" r="76" fill="rgba(255,255,255,0.09)" className="cc-anim-breathe-delay" />
          {/* Lotus / yoga silhouette */}
          <g transform="translate(260 202)" className="cc-anim-float">
            <circle cx="0" cy="-64" r="20" fill="#ffd27a" />
            <path d="M-12-34 C-32-12 -52 14 -66 28 C-40 34 -16 26 0 18 C16 26 40 34 66 28 C52 14 32-12 12-34 Z" fill="#ffffff" />
            <path d="M-76 34 C-46 52 46 52 76 34 C56 18 28 16 0 24 C-28 16 -56 18 -76 34 Z" fill="#ffd27a" />
          </g>
          {/* Floating Olympic rings motif (subtle) */}
          <g transform="translate(88 78)" fill="none" strokeWidth="3.5" opacity="0.88" className="cc-anim-sway">
            <circle cx="0" cy="0" r="16" stroke="#ffffff" />
            <circle cx="26" cy="0" r="16" stroke="#ffd27a" />
            <circle cx="52" cy="0" r="16" stroke="#ffffff" />
            <circle cx="13" cy="14" r="16" stroke="#ffd27a" />
            <circle cx="39" cy="14" r="16" stroke="#ffffff" />
          </g>
          {/* Shuttlecock / indoor arc */}
          <path d="M350 96 Q415 58 460 112" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeDasharray="5 6" className="cc-anim-dash" />
          <g transform="translate(454 118)" className="cc-anim-float-delay">
            <circle cx="0" cy="0" r="9" fill="#ffd27a" />
            <path d="M-7-6 L-20-26 L-2-18 L8-28 L6-6 Z" fill="#ffffff" />
          </g>
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Stadium track contours */}
        <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
          <rect x="46" y="254" width="428" height="86" rx="43" />
          <rect x="66" y="268" width="388" height="58" rx="29" strokeDasharray="8 8" className="cc-anim-dash" />
        </g>
        {/* Flying trajectory arc */}
        <path d="M92 260 Q255 42 426 248" fill="none" stroke="rgba(255,210,122,0.5)" strokeWidth="2.5" strokeDasharray="6 8" className="cc-anim-dash" />
        {/* Ground bounce shadow */}
        <ellipse cx="260" cy="298" rx="54" ry="12" fill="rgba(0,0,0,0.28)" className="cc-anim-shadow" />
        {/* Bouncing & spinning match ball */}
        <g transform="translate(260 176)">
          <g className="cc-anim-bounce">
            <g className="cc-anim-spin-med">
              <circle r="68" fill="#ffffff" />
              <path d="M-68 0 H68 M0 -68 C32 -32 32 32 0 68 M0 -68 C-32 -32 -32 32 0 68" fill="none" stroke="var(--t)" strokeWidth="5" />
              <circle r="14" fill="#ffd27a" />
            </g>
          </g>
        </g>
        {/* Stopwatch badge top-right */}
        <g transform="translate(420 96)" className="cc-anim-float">
          <circle r="34" fill="rgba(255,255,255,0.14)" stroke="#ffd27a" strokeWidth="3" />
          <path d="M-10-40 H10 M0-34 V-40" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" className="cc-anim-clock-min" />
          <circle r="4" fill="#ffd27a" />
        </g>
        {/* Fluttering pennant flag left */}
        <g transform="translate(88 92)" className="cc-anim-sway">
          <line x1="0" y1="0" x2="0" y2="86" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M2 4 L58 20 L2 38 Z" fill="#ffd27a" />
        </g>
        <g fill="#ffd27a">
          <circle className="tw1" cx="152" cy="76" r="5" />
          <circle className="tw2" cx="356" cy="64" r="4" />
          <circle className="tw1" cx="446" cy="218" r="5" />
        </g>
      </svg>
    );
  }

  /* 2. EXPERIENTIAL — Creative/Speech vs Immersive/VR vs Overview */
  if (sec === "experiential") {
    if (slug === "creative-speech-enterprise") {
      return (
        <svg viewBox="0 0 520 380" role="img" aria-label={label}>
          {/* Expanding soundwave rings */}
          <g transform="translate(210 175)" fill="none" stroke="#ffd27a" strokeWidth="2.5">
            <circle r="70" opacity="0.45" className="cc-anim-pulse-ring" />
            <circle r="108" opacity="0.28" className="cc-anim-pulse-ring-delay" />
          </g>
          {/* Studio Microphone */}
          <g transform="translate(210 175)" className="cc-anim-float">
            <rect x="-32" y="-68" width="64" height="102" rx="32" fill="#ffffff" />
            <path d="M-20-38 H20 M-20-20 H20 M-20-2 H20" stroke="var(--t)" strokeWidth="4" strokeLinecap="round" />
            <path d="M-50-4 A50 50 0 0 0 50-4" fill="none" stroke="#ffd27a" strokeWidth="6" strokeLinecap="round" />
            <path d="M0 46 V86 M-34 86 H34" stroke="#ffd27a" strokeWidth="6" strokeLinecap="round" />
          </g>
          {/* Rising idea speech bubbles + growth bar */}
          <g transform="translate(362 126)" className="cc-anim-float-delay">
            <rect x="-54" y="-34" width="118" height="66" rx="18" fill="#ffd27a" />
            <path d="M-26 30 L-40 48 L-8 30 Z" fill="#ffd27a" />
            <path d="M-32-6 H38 M-32 10 H16" stroke="var(--t-deep)" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(350 264)">
            <rect x="0" y="24" width="22" height="36" rx="4" fill="rgba(255,255,255,0.45)" />
            <rect x="30" y="6" width="22" height="54" rx="4" fill="rgba(255,255,255,0.7)" />
            <rect x="60" y="-18" width="22" height="78" rx="4" fill="#ffd27a" className="cc-anim-grow-y" />
          </g>
          <circle className="tw1" cx="92" cy="96" r="6" fill="#ffd27a" />
          <circle className="tw2" cx="448" cy="240" r="5" fill="#ffffff" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Starfield & constellation */}
        <g stroke="rgba(255,210,122,0.45)" strokeWidth="1.8" fill="none" className="cc-anim-dash" strokeDasharray="5 5">
          <polyline points="72,110 132,68 198,94 256,52" />
          <polyline points="354,74 422,96 462,158" />
        </g>
        <g fill="#ffd27a">
          <circle className="tw1" cx="72" cy="110" r="5" />
          <circle className="tw2" cx="132" cy="68" r="4" />
          <circle className="tw1" cx="198" cy="94" r="5" />
          <circle className="tw2" cx="256" cy="52" r="6" />
          <circle className="tw1" cx="422" cy="96" r="5" />
          <circle className="tw2" cx="462" cy="158" r="4" />
        </g>
        {/* Orbiting planet ring */}
        <g transform="translate(260 200)">
          <ellipse rx="176" ry="52" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" transform="rotate(-14)" />
          <g className="cc-anim-orbit-wide">
            <circle cx="176" cy="0" r="9" fill="#ffd27a" />
          </g>
        </g>
        {/* VR Visor + sweeping HUD beam */}
        <g transform="translate(260 205)" className="cc-anim-float">
          <rect x="-112" y="-58" width="224" height="116" rx="42" fill="#ffffff" />
          <rect x="-92" y="-38" width="184" height="76" rx="28" fill="var(--t-deep)" />
          <circle cx="-44" cy="0" r="24" fill="var(--t)" />
          <circle cx="44" cy="0" r="24" fill="var(--t)" />
          <circle cx="-44" cy="0" r="10" fill="#ffd27a" className="tw1" />
          <circle cx="44" cy="0" r="10" fill="#ffd27a" className="tw2" />
          <line x1="-82" y1="-22" x2="82" y2="-22" stroke="#ffd27a" strokeWidth="3" strokeOpacity="0.65" className="cc-anim-scan" />
          <path d="M-20 0 H20" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        </g>
        {/* Floating wireframe cube bottom left */}
        <g transform="translate(96 286)" fill="none" stroke="#ffffff" strokeWidth="2.2" opacity="0.7" className="cc-anim-spin-slow">
          <polygon points="0,-24 22,-12 22,12 0,24 -22,12 -22,-12" />
          <path d="M0,-24 V0 M0,0 L22,12 M0,0 L-22,12" />
        </g>
      </svg>
    );
  }

  /* 3. LABS — Technology/AI/Maker vs Core Science/Math */
  if (sec === "labs") {
    if (slug === "technology-ai-maker-labs") {
      return (
        <svg viewBox="0 0 520 380" role="img" aria-label={label}>
          {/* Animated PCB circuit traces */}
          <g fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M56 116 H148 L178 146" />
            <path d="M56 244 H136 L178 214" />
            <path d="M464 116 H372 L342 146" />
            <path d="M464 252 H380 L342 214" />
          </g>
          <g fill="none" stroke="#ffd27a" strokeWidth="3" strokeDasharray="16 84" className="cc-anim-circuit">
            <path d="M56 116 H148 L178 146" />
            <path d="M464 252 H380 L342 214" />
          </g>
          {/* Central Microchip + Bot Head */}
          <g transform="translate(260 185)" className="cc-anim-float">
            {/* Pins */}
            <g stroke="#ffd27a" strokeWidth="5" strokeLinecap="round">
              <path d="M-50-82 V-62 M0-82 V-62 M50-82 V-62" />
              <path d="M-50 62 V82 M0 62 V82 M50 62 V82" />
              <path d="M-98-30 H-78 M-98 0 H-78 M-98 30 H-78" />
              <path d="M78-30 H98 M78 0 H98 M78 30 H98" />
            </g>
            <rect x="-78" y="-62" width="156" height="124" rx="22" fill="#ffffff" />
            <rect x="-56" y="-40" width="112" height="80" rx="14" fill="var(--t-deep)" />
            {/* Friendly AI eyes */}
            <circle cx="-24" cy="-4" r="11" fill="#ffd27a" className="tw1" />
            <circle cx="24" cy="-4" r="11" fill="#ffd27a" className="tw1" />
            <path d="M-20 20 Q0 32 20 20" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* Spinning precision gear top-right */}
          <g transform="translate(426 88)" className="cc-anim-spin-slow">
            <circle r="24" fill="none" stroke="#ffd27a" strokeWidth="7" strokeDasharray="9 7" />
            <circle r="10" fill="#ffffff" />
          </g>
          {/* Counter-spinning gear bottom-left */}
          <g transform="translate(94 294)" className="cc-anim-spin-rev">
            <circle r="20" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="8 6" />
            <circle r="8" fill="#ffd27a" />
          </g>
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Orbiting atom rings behind flask */}
        <g transform="translate(364 128)" fill="none" stroke="rgba(255,255,255,0.34)" strokeWidth="2">
          <ellipse rx="68" ry="24" transform="rotate(-25)" />
          <ellipse rx="68" ry="24" transform="rotate(35)" />
          <circle r="8" fill="#ffd27a" stroke="none" />
          <g className="cc-anim-spin-med">
            <circle cx="66" cy="0" r="6" fill="#ffffff" stroke="none" />
          </g>
        </g>
        {/* Bubbling Erlenmeyer Flask */}
        <g transform="translate(230 198)" className="cc-anim-float">
          <path d="M-30-108 H30 M-20-108 V-46 L-84 74 A16 16 0 0 0 -70 98 H70 A16 16 0 0 0 84 74 L20-46 V-108" fill="#ffffff" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" />
          {/* Colored liquid */}
          <path d="M-56 32 Q-24 22 0 32 T56 32 L76 72 A10 10 0 0 1 67 88 H-67 A10 10 0 0 1 -76 72 Z" fill="var(--t)" />
          {/* Rising effervescent bubbles */}
          <circle cx="-18" cy="54" r="7" fill="#ffd27a" className="cc-anim-bubble-1" />
          <circle cx="14" cy="64" r="5" fill="#ffffff" className="cc-anim-bubble-2" />
          <circle cx="2" cy="40" r="6" fill="#ffd27a" className="cc-anim-bubble-3" />
          {/* Measurement ticks */}
          <path d="M-38 14 H-22 M-46 38 H-30 M-54 62 H-38" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Geometry set-square & pi symbol */}
        <g transform="translate(96 116)" className="cc-anim-sway" opacity="0.82">
          <polygon points="0,68 68,68 0,0" fill="none" stroke="#ffd27a" strokeWidth="3.5" strokeLinejoin="round" />
          <polygon points="12,56 42,56 12,26" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
        </g>
        <text x="414" y="286" fill="#ffd27a" fontFamily="Fraunces, serif" fontSize="48" opacity="0.7" className="cc-anim-float-delay">π</text>
      </svg>
    );
  }

  /* 4. OLYMPIAD — MUN/Global vs Olympiad Tracks */
  if (sec === "olympiad") {
    if (slug === "international-olympiads-mun") {
      return (
        <svg viewBox="0 0 520 380" role="img" aria-label={label}>
          {/* Animated rotating meridian globe */}
          <g transform="translate(260 186)" className="cc-anim-float">
            <circle r="92" fill="#ffffff" />
            <g fill="none" stroke="var(--t)" strokeWidth="3.5">
              <ellipse rx="92" ry="30" />
              <ellipse rx="92" ry="62" strokeOpacity="0.45" />
              <ellipse rx="40" ry="92" className="cc-anim-breathe" />
              <line x1="0" y1="-92" x2="0" y2="92" />
            </g>
            {/* Orbiting diplomatic arc */}
            <ellipse rx="134" ry="44" fill="none" stroke="#ffd27a" strokeWidth="2.5" strokeDasharray="6 6" transform="rotate(-18)" className="cc-anim-dash" />
          </g>
          {/* Laurel leaves flanking */}
          <g fill="none" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" className="cc-anim-sway">
            <path d="M124 270 C90 218 96 144 134 102" />
            <path d="M396 270 C430 218 424 144 386 102" />
          </g>
          <circle className="tw1" cx="122" cy="84" r="6" fill="#ffd27a" />
          <circle className="tw2" cx="408" cy="82" r="5" fill="#ffd27a" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Drawing compass arc backdrop */}
        <circle cx="260" cy="192" r="126" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="7 8" className="cc-anim-spin-slow" />
        {/* Swinging Gold Olympiad Medal */}
        <g transform="translate(260 64)">
          <g className="cc-anim-pendulum">
            <path d="M-38 0 L-8 82 L8 82 L38 0 Z" fill="#ffffff" />
            <path d="M-22 0 L0 64 L22 0 Z" fill="var(--t)" />
            <circle cx="0" cy="138" r="68" fill="#ffd27a" stroke="#ffffff" strokeWidth="9" />
            <path d="M0 94 L12 122 L42 126 L20 146 L26 176 L0 162 L-26 176 L-20 146 L-42 126 L-12 122 Z" fill="var(--t-deep)" />
          </g>
        </g>
        {/* Subtle logic symbols */}
        <text x="86" y="138" fill="rgba(255,255,255,0.7)" fontFamily="Fraunces, serif" fontSize="42" className="cc-anim-float">Σ</text>
        <text x="410" y="274" fill="#ffd27a" fontFamily="Fraunces, serif" fontSize="42" className="cc-anim-float-delay">∞</text>
        <circle className="tw1" cx="424" cy="108" r="6" fill="#ffd27a" />
        <circle className="tw2" cx="102" cy="272" r="5" fill="#ffffff" />
      </svg>
    );
  }

  /* 5. COMPETE — Target Bullseye & Rising Staircase / Global Flight Arcs */
  if (sec === "compete") {
    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Rising progress bars left */}
        <g transform="translate(66 196)">
          <rect x="0" y="76" width="26" height="44" rx="6" fill="rgba(255,255,255,0.38)" />
          <rect x="36" y="48" width="26" height="72" rx="6" fill="rgba(255,255,255,0.62)" />
          <rect x="72" y="16" width="26" height="104" rx="6" fill="#ffd27a" className="cc-anim-grow-y" />
        </g>
        {/* Concentric target */}
        <g transform="translate(306 188)">
          <circle r="102" fill="#ffffff" />
          <circle r="72" fill="none" stroke="var(--t)" strokeWidth="14" />
          <circle r="38" fill="var(--t)" />
          <circle r="13" fill="#ffd27a" className="cc-anim-breathe" />
          {/* Swooping arrow hitting center */}
          <g className="cc-anim-arrow">
            <line x1="120" y1="-96" x2="8" y2="-6" stroke="#ffd27a" strokeWidth="6" strokeLinecap="round" />
            <polygon points="4,-3 24,-12 14,-24" fill="#ffd27a" />
            <path d="M104-84 L122-104 M112-76 L132-94" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>
        <circle className="tw1" cx="104" cy="96" r="6" fill="#ffd27a" />
        <circle className="tw2" cx="446" cy="296" r="5" fill="#ffffff" />
      </svg>
    );
  }

  /* 6. DEVELOPMENT — Stage Spotlight, Music & Leadership Compass */
  if (sec === "development") {
    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Soft spotlight beams */}
        <polygon points="140,26 70,336 226,336" fill="rgba(255,210,122,0.12)" className="cc-anim-sway" />
        <polygon points="380,26 294,336 450,336" fill="rgba(255,255,255,0.08)" className="cc-anim-sway-delay" />
        {/* Leadership Compass Center */}
        <g transform="translate(260 190)" className="cc-anim-float">
          <circle r="86" fill="#ffffff" />
          <circle r="70" fill="none" stroke="var(--t)" strokeWidth="3" strokeDasharray="5 5" />
          <g className="cc-anim-compass">
            <polygon points="0,-54 16,0 0,54 -16,0" fill="var(--t)" />
            <polygon points="0,-54 16,0 0,0 -16,0" fill="#ffd27a" />
          </g>
          <circle r="8" fill="var(--t-deep)" />
        </g>
        {/* Floating music note & palette stroke */}
        <g transform="translate(106 154)" fill="none" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" className="cc-anim-float-delay">
          <path d="M0 44 V4 L32 -6 V34" />
          <circle cx="-6" cy="46" r="8" fill="#ffd27a" />
          <circle cx="26" cy="36" r="8" fill="#ffd27a" />
        </g>
        <g transform="translate(414 236)" className="cc-anim-sway">
          <circle r="28" fill="#ffd27a" />
          <circle cx="-9" cy="-8" r="5" fill="var(--t-deep)" />
          <circle cx="8" cy="-10" r="5" fill="#ffffff" />
          <circle cx="11" cy="8" r="5" fill="var(--t)" />
        </g>
      </svg>
    );
  }

  /* 7. WELFARE — Shield + ECG Heartbeat / Animated Campus Bus */
  if (sec === "welfare") {
    if (slug === "learning-campus-infrastructure") {
      return (
        <svg viewBox="0 0 520 380" role="img" aria-label={label}>
          {/* Dotted campus route road */}
          <path d="M40 286 H480" stroke="rgba(255,255,255,0.28)" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 286 H480" stroke="#ffd27a" strokeWidth="3" strokeDasharray="14 16" className="cc-anim-dash" />
          {/* Sunlit school campus silhouette */}
          <g transform="translate(148 112)" opacity="0.92">
            <rect x="0" y="42" width="224" height="104" rx="10" fill="rgba(255,255,255,0.16)" stroke="#ffffff" strokeWidth="2.5" />
            <polygon points="-14,44 112,-14 238,44" fill="#ffd27a" />
            <rect x="92" y="90" width="40" height="56" rx="6" fill="#ffffff" />
            <rect x="26" y="72" width="38" height="32" rx="4" fill="rgba(255,255,255,0.8)" />
            <rect x="160" y="72" width="38" height="32" rx="4" fill="rgba(255,255,255,0.8)" />
          </g>
          {/* Animated yellow GPS school bus */}
          <g transform="translate(160 226)" className="cc-anim-bus">
            <rect x="0" y="0" width="132" height="54" rx="12" fill="#ffd27a" />
            <rect x="14" y="10" width="26" height="18" rx="4" fill="var(--t-deep)" />
            <rect x="48" y="10" width="26" height="18" rx="4" fill="var(--t-deep)" />
            <rect x="82" y="10" width="34" height="18" rx="4" fill="#ffffff" />
            <circle cx="30" cy="54" r="12" fill="#ffffff" stroke="var(--t-deep)" strokeWidth="4" />
            <circle cx="102" cy="54" r="12" fill="#ffffff" stroke="var(--t-deep)" strokeWidth="4" />
          </g>
          {/* GPS signal rings */}
          <circle cx="424" cy="96" r="24" fill="none" stroke="#ffd27a" strokeWidth="2.5" className="cc-anim-pulse-ring" />
          <circle cx="424" cy="96" r="8" fill="#ffd27a" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Protective halo rings */}
        <circle cx="260" cy="188" r="142" fill="rgba(255,255,255,0.06)" className="cc-anim-breathe" />
        <circle cx="260" cy="188" r="110" fill="none" stroke="rgba(255,210,122,0.4)" strokeWidth="2.5" strokeDasharray="6 8" className="cc-anim-spin-slow" />
        {/* Safety Shield + Animated Checkmark */}
        <g transform="translate(260 190)" className="cc-anim-float">
          <path d="M0-104 L88-68 V-12 C88 46 50 90 0 108 C-50 90 -88 46 -88 -12 V-68 Z" fill="#ffffff" />
          <path d="M-36 4 L-10 30 L42 -26" fill="none" stroke="var(--t)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" className="cc-anim-draw-check" />
        </g>
        {/* Heartbeat ECG line across bottom */}
        <polyline
          points="56,336 168,336 194,306 218,358 246,294 274,344 298,336 464,336"
          fill="none"
          stroke="#ffd27a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="460"
          className="cc-anim-ecg"
        />
      </svg>
    );
  }

  /* 8. EVENTS — Festive Bunting, Trophy & Confetti / Global Tour Arc */
  if (sec === "events") {
    return (
      <svg viewBox="0 0 520 380" role="img" aria-label={label}>
        {/* Swaying celebratory bunting flags */}
        <g className="cc-anim-sway">
          <path d="M40 72 Q260 132 480 72" fill="none" stroke="#ffffff" strokeWidth="3" />
          <polygon points="94,88 124,95 106,126" fill="#ffd27a" />
          <polygon points="168,101 200,104 182,138" fill="#ffffff" />
          <polygon points="244,106 276,106 260,142" fill="#ffd27a" />
          <polygon points="320,104 352,101 338,138" fill="#ffffff" />
          <polygon points="396,95 426,88 414,126" fill="#ffd27a" />
        </g>
        {/* Glowing Stage Trophy */}
        <g transform="translate(260 226)" className="cc-anim-float">
          <path d="M-56-68 H56 V-14 C56 26 30 54 0 54 C-30 54 -56 26 -56 -14 Z" fill="#ffffff" />
          <path d="M-56-48 H-80 C-84-10 -66 12 -46 12 M56-48 H80 C84-10 66 12 46 12" fill="none" stroke="#ffd27a" strokeWidth="8" strokeLinecap="round" />
          <rect x="-14" y="50" width="28" height="36" fill="#ffd27a" />
          <rect x="-46" y="82" width="92" height="20" rx="8" fill="#ffffff" />
          <path d="M0-42 L8-24 L28-22 L13-9 L17 10 L0 1 L-17 10 L-13-9 L-28-22 L-8-24 Z" fill="var(--t)" />
        </g>
        {/* Twinkling confetti sparks */}
        <g fill="#ffd27a">
          <circle className="tw1" cx="110" cy="212" r="6" />
          <rect className="tw2" x="406" y="188" width="12" height="12" rx="3" transform="rotate(24 412 194)" />
          <circle className="tw1" cx="428" cy="284" r="5" />
          <rect className="tw2" x="92" y="286" width="11" height="11" rx="3" transform="rotate(-18 97 291)" />
        </g>
      </svg>
    );
  }

  /* 9. SERVICES & OVERVIEW — Interactive Timetable Calendar & Ticking School Clock */
  return (
    <svg viewBox="0 0 520 380" role="img" aria-label={label}>
      {/* Calendar Card */}
      <g transform="translate(230 202)" className="cc-anim-float">
        <rect x="-106" y="-82" width="212" height="172" rx="22" fill="#ffffff" />
        <path d="M-106-34 H106" stroke="var(--t)" strokeWidth="10" />
        <path d="M-62-100 V-62 M62-100 V-62" stroke="#ffd27a" strokeWidth="12" strokeLinecap="round" />
        {/* Activity dots pulsing gently */}
        <circle cx="-50" cy="6" r="12" fill="var(--t)" />
        <circle cx="0" cy="6" r="12" fill="#ffd27a" className="tw1" />
        <circle cx="50" cy="6" r="12" fill="var(--t)" />
        <circle cx="-50" cy="48" r="12" fill="#ffd27a" className="tw2" />
        <rect x="-14" y="38" width="76" height="20" rx="10" fill="var(--t-soft)" />
      </g>
      {/* Ticking School Clock */}
      <g transform="translate(388 122)" className="cc-anim-float-delay">
        <circle r="48" fill="var(--t)" stroke="#ffffff" strokeWidth="6" />
        <line x1="0" y1="0" x2="0" y2="-26" stroke="#ffd27a" strokeWidth="4.5" strokeLinecap="round" className="cc-anim-clock-min" />
        <line x1="0" y1="0" x2="18" y2="8" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
        <circle r="5" fill="#ffd27a" />
      </g>
      <circle className="tw1" cx="84" cy="112" r="6" fill="#ffd27a" />
      <circle className="tw2" cx="446" cy="296" r="5" fill="#ffd27a" />
    </svg>
  );
}
