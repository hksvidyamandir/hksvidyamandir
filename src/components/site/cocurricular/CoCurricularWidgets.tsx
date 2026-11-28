import { useEffect, useRef, useState } from "react";
import { RotateCcw, Play, Shuffle } from "lucide-react";
import type { CoCurricularWidgetConfig } from "@/lib/cocurricular-pages-data";
import { Button } from "@/components/ui/button";

const r2 = (n: number) => Math.round(n * 100) / 100;
function polar(cx: number, cy: number, r: number, a: number): [number, number] {
  return [r2(cx + r * Math.sin(a)), r2(cy - r * Math.cos(a))];
}

/* 1. FILTER */
function FilterWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const cats = (config.cats as [string, string][]) ?? [];
  const items = (config.items as { t: string; d: string; cat: string }[]) ?? [];
  const [active, setActive] = useState("all");
  const visible = active === "all" ? items : items.filter((x) => x.cat === active);

  return (
    <div>
      <div className="vk-chips" role="group" aria-label="Filter items">
        <button
          type="button"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
          className="vk-chip"
        >
          All <em>{items.length}</em>
        </button>
        {cats.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className="vk-chip"
          >
            {label} <em>{items.filter((x) => x.cat === key).length}</em>
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item) => {
          const catLabel = cats.find((c) => c[0] === item.cat)?.[1] ?? "";
          return (
            <article
              key={item.t}
              className="vk-fadeswap flex min-h-[140px] flex-col rounded-2xl border border-border bg-card p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              {catLabel && (
                <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                  {catLabel}
                </small>
              )}
              <h3 className="mt-1 font-display text-lg font-medium text-navy">{item.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{item.d}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* 2. EXPLORER */
function ExplorerWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items =
    (config.items as { t: string; sub?: string; tag?: string; d: string; list?: string[] }[]) ?? [];
  const ordered = Boolean(config.ordered);
  const [idx, setIdx] = useState(0);
  const cur = items[idx] ?? items[0];
  if (!cur) return null;

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="grid gap-2" role="tablist" aria-label="Explore details">
        {items.map((item, i) => {
          const isOn = idx === i;
          return (
            <button
              key={item.t}
              type="button"
              role="tab"
              aria-selected={isOn}
              onClick={() => setIdx(i)}
              className="flex min-h-[52px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors"
              style={{
                borderColor: isOn ? "var(--vt)" : "var(--border)",
                backgroundColor: isOn ? "var(--vt)" : "var(--card)",
                color: isOn ? "#ffffff" : "var(--navy)",
              }}
            >
              <span>{item.t}</span>
              {item.sub && (
                <small
                  className="text-xs font-medium"
                  style={{ color: isOn ? "rgba(255,255,255,0.82)" : "var(--muted-foreground)" }}
                >
                  {item.sub}
                </small>
              )}
            </button>
          );
        })}
      </div>

      <div
        key={cur.t}
        className="vk-fadeswap min-h-[280px] rounded-2xl p-6 text-white/90 sm:p-8"
        style={{ backgroundColor: "var(--vt-deep)" }}
        role="tabpanel"
        aria-live="polite"
      >
        {cur.tag && (
          <span className="inline-block rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-[#ffd27a]">
            {cur.tag}
          </span>
        )}
        <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">{cur.t}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-white/88 sm:text-base">{cur.d}</p>
        {cur.list && cur.list.length > 0 &&
          (ordered ? (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/90">
              {cur.list.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          ) : (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/90">
              {cur.list.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
}

/* 3. FLIP CARDS */
function FlipWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items =
    (config.items as { t: string; k?: string; bt?: string; back: string }[]) ?? [];
  const hint = (config.hint as string) || "Tap or hover to flip";
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => {
        const isOn = !!flipped[i];
        return (
          <div key={item.t} className={`cc-flip relative ${isOn ? "is-on" : ""}`}>
            <button
              type="button"
              aria-label={`${item.t}. ${item.back}`}
              aria-pressed={isOn}
              onClick={() => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }))}
              className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
            />
            <div className="cc-flip-in">
              <div className="cc-flip-f">
                <small className="text-xs font-bold" style={{ color: "var(--vt)" }}>
                  {item.k ?? ""}
                </small>
                <b className="font-display text-xl font-medium text-navy">{item.t}</b>
                <span className="text-xs text-muted-foreground">{hint}</span>
              </div>
              <div className="cc-flip-b">
                <b className="font-display text-lg font-medium text-white">{item.bt || item.t}</b>
                <p className="text-sm leading-relaxed text-white/92">{item.back}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* 4. QUIZ */
function QuizWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const qs = (config.qs as [string, [string, string][]][]) ?? [];
  const results = (config.results as Record<string, { t: string; d: string }>) ?? {};
  const topCount = (config.top as number) || 2;
  const lead = (config.lead as string) || "Good places to start";
  const emptyTitle = (config.empty as string) || "Answer to see a suggestion";
  const emptyNote = (config.emptyNote as string) || "";
  const after = (config.after as string) || "";

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const answered = Object.keys(answers).length;
  const ready = answered >= qs.length;

  const scores: Record<string, number> = {};
  if (ready) {
    Object.values(answers).forEach((val) => {
      val.split(",").forEach((k) => {
        scores[k] = (scores[k] || 0) + 1;
      });
    });
  }
  const topResults = ready
    ? Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topCount)
        .map(([k]) => results[k])
        .filter((x): x is { t: string; d: string } => Boolean(x))
    : [];

  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft lg:grid-cols-[1.15fr_0.85fr] md:p-8">
      <div className="space-y-5">
        {qs.map(([legend, opts], qi) => (
          <fieldset key={legend} className="border-0 p-0">
            <legend className="mb-2.5 text-sm font-semibold text-navy">{legend}</legend>
            <div className="flex flex-wrap gap-2">
              {opts.map(([label, value]) => {
                const active = answers[qi] === value;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswers((prev) => ({ ...prev, [qi]: value }))}
                    className="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                    style={{
                      borderColor: active ? "var(--vt)" : "var(--border)",
                      backgroundColor: active ? "var(--vt)" : "var(--background)",
                      color: active ? "#ffffff" : "var(--navy)",
                    }}
                  >
                    {label}
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
        {!ready ? (
          <div>
            <p className="font-display text-2xl font-medium text-navy sm:text-3xl">
              {answered === 0 ? emptyTitle : `${answered} of ${qs.length} answered`}
            </p>
            <p className="mt-2 text-sm text-foreground">
              {answered === 0 ? emptyNote : "Answer the remaining questions for tailored suggestions."}
            </p>
          </div>
        ) : (
          <div key={topResults.map((r) => r.t).join("-")} className="vk-fadeswap space-y-3">
            <small className="text-xs font-bold text-muted-foreground">{lead}</small>
            {topResults.map((res) => (
              <div key={res.t}>
                <p className="font-display text-2xl font-medium text-navy">{res.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{res.d}</p>
              </div>
            ))}
            {after && <p className="pt-1 text-xs text-muted-foreground">{after}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/* 5. SCHEDULE */
function ScheduleWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const rows = (config.rows as [string, string, string][]) ?? [];
  const note = config.note as string | undefined;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const upd = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const p = Math.min(1, Math.max(0.15, (vh * 0.7 - r.top) / Math.max(1, r.height)));
        setProg(p);
      });
    };
    upd();
    window.addEventListener("scroll", upd, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", upd);
    };
  }, []);

  return (
    <div>
      <div ref={wrapRef} className="relative grid gap-3 pl-9">
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-3 w-0.5 rounded-full bg-border"
        />
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-3 w-0.5 origin-top rounded-full transition-transform duration-200"
          style={{ backgroundColor: "var(--vt)", transform: `scaleY(${prog})` }}
        />
        {rows.map(([time, title, desc], i) => {
          const isOn = (i + 0.45) / Math.max(1, rows.length) <= prog;
          return (
            <div
              key={`${time}-${title}`}
              className="relative grid gap-1 rounded-xl border bg-card px-5 py-4 transition-colors sm:grid-cols-[132px_1fr] sm:gap-4"
              style={{ borderColor: isOn ? "var(--vt)" : "var(--border)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-5 -left-[29px] h-3.5 w-3.5 rounded-full border-2 transition-colors"
                style={{
                  borderColor: isOn ? "var(--vt)" : "var(--border)",
                  backgroundColor: isOn ? "var(--vt)" : "var(--card)",
                }}
              />
              <time className="text-xs font-bold sm:text-sm" style={{ color: "var(--vt)" }}>
                {time}
              </time>
              <div>
                <b className="block text-sm font-semibold text-navy sm:text-base">{title}</b>
                <span className="mt-0.5 block text-sm text-foreground">{desc}</span>
              </div>
            </div>
          );
        })}
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

/* 6. MATRIX */
function MatrixWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const cols = (config.cols as string[]) ?? [];
  const rows = (config.rows as string[][]) ?? [];
  const note = config.note as string | undefined;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="cc-matrix">
          <thead>
            <tr>
              {cols.map((col, i) => (
                <th key={`${col}-${i}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <th>{row[0]}</th>
                {row.slice(1).map((cell, ci) => (
                  <td key={ci} data-label={cols[ci + 1] ?? ""}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

/* 7. WHEEL */
function WheelWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items = (config.items as [string, string, string, string?][]) ?? [];
  const center = (config.center as string) ?? "";
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(config.auto !== false);
  const n = items.length;

  useEffect(() => {
    if (!auto || n <= 1) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % n), 3200);
    return () => clearInterval(id);
  }, [auto, n]);

  const cur = items[idx] ?? items[0];
  if (!cur) return null;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div className="mx-auto w-full max-w-[380px]">
        <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label={center || "Interactive cycle"}>
          {items.map((x, i) => {
            const a0 = (i / n) * Math.PI * 2 + 0.02;
            const a1 = ((i + 1) / n) * Math.PI * 2 - 0.02;
            const [x0, y0] = polar(200, 200, 186, a0);
            const [x1, y1] = polar(200, 200, 186, a1);
            const [x2, y2] = polar(200, 200, 86, a1);
            const [x3, y3] = polar(200, 200, 86, a0);
            const [tx, ty] = polar(200, 200, 136, (a0 + a1) / 2);
            const large = a1 - a0 > Math.PI ? 1 : 0;
            const isOn = idx === i;
            return (
              <g
                key={x[0]}
                onClick={() => {
                  setAuto(false);
                  setIdx(i);
                }}
                className="cursor-pointer transition-opacity duration-300"
                style={{ opacity: isOn ? 1 : 0.42 }}
              >
                <path
                  d={`M${x0} ${y0}A186 186 0 ${large} 1 ${x1} ${y1}L${x2} ${y2}A86 86 0 ${large} 0 ${x3} ${y3}Z`}
                  fill={x[2]}
                />
                <text
                  x={tx}
                  y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#ffffff"
                  fontFamily="Manrope, sans-serif"
                  fontWeight="700"
                  fontSize={n > 6 ? 11 : 13}
                  className="pointer-events-none"
                >
                  {x[3] || i + 1}
                </text>
              </g>
            );
          })}
          <circle cx="200" cy="200" r="78" fill="var(--vt-deep)" />
          <text x="200" y="206" textAnchor="middle" fill="#ffffff" fontFamily="Fraunces, serif" fontSize="18">
            {center}
          </text>
        </svg>
      </div>

      <div
        key={cur[0]}
        className="vk-fadeswap rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
        aria-live="polite"
      >
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
        >
          {idx + 1} of {n}
        </span>
        <h3 className="mt-3 font-display text-2xl font-medium text-navy sm:text-3xl">{cur[0]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{cur[1]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item, i) => (
            <button
              key={item[0]}
              type="button"
              onClick={() => {
                setAuto(false);
                setIdx(i);
              }}
              className="rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors"
              style={{
                borderColor: idx === i ? "var(--vt)" : "var(--border)",
                backgroundColor: idx === i ? "var(--vt)" : "var(--background)",
                color: idx === i ? "#ffffff" : "var(--navy)",
              }}
            >
              {item[3] || item[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 8. PUZZLE */
function PuzzleWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const qs = (config.qs as { k: string; q: string; o: string[]; a: number; why: string }[]) ?? [];
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const cur = qs[qIdx] ?? qs[0];
  if (!cur) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="vk-chips">
        {qs.map((q, i) => (
          <button
            key={q.k}
            type="button"
            aria-pressed={qIdx === i}
            onClick={() => {
              setQIdx(i);
              setPicked(null);
            }}
            className="vk-chip"
          >
            {q.k}
          </button>
        ))}
      </div>

      <div key={cur.k} className="vk-fadeswap mt-5" aria-live="polite">
        <p className="font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
          {cur.q}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {cur.o.map((opt, oi) => {
            const isCorrect = picked !== null && oi === cur.a;
            const isWrong = picked === oi && oi !== cur.a;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setPicked(oi)}
                className="min-h-[50px] rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors"
                style={{
                  borderColor: isCorrect
                    ? "#15803d"
                    : isWrong
                      ? "#c2410c"
                      : "var(--border)",
                  backgroundColor: isCorrect
                    ? "#e3f4e8"
                    : isWrong
                      ? "#fde8e4"
                      : "var(--background)",
                  color: "var(--navy)",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div
            className="mt-4 rounded-xl p-4 text-sm text-foreground"
            style={{ backgroundColor: "var(--vt-soft)" }}
          >
            <strong className="mr-1.5 text-navy">
              {picked === cur.a ? "Correct." : "Not quite."}
            </strong>
            {cur.why}
          </div>
        )}
      </div>
    </div>
  );
}

/* 9. ROBOT */
function RobotWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const walls = (config.walls as [number, number][]) ?? [[1, 1], [2, 1], [3, 3], [1, 3]];
  const goal = (config.goal as [number, number]) ?? [4, 4];
  const title = (config.title as string) || "Program the robot";
  const text =
    (config.text as string) || "Add commands, then press Run. Reach the star without hitting a wall.";

  const [program, setProgram] = useState<("F" | "L" | "R")[]>([]);
  const [pos, setPos] = useState({ x: 0, y: 0, d: 1 });
  const [msg, setMsg] = useState("");
  const [running, setRunning] = useState(false);

  const isWall = (x: number, y: number) => walls.some((w) => w[0] === x && w[1] === y);

  const addCmd = (c: "F" | "L" | "R") => {
    if (running || program.length >= 16) return;
    setProgram((p) => [...p, c]);
  };

  const clearAll = () => {
    if (running) return;
    setProgram([]);
    setPos({ x: 0, y: 0, d: 1 });
    setMsg("");
  };

  const runProgram = async () => {
    if (running || program.length === 0) return;
    setRunning(true);
    setMsg("Running...");
    const st = { x: 0, y: 0, d: 1 };
    setPos({ ...st });
    const dirs = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ] as const;

    for (const cmd of program) {
      await new Promise((res) => setTimeout(res, 280));
      if (cmd === "L") {
        st.d = (st.d + 3) % 4;
      } else if (cmd === "R") {
        st.d = (st.d + 1) % 4;
      } else {
        const nx = st.x + dirs[st.d]![0];
        const ny = st.y + dirs[st.d]![1];
        if (nx < 0 || ny < 0 || nx > 4 || ny > 4 || isWall(nx, ny)) {
          setMsg("Bump! That's a wall or the edge. Debug and try again.");
          setRunning(false);
          return;
        }
        st.x = nx;
        st.y = ny;
      }
      setPos({ ...st });
    }

    if (st.x === goal[0] && st.y === goal[1]) {
      setMsg(`Solved in ${program.length} commands. That's computational thinking!`);
    } else {
      setMsg("Not at the star yet. Add more commands.");
    }
    setRunning(false);
  };

  return (
    <div className="grid items-start gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft md:grid-cols-[auto_1fr] sm:p-8">
      <div className="cc-robot-grid mx-auto" aria-label="5 by 5 robot grid">
        {Array.from({ length: 25 }).map((_, idx) => {
          const x = idx % 5;
          const y = Math.floor(idx / 5);
          const wall = isWall(x, y);
          const isGoal = x === goal[0] && y === goal[1];
          const isBot = x === pos.x && y === pos.y;
          return (
            <div
              key={idx}
              className={`cc-robot-cell relative grid place-items-center ${wall ? "is-wall" : ""}`}
            >
              {isGoal && !isBot && (
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-label="Goal star">
                  <path
                    d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"
                    fill="#ee8a2c"
                  />
                </svg>
              )}
              {isBot && (
                <svg
                  viewBox="0 0 40 40"
                  className="h-9 w-9 transition-transform duration-300"
                  style={{ transform: `rotate(${(pos.d - 1) * 90}deg)` }}
                  aria-label="Robot"
                >
                  <rect x="6" y="10" width="28" height="22" rx="6" fill="var(--vt)" />
                  <circle cx="15" cy="20" r="3" fill="#ffffff" />
                  <circle cx="25" cy="20" r="3" fill="#ffffff" />
                  <path d="M20 10V5" stroke="var(--vt)" strokeWidth="3" />
                  <path d="M34 21l5 0" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="font-display text-2xl font-medium text-navy">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground">{text}</p>

        <div
          className="mt-4 flex min-h-[52px] flex-wrap items-center gap-1.5 rounded-xl border border-dashed border-border bg-background p-2.5"
          aria-live="polite"
        >
          {program.length === 0 ? (
            <span className="px-2 text-xs text-muted-foreground">Your program appears here</span>
          ) : (
            program.map((cmd, i) => (
              <span
                key={i}
                className="rounded-md px-2.5 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: "var(--vt)" }}
              >
                {cmd === "F" ? "Forward" : cmd === "L" ? "Left" : "Right"}
              </span>
            ))
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => addCmd("F")} className="vk-chip">
            Forward
          </button>
          <button type="button" onClick={() => addCmd("L")} className="vk-chip">
            Turn left
          </button>
          <button type="button" onClick={() => addCmd("R")} className="vk-chip">
            Turn right
          </button>
          <Button
            type="button"
            disabled={running || program.length === 0}
            onClick={runProgram}
            className="h-10 rounded-lg bg-cta px-4 text-sm font-semibold text-cta-foreground hover:bg-navy hover:text-white"
          >
            <Play className="mr-1.5 h-3.5 w-3.5" />
            Run
          </Button>
          <Button type="button" variant="outline" onClick={clearAll} className="h-10 rounded-lg px-3 text-sm">
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
            Clear
          </Button>
        </div>

        {msg && (
          <p className="mt-3 text-sm font-semibold" style={{ color: "var(--vt-deep)" }} aria-live="polite">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}

/* 10. RADAR */
function RadarWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const skills = (config.skills as string[]) ?? [];
  const note = (config.note as string) || "A conversation starter, not an assessment.";
  const [vals, setVals] = useState<number[]>(() => skills.map(() => 3));
  const n = Math.max(1, skills.length);

  const pt = (r: number, i: number): [number, number] => [
    r2(200 + r * Math.sin((i / n) * Math.PI * 2)),
    r2(200 - r * Math.cos((i / n) * Math.PI * 2)),
  ];

  const polyPoints = vals.map((v, i) => pt(v * 30, i).join(",")).join(" ");

  return (
    <div className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-soft md:grid-cols-2 sm:p-8">
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <label key={skill} className="block">
            <div className="mb-1 flex items-center justify-between text-sm font-semibold text-navy">
              <span>{skill}</span>
              <output className="font-mono text-xs tabular-nums" style={{ color: "var(--vt)" }}>
                {vals[i]} / 5
              </output>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={vals[i] ?? 3}
              aria-label={skill}
              onChange={(e) => {
                const next = Number(e.target.value);
                setVals((prev) => prev.map((v, idx) => (idx === i ? next : v)));
              }}
              className="w-full accent-[#6d28d9]"
            />
          </label>
        ))}
      </div>

      <div className="mx-auto w-full max-w-[360px]">
        <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label="Skill profile chart">
          {[1, 2, 3, 4, 5].map((ring) => (
            <polygon
              key={ring}
              points={skills.map((_, i) => pt(ring * 30, i).join(",")).join(" ")}
              fill="none"
              stroke="#e3e1ea"
            />
          ))}
          {skills.map((label, i) => {
            const [lx, ly] = pt(150, i);
            const [tx, ty] = pt(172, i);
            return (
              <g key={label}>
                <line x1="200" y1="200" x2={lx} y2={ly} stroke="#e3e1ea" />
                <text
                  x={tx}
                  y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#23286b"
                >
                  {label.split(" ")[0]}
                </text>
              </g>
            );
          })}
          <polygon
            points={polyPoints}
            fill="var(--vt)"
            fillOpacity="0.24"
            stroke="var(--vt)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {vals.map((v, i) => {
            const [cx, cy] = pt(v * 30, i);
            return <circle key={i} cx={cx} cy={cy} r="5" fill="var(--vt)" />;
          })}
        </svg>
        <p className="mt-2 text-center text-xs text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

/* 11. LAYERS */
function LayersWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items = (config.items as [string, string, string][]) ?? [];
  const center = (config.center as string) ?? "";
  const [idx, setIdx] = useState(0);
  const n = Math.max(1, items.length);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div className="mx-auto w-full max-w-[380px]">
        <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label={center || "Concentric layers"}>
          {items.map(([label, , color], i) => {
            const r = 190 - i * (145 / n);
            return (
              <g key={label}>
                <circle
                  cx="200"
                  cy="200"
                  r={r}
                  fill={color}
                  stroke="#ffffff"
                  strokeWidth="3"
                  className="cursor-pointer transition-opacity duration-300"
                  style={{ opacity: idx === i ? 1 : 0.52 }}
                  onClick={() => setIdx(i)}
                />
                <text
                  x="200"
                  y={200 - r + 22}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="800"
                  fill="#ffffff"
                  className="pointer-events-none"
                >
                  {label}
                </text>
              </g>
            );
          })}
          <text x="200" y="206" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="19" fill="#ffffff">
            {center}
          </text>
        </svg>
      </div>

      <div className="grid gap-2">
        {items.map(([title, desc], i) => {
          const isOn = idx === i;
          return (
            <button
              key={title}
              type="button"
              onClick={() => setIdx(i)}
              className="rounded-xl p-4 text-left transition-colors"
              style={{ backgroundColor: isOn ? "var(--vt-soft)" : "var(--card)", border: "1px solid var(--border)" }}
            >
              <b className="block text-base font-semibold text-navy">{title}</b>
              <span className={`mt-1 block text-sm leading-relaxed text-foreground ${isOn ? "block" : "hidden"}`}>
                {desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* 12. ROUTE */
function RouteWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const stops = (config.stops as [string, string][]) ?? [];
  const label = (config.label as string) || "Route";
  const note = config.note as string | undefined;
  const n = Math.max(2, stops.length);
  const [activeStop, setActiveStop] = useState(n - 1);

  const W = 1000;
  const xs = stops.map((_, i) => 60 + (i * (W - 120)) / (n - 1));
  const ys = stops.map((_, i) => (i % 2 ? 60 : 120));
  const pathD = xs
    .map((x, i) => (i ? `S${x - 60} ${ys[i]} ` : `M${x} ${ys[i]} `) + `${x} ${ys[i]}`)
    .join(" ");

  const busX = xs[activeStop] ?? xs[0] ?? 60;
  const busY = (ys[activeStop] ?? 120) - 30;

  return (
    <div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <svg viewBox={`0 0 ${W} 175`} className="h-auto w-full" role="img" aria-label={label}>
          <path d={pathD} fill="none" stroke="#e3e1ea" strokeWidth="8" strokeLinecap="round" />
          <path d={pathD} fill="none" stroke="var(--vt)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          {xs.map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={ys[i]}
              r="14"
              fill={i <= activeStop ? "var(--vt)" : "#ffffff"}
              stroke="var(--vt)"
              strokeWidth="4"
              className="cursor-pointer"
              onClick={() => setActiveStop(i)}
            />
          ))}
          <g
            transform={`translate(${busX} ${busY})`}
            style={{ transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <rect x="-26" y="-16" width="52" height="30" rx="8" fill="#ffd27a" />
            <rect x="-18" y="-10" width="14" height="10" rx="2" fill="#ffffff" />
            <rect x="2" y="-10" width="14" height="10" rx="2" fill="#ffffff" />
            <circle cx="-14" cy="16" r="5" fill="#23286b" />
            <circle cx="14" cy="16" r="5" fill="#23286b" />
          </g>
        </svg>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stops.map(([title, desc], i) => {
            const isOn = i === activeStop;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setActiveStop(i)}
                className="rounded-xl border p-3.5 text-left transition-colors"
                style={{
                  borderColor: isOn ? "var(--vt)" : "var(--border)",
                  backgroundColor: isOn ? "var(--vt-soft)" : "var(--background)",
                }}
              >
                <b className="block text-sm font-semibold text-navy">{title}</b>
                <span className="mt-0.5 block text-xs leading-relaxed text-foreground">{desc}</span>
              </button>
            );
          })}
        </div>
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

/* 13. MONTHS SCROLLER (WIDE CARDS) */
function MonthsWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items = (config.items as [string, string, string][]) ?? [];
  const hot = config.hot as number | undefined;
  const note = config.note as string | undefined;

  return (
    <div>
      <div className="cc-months">
        {items.map(([kicker, title, desc], i) => {
          const isHot = hot === i;
          return (
            <article
              key={`${kicker}-${title}`}
              className="flex min-h-[210px] flex-col gap-2 rounded-2xl border p-6"
              style={{
                borderColor: isHot ? "var(--vt)" : "var(--border)",
                backgroundColor: isHot ? "var(--vt)" : "var(--card)",
                color: isHot ? "#ffffff" : "var(--foreground)",
              }}
            >
              <small
                className="text-xs font-bold"
                style={{ color: isHot ? "#ffd27a" : "var(--vt)" }}
              >
                {kicker}
              </small>
              <h3
                className="font-display text-2xl font-medium"
                style={{ color: isHot ? "#ffffff" : "var(--navy)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isHot ? "rgba(255,255,255,0.9)" : "var(--foreground)" }}
              >
                {desc}
              </p>
            </article>
          );
        })}
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

/* 14. PLANNER */
function PlannerWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const days = (config.days as string[]) || ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const rows = (config.rows as string[]) ?? [];
  const emptyMsg =
    (config.empty as string) ||
    "Tap the days your family is interested in so we can guide you on matching batches.";
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggle = (r: number, d: number) => {
    const key = `${r}-${d}`;
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const summary = rows
    .map((rowLabel, ri) => {
      const pickedDays = days.filter((_, di) => selected[`${ri}-${di}`]);
      return pickedDays.length > 0 ? `${rowLabel} (${pickedDays.join(", ")})` : null;
    })
    .filter(Boolean);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] border-separate border-spacing-1.5">
          <thead>
            <tr>
              <th className="p-1 text-left text-xs font-semibold text-muted-foreground" />
              {days.map((d) => (
                <th key={d} className="p-1 text-center text-xs font-semibold text-muted-foreground">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rowLabel, ri) => (
              <tr key={rowLabel}>
                <th className="pr-3 text-left text-sm font-semibold whitespace-nowrap text-navy">
                  {rowLabel}
                </th>
                {days.map((d, di) => {
                  const isOn = !!selected[`${ri}-${di}`];
                  return (
                    <td key={d}>
                      <button
                        type="button"
                        aria-pressed={isOn}
                        aria-label={`${rowLabel} on ${d}`}
                        onClick={() => toggle(ri, di)}
                        className="grid h-10 w-full place-items-center rounded-lg border transition-colors"
                        style={{
                          borderColor: isOn ? "var(--vt)" : "var(--border)",
                          backgroundColor: isOn ? "var(--vt)" : "var(--background)",
                        }}
                      >
                        {isOn && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="mt-4 rounded-xl px-4 py-3 text-sm text-foreground"
        style={{ backgroundColor: "var(--vt-soft)" }}
        aria-live="polite"
      >
        {summary.length === 0 ? (
          emptyMsg
        ) : (
          <>
            <strong className="text-navy">Your interest:</strong> {summary.join("; ")}.
            <span className="mt-1 block text-xs text-muted-foreground">
              Share these preferences with our admissions team during your campus visit.
            </span>
          </>
        )}
      </div>
    </div>
  );
}

/* 15. DEBATE MOTION SPINNER */
function MotionWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const motions = (config.motions as string[]) ?? [];
  const label = (config.label as string) || "This house believes";
  const pro = (config.pro as string) || "Argue for the motion with three clear points.";
  const opp = (config.opp as string) || "Argue against it, and rebut one point.";
  const btn = (config.btn as string) || "Spin a new motion";
  const [idx, setIdx] = useState(0);

  return (
    <div
      className="rounded-2xl p-6 text-center text-white shadow-soft sm:p-10"
      style={{ backgroundColor: "var(--vt-deep)" }}
    >
      <span className="inline-block rounded-full bg-white/14 px-3.5 py-1 text-xs font-semibold text-[#ffd27a]">
        {label}
      </span>
      <p
        key={idx}
        className="vk-fadeswap mx-auto my-5 max-w-2xl font-display text-2xl font-medium leading-snug text-white sm:text-4xl"
        aria-live="polite"
      >
        {motions[idx] ?? ""}
      </p>
      <div className="mx-auto mb-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">
        <div className="rounded-xl bg-white/10 p-4 text-sm text-white/90">
          <b className="mb-1 block text-xs font-bold text-[#ffd27a]">Proposition</b>
          {pro}
        </div>
        <div className="rounded-xl bg-white/10 p-4 text-sm text-white/90">
          <b className="mb-1 block text-xs font-bold text-[#ffd27a]">Opposition</b>
          {opp}
        </div>
      </div>
      <Button
        type="button"
        onClick={() => setIdx((v) => (v + 1) % Math.max(1, motions.length))}
        className="h-11 rounded-lg bg-[#ee8a2c] px-6 text-sm font-semibold text-white hover:bg-[#ffd27a] hover:text-[#151947]"
      >
        <Shuffle className="mr-1.5 h-4 w-4" />
        {btn}
      </Button>
    </div>
  );
}

/* 16. ARCS MAP */
function ArcsWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const home = (config.home as [number, number]) ?? [500, 300];
  const blobs = (config.blobs as [number, number, number, number][]) ?? [];
  const dest = (config.dest as [string, number, number, string][]) ?? [];
  const [idx, setIdx] = useState(0);
  const cur = dest[idx] ?? dest[0];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <svg viewBox="0 0 1000 460" className="h-auto w-full" role="img" aria-label="Study tour destinations map">
        <rect width="1000" height="460" rx="20" fill="var(--vt-soft)" />
        {blobs.map(([cx, cy, rx, ry], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="#ffffff" opacity="0.82" />
        ))}
        {dest.map(([name, dx, dy], i) => {
          const mx = (home[0] + dx) / 2;
          const my = Math.min(home[1], dy) - 110;
          const active = idx === i;
          return (
            <g key={name} className="cursor-pointer" onClick={() => setIdx(i)}>
              <path
                d={`M${home[0]} ${home[1]} Q${mx} ${my} ${dx} ${dy}`}
                fill="none"
                stroke="var(--vt)"
                strokeWidth={active ? 5 : 2.5}
                strokeDasharray="6 8"
                opacity={active ? 1 : 0.28}
              />
              <circle cx={dx} cy={dy} r={active ? 11 : 8} fill="var(--vt)" />
              <text
                x={dx}
                y={dy + 28}
                textAnchor="middle"
                fontSize="15"
                fontWeight="700"
                fill="#23286b"
              >
                {name}
              </text>
            </g>
          );
        })}
        <circle cx={home[0]} cy={home[1]} r="12" fill="#ee8a2c" />
        <text x={home[0]} y={home[1] + 32} textAnchor="middle" fontSize="15" fontWeight="800" fill="#23286b">
          Bengaluru
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap gap-2">
        {dest.map(([name], i) => (
          <button
            key={name}
            type="button"
            aria-pressed={idx === i}
            onClick={() => setIdx(i)}
            className="vk-chip"
          >
            {name}
          </button>
        ))}
      </div>

      {cur && (
        <p className="mt-3 text-sm leading-relaxed text-foreground" aria-live="polite">
          <strong className="text-navy">{cur[0]}:</strong> {cur[3]}
        </p>
      )}
    </div>
  );
}

/* 17. QUADRANT */
function QuadrantWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const ax = (config.ax as [string, string, string, string]) ?? ["Top", "Bottom", "Left", "Right"];
  const items = (config.items as [string, number, number, string, string?][]) ?? [];
  const [idx, setIdx] = useState(0);
  const cur = items[idx] ?? items[0];

  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-square w-full max-w-[460px] mx-auto rounded-2xl border border-border bg-card p-6">
        <div aria-hidden="true" className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-border" />
        <div aria-hidden="true" className="absolute right-6 left-6 top-1/2 h-0.5 bg-border" />
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-bold text-muted-foreground">
          {ax[0]}
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-bold text-muted-foreground">
          {ax[1]}
        </span>
        <span className="absolute top-1/2 left-2 -translate-y-6 text-[11px] font-bold text-muted-foreground">
          {ax[2]}
        </span>
        <span className="absolute top-1/2 right-2 -translate-y-6 text-[11px] font-bold text-muted-foreground">
          {ax[3]}
        </span>

        {items.map(([name, left, top], i) => {
          const isOn = idx === i;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setIdx(i)}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-bold text-white transition-transform"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                backgroundColor: isOn ? "var(--vt-deep)" : "var(--vt)",
                transform: `translate(-50%, -50%) scale(${isOn ? 1.1 : 1})`,
              }}
            >
              {name}
            </button>
          );
        })}
      </div>

      {cur && (
        <div
          key={cur[0]}
          className="vk-fadeswap rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
          aria-live="polite"
        >
          {cur[4] && (
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: "var(--vt-soft)", color: "var(--vt-deep)" }}
            >
              {cur[4]}
            </span>
          )}
          <h3 className="mt-2 font-display text-2xl font-medium text-navy">{cur[0]}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{cur[3]}</p>
        </div>
      )}
    </div>
  );
}

/* 18. TABS OF CARDS */
function TabsWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const tabs = (config.tabs as [string, [string, string][]][]) ?? [];
  const note = config.note as string | undefined;
  const [idx, setIdx] = useState(0);
  const cur = tabs[idx] ?? tabs[0];
  if (!cur) return null;

  return (
    <div>
      <div className="vk-chips" role="tablist" aria-label="Explore categories">
        {tabs.map(([label], i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={idx === i}
            onClick={() => setIdx(i)}
            className="vk-chip"
          >
            {label}
          </button>
        ))}
      </div>

      <div
        key={cur[0]}
        className="vk-fadeswap mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="tabpanel"
        aria-live="polite"
      >
        {cur[1].map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-lg font-medium text-navy">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">{desc}</p>
          </article>
        ))}
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

/* 19. CHECKLIST RING */
function ChecklistWidget({ config }: { config: CoCurricularWidgetConfig }) {
  const items = (config.items as string[]) ?? [];
  const startMsg = (config.start as string) || "Tick the items that apply.";
  const midMsg = (config.mid as string) || "Great progress.";
  const doneMsg = (config.done as string) || "All set!";
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  const count = checked.filter(Boolean).length;
  const offset = r2(314 - (314 * count) / Math.max(1, items.length));
  const message = count === items.length ? doneMsg : count > 0 ? midMsg : startMsg;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <div className="relative h-36 w-36">
          <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--vt-soft)" strokeWidth="12" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="var(--vt)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="314"
              strokeDashoffset={offset}
              transform="rotate(-90 60 60)"
              style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
            />
          </svg>
          <b className="absolute inset-0 grid place-items-center font-display text-xl font-medium text-navy">
            {count} of {items.length}
          </b>
        </div>
        <p className="mt-3 max-w-xs text-sm font-medium text-navy" aria-live="polite">
          {message}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => {
          const isOn = !!checked[i];
          return (
            <label
              key={item}
              className="flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition-colors"
              style={{
                borderColor: isOn ? "var(--vt)" : "var(--border)",
                backgroundColor: isOn ? "var(--vt-soft)" : "var(--card)",
              }}
            >
              <input
                type="checkbox"
                checked={isOn}
                onChange={() =>
                  setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                }
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <span className="text-foreground">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export function CoCurricularWidget({ config }: { config: CoCurricularWidgetConfig }) {
  switch (config.type) {
    case "filter":
      return <FilterWidget config={config} />;
    case "explorer":
      return <ExplorerWidget config={config} />;
    case "flip":
      return <FlipWidget config={config} />;
    case "quiz":
      return <QuizWidget config={config} />;
    case "schedule":
      return <ScheduleWidget config={config} />;
    case "matrix":
      return <MatrixWidget config={config} />;
    case "wheel":
      return <WheelWidget config={config} />;
    case "puzzle":
      return <PuzzleWidget config={config} />;
    case "robot":
      return <RobotWidget config={config} />;
    case "radar":
      return <RadarWidget config={config} />;
    case "layers":
      return <LayersWidget config={config} />;
    case "route":
      return <RouteWidget config={config} />;
    case "months":
      return <MonthsWidget config={config} />;
    case "planner":
      return <PlannerWidget config={config} />;
    case "motion":
      return <MotionWidget config={config} />;
    case "arcs":
      return <ArcsWidget config={config} />;
    case "quadrant":
      return <QuadrantWidget config={config} />;
    case "tabs":
      return <TabsWidget config={config} />;
    case "checklist":
      return <ChecklistWidget config={config} />;
    default:
      return null;
  }
}
