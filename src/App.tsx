import Analytics from "@/components/Analytics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BioPage from "./pages/BioPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
