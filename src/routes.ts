import type { ComponentType } from "react";
import { matchRoutes } from "react-router-dom";

type PageModule = { default: ComponentType };
type PageRoute = { path: string; page: string };

const pageModules = import.meta.glob<PageModule>("./pages/*.tsx");

export const pageRoutes: PageRoute[] = [
  { path: "/", page: "Index" },
  { path: "/bio", page: "BioPage" },
  { path: "/servicos", page: "ServicesPage" },
  { path: "/servicos/:slug", page: "ServiceDetailPage" },
  { path: "/projetos/:slug", page: "ProjectPage" },
  { path: "/privacidade", page: "LegalPage" },
  { path: "/termos", page: "LegalPage" },
  { path: "/cookies", page: "LegalPage" },
  { path: "*", page: "NotFound" },
];

export const getPageRoute = (pathname: string) => matchRoutes(pageRoutes, { pathname })![0].route;
export const pageSource = (route: PageRoute) => `src/pages/${route.page}.tsx`;
export const loadPage = (route: PageRoute) => pageModules[`./pages/${route.page}.tsx`]();
