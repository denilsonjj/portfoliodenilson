import Analytics from "@/components/Analytics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BioPage from "./pages/BioPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalPage from "./pages/LegalPage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Analytics />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/privacidade" element={<LegalPage />} />
        <Route path="/termos" element={<LegalPage />} />
        <Route path="/cookies" element={<LegalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
