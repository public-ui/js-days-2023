import { KoliBriDevHelper, register } from "@public-ui/components";
import { DEFAULT } from "@public-ui/theme-default";
import React from "react";
import ReactDOM from "react-dom/client";
import "uno.css";
import App from "./App.tsx";
import "./index.css";

register(DEFAULT, [])
  .then(() => {
    KoliBriDevHelper.patchTheme("default", {
      "KOL-BUTTON": `button > kol-span-wc {
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.5em 0.75em;
}
button:focus {
  outline: none;
}
button:focus > kol-span-wc {
  outline-offset: 0.125rem;
  outline-color: darkblue;
  outline-style: solid;
}
.primary button > kol-span-wc {
  background-color: darkblue;
  color: white;
}
.primary button:hover > kol-span-wc {
  background-color: white;
  color: darkblue;
}
.secondary button > kol-span-wc {
  background-color: darkcyan;
  color: white;
}
.secondary button:hover > kol-span-wc {
  background-color: white;
  color: darkcyan;
}`,
    });

    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.warn);
