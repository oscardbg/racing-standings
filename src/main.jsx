import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context";
import App from "./App.jsx";
import "./assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);