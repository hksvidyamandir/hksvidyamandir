export const SITE = {
  name: "HKS Vidyamandir",
  short: "HKS",
  tagline: "Strengthening Your Wings of Success",
  phone: "+91 95130 01414",
  phoneHref: "tel:+919513001414",
  phones: [
    { label: "+91 95130 01414", href: "tel:+919513001414" },
    { label: "+91 95130 01818", href: "tel:+919513001818" },
  ],
  whatsapp: "https://wa.me/919513001414",
  email: "info@hksvidyamandir.com",
  address: "Survey No. 28, Gram Panchayat, NPKL, S.M. Krishna Rd, near Sulikere, Kengeri, Bengaluru, Karnataka 560060",
  mapsUrl: "https://maps.app.goo.gl/s7oFBLzwnC6fMonZ6",
  mapsEmbed:
    "https://www.google.com/maps?q=HKS+Vidyamandir,+Survey+No.+28,+NPKL,+S.M.+Krishna+Rd,+near+Sulikere,+Kengeri,+Bengaluru,+Karnataka+560060&ll=12.936901,77.4470444&z=16&output=embed",
  founded: 2010,
  hours: "Mon - Sat · 8:30 AM - 4:30 PM",
};

export type NavItem = { label: string; to: string; desc?: string };

import { AnubhavIcon, KhelIcon, KrishiIcon, SamskritiIcon } from "@/components/site/VidyaIcons";

// The school's four learning verticals, shown above the main menu.
export const VIDYA: {
  label: string;
  to: "/krishi-vidya" | "/khel-vidya" | "/anubhav-vidya" | "/samskriti-vidya";
  icon: typeof KrishiIcon;
  tone: string;
}[] = [
  { label: "Krishi Vidya", to: "/krishi-vidya", icon: KrishiIcon, tone: "text-teal" },
  { label: "Khel Vidya", to: "/khel-vidya", icon: KhelIcon, tone: "text-gold" },
  { label: "Anubhav Vidya", to: "/anubhav-vidya", icon: AnubhavIcon, tone: "text-navy" },
  { label: "Samskriti Vidya", to: "/samskriti-vidya", icon: SamskritiIcon, tone: "text-ink" },
];
export type NavGroup = { label: string; to: string; children?: NavItem[] };

export const NAV: NavGroup[] = [
  { label: "About", to: "/about" },
  {
    label: "Academics",
    to: "/academics",
    children: [
      { label: "CBSE Curriculum", to: "/academics", desc: "Nursery to Grade 12, stage by stage" },
      { label: "Early Years", to: "/early-years", desc: "Nursery to Grade 2 · Play & inquiry-led foundation" },
      { label: "Primary", to: "/primary", desc: "Grades 3 to 5 · Literacy, numeracy & discovery" },
      { label: "High School", to: "/high-school", desc: "Grades 6 to 10 · Subject depth & innovation" },
      { label: "Senior Secondary", to: "/senior-secondary", desc: "Grades 11 & 12 · Science, Commerce & career readiness" },
      { label: "Competitive Exams & Olympiads", to: "/competitive-exams", desc: "NEET/JEE foundation, Olympiads, SAT & IELTS" },
    ],
  },
  {
    label: "Co-Curricular",
    to: "/campus-life",
    children: [
      { label: "Krishi Vidya", to: "/krishi-vidya", desc: "Organic farming, horticulture & sustainability" },
      { label: "Khel Vidya", to: "/khel-vidya", desc: "Sports, fitness, yoga & Olympic disciplines" },
      { label: "Anubhav Vidya", to: "/anubhav-vidya", desc: "Skills, VR/AR, robotics, STEM & labs" },
      { label: "Samskriti Vidya", to: "/samskriti-vidya", desc: "Art, culture, clubs & leadership" },
      { label: "Campus & Gallery", to: "/campus", desc: "Explore our infrastructure" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];
