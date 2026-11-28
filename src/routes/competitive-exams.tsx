import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { CompetitiveExamsPage } from "@/components/site/academics/CompetitiveExamsPage";

export const Route = createFileRoute("/competitive-exams")({
  head: () =>
    seo(
      "Competitive Exams, Olympiads & NEET/JEE Foundation",
      "Integrated NEET and JEE foundation from Grade 6, Olympiad preparation from Grade 4, and Digital SAT, ACT, TOEFL and IELTS coaching at HKS Vidyamandir.",
      "/competitive-exams",
    ),
  component: CompetitiveExamsPage,
});
