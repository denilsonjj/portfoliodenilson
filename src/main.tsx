import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { getPageRoute, loadPage } from "./routes";
import "./index.css";

const root = document.getElementById("root")!;
const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const route = getPageRoute(pathname);
const hasPrerender = root.dataset.prerendered === pathname
  || (root.dataset.prerendered === "/404" && route.path === "*");

loadPage(route).then(({ default: Page }) => {
  const app = <App initialPage={route.page} Page={Page} />;
  if (hasPrerender) hydrateRoot(root, app);
  else createRoot(root).render(app);
}).catch((error: unknown) => {
  console.error("Falha ao carregar a página", error);
  if (!hasPrerender) {
    createRoot(root).render(<p role="alert" className="p-6">Ocorreu um erro ao carregar. <a href={window.location.href}>Recarregar a página</a></p>);
  }
});
