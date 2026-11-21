import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/portfolio.css";

const root = document.getElementById("root")!;
const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
if (root.dataset.prerendered === pathname) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
