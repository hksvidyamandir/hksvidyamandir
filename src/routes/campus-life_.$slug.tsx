import { createFileRoute, notFound } from "@tanstack/react-router";
import { COCURRICULAR_PAGES } from "@/lib/cocurricular-pages-data";
import { seo } from "@/lib/seo";
import { CoCurricularSubpage } from "@/components/site/cocurricular/CoCurricularSubpage";

export const Route = createFileRoute("/campus-life_/$slug")({
  loader: ({ params }) => {
    const page = COCURRICULAR_PAGES[params.slug];
    if (!page || params.slug === "index") throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(loaderData.seoTitle, loaderData.seoDescription, `/campus-life/${loaderData.slug}`)
      : seo("Co-Curricular", "Explore co-curricular life at HKS Vidyamandir.", "/campus-life"),
  component: CampusLifeSubpageRoute,
});

function CampusLifeSubpageRoute() {
  const page = Route.useLoaderData();
  return <CoCurricularSubpage data={page} />;
}
