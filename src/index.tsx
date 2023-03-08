import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/core/app/App";
import ThemeProvider from "./contexts/theme-provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
