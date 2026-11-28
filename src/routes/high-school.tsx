import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { HighSchoolPage } from "@/components/site/academics/HighSchoolPage";

export const Route = createFileRoute("/high-school")({
  head: () =>
    seo(
      "High School (Grades 6 – 10)",
      "Explore High School at HKS Vidyamandir: Grades 6 to 10 CBSE programme combining subject depth, laboratory enquiry, ten bagless days, coding, AI and NEET/JEE foundation.",
      "/high-school",
    ),
  component: HighSchoolPage,
});
