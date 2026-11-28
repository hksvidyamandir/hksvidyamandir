import { useId, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const GRADES = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11 (Science)",
  "Grade 11 (Commerce)",
  "Grade 12",
] as const;

const GOALS = [
  "Campus Tour",
  "Fee & Brochure",
  "Counsellor Call",
] as const;

export type HeroEnquiryCardProps = {
  /** Page context sent inside the WhatsApp enquiry message */
  context: string;
  /** Form heading */
  title?: string;
  /** Compact 1-line subtitle */
  subtitle?: string;
  /** Default selected grade for this page */
  defaultGrade?: string;
  /** Primary submit button copy */
  ctaLabel?: string;
  /** Accent colour matching the page hero */
  accentColor?: string;
};

export function HeroEnquiryCard({
  context,
  title = "Admissions Enquiry 2026–27",
  subtitle = "Get fee structure, curriculum brochure & campus tour slots.",
  defaultGrade = "",
  ctaLabel = "Request Callback & Fee Guide",
  accentColor = "var(--navy)",
}: HeroEnquiryCardProps) {
  const formId = useId();
  const [parent, setParent] = useState("");
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState("");
  const [grade, setGrade] = useState(defaultGrade);
  const [goal, setGoal] = useState<string>(GOALS[0]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [refCode, setRefCode] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = parent.trim();
    const digits = phone.replace(/\D/g, "");

    if (cleanName.length < 2) {
      setError("Please enter the parent or guardian name.");
      return;
    }
    if (digits.length < 10) {
      setError("Please enter a valid 10-digit mobile or WhatsApp number.");
      return;
    }
    if (!grade) {
      setError("Please select the grade applying for.");
      return;
    }

    setError("");
    const code = `HKS-${String(Math.floor(1000 + Math.random() * 9000))}`;
    setRefCode(code);

    const msg = [
      `Hello HKS Vidyamandir Admissions (${code}),`,
      `Page: ${context}`,
      `Request: ${goal}`,
      `Parent: ${cleanName}`,
      student.trim() ? `Student: ${student.trim()}` : null,
      `Phone: ${phone.trim()}`,
      `Grade: ${grade}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      window.open(
        `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } catch {
      // ignore popup blocks in test environments
    }
  };

  const resetForm = () => {
    setRefCode(null);
    setParent("");
    setPhone("");
    setStudent("");
    setNotes("");
    setError("");
  };

  const labelClass = "mb-1 block text-xs font-semibold text-navy";
  const inputClass =
    "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-navy placeholder:text-muted-foreground outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/15";

  return (
    <div
      aria-label={`Admissions enquiry form — ${context}`}
      className="overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-soft"
    >
      <div
        aria-hidden="true"
        className="h-1.5 w-full"
        style={{ backgroundColor: accentColor }}
      />
      <div className="p-5 sm:p-6">
        {refCode ? (
          <div className="space-y-4 py-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-6 w-6 shrink-0 text-[#2f7d4a]"
                strokeWidth={1.8}
              />
              <div>
                <p className="font-display text-xl font-medium text-navy">
                  Enquiry received ({refCode})
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  WhatsApp is ready for our admissions desk. We will contact you within 2 working
                  hours regarding <strong className="font-semibold text-navy">{grade}</strong>.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <Button asChild className="h-10 rounded-lg px-4 text-sm font-semibold">
                <Link to="/application-form">Complete Online Application</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="h-10 rounded-lg px-4 text-sm font-medium"
              >
                Submit Another
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <div>
              <h2 className="font-display text-xl font-medium leading-tight text-navy sm:text-2xl">
                {title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {subtitle}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-parent`} className={labelClass}>
                  Parent / Guardian Name *
                </label>
                <input
                  id={`${formId}-parent`}
                  name="parent"
                  type="text"
                  required
                  maxLength={80}
                  value={parent}
                  onChange={(e) => setParent(e.target.value)}
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-phone`} className={labelClass}>
                  Mobile / WhatsApp *
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  required
                  maxLength={16}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-student`} className={labelClass}>
                  Student&apos;s Name
                </label>
                <input
                  id={`${formId}-student`}
                  name="student"
                  type="text"
                  maxLength={80}
                  value={student}
                  onChange={(e) => setStudent(e.target.value)}
                  placeholder="Child's name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-grade`} className={labelClass}>
                  Grade Applying For *
                </label>
                <select
                  id={`${formId}-grade`}
                  name="grade"
                  required
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select grade
                  </option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <span className={labelClass}>How can we help?</span>
              <div className="grid grid-cols-3 gap-2" role="group" aria-label="Enquiry preference">
                {GOALS.map((item) => {
                  const active = goal === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setGoal(item)}
                      className="rounded-lg border px-2 py-2 text-center text-xs font-semibold transition-colors"
                      style={{
                        borderColor: active ? accentColor : "var(--border)",
                        backgroundColor: active ? accentColor : "var(--background)",
                        color: active ? "#ffffff" : "var(--navy)",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-notes`} className={labelClass}>
                Preferred Tour Day or Question <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input
                id={`${formId}-notes`}
                name="notes"
                type="text"
                maxLength={240}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Saturday morning tour, transport route"
                className={inputClass}
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-cta text-sm font-semibold text-cta-foreground transition-colors hover:bg-navy hover:text-white"
            >
              {ctaLabel}
              <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.7} />
            </Button>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-[11.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-cta" strokeWidth={1.8} />
                Callback in 2 hrs
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-cta" strokeWidth={1.8} />
                Zero spam
              </span>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1 font-semibold text-navy hover:text-cta"
              >
                <Phone className="h-3 w-3" strokeWidth={1.8} />
                {SITE.phone}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
