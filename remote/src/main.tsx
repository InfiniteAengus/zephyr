import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CategoryView from "./components/CategoryView";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-400 text-sm leading-none">
      <CategoryView data={[]} />
    </div>
  </StrictMode>
);
