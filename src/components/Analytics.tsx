import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const Analytics = () => {
  const location = useLocation();
  const portfolioRoute = location.pathname === "/" || location.pathname.startsWith("/projetos/");
  const [consent, setConsent] = useState<"accepted" | "rejected" | "undecided" | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("denilson-cookie-consent");
      setConsent(saved === "accepted" || saved === "rejected" ? saved : "undecided");
    } catch {
      setConsent("undecided");
    }
  }, []);

  useEffect(() => {
    if (consent === "accepted") initAnalytics();
  }, [consent]);

  useEffect(() => {
    if (consent === "accepted") {
      const path = `${location.pathname}${location.search}${location.hash}`;
      trackPageView(path);
    }
  }, [consent, location.pathname, location.search, location.hash]);

  const chooseConsent = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem("denilson-cookie-consent", choice);
    } catch {
      // The choice still applies to this page when browser storage is unavailable.
    }
    setConsent(choice);
  };

  return (
    <>
      {consent === "accepted" ? <VercelAnalytics /> : null}
      {consent === "undecided" ? (
        <aside className={portfolioRoute ? "portfolio-consent" : "fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-md border border-cyan-200/25 bg-[#09111d]/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5"} aria-label="Preferências de cookies">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-slate-300">
              Podemos medir as visitas com cookies opcionais? <Link to="/cookies" className="text-cyan-200 underline underline-offset-2">Saiba mais</Link>.
            </p>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => chooseConsent("rejected")} className="rounded-sm border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-white/30">Recusar</button>
              <button onClick={() => chooseConsent("accepted")} className="rounded-sm bg-cyan-200 px-4 py-2 text-sm font-semibold text-[#061019] hover:bg-white">Aceitar</button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Analytics;
