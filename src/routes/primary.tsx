import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PrimaryPage } from "@/components/site/academics/PrimaryPage";

export const Route = createFileRoute("/primary")({
  head: () =>
    seo(
      "Primary School (Grades 3 – 5)",
      "Explore Primary School at HKS Vidyamandir: Grades 3 to 5 CBSE preparatory stage focused on connected learning, daily literacy, hands-on science, early robotics and Olympiads.",
      "/primary",
    ),
  component: PrimaryPage,
});
