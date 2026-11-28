import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo(
      "Privacy Policy",
      "Privacy Policy for HKS Vidyamandir covering admission application forms, student health and vaccination records, SEN/counselling disclosures, transport data and parent enquiries.",
      "/privacy-policy",
    ),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  { id: "scope", code: "01", label: "Scope & overview" },
  { id: "data-collected", code: "02", label: "Data we collect" },
  { id: "health-sen", code: "03", label: "Health, SEN & confidentiality" },
  { id: "purpose-sharing", code: "04", label: "How we use & share data" },
  { id: "retention-rights", code: "05", label: "Retention & parental rights" },
  { id: "contact", code: "06", label: "Grievance & contact" },
] as const;

const DATA_CATEGORIES = [
  {
    category: "Learner identity & statutory records",
    fields:
      "Student full name (first, middle, last), gender, date of birth, age as on 1 June, mother tongue, nationality, religion, caste (as per government requirements), blood group, DISE code, SATS / STS number, Aadhaar number, passport-size photographs, and permanent/contact address.",
    purpose: "Admission verification, CBSE registration, state SATS/DISE reporting, and student ID records.",
  },
  {
    category: "Parent, guardian & family details",
    fields:
      "Mother, father and legal guardian names, educational qualifications, occupation & designation, organization, office address, mobile/home/office telephone numbers, email addresses, PAN & Aadhaar numbers, sibling particulars, custody/living-with status, and supporting legal undertakings where applicable.",
    purpose: "Parent verification, legal authority to admit the learner, billing, sibling concessions, and official communication.",
  },
  {
    category: "Academic history & learner profile",
    fields:
      "Previous schools attended, grades completed, academic years, medium of instruction, report cards/transcripts, Transfer Certificate (including BEO-signed inter-state TC), NRI Form C/passport/visa copies (if applicable), home languages, English proficiency, co-curricular achievements, retention/double-promotion records, and optional parent volunteering preferences.",
    purpose: "Grade placement, academic continuity, CBSE compliance, and personalised educational planning.",
  },
  {
    category: "Student health, vaccination & emergency records",
    fields:
      "Known allergies (including medicines), prescribed medications and clinic-stocked medicines, immunisation history (BCG, Chickenpox, Hepatitis A & B, Measles, Mumps, Rubella, Polio, Tetanus), confidential medical/developmental conditions, dietary requirements, family doctor, preferred hospital/clinic, health insurance policy details, and local emergency contacts within a 10 km radius.",
    purpose: "Campus clinic first-aid care, emergency medical response, allergy safety, and physical education precautions.",
  },
  {
    category: "Disciplinary, SEN & counselling disclosures",
    fields:
      "Prior disciplinary history, Special Education Needs (SEN) assessments or learning support areas (speech & language, reading & writing, mathematics, social/behavioural, motor skills), and prior or ongoing counselling/psychological support.",
    purpose: "Confidential academic accommodation, emotional wellbeing support, and structured school-parent collaboration.",
  },
  {
    category: "Support services & website enquiries",
    fields:
      "Second-language choice (Hindi or Kannada), school bus pickup/drop points and authorised pickup guardian phone numbers, compulsory hobby class health notes, sports preferences, Olympiad/excursion consents, and online admission enquiry or WhatsApp/email messages.",
    purpose: "Safe daily bus operations, timetable allocation, activity safety, and responding to family enquiries.",
  },
];

function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Editorial Header */}
      <section className="border-b border-border bg-background">
        <div className="container-site pt-12 pb-14 md:pt-16 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Privacy Policy</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-navy" strokeWidth={1.5} />
                <span>HKS Vidyamandir · Data Protection & Student Confidentiality</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-navy md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
                This Privacy Policy explains how {SITE.name} collects, uses, safeguards and retains
                personal, academic, family and sensitive health information submitted through our
                website, enquiry forms and Students Admission Kit.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-mono text-xs text-muted-foreground">Effective: Academic Year 2026–27</p>
              <Link
                to="/terms-and-conditions"
                className="mt-2 inline-flex items-center gap-1.5 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
              >
                Read Terms & Conditions
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Jump Navigation */}
      <nav
        aria-label="Privacy policy sections"
        className="sticky top-20 z-30 border-b border-border bg-card/95 backdrop-blur lg:top-24"
      >
        <div className="container-site flex items-center gap-6 overflow-x-auto py-0 md:gap-8">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex shrink-0 items-center gap-2 border-b-2 border-transparent py-4 text-sm text-muted-foreground transition-colors hover:border-navy hover:text-navy"
            >
              <span className="font-mono text-xs tabular-nums text-navy">{s.code}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* 3. Main Content */}
      <div className="divide-y divide-border">
        <section id="scope" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">01 / Scope</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Our commitment to student &amp; family privacy
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-span-8">
              <p>
                {SITE.name} respects the privacy and dignity of every prospective learner, enrolled
                student, parent and legal guardian. Because our Students Admission Kit and online
                application process collect statutory identification numbers, academic histories and
                confidential student health details, we process every record strictly for educational
                administration, student safety, statutory CBSE/government compliance and official
                parent communication.
              </p>
              <p>
                We never sell, rent or trade student or parent information to third-party marketers,
                data brokers or external commercial entities.
              </p>
            </div>
          </div>
        </section>

        <section id="data-collected" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-muted-foreground">02 / Data Collected</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Information collected across our admission &amp; enquiry forms
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Each category below maps directly to the fields in our online multi-step Students
                Admission Kit and campus enquiry forms.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-medium text-muted-foreground">
                    <th className="w-64 px-6 py-4">Category</th>
                    <th className="px-6 py-4">Form fields &amp; documents</th>
                    <th className="w-72 px-6 py-4">Primary purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {DATA_CATEGORIES.map((row) => (
                    <tr key={row.category} className="align-top">
                      <td className="px-6 py-5 font-medium text-navy">{row.category}</td>
                      <td className="px-6 py-5 leading-relaxed text-foreground">{row.fields}</td>
                      <td className="px-6 py-5 leading-relaxed text-muted-foreground">
                        {row.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="health-sen" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">03 / Sensitive Data</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Confidentiality of Health, SEN &amp; Counselling records
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-span-8">
              <p>
                Medical histories, allergy alerts, vaccination records, Special Education Needs (SEN)
                information, behavioural/emotional regulation assessments and external certified
                professional reports are treated as strictly confidential school records.
              </p>
              <ul className="space-y-2.5 border-t border-border pt-4 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>
                    Access is restricted on a need-to-know basis to school administration, school nurse /
                    medical officer, designated special educators, school counsellors and relevant
                    class teachers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>
                    As stated in our Admission Kit, recommendations from any informal or external
                    certified evaluation are used solely to support the child&apos;s learning and
                    wellbeing.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>
                    In a medical emergency, relevant allergy, medication, blood-group and insurance
                    details may be shared immediately with attending doctors or hospitals in the
                    best interest of the student.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="purpose-sharing" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">04 / Use &amp; Disclosure</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                When information may be shared
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {[
                {
                  title: "CBSE & Government Authorities",
                  text: "Statutory filings with CBSE, Karnataka Department of Public Instruction (SATS/DISE), Block Education Officers (BEO) for inter-state TCs, and Foreigners Regional Registration Office (Form C) where legally mandated.",
                },
                {
                  title: "Medical & Safety Emergencies",
                  text: "Registered medical practitioners, clinics, hospitals, or student insurance providers when emergency medical assistance or insurance claims are required.",
                },
                {
                  title: "School Operations & Transport",
                  text: "Authorised school transport coordinators and verified bus staff receive pickup/drop points and guardian contact numbers solely for safe daily commuting.",
                },
                {
                  title: "External Competitions & Tours",
                  text: "With prior parental opt-in and consent, student registration details may be submitted to Olympiad organisers (e.g., SOF), inter-school sports bodies, or educational tour partners.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-medium text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="retention-rights" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">05 / Retention &amp; Rights</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Storage, retention &amp; parental rights
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-span-8">
              <p>
                Student admission files, attendance registers, transfer certificates and board
                examination records are retained for the statutory durations prescribed by CBSE and
                applicable Indian education regulations. Website enquiry submissions initiated via
                WhatsApp or email are handled directly by our admissions desk.
              </p>
              <p>
                Parents and legal guardians have the right to request review or correction of
                contact addresses, emergency contacts, medical updates, transport details or parent
                records at any time through the school administrative office. Any change in
                residential address, custody/legal guardianship or student medical status must be
                communicated promptly to keep campus records accurate.
              </p>
              <p className="text-sm text-muted-foreground">
                Note on website forms: Our online multi-step Admission Kit form stores your progress
                only within your active browser session until you choose to print or send your
                application summary to our admissions office. We do not use invasive third-party
                advertising trackers.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-muted-foreground">06 / Grievance &amp; Contact</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy">
                Data privacy queries &amp; administrative office
              </h2>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                <span>{SITE.address}</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-navy">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 transition-colors hover:border-navy"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                <span>{SITE.email}</span>
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 transition-colors hover:border-navy"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                <span>{SITE.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <CtaBand />
    </div>
  );
}
