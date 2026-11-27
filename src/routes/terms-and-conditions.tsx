import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    seo(
      "Terms & Conditions — School Policy, Fee Policy & Parents Undertaking",
      "Official Terms & Conditions, Admission Documents Checklist, Non-Refundable Fee Policy, Support Services Rules, Student Health Disclaimer and Parents Undertaking for HKS Vidyamandir.",
      "/terms-and-conditions",
    ),
  component: TermsAndConditionsPage,
});

const SECTION_LINKS = [
  { id: "documents", code: "01", label: "Admission documents" },
  { id: "fee-policy", code: "02", label: "Fee policy & schedule" },
  { id: "sen-regulation", code: "03", label: "Disciplinary & SEN policy" },
  { id: "health-disclaimer", code: "04", label: "Health disclaimer" },
  { id: "support-services", code: "05", label: "Support services" },
  { id: "undertaking", code: "06", label: "Parents undertaking" },
] as const;

const ADMISSION_DOCUMENTS = [
  "Photocopy of the birth certificate issued by the municipal corporation",
  "Original Transfer Certificate (TC) / TC requisition form",
  "Photocopy of Aadhaar card (student and parents)",
  "Photocopy of online TC (state)",
  "SATS (Student Achievement Tracking System) number",
  "Photocopy of caste certificate (if applicable)",
  "Study certificate from previous school",
  "Photocopy of previous year's marks card / report cards (last 2 years)",
  "4 passport-size photographs of the student",
  "Inter-state Transfer Certificate must be handed over directly with the BEO signature",
  "Passport-size photographs of parents and legal guardian",
  "For other nationals or NRI students: Form C is compulsory along with a copy of passport and visa",
];

const FEE_NON_REFUNDABLE = [
  ["Registration fee", "Non-refundable"],
  ["Application fee", "Non-refundable"],
  ["Renewal fee", "Non-refundable"],
  ["Annual tuition fee", "Non-refundable"],
  ["Books & stationery fee", "Non-refundable"],
  ["Uniform fee", "Non-refundable"],
  ["Transportation fee", "Non-refundable"],
] as const;

const SUSPENSION_GROUNDS = [
  "Using unfair means in examination",
  "Consistent unsatisfactory academic progress",
  "Immorality",
  "Grave insubordination",
  "Stealing or extortion of money and/or items from other students or the school",
  "Contempt of authority",
  "Breaking campus bounds",
  "Damaging school property",
  "Any word or action likely to undermine the reputation of the institution",
  "Bullying, assaulting, use of abusive language and ragging in any form",
  "Smoking, alcohol abuse and substance abuse",
  "Any other objectionable act",
  "Bringing, buying or supplying prohibited items (junk/processed/packed food & drinks, electronic gadgets) on campus",
];

const UNDERTAKING_CLAUSES = [
  {
    no: "01",
    title: "Timely fee deposit",
    text: "Parents/guardians undertake to deposit the school fee as per the schedule before the beginning of each term. If the school fee and applicable penalty are not paid within 20 days from the due date, parents agree to pay the penalty decided by the Management.",
  },
  {
    no: "02",
    title: "Leave applications",
    text: "Sick leave (post diagnosis) or leave to attend a family marriage must be applied for in writing addressed to the School Principal, accompanied by a medical certificate or wedding invitation card respectively.",
  },
  {
    no: "03",
    title: "Grounds for suspension",
    text: "Parents understand and accept that a student may be suspended from the school for any of the disciplinary violations listed in the Code of Conduct below.",
  },
  {
    no: "04",
    title: "Medical aid & communicable illness",
    text: "The school will do its best to provide immediate first-aid and medical assistance, but will not be held responsible for sickness or undisclosed pre-existing diseases. In cases of communicable infectious disease or planned surgeries/procedures, the student will remain at home until full recovery.",
  },
  {
    no: "05",
    title: "Unauthorised departure from campus",
    text: "If a student leaves or absconds from the school campus without prior permission from school authorities, the Management reserves the right to lodge a police complaint (F.I.R.) in the interest of student safety, and the school shall not be held responsible for any mishap in such circumstances.",
  },
  {
    no: "06",
    title: "Punctuality on opening days",
    text: "Parents shall ensure their ward reports punctually on all school reopening days specified in the academic calendar; unexcused absence will invite disciplinary action.",
  },
  {
    no: "07",
    title: "Prohibited personal items",
    text: "Students shall not wear, carry or use cash, electronic gadgets or valuable ornaments on school premises. Prohibited items confiscated by school authorities cannot be claimed and will not be returned.",
  },
  {
    no: "08",
    title: "Parent visiting schedule",
    text: "Parents and guardians shall visit the school only on designated parent visiting days as notified by the school.",
  },
  {
    no: "09",
    title: "Educator communication hours",
    text: "Parents shall contact educators and heads of school by phone or in person strictly during the specified hours mentioned in the Learner's Almanac.",
  },
  {
    no: "10",
    title: "Campus visits by appointment",
    text: "Parents will not enter the campus during school hours without a prior appointment with the Principal through the School Office.",
  },
  {
    no: "11",
    title: "CBSE Board Examination fees",
    text: "Any additional fees prescribed under CBSE Board Examination rules shall be paid by parents as applicable.",
  },
  {
    no: "12",
    title: "Cooperation & activity liability",
    text: "Parents assure full cooperation with school authorities in the interest of their ward and agree to abide by all school rules. Despite basic safety precautions taken by the school, if an accidental mishap or injury occurs during school hours, tours, excursions, sports activities or camps, the institution and its staff shall not be held wholly or partly liable.",
  },
  {
    no: "13",
    title: "Non-interference & respect for staff",
    text: "Parents shall not invoke the names of Management Committee members or external influential persons to seek fee concessions, special permissions, or to pressurise teachers and staff on duty.",
  },
];

function TermsAndConditionsPage() {
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
            <span className="font-medium text-navy">Terms &amp; Conditions</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <FileText className="h-4 w-4 text-navy" strokeWidth={1.5} />
                <span>Students Admission Kit · School Policy &amp; Parents Undertaking</span>
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-navy md:text-5xl">
                Terms &amp; Conditions
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
                Admission guidelines, documentation checklist, fee payment schedule, support service
                terms, medical disclaimer and parents&apos; undertaking governing admission and
                enrolment at {SITE.name}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.print()}
                className="h-10 rounded-lg border-border bg-card px-4 text-sm font-medium text-navy hover:bg-muted"
              >
                <Printer className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Print policy
              </Button>
              <Link
                to="/admissions"
                hash="application-form"
                className="inline-flex items-center gap-1.5 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
              >
                Open admission form
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Jump Navigation */}
      <nav
        aria-label="Terms sections"
        className="sticky top-20 z-30 border-b border-border bg-card/95 backdrop-blur lg:top-24"
      >
        <div className="container-site flex items-center gap-6 overflow-x-auto py-0 md:gap-8">
          {SECTION_LINKS.map((s) => (
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

      {/* 3. Policy Sections */}
      <div className="divide-y divide-border">
        {/* 01. Documents Required */}
        <section id="documents" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">01 / School Policy</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Documents to be submitted during admission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Admission is confirmed only upon submission of complete, factually accurate
                documentation and verification by the admissions office.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {ADMISSION_DOCUMENTS.map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-background p-4 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02. Fee Policy */}
        <section id="fee-policy" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-muted-foreground">02 / Fee Policy</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Fee terms, refund policy &amp; installment deadlines
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                All fees once paid are strictly non-refundable. New admissions are confirmed only
                after depositing the Registration fee, Admission fee and the first installment
                within the notified deadline.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="overflow-hidden rounded-xl border border-border bg-card lg:col-span-5">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-xs font-medium text-muted-foreground">
                      <th className="px-5 py-3.5">Fee Component</th>
                      <th className="px-5 py-3.5 text-right">Refund Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {FEE_NON_REFUNDABLE.map(([name, status]) => (
                      <tr key={name}>
                        <td className="px-5 py-3.5 font-medium text-navy">{name}</td>
                        <td className="px-5 py-3.5 text-right text-muted-foreground">{status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6 lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="font-mono text-xs text-muted-foreground">Existing students</p>
                    <h3 className="mt-1 font-display text-lg font-medium text-navy">
                      3 Installment Deadlines
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                      <li>1st Installment: before 15 May</li>
                      <li>2nd Installment: before 15 August</li>
                      <li>3rd Installment: before 15 October</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="font-mono text-xs text-muted-foreground">New students</p>
                    <h3 className="mt-1 font-display text-lg font-medium text-navy">
                      4 Installment Deadlines
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                      <li>1st Installment: at the time of admission</li>
                      <li>2nd Installment: before 15 May</li>
                      <li>3rd Installment: before 15 August</li>
                      <li>4th Installment: before 15 October</li>
                    </ul>
                  </div>
                </div>

                <ul className="space-y-2.5 rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-foreground">
                  <li>
                    <strong className="text-navy">First installment components:</strong> Admission,
                    Activity, Uniform, Books, Transport (Term 1) and Term 1 Tuition fee are payable
                    in the first installment (within 5 working days). The fee structure does not
                    include a meal plan.
                  </li>
                  <li>
                    <strong className="text-navy">Late fee &amp; non-payment:</strong> A late fee
                    fine of ₹100 per day applies beyond the due date. If fees remain unpaid for one
                    month past the deadline, the child&apos;s name will be struck off the school
                    rolls.
                  </li>
                  <li>
                    <strong className="text-navy">Re-admission &amp; quarterly rule:</strong> A
                    re-admission fine of ₹5,000 applies for all classes and cases (fee defaulters
                    and disciplinary cases). Tuition fee must be paid every quarter, failing which
                    school facilities will be withdrawn.
                  </li>
                  <li>
                    <strong className="text-navy">Transport fee payment order:</strong> It is
                    mandatory to pay the applicable term/school fee before paying the school
                    transport fee, as the fee software requires the term fee to be settled first.
                  </li>
                  <li>
                    <strong className="text-navy">Student insurance:</strong> Student insurance
                    provided by the school management lapses immediately from the date of
                    collecting the Transfer Certificate (TC) from the school office.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Disciplinary History & SEN */}
        <section id="sen-regulation" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">03 / Student Support</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Learning, behavioural &amp; emotional regulation
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-span-8">
              <p>
                Parents must truthfully disclose any prior disciplinary history, Special Education
                Needs (SEN) assessments or counselling support in the Admission Kit so the school
                can plan appropriate guidance from day one.
              </p>
              <p>
                If a student is identified with learning, behavioural or emotional challenges, the
                school will first conduct an informal assessment, based on which an official
                educational or behavioural assessment report may be requested from an external
                certified professional. Results remain strictly confidential and are used solely to
                support the student&apos;s learning. In such situations, it is mandatory that
                parents work in cooperation with the child, external consultant and school team
                (teachers, administrators, counsellors and special educators).
              </p>
            </div>
          </div>
        </section>

        {/* 04. Health Form Disclaimer */}
        <section id="health-disclaimer" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">04 / Medical Consent</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Student Health Form disclaimer
              </h2>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-foreground lg:col-span-8">
              {[
                "All health, allergy, medication and vaccination details submitted in the Student Health Form are certified by parents/guardians to be true and complete to the best of their knowledge.",
                "In the event of an emergency, parents authorise HKS Vidyamandir to take medical action deemed in the best interest of the child in consultation with the attending medical practitioner.",
                "Parents agree to reimburse the school for any external medical treatment or hospitalisation their child may require.",
                "Parents grant permission for the school nurse to administer standard first-aid and non-prescription medications (such as paracetamol, analgesic, anti-pyretic, anti-allergic and antispasmodic relief) until a parent or local emergency contact can pick up the child.",
                "HKS Vidyamandir shall not be held responsible for complications arising out of incomplete disclosure or lack of awareness of pre-existing illnesses or allergies.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" strokeWidth={1.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05. Support Services Terms */}
        <section id="support-services" className="scroll-mt-36 bg-card py-14 md:py-18">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-muted-foreground">05 / Support Services</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Language, transport, hobbies, sports &amp; excursions
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Second Language (Hindi / Kannada)",
                  text: "Selected at admission. No change in second language is permitted without explicit written approval from the School Head.",
                },
                {
                  title: "School Transport Plan",
                  text: "Requires accurate residential address, pickup/drop points and authorised pickup guardian phone number. Any address change must be notified immediately or transport service will be stopped.",
                },
                {
                  title: "Compulsory Hobby Classes",
                  text: "Dance, music, skating, karate and swimming are compulsory. Parents must submit a written notice for any health/skin condition or phobia, and purchase required accessories as instructed by coaches.",
                },
                {
                  title: "Sports & Inter-School Competitions",
                  text: "Competition participation expenses are borne by parents. School Management covers local Bengaluru city competition expenses; outstation inter-school sports/cultural TA & DA for students is funded by parents while accompanying staff expenses are borne by Management.",
                },
                {
                  title: "External Competitive & Olympiad Exams",
                  text: "Optional opt-in based on learner interest. The annual exam list is released by the end of July each year and respective exam fees are paid separately.",
                },
                {
                  title: "Excursions, Field & Educational Trips",
                  text: "Participation is completely subject to parent consent; parents bear applicable trip expenses.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-medium text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06. Parents Undertaking (13 Clauses) */}
        <section id="undertaking" className="scroll-mt-36 bg-background py-14 md:py-18">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="font-mono text-xs text-muted-foreground">06 / Parents Undertaking</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                Code of conduct &amp; parents&apos; undertaking
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                By submitting the Admission Kit or enrolling a student at {SITE.name}, parents and
                legal guardians accept and agree to abide by the following 13 institutional clauses.
              </p>
            </div>

            <ol className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
              {UNDERTAKING_CLAUSES.map((clause) => (
                <li key={clause.no} className="grid gap-2 p-6 md:grid-cols-12 md:gap-6">
                  <div className="flex items-baseline gap-3 md:col-span-4">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      {clause.no}
                    </span>
                    <h3 className="font-medium text-navy">{clause.title}</h3>
                  </div>
                  <div className="text-sm leading-relaxed text-foreground md:col-span-8">
                    <p>{clause.text}</p>
                    {clause.no === "03" && (
                      <ul className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                        {SUSPENSION_GROUNDS.map((g, idx) => (
                          <li key={g} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="font-mono text-navy">
                              {String.fromCharCode(97 + idx)}.
                            </span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-foreground">
              <p className="font-medium text-navy">Declaration of Truthfulness &amp; Authority</p>
              <p className="mt-2 text-muted-foreground">
                Parents/guardians certify that they hold legal authority to admit their child/ward
                and that all statements submitted during admission are factually true. If any
                information is found false or concealed, the Management reserves the right to cancel
                the application or revoke admission. Please also review our{" "}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-navy underline underline-offset-4 hover:text-cta"
                >
                  Privacy Policy
                </Link>{" "}
                for how submitted data is protected.
              </p>
            </div>
          </div>
        </section>
      </div>

      <CtaBand />
    </div>
  );
}
