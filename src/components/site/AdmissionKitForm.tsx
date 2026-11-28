import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { MotionConfig, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Plus,
  Printer,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const GRADES = [
  "Nursery",
  "LKG",
  "UKG",
  ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`),
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Not known"];

const LEARNING_SUPPORT_AREAS = [
  "Speech and Language",
  "Reading and Writing",
  "Mathematics",
  "Social / Behavioral Skills",
  "Motor Skills",
  "Others (e.g. Handwriting or PE)",
];

const VOLUNTEER_AREAS = [
  "Career Counselling",
  "Guest Lectures in your area of expertise",
  "Field Trips",
  "Internships at your place of work",
  "Special interest groups / clubs",
  "Change Maker",
  "Food Committee / Health & Nutrition",
  "Sports",
];

const VACCINES = [
  "BCG",
  "Chicken pox",
  "Hepatitis A",
  "Hepatitis B",
  "Measles",
  "Mumps",
  "Rubella",
  "Polio",
  "Tetanus",
  "Other",
];

const MEDICAL_CONDITIONS = [
  "Allergies (Mild)",
  "Allergies (Severe)",
  "Skin allergy",
  "Hearing impairment",
  "Visual impairment",
  "Speech impediment",
  "Neuromuscular condition",
  "Physical challenges",
  "Behavioral challenges",
  "Asthma",
  "Anxiety / Panic attack",
  "Cardiac related illness",
  "Diabetes",
  "Hypertension / Stress",
  "Respiratory illness",
  "Seizures",
  "Emotional difficulties",
];

const SPORTS_CHOICES = ["Cricket", "Throw ball", "Basketball", "Kho Kho", "Chess"];

const HOBBY_CLASSES = ["Dance", "Music", "Skating", "Karate", "Swimming"];

const REQUIRED_DOCS = [
  "Photocopy of municipal Birth Certificate",
  "Original Transfer Certificate / TC requisition form",
  "Aadhaar card copy (student & parents)",
  "SATS number & previous year marks card (last 2 years)",
  "4 student passport photos & parent/guardian photos",
  "Inter-state TC with BEO signature / NRI Form C (if applicable)",
];

const STEPS = [
  { id: 0, code: "01", title: "Learner & Parents", short: "Learner" },
  { id: 1, code: "02", title: "Education & Profile", short: "Education" },
  { id: 2, code: "03", title: "Health & Vaccines", short: "Health" },
  { id: 3, code: "04", title: "Support & Disclosures", short: "Support" },
  { id: 4, code: "05", title: "Review & Undertaking", short: "Undertaking" },
] as const;

type Sibling = {
  name: string;
  dob: string;
  gender: string;
  applying: "Yes" | "No";
  grade: string;
  currentSchool: string;
};

type YesNo = "Yes" | "No";

type AdmissionFormState = {
  // Step 1: Learner & Parents
  firstName: string;
  middleName: string;
  lastName: string;
  gender: "Male" | "Female" | "Other";
  dob: string;
  entryClass: string;
  enrollmentYear: string;
  bloodGroup: string;
  motherTongue: string;
  nationality: string;
  religion: string;
  caste: string;
  diseCode: string;
  stsNo: string;
  studentAadhaar: string;
  permanentAddress: string;
  pincode: string;
  sameContactAddress: boolean;
  contactAddress: string;
  homePhone: string;
  livingWith: "Both Parents" | "Mother" | "Father" | "Guardian";
  motherName: string;
  motherQualification: string;
  motherOccupation: string;
  motherCompany: string;
  motherMobile: string;
  motherEmail: string;
  motherOfficeAddress: string;
  motherPan: string;
  motherAadhaar: string;
  fatherName: string;
  fatherQualification: string;
  fatherOccupation: string;
  fatherCompany: string;
  fatherMobile: string;
  fatherEmail: string;
  fatherOfficeAddress: string;
  fatherPan: string;
  fatherAadhaar: string;
  // Step 2: Siblings, Education & Profile
  siblings: Sibling[];
  homeLanguages: string;
  englishWriting: "Moderate" | "Fluent";
  englishReading: "Moderate" | "Fluent";
  englishSpeaking: "Moderate" | "Fluent";
  prevSchoolName: string;
  prevSchoolLocation: string;
  prevGradeCompleted: string;
  prevAcademicYear: string;
  prevMedium: string;
  achievements: string;
  retainedOrDoublePromoted: YesNo;
  retainedDetails: string;
  learningSupportAreas: string[];
  learningSupportDetails: string;
  longTermGoals: string;
  learningEnvironment: string;
  whyHks: string;
  heardAboutHks: string;
  otherSchools: string;
  volunteerAreas: string[];
  parentRole: string;
  extraInfo: string;
  // Step 3: Health & Vaccination
  knownAllergies: string;
  medicationDosage: string;
  clinicMedicines: string;
  familyDoctor: string;
  familyDoctorPhone: string;
  preferredHospital: string;
  preferredHospitalPhone: string;
  insuranceProvider: string;
  insurancePolicyNo: string;
  insuranceExpiry: string;
  localEmergencyName: string;
  localEmergencyPhone: string;
  vaccinesCompleted: string[];
  vaccineRemarks: string;
  medicalConditions: string[];
  allergicToMedication: YesNo;
  allowCommonMedication: YesNo;
  takesRegularMedicines: YesNo;
  ageAppropriateMilestones: YesNo;
  otherHealthConcerns: YesNo;
  dietaryNeeds: string;
  // Step 4: Support Services, Disciplinary, SEN & Counselling
  secondLanguage: "Hindi" | "Kannada";
  transportRequired: YesNo;
  pickupPoint: string;
  dropPoint: string;
  pickupPerson: string;
  hobbyConsent: "Yes" | "With medical note";
  hobbyHealthNote: string;
  sportsInterest: YesNo;
  selectedSports: string[];
  discChildViolation: YesNo;
  discParentViolation: YesNo;
  discParentLegal: YesNo;
  senRequested: YesNo;
  senAssessed: YesNo;
  senReceived: YesNo;
  senRequired: YesNo;
  counselRecommended: YesNo;
  counselReceived: YesNo;
  counselReferred: YesNo;
  counselRequired: YesNo;
  // Step 5: Checklist & Undertakings
  docsChecked: string[];
  parentSignName: string;
  agreeAuthority: boolean;
  agreeFeePolicy: boolean;
  agreeHealthDisclaimer: boolean;
  agreeUndertakingAndPrivacy: boolean;
};

const INITIAL_STATE: AdmissionFormState = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "Female",
  dob: "",
  entryClass: "",
  enrollmentYear: "2026-27",
  bloodGroup: "",
  motherTongue: "",
  nationality: "Indian",
  religion: "",
  caste: "",
  diseCode: "",
  stsNo: "",
  studentAadhaar: "",
  permanentAddress: "",
  pincode: "",
  sameContactAddress: true,
  contactAddress: "",
  homePhone: "",
  livingWith: "Both Parents",
  motherName: "",
  motherQualification: "",
  motherOccupation: "",
  motherCompany: "",
  motherMobile: "",
  motherEmail: "",
  motherOfficeAddress: "",
  motherPan: "",
  motherAadhaar: "",
  fatherName: "",
  fatherQualification: "",
  fatherOccupation: "",
  fatherCompany: "",
  fatherMobile: "",
  fatherEmail: "",
  fatherOfficeAddress: "",
  fatherPan: "",
  fatherAadhaar: "",
  siblings: [],
  homeLanguages: "",
  englishWriting: "Fluent",
  englishReading: "Fluent",
  englishSpeaking: "Fluent",
  prevSchoolName: "",
  prevSchoolLocation: "",
  prevGradeCompleted: "",
  prevAcademicYear: "",
  prevMedium: "English",
  achievements: "",
  retainedOrDoublePromoted: "No",
  retainedDetails: "",
  learningSupportAreas: [],
  learningSupportDetails: "",
  longTermGoals: "",
  learningEnvironment: "",
  whyHks: "",
  heardAboutHks: "",
  otherSchools: "",
  volunteerAreas: [],
  parentRole: "",
  extraInfo: "",
  knownAllergies: "",
  medicationDosage: "",
  clinicMedicines: "",
  familyDoctor: "",
  familyDoctorPhone: "",
  preferredHospital: "",
  preferredHospitalPhone: "",
  insuranceProvider: "",
  insurancePolicyNo: "",
  insuranceExpiry: "",
  localEmergencyName: "",
  localEmergencyPhone: "",
  vaccinesCompleted: ["BCG", "Polio", "Tetanus"],
  vaccineRemarks: "",
  medicalConditions: [],
  allergicToMedication: "No",
  allowCommonMedication: "Yes",
  takesRegularMedicines: "No",
  ageAppropriateMilestones: "Yes",
  otherHealthConcerns: "No",
  dietaryNeeds: "",
  secondLanguage: "Hindi",
  transportRequired: "No",
  pickupPoint: "",
  dropPoint: "",
  pickupPerson: "",
  hobbyConsent: "Yes",
  hobbyHealthNote: "",
  sportsInterest: "Yes",
  selectedSports: [],
  discChildViolation: "No",
  discParentViolation: "No",
  discParentLegal: "No",
  senRequested: "No",
  senAssessed: "No",
  senReceived: "No",
  senRequired: "No",
  counselRecommended: "No",
  counselReceived: "No",
  counselReferred: "No",
  counselRequired: "No",
  docsChecked: [],
  parentSignName: "",
  agreeAuthority: false,
  agreeFeePolicy: false,
  agreeHealthDisclaimer: false,
  agreeUndertakingAndPrivacy: false,
};

function computeAgeOnJune1(dob: string): string {
  if (!dob) return "—";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "—";
  const ref = new Date(2026, 5, 1); // 1 June 2026
  let years = ref.getFullYear() - birth.getFullYear();
  let months = ref.getMonth() - birth.getMonth();
  if (ref.getDate() < birth.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years < 0) return "Check DOB";
  return `${years} yrs ${months} mos`;
}

function toggleList(list: string[], item: string): string[] {
  return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";

const labelCls = "block text-xs font-medium text-navy mb-1.5";

function YesNoToggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3">
      <span className="text-sm text-foreground">{label}</span>
      <div className="inline-flex rounded-md border border-border bg-card p-0.5">
        {(["No", "Yes"] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            aria-pressed={value === opt}
            onClick={() => onChange(opt)}
            className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
              value === opt
                ? "bg-navy text-navy-foreground"
                : "text-muted-foreground hover:text-navy"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AdmissionKitForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AdmissionFormState>(INITIAL_STATE);
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const patch = <K extends keyof AdmissionFormState>(key: K, value: AdmissionFormState[K]) => {
    setError(null);
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const fullName = [data.firstName, data.middleName, data.lastName].filter(Boolean).join(" ");
  const ageJune1 = computeAgeOnJune1(data.dob);

  function validateStep(current: number): string | null {
    if (current === 0) {
      if (!data.firstName.trim() || !data.lastName.trim()) {
        return "Please enter the learner's first and last name.";
      }
      if (!data.dob) return "Please enter the learner's date of birth.";
      if (!data.entryClass) return "Please select the entry class.";
      if (!data.permanentAddress.trim()) return "Please enter the permanent residential address.";
      if (!data.motherName.trim() && !data.fatherName.trim()) {
        return "Please enter at least one parent/guardian full name.";
      }
      if (!data.motherMobile.trim() && !data.fatherMobile.trim()) {
        return "Please enter at least one parent/guardian mobile number.";
      }
    }
    if (current === 3 && data.transportRequired === "Yes") {
      if (!data.pickupPoint.trim() || !data.pickupPerson.trim()) {
        return "Please enter pickup point and authorised pickup person details for school transport.";
      }
    }
    if (current === 4) {
      if (!data.parentSignName.trim()) {
        return "Please enter the parent/legal guardian's full name for the declaration.";
      }
      if (
        !data.agreeAuthority ||
        !data.agreeFeePolicy ||
        !data.agreeHealthDisclaimer ||
        !data.agreeUndertakingAndPrivacy
      ) {
        return "Please accept all four admission declarations, policies and undertaking checkboxes.";
      }
    }
    return null;
  }

  function goNext() {
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  }

  function addSibling() {
    patch("siblings", [
      ...data.siblings,
      { name: "", dob: "", gender: "F", applying: "No", grade: "", currentSchool: "" },
    ]);
  }

  function updateSibling(index: number, key: keyof Sibling, value: string) {
    patch(
      "siblings",
      data.siblings.map((s, idx) => (idx === index ? { ...s, [key]: value } : s)),
    );
  }

  function removeSibling(index: number) {
    patch(
      "siblings",
      data.siblings.filter((_, idx) => idx !== index),
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validateStep(4);
    if (err) {
      setError(err);
      return;
    }
    const ref = `HKS-${data.enrollmentYear.slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(ref);
  }

  function openWhatsAppSummary() {
    const parentContact = data.motherMobile || data.fatherMobile;
    const summary = [
      `HKS Vidyamandir Online Admission Application (${submittedRef ?? "Draft"})`,
      `Learner: ${fullName} (${data.gender}, DOB: ${data.dob}, Age on 1 Jun: ${ageJune1})`,
      `Entry Class: ${data.entryClass} · Academic Year: ${data.enrollmentYear}`,
      `Parents: ${[data.motherName, data.fatherName].filter(Boolean).join(" & ")}`,
      `Mobile: ${parentContact} · Email: ${data.motherEmail || data.fatherEmail || "—"}`,
      `Second Language: ${data.secondLanguage} · Transport: ${data.transportRequired}`,
      `Undertaking signed by: ${data.parentSignName}`,
    ].join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(summary)}`, "_blank", "noopener,noreferrer");
  }

  if (submittedRef) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 md:p-10">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-navy" strokeWidth={1.5} />
          <div>
            <p className="font-mono text-xs tabular-nums text-muted-foreground">
              Application Reference · {submittedRef}
            </p>
            <h3 className="mt-1 font-display text-2xl font-medium text-navy md:text-3xl">
              Admission Kit prepared for {fullName}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Your 5-step Students Admission Kit details have been compiled. Send this summary to
              our admissions desk on WhatsApp or print a copy to carry along with your original
              documents during your campus visit.
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 border-y border-border py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-muted-foreground">Entry Class &amp; Year</dt>
            <dd className="mt-1 font-medium text-navy">
              {data.entryClass} · {data.enrollmentYear}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Parent / Guardian</dt>
            <dd className="mt-1 font-medium text-navy">{data.parentSignName}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Second Language &amp; Transport</dt>
            <dd className="mt-1 font-medium text-navy">
              {data.secondLanguage} · Transport: {data.transportRequired}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            type="button"
            onClick={openWhatsAppSummary}
            className="h-10 rounded-lg bg-navy px-5 text-sm font-medium text-navy-foreground hover:bg-navy/90"
          >
            Send summary to Admissions (WhatsApp)
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.print()}
            className="h-10 rounded-lg border-border px-4 text-sm font-medium text-navy"
          >
            <Printer className="mr-2 h-4 w-4" strokeWidth={1.5} />
            Print copy
          </Button>
          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setStep(0);
            }}
            className="ml-auto text-sm font-medium text-muted-foreground hover:text-navy"
          >
            Edit application
          </button>
        </div>
      </div>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="rounded-xl border border-border bg-card">
        {/* Stepper Header */}
        <div className="border-b border-border px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="font-mono text-xs tabular-nums text-muted-foreground">
                Step {STEPS[step]!.code} of 0{STEPS.length} · Students Admission Kit
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium text-navy">
                {STEPS[step]!.title}
              </h3>
            </div>
            <span className="font-mono text-xs tabular-nums text-muted-foreground">
              {Math.round(((step + 1) / STEPS.length) * 100)}% complete
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-navy transition-all duration-300"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Interactive Step Tabs */}
          <ol className="mt-4 grid grid-cols-5 gap-2">
            {STEPS.map((s) => {
              const isCurrent = s.id === step;
              const isDone = s.id < step;
              return (
                <li key={s.code}>
                  <button
                    type="button"
                    onClick={() => {
                      if (s.id <= step) {
                        setError(null);
                        setStep(s.id);
                      }
                    }}
                    disabled={s.id > step}
                    aria-current={isCurrent ? "step" : undefined}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg border px-1.5 py-2 text-left text-xs transition-colors sm:justify-start sm:px-2.5 ${
                      isCurrent
                        ? "border-navy bg-navy/5 font-medium text-navy"
                        : isDone
                          ? "border-border bg-background text-navy hover:border-navy/50"
                          : "cursor-not-allowed border-border/60 bg-muted/30 text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full font-mono text-[10px] ${
                        isDone
                          ? "bg-navy text-navy-foreground"
                          : isCurrent
                            ? "border border-navy text-navy"
                            : "border border-border text-muted-foreground"
                      }`}
                    >
                      {isDone ? <Check className="h-3 w-3" strokeWidth={2} /> : s.code}
                    </span>
                    <span className="hidden truncate sm:inline">{s.short}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Form Body */}
        <form onSubmit={onSubmit} className="p-6 md:p-8">
          <motion.div
            key={step}
            initial={step === 0 ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="space-y-8"
          >
            {/* STEP 1: LEARNER & PARENTS */}
            {step === 0 && (
              <>
                <div>
                  <h4 className="font-display text-lg font-medium text-navy">
                    Learner&apos;s Information
                  </h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="ak-first" className={labelCls}>
                        First name *
                      </label>
                      <input
                        id="ak-first"
                        value={data.firstName}
                        onChange={(e) => patch("firstName", e.target.value)}
                        placeholder="First name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-middle" className={labelCls}>
                        Middle name
                      </label>
                      <input
                        id="ak-middle"
                        value={data.middleName}
                        onChange={(e) => patch("middleName", e.target.value)}
                        placeholder="Middle name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-last" className={labelCls}>
                        Last name *
                      </label>
                      <input
                        id="ak-last"
                        value={data.lastName}
                        onChange={(e) => patch("lastName", e.target.value)}
                        placeholder="Last name"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-4">
                    <div>
                      <span className={labelCls}>Gender *</span>
                      <div className="grid grid-cols-3 gap-1 rounded-lg border border-input bg-background p-1">
                        {(["Female", "Male", "Other"] as const).map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => patch("gender", g)}
                            className={`rounded-md py-1.5 text-xs font-medium transition-colors ${
                              data.gender === g
                                ? "bg-navy text-navy-foreground"
                                : "text-muted-foreground hover:text-navy"
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ak-dob" className={labelCls}>
                        Date of birth *
                      </label>
                      <input
                        id="ak-dob"
                        type="date"
                        value={data.dob}
                        onChange={(e) => patch("dob", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <span className={labelCls}>Age as on 1 June</span>
                      <div className="flex h-[42px] items-center rounded-lg border border-border bg-muted/40 px-3.5 font-mono text-sm tabular-nums text-navy">
                        {ageJune1}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ak-class" className={labelCls}>
                        Entry class *
                      </label>
                      <select
                        id="ak-class"
                        value={data.entryClass}
                        onChange={(e) => patch("entryClass", e.target.value)}
                        className={inputCls}
                      >
                        <option value="">Select class</option>
                        {GRADES.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-4">
                    <div>
                      <label htmlFor="ak-year" className={labelCls}>
                        Year of enrollment
                      </label>
                      <select
                        id="ak-year"
                        value={data.enrollmentYear}
                        onChange={(e) => patch("enrollmentYear", e.target.value)}
                        className={inputCls}
                      >
                        <option value="2026-27">2026–27</option>
                        <option value="2027-28">2027–28</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="ak-blood" className={labelCls}>
                        Blood group
                      </label>
                      <select
                        id="ak-blood"
                        value={data.bloodGroup}
                        onChange={(e) => patch("bloodGroup", e.target.value)}
                        className={inputCls}
                      >
                        <option value="">Select</option>
                        {BLOOD_GROUPS.map((bg) => (
                          <option key={bg} value={bg}>
                            {bg}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="ak-tongue" className={labelCls}>
                        Mother tongue
                      </label>
                      <input
                        id="ak-tongue"
                        value={data.motherTongue}
                        onChange={(e) => patch("motherTongue", e.target.value)}
                        placeholder="e.g. Kannada, Hindi"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-nat" className={labelCls}>
                        Nationality
                      </label>
                      <input
                        id="ak-nat"
                        value={data.nationality}
                        onChange={(e) => patch("nationality", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-4">
                    <div>
                      <label htmlFor="ak-religion" className={labelCls}>
                        Religion
                      </label>
                      <input
                        id="ak-religion"
                        value={data.religion}
                        onChange={(e) => patch("religion", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-caste" className={labelCls}>
                        Caste (govt. record)
                      </label>
                      <input
                        id="ak-caste"
                        value={data.caste}
                        onChange={(e) => patch("caste", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-sts" className={labelCls}>
                        DISE / SATS (STS) No.
                      </label>
                      <input
                        id="ak-sts"
                        value={data.stsNo}
                        onChange={(e) => patch("stsNo", e.target.value)}
                        placeholder="If transferring"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-aadhaar" className={labelCls}>
                        Student Aadhaar No.
                      </label>
                      <input
                        id="ak-aadhaar"
                        value={data.studentAadhaar}
                        onChange={(e) => patch("studentAadhaar", e.target.value)}
                        placeholder="12-digit number"
                        maxLength={14}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-2">
                      <label htmlFor="ak-address" className={labelCls}>
                        Permanent address *
                      </label>
                      <input
                        id="ak-address"
                        value={data.permanentAddress}
                        onChange={(e) => patch("permanentAddress", e.target.value)}
                        placeholder="House no., street, locality, Bengaluru"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="ak-pin" className={labelCls}>
                        Pincode
                      </label>
                      <input
                        id="ak-pin"
                        value={data.pincode}
                        onChange={(e) => patch("pincode", e.target.value)}
                        placeholder="560060"
                        maxLength={6}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <label className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={data.sameContactAddress}
                      onChange={(e) => patch("sameContactAddress", e.target.checked)}
                      className="rounded border-border accent-navy"
                    />
                    <span>Contact address is the same as permanent address</span>
                  </label>

                  {!data.sameContactAddress && (
                    <div className="mt-3">
                      <label htmlFor="ak-caddr" className={labelCls}>
                        Address for contact
                      </label>
                      <input
                        id="ak-caddr"
                        value={data.contactAddress}
                        onChange={(e) => patch("contactAddress", e.target.value)}
                        className={inputCls}
                      />
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-display text-lg font-medium text-navy">
                      Parent / Guardian Information
                    </h4>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      <span className="text-muted-foreground">Living with:</span>
                      {(["Both Parents", "Mother", "Father", "Guardian"] as const).map((lw) => (
                        <button
                          key={lw}
                          type="button"
                          onClick={() => patch("livingWith", lw)}
                          className={`rounded-md border px-2.5 py-1 font-medium transition-colors ${
                            data.livingWith === lw
                              ? "border-navy bg-navy text-navy-foreground"
                              : "border-border bg-background text-muted-foreground hover:text-navy"
                          }`}
                        >
                          {lw}
                        </button>
                      ))}
                    </div>
                  </div>
                  {data.livingWith !== "Both Parents" && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Note: Legal custody documents and a separate undertaking must be submitted at
                      the school office where applicable.
                    </p>
                  )}

                  <div className="mt-4 grid gap-6 md:grid-cols-2">
                    {/* Mother */}
                    <div className="space-y-3 rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-medium text-navy">Mother&apos;s Details</p>
                      <input
                        aria-label="Mother full name"
                        value={data.motherName}
                        onChange={(e) => patch("motherName", e.target.value)}
                        placeholder="Full name *"
                        className={inputCls}
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={data.motherQualification}
                          onChange={(e) => patch("motherQualification", e.target.value)}
                          placeholder="Educational qualification"
                          className={inputCls}
                        />
                        <input
                          value={data.motherOccupation}
                          onChange={(e) => patch("motherOccupation", e.target.value)}
                          placeholder="Occupation & designation"
                          className={inputCls}
                        />
                      </div>
                      <input
                        value={data.motherCompany}
                        onChange={(e) => patch("motherCompany", e.target.value)}
                        placeholder="Company / Organization"
                        className={inputCls}
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          aria-label="Mother mobile number"
                          type="tel"
                          value={data.motherMobile}
                          onChange={(e) => patch("motherMobile", e.target.value)}
                          placeholder="Mobile number *"
                          className={inputCls}
                        />
                        <input
                          type="email"
                          value={data.motherEmail}
                          onChange={(e) => patch("motherEmail", e.target.value)}
                          placeholder="Email ID"
                          className={inputCls}
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={data.motherPan}
                          onChange={(e) => patch("motherPan", e.target.value)}
                          placeholder="PAN Card No."
                          className={inputCls}
                        />
                        <input
                          value={data.motherAadhaar}
                          onChange={(e) => patch("motherAadhaar", e.target.value)}
                          placeholder="Aadhaar Card No."
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Father */}
                    <div className="space-y-3 rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-medium text-navy">Father&apos;s Details</p>
                      <input
                        aria-label="Father full name"
                        value={data.fatherName}
                        onChange={(e) => patch("fatherName", e.target.value)}
                        placeholder="Full name *"
                        className={inputCls}
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={data.fatherQualification}
                          onChange={(e) => patch("fatherQualification", e.target.value)}
                          placeholder="Educational qualification"
                          className={inputCls}
                        />
                        <input
                          value={data.fatherOccupation}
                          onChange={(e) => patch("fatherOccupation", e.target.value)}
                          placeholder="Occupation & designation"
                          className={inputCls}
                        />
                      </div>
                      <input
                        value={data.fatherCompany}
                        onChange={(e) => patch("fatherCompany", e.target.value)}
                        placeholder="Company / Organization"
                        className={inputCls}
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          aria-label="Father mobile number"
                          type="tel"
                          value={data.fatherMobile}
                          onChange={(e) => patch("fatherMobile", e.target.value)}
                          placeholder="Mobile number *"
                          className={inputCls}
                        />
                        <input
                          type="email"
                          value={data.fatherEmail}
                          onChange={(e) => patch("fatherEmail", e.target.value)}
                          placeholder="Email ID"
                          className={inputCls}
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={data.fatherPan}
                          onChange={(e) => patch("fatherPan", e.target.value)}
                          placeholder="PAN Card No."
                          className={inputCls}
                        />
                        <input
                          value={data.fatherAadhaar}
                          onChange={(e) => patch("fatherAadhaar", e.target.value)}
                          placeholder="Aadhaar Card No."
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2: EDUCATION, SIBLINGS & PROFILE */}
            {step === 1 && (
              <>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="font-display text-lg font-medium text-navy">
                        Siblings Information
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        List eldest to youngest (optional — used for sibling concessions).
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addSibling}
                      className="h-9 rounded-lg border-border text-xs font-medium text-navy"
                    >
                      <Plus className="mr-1.5 h-3.5 w-3.5" />
                      Add sibling
                    </Button>
                  </div>

                  {data.siblings.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {data.siblings.map((sib, idx) => (
                        <div
                          key={idx}
                          className="grid gap-3 rounded-lg border border-border bg-background p-4 sm:grid-cols-6"
                        >
                          <input
                            value={sib.name}
                            onChange={(e) => updateSibling(idx, "name", e.target.value)}
                            placeholder="Sibling name"
                            className={`${inputCls} sm:col-span-2`}
                          />
                          <input
                            type="date"
                            value={sib.dob}
                            onChange={(e) => updateSibling(idx, "dob", e.target.value)}
                            className={inputCls}
                          />
                          <input
                            value={sib.grade}
                            onChange={(e) => updateSibling(idx, "grade", e.target.value)}
                            placeholder="Grade"
                            className={inputCls}
                          />
                          <input
                            value={sib.currentSchool}
                            onChange={(e) => updateSibling(idx, "currentSchool", e.target.value)}
                            placeholder="Current school"
                            className={inputCls}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => removeSibling(idx)}
                            aria-label={`Remove sibling ${idx + 1}`}
                            className="h-10 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Languages &amp; Previous Education
                  </h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ak-homelang" className={labelCls}>
                        Languages spoken at home
                      </label>
                      <input
                        id="ak-homelang"
                        value={data.homeLanguages}
                        onChange={(e) => patch("homeLanguages", e.target.value)}
                        placeholder="e.g. English, Kannada, Hindi"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <span className={labelCls}>English proficiency</span>
                      <div className="grid grid-cols-3 gap-2">
                        {(
                          [
                            ["Writing", "englishWriting"],
                            ["Reading", "englishReading"],
                            ["Speaking", "englishSpeaking"],
                          ] as const
                        ).map(([lbl, field]) => (
                          <button
                            key={field}
                            type="button"
                            onClick={() =>
                              patch(field, data[field] === "Fluent" ? "Moderate" : "Fluent")
                            }
                            className="rounded-lg border border-border bg-background px-2.5 py-2 text-left text-xs transition hover:border-navy"
                          >
                            <span className="block text-[11px] text-muted-foreground">{lbl}</span>
                            <span className="font-medium text-navy">{data[field]}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-4">
                    <input
                      value={data.prevSchoolName}
                      onChange={(e) => patch("prevSchoolName", e.target.value)}
                      placeholder="Previous school name"
                      className={`${inputCls} sm:col-span-2`}
                    />
                    <input
                      value={data.prevGradeCompleted}
                      onChange={(e) => patch("prevGradeCompleted", e.target.value)}
                      placeholder="Grade completed"
                      className={inputCls}
                    />
                    <input
                      value={data.prevAcademicYear}
                      onChange={(e) => patch("prevAcademicYear", e.target.value)}
                      placeholder="Academic year"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="space-y-4 border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Learning Support &amp; Parent Partnership
                  </h4>

                  <YesNoToggle
                    label="Has your child ever been retained or double promoted?"
                    value={data.retainedOrDoublePromoted}
                    onChange={(v) => patch("retainedOrDoublePromoted", v)}
                  />
                  {data.retainedOrDoublePromoted === "Yes" && (
                    <textarea
                      rows={2}
                      value={data.retainedDetails}
                      onChange={(e) => patch("retainedDetails", e.target.value)}
                      placeholder="Please share brief details"
                      className={inputCls}
                    />
                  )}

                  <div>
                    <p className={labelCls}>
                      Has your child received any learning support? (Select all that apply)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {LEARNING_SUPPORT_AREAS.map((area) => {
                        const active = data.learningSupportAreas.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() =>
                              patch(
                                "learningSupportAreas",
                                toggleList(data.learningSupportAreas, area),
                              )
                            }
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                              active
                                ? "border-navy bg-navy text-navy-foreground"
                                : "border-border bg-background text-foreground hover:border-navy"
                            }`}
                          >
                            {area}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className={labelCls}>
                      Areas where you would like to participate / volunteer as a parent
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {VOLUNTEER_AREAS.map((area) => {
                        const active = data.volunteerAreas.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() =>
                              patch("volunteerAreas", toggleList(data.volunteerAreas, area))
                            }
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                              active
                                ? "border-navy bg-navy text-navy-foreground"
                                : "border-border bg-background text-foreground hover:border-navy"
                            }`}
                          >
                            {area}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <textarea
                      rows={2}
                      value={data.achievements}
                      onChange={(e) => patch("achievements", e.target.value)}
                      placeholder="Achievements in co-curricular activities"
                      className={inputCls}
                    />
                    <textarea
                      rows={2}
                      value={data.longTermGoals}
                      onChange={(e) => patch("longTermGoals", e.target.value)}
                      placeholder="Long-term goals & learning environment you envision for your child"
                      className={inputCls}
                    />
                  </div>
                </div>
              </>
            )}

            {/* STEP 3: STUDENT HEALTH & VACCINATION */}
            {step === 2 && (
              <>
                <div>
                  <h4 className="font-display text-lg font-medium text-navy">
                    Allergies, Medication &amp; Emergency Contacts (within 10 km)
                  </h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <input
                      value={data.knownAllergies}
                      onChange={(e) => patch("knownAllergies", e.target.value)}
                      placeholder="Known allergies (incl. medicines)"
                      className={inputCls}
                    />
                    <input
                      value={data.medicationDosage}
                      onChange={(e) => patch("medicationDosage", e.target.value)}
                      placeholder="Regular medication / dosage"
                      className={inputCls}
                    />
                    <input
                      value={data.clinicMedicines}
                      onChange={(e) => patch("clinicMedicines", e.target.value)}
                      placeholder="Medicines to stock at School Clinic"
                      className={inputCls}
                    />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <input
                      value={data.familyDoctor}
                      onChange={(e) => patch("familyDoctor", e.target.value)}
                      placeholder="Family doctor name & mobile"
                      className={inputCls}
                    />
                    <input
                      value={data.preferredHospital}
                      onChange={(e) => patch("preferredHospital", e.target.value)}
                      placeholder="Preferred hospital / clinic & phone"
                      className={inputCls}
                    />
                    <input
                      value={data.localEmergencyName}
                      onChange={(e) => patch("localEmergencyName", e.target.value)}
                      placeholder="Local emergency contact (other than parent)"
                      className={inputCls}
                    />
                    <input
                      type="tel"
                      value={data.localEmergencyPhone}
                      onChange={(e) => patch("localEmergencyPhone", e.target.value)}
                      placeholder="Local emergency contact mobile"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Vaccination Record
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Click to mark immunisations completed.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {VACCINES.map((vax) => {
                      const active = data.vaccinesCompleted.includes(vax);
                      return (
                        <button
                          key={vax}
                          type="button"
                          onClick={() =>
                            patch("vaccinesCompleted", toggleList(data.vaccinesCompleted, vax))
                          }
                          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? "border-navy bg-navy text-navy-foreground"
                              : "border-border bg-background text-foreground hover:border-navy"
                          }`}
                        >
                          {active && <Check className="h-3 w-3" strokeWidth={2} />}
                          <span>{vax}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Confidential Medical Checklist
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Select any condition your child has experienced or is currently experiencing.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {MEDICAL_CONDITIONS.map((cond) => {
                      const active = data.medicalConditions.includes(cond);
                      return (
                        <button
                          key={cond}
                          type="button"
                          onClick={() =>
                            patch("medicalConditions", toggleList(data.medicalConditions, cond))
                          }
                          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? "border-navy bg-navy text-navy-foreground"
                              : "border-border bg-background text-foreground hover:border-navy"
                          }`}
                        >
                          {cond}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <YesNoToggle
                      label="Is your child allergic to any medication?"
                      value={data.allergicToMedication}
                      onChange={(v) => patch("allergicToMedication", v)}
                    />
                    <YesNoToggle
                      label="Can the school nurse administer standard first-aid / common non-prescription medication?"
                      value={data.allowCommonMedication}
                      onChange={(v) => patch("allowCommonMedication", v)}
                    />
                    <YesNoToggle
                      label="Does your child take any prescribed medicines regularly?"
                      value={data.takesRegularMedicines}
                      onChange={(v) => patch("takesRegularMedicines", v)}
                    />
                    <YesNoToggle
                      label="Have your child's developmental milestones been age appropriate?"
                      value={data.ageAppropriateMilestones}
                      onChange={(v) => patch("ageAppropriateMilestones", v)}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="ak-diet" className={labelCls}>
                      Special dietary needs / preferences
                    </label>
                    <input
                      id="ak-diet"
                      value={data.dietaryNeeds}
                      onChange={(e) => patch("dietaryNeeds", e.target.value)}
                      placeholder="Food allergies or dietary preferences (if any)"
                      className={inputCls}
                    />
                  </div>
                </div>
              </>
            )}

            {/* STEP 4: SUPPORT SERVICES & DISCLOSURES */}
            {step === 3 && (
              <>
                <div>
                  <h4 className="font-display text-lg font-medium text-navy">
                    Support Services Questionnaire
                  </h4>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-medium text-navy">Second Language *</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Changes require written approval from the School Head.
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {(["Hindi", "Kannada"] as const).map((lang) => (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => patch("secondLanguage", lang)}
                            className={`rounded-lg border py-2 text-sm font-medium transition-colors ${
                              data.secondLanguage === lang
                                ? "border-navy bg-navy text-navy-foreground"
                                : "border-border bg-card text-foreground hover:border-navy"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-medium text-navy">School Transport Plan</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Notify the school immediately of any address change.
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {(["No", "Yes"] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => patch("transportRequired", opt)}
                            className={`rounded-lg border py-2 text-sm font-medium transition-colors ${
                              data.transportRequired === opt
                                ? "border-navy bg-navy text-navy-foreground"
                                : "border-border bg-card text-foreground hover:border-navy"
                            }`}
                          >
                            {opt === "Yes" ? "Yes, opt for bus" : "No, self drop"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {data.transportRequired === "Yes" && (
                    <div className="mt-4 grid gap-4 rounded-lg border border-navy/25 bg-background p-4 sm:grid-cols-3">
                      <div>
                        <label htmlFor="ak-pickup" className={labelCls}>
                          Pick-up point *
                        </label>
                        <input
                          id="ak-pickup"
                          value={data.pickupPoint}
                          onChange={(e) => patch("pickupPoint", e.target.value)}
                          placeholder="Landmark / stop name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="ak-drop" className={labelCls}>
                          Drop point
                        </label>
                        <input
                          id="ak-drop"
                          value={data.dropPoint}
                          onChange={(e) => patch("dropPoint", e.target.value)}
                          placeholder="If different from pick-up"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="ak-person" className={labelCls}>
                          Authorised pick-up person &amp; phone *
                        </label>
                        <input
                          id="ak-person"
                          value={data.pickupPerson}
                          onChange={(e) => patch("pickupPerson", e.target.value)}
                          placeholder="Name & mobile number"
                          className={inputCls}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-4 rounded-lg border border-border bg-background p-4">
                    <p className="text-xs font-medium text-navy">
                      Compulsory Hobby Classes ({HOBBY_CLASSES.join(" · ")})
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Accessories are purchased by parents as guided by instructors. Mention any
                      health, skin condition or phobia below.
                    </p>
                    <input
                      value={data.hobbyHealthNote}
                      onChange={(e) => patch("hobbyHealthNote", e.target.value)}
                      placeholder="Optional medical / skin / phobia note for hobby classes"
                      className={`${inputCls} mt-3`}
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    <YesNoToggle
                      label="Would you like your child to participate in school sports activities?"
                      value={data.sportsInterest}
                      onChange={(v) => patch("sportsInterest", v)}
                    />
                    {data.sportsInterest === "Yes" && (
                      <div className="flex flex-wrap gap-2">
                        {SPORTS_CHOICES.map((sport) => {
                          const active = data.selectedSports.includes(sport);
                          return (
                            <button
                              key={sport}
                              type="button"
                              onClick={() =>
                                patch("selectedSports", toggleList(data.selectedSports, sport))
                              }
                              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                                active
                                  ? "border-navy bg-navy text-navy-foreground"
                                  : "border-border bg-background text-foreground hover:border-navy"
                              }`}
                            >
                              {sport}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Disciplinary, Special Education Needs (SEN) &amp; Counselling Disclosures
                  </h4>
                  <YesNoToggle
                    label="Has the child ever faced disciplinary action (probation, suspension or expulsion) at a previous school?"
                    value={data.discChildViolation}
                    onChange={(v) => patch("discChildViolation", v)}
                  />
                  <YesNoToggle
                    label="Has your child ever been assessed by or received support from a Special Educator?"
                    value={data.senAssessed}
                    onChange={(v) => patch("senAssessed", v)}
                  />
                  <YesNoToggle
                    label="Will your child require Special Education support?"
                    value={data.senRequired}
                    onChange={(v) => patch("senRequired", v)}
                  />
                  <YesNoToggle
                    label="Has your child been recommended for or will require counselling support?"
                    value={data.counselRequired}
                    onChange={(v) => patch("counselRequired", v)}
                  />
                </div>
              </>
            )}

            {/* STEP 5: REVIEW, CHECKLIST & UNDERTAKING */}
            {step === 4 && (
              <>
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-lg font-medium text-navy">
                      Application Summary
                    </h4>
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="text-xs font-medium text-navy underline-offset-4 hover:underline"
                    >
                      Edit details
                    </button>
                  </div>
                  <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-xs text-muted-foreground">Learner</dt>
                      <dd className="mt-0.5 font-medium text-navy">{fullName || "—"}</dd>
                      <dd className="text-xs text-muted-foreground">
                        {data.entryClass || "—"} · {data.gender} · Age {ageJune1}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">Parents</dt>
                      <dd className="mt-0.5 font-medium text-navy">
                        {[data.motherName, data.fatherName].filter(Boolean).join(" & ") || "—"}
                      </dd>
                      <dd className="text-xs text-muted-foreground">
                        {data.motherMobile || data.fatherMobile || "—"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">Services &amp; Health</dt>
                      <dd className="mt-0.5 font-medium text-navy">
                        {data.secondLanguage} · Transport: {data.transportRequired}
                      </dd>
                      <dd className="text-xs text-muted-foreground">
                        {data.vaccinesCompleted.length} vaccines logged ·{" "}
                        {data.medicalConditions.length} health notes
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h4 className="font-display text-lg font-medium text-navy">
                    Admission Document Readiness Checklist
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Tick the documents you have ready to carry to the school admissions office.
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {REQUIRED_DOCS.map((doc) => {
                      const checked = data.docsChecked.includes(doc);
                      return (
                        <label
                          key={doc}
                          className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-border bg-background p-3 text-xs text-foreground"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              patch("docsChecked", toggleList(data.docsChecked, doc))
                            }
                            className="mt-0.5 rounded border-border accent-navy"
                          />
                          <span>{doc}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 border-t border-border pt-6">
                  <h4 className="font-display text-lg font-medium text-navy">
                    Parents Undertaking &amp; Legal Consent
                  </h4>

                  <div>
                    <label htmlFor="ak-sign" className={labelCls}>
                      Full name of Parent / Legal Guardian signing this declaration *
                    </label>
                    <input
                      id="ak-sign"
                      value={data.parentSignName}
                      onChange={(e) => patch("parentSignName", e.target.value)}
                      placeholder="Type your full legal name"
                      className={inputCls}
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-3.5 text-xs leading-relaxed text-foreground">
                    <input
                      type="checkbox"
                      checked={data.agreeAuthority}
                      onChange={(e) => patch("agreeAuthority", e.target.checked)}
                      className="mt-0.5 accent-navy"
                    />
                    <span>
                      I represent that I have the legal authority to admit my child/ward into{" "}
                      {SITE.name} and certify that all statements given in this application are
                      factually true and complete.
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-3.5 text-xs leading-relaxed text-foreground">
                    <input
                      type="checkbox"
                      checked={data.agreeFeePolicy}
                      onChange={(e) => patch("agreeFeePolicy", e.target.checked)}
                      className="mt-0.5 accent-navy"
                    />
                    <span>
                      I have read and accept the non-refundable Fee Policy, installment deadlines
                      (15 May, 15 August, 15 October), late fee fine (₹100/day) and re-admission
                      terms in the{" "}
                      <Link
                        to="/terms-and-conditions"
                        className="font-medium text-navy underline underline-offset-4 hover:text-cta"
                      >
                        Terms &amp; Conditions
                      </Link>
                      .
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-3.5 text-xs leading-relaxed text-foreground">
                    <input
                      type="checkbox"
                      checked={data.agreeHealthDisclaimer}
                      onChange={(e) => patch("agreeHealthDisclaimer", e.target.checked)}
                      className="mt-0.5 accent-navy"
                    />
                    <span>
                      I accept the Student Health Form Disclaimer authorising campus first-aid and
                      emergency medical care in consultation with a registered practitioner.
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-3.5 text-xs leading-relaxed text-foreground">
                    <input
                      type="checkbox"
                      checked={data.agreeUndertakingAndPrivacy}
                      onChange={(e) => patch("agreeUndertakingAndPrivacy", e.target.checked)}
                      className="mt-0.5 accent-navy"
                    />
                    <span>
                      I agree to all 13 clauses of the Parents Undertaking (
                      <Link
                        to="/terms-and-conditions"
                        hash="undertaking"
                        className="font-medium text-navy underline underline-offset-4 hover:text-cta"
                      >
                        Terms &amp; Conditions
                      </Link>
                      ) and consent to data handling under the{" "}
                      <Link
                        to="/privacy-policy"
                        className="font-medium text-navy underline underline-offset-4 hover:text-cta"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>
              </>
            )}
          </motion.div>

          {error && (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive"
            >
              {error}
            </p>
          )}

          {/* Footer Navigation Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={step === 0}
              className="h-10 rounded-lg border-border px-4 text-sm font-medium text-navy"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" strokeWidth={1.5} />
              Previous step
            </Button>

            {step < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={goNext}
                className="h-10 rounded-lg bg-navy px-5 text-sm font-medium text-navy-foreground hover:bg-navy/90"
              >
                Continue to {STEPS[step + 1]!.short}
                <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
              </Button>
            ) : (
              <Button
                type="submit"
                className="h-10 rounded-lg bg-navy px-6 text-sm font-medium text-navy-foreground hover:bg-navy/90"
              >
                Complete &amp; generate application
                <Check className="ml-1.5 h-4 w-4" strokeWidth={1.5} />
              </Button>
            )}
          </div>
        </form>
      </div>
    </MotionConfig>
  );
}
