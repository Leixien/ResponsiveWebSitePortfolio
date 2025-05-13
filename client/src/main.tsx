import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from 'aos';

// Initialize AOS animation
AOS.init({
  duration: 800,
  once: true
});

createRoot(document.getElementById("root")!).render(<App />);
