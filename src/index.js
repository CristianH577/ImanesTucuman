import "./index.css";

import { createRoot } from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from "react-router";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </HashRouter>
);

// reportWebVitals(console.log);
