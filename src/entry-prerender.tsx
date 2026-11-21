import { renderToString } from "react-dom/server";
import { portfolioSeo, projectPath, projectSeo, projects, services } from "./data/portfolio";
import { servicePath, serviceSeo } from "./data/servicePages";
import { siteContent } from "./data/siteContent";
import Index from "./pages/Index";
import { ProjectDetail } from "./pages/ProjectPage";
import { ServiceDetail } from "./pages/ServiceDetailPage";

export const origin = siteContent.seo.siteUrl;

export const renderPages = () => [
  { path: "/", ...portfolioSeo, markup: renderToString(<Index />) },
  ...services.map(({ id }) => ({
    path: servicePath(id),
    ...serviceSeo(id),
    markup: renderToString(<ServiceDetail id={id} />),
  })),
  ...projects.map((project) => ({
    path: projectPath(project),
    ...projectSeo(project),
    markup: renderToString(<ProjectDetail project={project} />),
  })),
];
