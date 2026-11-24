import Analytics from "@/components/Analytics";
import { lazy, Suspense, type ComponentType } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadPage, pageRoutes } from "./routes";

const routes = pageRoutes.map((route) => ({ ...route, Page: lazy(() => loadPage(route)) }));

const App = ({ initialPage, Page }: { initialPage: string; Page: ComponentType }) => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Analytics />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.page === initialPage
            ? <Page />
            : <Suspense fallback={<p role="status" className="p-6">Carregando…</p>}><route.Page /></Suspense>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
