import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { portfolioSeo, projectPath, projectSeo, projects, services } from "./data/portfolio";
import { servicePages, servicePath, serviceSeo, servicesCatalogSeo } from "./data/servicePages";
import { siteContent } from "./data/siteContent";
import BioPage, { bioSeo } from "./pages/BioPage";
import Index from "./pages/Index";
import LegalPage, { legalDocuments, legalSeo } from "./pages/LegalPage";
import NotFound, { notFoundSeo } from "./pages/NotFound";
import { ProjectDetail } from "./pages/ProjectPage";
import { ServiceDetail } from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";

type SchemaItem = Record<string, unknown>;
type Breadcrumb = { name: string; path: string };

export const origin = siteContent.seo.siteUrl;
export const shareImage = new URL(siteContent.seo.ogImagePath, origin).href;

const absoluteUrl = (path: string) => new URL(path, origin).href;
const businessId = absoluteUrl("/#business");
const areaServed = [
  ...siteContent.seo.serviceCities.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "Pernambuco" },
  })),
  { "@type": "Country", name: "Brasil" },
];

const homeSchema: SchemaItem[] = [
  {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteContent.brand.name,
    url: absoluteUrl("/"),
    inLanguage: "pt-BR",
    publisher: { "@id": businessId },
  },
  {
    "@type": "Organization",
    "@id": businessId,
    name: siteContent.brand.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon-192.png"),
    description: siteContent.seo.serviceDescription,
    areaServed,
    sameAs: [
      siteContent.seo.instagram,
      siteContent.testimonial.profileUrl,
    ],
  },
];

const breadcrumbSchema = (items: Breadcrumb[]): SchemaItem => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: absoluteUrl(path),
  })),
});

const homeCrumb = { name: "Início", path: "/" };
const servicesCrumb = { name: "Serviços", path: "/servicos" };
const projectsCrumb = { name: "Projetos", path: "/#cases" };

const renderPage = (
  path: string,
  seo: { title: string; description: string },
  component: ReactElement,
  schema: SchemaItem[] = [],
  indexable = true,
) => ({
  path,
  ...seo,
  schema,
  indexable,
  markup: renderToString(<StaticRouter location={path}>{component}</StaticRouter>),
});

export const renderPages = () => [
  renderPage("/", portfolioSeo, <Index />, homeSchema),
  renderPage("/servicos", servicesCatalogSeo, <ServicesPage />, [breadcrumbSchema([homeCrumb, servicesCrumb])]),
  renderPage("/bio", bioSeo, <BioPage />),
  ...legalDocuments.map((document) => renderPage(`/${document}`, legalSeo(document), <LegalPage />)),
  ...services.map(({ id }) => {
    const path = servicePath(id);
    const service = servicePages[id];
    return renderPage(path, serviceSeo(id), <ServiceDetail id={id} />, [
      breadcrumbSchema([homeCrumb, servicesCrumb, { name: service.title, path }]),
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absoluteUrl(path),
        provider: { "@id": businessId },
        areaServed,
      },
    ]);
  }),
  ...projects.map((project) => {
    const path = projectPath(project);
    return renderPage(path, projectSeo(project), <ProjectDetail project={project} />, [
      breadcrumbSchema([homeCrumb, projectsCrumb, { name: project.title, path }]),
    ]);
  }),
  renderPage("/404", notFoundSeo, <NotFound />, [], false),
];
