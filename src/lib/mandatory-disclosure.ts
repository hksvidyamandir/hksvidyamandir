import { SITE } from "@/lib/site";

export type DisclosureInfoRow = {
  slNo: string;
  label: string;
  value: string;
  href?: string;
  secondaryValue?: string;
  secondaryHref?: string;
};

export type DisclosureDocumentRow = {
  slNo: string;
  title: string;
  /** Populate with a public PDF path (e.g. "/docs/affiliation-letter.pdf") once uploaded. */
  documentUrl?: string;
};

export type DisclosureDocumentSection = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  columnLabel: string;
  items: DisclosureDocumentRow[];
};

export const MANDATORY_SUMMARY = [
  { value: "830417", label: "CBSE Affiliation No.", note: "Official affiliation record" },
  { value: "45340", label: "School Code", note: "CBSE institution code" },
  { value: "Nursery – Gr 12", label: "Academic Span", note: "CBSE K–12 curriculum" },
  { value: "Sections A–E", label: "Appendix-IX format", note: "15 statutory document records" },
] as const;

export const GENERAL_INFORMATION: DisclosureInfoRow[] = [
  { slNo: "01", label: "Name of the School", value: SITE.name },
  { slNo: "02", label: "Affiliation No.", value: "830417" },
  { slNo: "03", label: "School Code", value: "45340" },
  { slNo: "04", label: "Complete Address with Pin Code", value: SITE.address },
  {
    slNo: "05",
    label: "School Email ID",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    slNo: "06",
    label: "Contact Details",
    value: SITE.phones[0]!.label,
    href: SITE.phones[0]!.href,
    ...(SITE.phones[1]
      ? { secondaryValue: SITE.phones[1].label, secondaryHref: SITE.phones[1].href }
      : {}),
  },
];

export const DISCLOSURE_DOCUMENT_SECTIONS: DisclosureDocumentSection[] = [
  {
    id: "documents",
    code: "B",
    title: "Documents and Information",
    subtitle: "Statutory affiliation, trust registration, recognition, building, fire, DEO and sanitation certificates.",
    columnLabel: "Documents / Information",
    items: [
      { slNo: "01", title: "Copies of Affiliation / Upgradation Letter" },
      { slNo: "02", title: "Copy of Societies / Trust / Company Registration" },
      { slNo: "03", title: "Copy of No Objection Certificate (NOC)" },
      { slNo: "04", title: "Copies of Recognition Certificate" },
      { slNo: "05", title: "Copy of Valid Building Safety Certificate" },
      { slNo: "06", title: "Copy of Valid Fire Safety Certificate" },
      { slNo: "07", title: "Copy of DEO Certificate / Self Certification" },
      { slNo: "08", title: "Copies of Valid Water, Health and Sanitation Certificate" },
    ],
  },
  {
    id: "academics",
    code: "C",
    title: "Result and Academics",
    subtitle: "Fee structure, academic calendar, governance committees and board examination records.",
    columnLabel: "Information",
    items: [
      { slNo: "01", title: "Fee Structure of the School" },
      { slNo: "02", title: "Annual Academic Calendar" },
      { slNo: "03", title: "List of School Management Committee (SMC)" },
      { slNo: "04", title: "List of Parents Teachers Association (PTA) Members" },
      { slNo: "05", title: "Last Three Years Results of Board Examination" },
    ],
  },
  {
    id: "staff",
    code: "D",
    title: "Staff (Teaching)",
    subtitle: "Faculty qualifications, designations and teaching staff details.",
    columnLabel: "Information",
    items: [
      { slNo: "01", title: "Staff Details" },
    ],
  },
  {
    id: "infrastructure",
    code: "E",
    title: "School Infrastructure",
    subtitle: "Campus area, classrooms, laboratories, library and safety infrastructure particulars.",
    columnLabel: "Information",
    items: [
      { slNo: "01", title: "School Infrastructure Details" },
    ],
  },
];
