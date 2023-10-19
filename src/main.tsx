// import { register } from "@public-ui/components";
// import { DEFAULT } from "@public-ui/theme-default";
import React from "react";
import ReactDOM from "react-dom/client";
import "uno.css";
import App from "./App.tsx";
import "./index.css";

// register(DEFAULT, [])
//   .then(() => {
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// })
// .catch(console.warn);
