# Workshop

## Vorbereitung

### Node.js

- <https://nodejs.org/en/download/>

### Visual Studio Code

- <https://code.visualstudio.com/download>

### pnpm

- <https://pnpm.io/installation>

```bash
npm i -g pnpm
```

## Step 0

> Initialen Stand aus checken: `git clone https://github.com/public-ui/js-days-2023`

### Projekt generieren

```bash
pnpm create vite workshop --template react-ts
cd workshop
pnpm i
pnpm dev
```

### Atomic Design integrieren

Um leicht die Anwendung zu gestalten, integrieren wir UnoCSS.

- <https://unocss.dev/integrations/vite#react>

```bash
pnpm add -D unocss
```

```ts
// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
});
```

```ts
// vite.config.ts
import React from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), React()],
});
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// vite.config.ts
import React from "@vitejs/plugin-react";
+ import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
+    UnoCSS(),
    React()],
});
```

</details>

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "uno.css";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
+ import "uno.css";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

</details>

### KoliBri integrieren

#### Installation

```bash
pnpm add @public-ui/components@next @public-ui/react@next @public-ui/theme-default@next
```

> VSCode TS-Server neu starten empfohlen.

#### Ressourcen einbinden

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script
      type="module"
      src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
+   <script
+     type="module"
+     src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
+   ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>

> **Visual Studio Code**
>
> Damit IntelliSense für KoliBri im reinem HTML funktioniert, muss der `.vscode/settings.json` im Projekt folgende Einstellung hinzugefügt werden:
>
> ```json
> // .vscode/settings.json
> {
>   "html.customData": [
>     "./node_modules/@public-ui/components/dist/kolibri/kolibri.html-data.json"
>   ]
> }
> ```

### Default-Theme einbinden

```bash
pnpm add @public-ui/theme-default@next
```

```tsx
// src/main.tsx
import { register } from "@public-ui/components";
import { DEFAULT } from "@public-ui/theme-default";
import React from "react";
import ReactDOM from "react-dom/client";
import "uno.css";
import App from "./App.tsx";
import "./index.css";

register(DEFAULT, [])
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.warn);
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/main.tsx
+ import { register } from "@public-ui/components";
+ import { DEFAULT } from "@public-ui/theme-default";
import React from "react";
import ReactDOM from "react-dom/client";
import "uno.css";
import App from "./App.tsx";
import "./index.css";

+ register(DEFAULT, [])
+  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
+  })
+  .catch(console.warn);
```

</details>

## Step 1

> 👉 <https://github.com/public-ui/js-days-2023/pull/2/files>

### Sprachauszeichnung

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script
      type="module"
      src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
<!-- index.html -->
<!DOCTYPE html>
+ <html lang="de" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script
      type="module"
      src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>

### Logo einbinden

```tsx
// src/App.tsx
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { KolKolibri } from "@public-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex place-end">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://public-ui.github.io" target="_blank">
          <KolKolibri className="block logo w-35" />
        </a>
      </div>
      <h1>Vite + React + KoliBri</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/App.tsx
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
+ import { KolKolibri } from "@public-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex place-end">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
+       <a href="https://public-ui.github.io" target="_blank">
+         <KolKolibri className="block logo w-35" />
+       </a>
      </div>
      <h1>Vite + React + KoliBri</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

</details>

### Button einbinden

```tsx
// src/App.tsx
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { KolButton, KolKolibri } from "@public-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex place-end">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://public-ui.github.io" target="_blank">
          <KolKolibri className="block logo w-35" />
        </a>
      </div>
      <h1>Vite + React + KoliBri</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <KolButton
          _label={`count is ${count}`}
          _on={{
            onClick: () => setCount((count) => count + 1),
          }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/App.tsx
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
+ import { KolButton, KolKolibri } from "@public-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex place-end">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://public-ui.github.io" target="_blank">
          <KolKolibri className="block logo w-35" />
        </a>
      </div>
      <h1>Vite + React + KoliBri</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
+       <KolButton
+        _label={`count is ${count}`}
+        _on={{
+          onClick: () => setCount((count) => count + 1),
+        }}
+       />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

</details>

#### Icon hinzufügen

> KoliBri arbeitet mit Fonts statt SVG (svg2font)

```tsx
// src/App.tsx
<KolButton
  _label={`count is ${count}`}
  _icons="codicon codicon-thumbsup"
  _on={{
    onClick: () => setCount((count) => count + 1),
  }}
/>
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/App.tsx
<KolButton
  _label={`count is ${count}`}
+ _icons="codicon codicon-thumbsup"
  _on={{
    onClick: () => setCount((count) => count + 1),
  }}
/>
```

</details>

##### Icon-Fonts integrieren

- <https://microsoft.github.io/vscode-codicons/dist/codicon.html>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script
      type="module"
      src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@vscode/codicons@0.0.33/dist/codicon.min.css"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
<!-- index.html -->
<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script
      type="module"
      src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"
    ></script>
+   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vscode/codicons@0.0.33/dist/codicon.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>

## Step 2

### Formular aufbauen (Step 2.1)

> 👉 <https://github.com/public-ui/js-days-2023/pull/3/files>

Wir ersetzen den gesamten Quellcode in `src/App.tsx` mit folgendem:

```tsx
// src/App.tsx
import {
  KolButton,
  KolHeading,
  KolInputDate,
  KolInputNumber,
  KolInputText,
} from "@public-ui/react";
import "./App.css";
import { ErrorList } from "./ErrorList";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <KolHeading _label="Tischreservierung" />
      {/* https://public-ui.github.io/docs/concepts/formular */}
      <form className="flex flex-col gap-4">
        <div className="mt-2" tabIndex={0}>
          <ErrorList errors={{}} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <KolInputDate _label="Datum" _required />
          <KolInputDate _label="Uhrzeit" _type="time" _required />
          <KolInputNumber _label="Anzahl Personen" _min={1} _required />
          <span />
          {/* Über Label als Property zu sprechen . Robustheit, "echte" Barrierefreiheit */}
          <KolInputText _label="Name" _required />
          <KolInputText _label="Telefon" _required _type="tel" />
          <hr className="col-span-2 w-full" />
          <KolButton
            _label="Anfrage absenden"
            _type="submit"
            _variant="primary"
          />
          <KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" />
        </div>
      </form>
    </div>
  );
}

export default App;
```

### Formular-Logik hinzufügen (Step 2.2)

> 👉 <https://github.com/public-ui/js-days-2023/pull/4/files>

- <https://formik.org/docs/overview#installation>

```bash
pnpm add formik
```

```tsx
// src/App.tsx
import {
  KolButton,
  KolHeading,
  KolInputDate,
  KolInputNumber,
  KolInputText,
} from "@public-ui/react";
import "./App.css";
import { ErrorList } from "./ErrorList";
import { InputTypeOnDefault, Iso8601 } from "@public-ui/components";
import { Formik, useFormikContext } from "formik";

type FormValues = {
  date: Iso8601 | null;
  time: Iso8601 | null;
  numberOfPersons: number;
  name: string;
  phone: string;
};

const initialValues: FormValues = {
  date: "2021-10-10",
  time: "10:10",
  numberOfPersons: 2,
  name: "",
  phone: "",
};

function Form() {
  const form = useFormikContext<FormValues>();

  const createOnChange = (name: keyof FormValues): InputTypeOnDefault => {
    return {
      onChange: (event: Event, value: unknown) => {
        if (event.target) {
          void form.setFieldValue(name, value, true);
        }
      },
    };
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={() => {
        form.handleSubmit();
      }}
      onReset={() => {
        form.handleReset();
      }}
    >
      <div className="mt-2" tabIndex={0}>
        <ErrorList errors={{}} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <KolInputDate
          _label="Datum"
          _required
          _on={createOnChange("date")}
          _value={form.values.date}
        />
        <KolInputDate
          _label="Uhrzeit"
          _required
          _type="time"
          _on={createOnChange("time")}
          _value={form.values.time}
        />
        <KolInputNumber
          _label="Anzahl Personen"
          _min={1}
          _required
          _on={createOnChange("numberOfPersons")}
          _value={form.values.numberOfPersons}
        />
        <span />
        <KolInputText
          _label="Name"
          _required
          _on={createOnChange("name")}
          _value={form.values.name}
        />
        <KolInputText
          _label="Telefon"
          _required
          _type="tel"
          _on={createOnChange("phone")}
          _value={form.values.phone}
        />
        <hr className="col-span-2 w-full" />
        <KolButton
          _label="Anfrage absenden"
          _type="submit"
          _variant="primary"
        />
        <KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" />
      </div>
      <pre>{JSON.stringify(form.values, null, 2)}</pre>
    </form>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-4">
      <KolHeading _label="Tischreservierung" />
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form />
      </Formik>
    </div>
  );
}

export default App;
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/App.tsx
import {
  KolButton,
  KolHeading,
  KolInputDate,
  KolInputNumber,
  KolInputText,
} from "@public-ui/react";
import "./App.css";
import { ErrorList } from "./ErrorList";
+ import { InputTypeOnDefault, Iso8601 } from "@public-ui/components";
+ import { Formik, useFormikContext } from "formik";

+ type FormValues = {
+  date: Iso8601 | null;
+  time: Iso8601 | null;
+  numberOfPersons: number;
+  name: string;
+  phone: string;
+ };

+ const initialValues: FormValues = {
+  date: "2021-10-10",
+  time: "10:10",
+  numberOfPersons: 2,
+  name: "",
+  phone: "",
+ };

function Form() {
+  const form = useFormikContext<FormValues>();

+  const createOnChange = (name: keyof FormValues): InputTypeOnDefault => {
+    return {
+      onChange: (event: Event, value: unknown) => {
+        if (event.target) {
+          void form.setFieldValue(name, value, true);
+        }
+      },
+    };
+  };

+  return (
    <form
      className="flex flex-col gap-4"
+     onSubmit={() => {
+       form.handleSubmit();
+     }}
+     onReset={() => {
+       form.handleReset();
+     }}
    >
      <div className="mt-2" tabIndex={0}>
        <ErrorList errors={{}} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <KolInputDate
          _label="Datum"
          _required
+         _on={createOnChange("date")}
+         _value={form.values.date}
        />
        <KolInputDate
          _label="Uhrzeit"
          _required
          _type="time"
+         _on={createOnChange("time")}
+         _value={form.values.time}
        />
        <KolInputNumber
          _label="Anzahl Personen"
          _min={1}
          _required
+         _on={createOnChange("numberOfPersons")}
+         _value={form.values.numberOfPersons}
        />
        <span />
        <KolInputText
          _label="Name"
          _required
+         _on={createOnChange("name")}
+         _value={form.values.name}
        />
        <KolInputText
          _label="Telefon"
          _required
          _type="tel"
+         _on={createOnChange("phone")}
+         _value={form.values.phone}
        />
        <hr className="col-span-2 w-full" />
        <KolButton
          _label="Anfrage absenden"
          _type="submit"
          _variant="primary"
        />
        <KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" />
      </div>
+     <pre>{JSON.stringify(form.values, null, 2)}</pre>
    </form>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-4">
      <KolHeading _label="Tischreservierung" />
+      <Formik<FormValues>
+        initialValues={initialValues}
+        onSubmit={(values) => {
+          console.log(values);
+        }}
+      >
        <Form />
+      </Formik>
    </div>
  );
}

export default App;
```

</details>

### Formular-Validierung hinzufügen (Step 2.3)

> 👉 <https://github.com/public-ui/js-days-2023/pull/5/files>

- <https://formik.org/docs/guides/validation#validation>

```bash
pnpm add yup
```

```tsx
// src/App.tsx
import { InputTypeOnDefault, Iso8601 } from "@public-ui/components";
import {
  KolButton,
  KolHeading,
  KolInputDate,
  KolInputNumber,
  KolInputText,
} from "@public-ui/react";
import { Formik, useFormikContext } from "formik";
import { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import "./App.css";
import { ErrorList } from "./ErrorList";

type FormValues = {
  date: Iso8601 | null;
  time: Iso8601 | null;
  numberOfPersons: number;
  name: string;
  phone: string;
};

const initialValues: FormValues = {
  date: "2021-10-10",
  time: "10:10",
  numberOfPersons: 2,
  name: "",
  phone: "",
};

const terminSchema = {
  date: Yup.string().required("Bitte Datum wählen."),
  time: Yup.string().required("Bitte Zeit wählen."),
  numberOfPersons: Yup.number()
    .required("Bitte Personenanzahl wählen.")
    .max(8, "Maximal 8 Personen."),
};

const contactSchema = {
  name: Yup.string().required("Bitte Nachname eingeben."),
  phone: Yup.string().required("Bitte Telefon eingeben."),
};

function Form() {
  const form = useFormikContext<FormValues>();
  const [errorList, setErrorList] = useState({
    ...form.errors,
  });

  const showErrorList = useMemo(
    () => Object.keys(errorList).length > 0,
    [errorList]
  );

  useEffect(() => {
    if (errorList) {
      const errorList = document.getElementById("error-list");
      if (errorList) {
        errorList.focus();
      }
    }
  }, [errorList]);

  const createOnChange = (name: keyof FormValues): InputTypeOnDefault => {
    return {
      onChange: (event: Event, value: unknown) => {
        if (event.target) {
          void form.setFieldValue(name, value, true);
        }
      },
    };
  };

  // Hack to trigger validation on mount
  useEffect(() => {
    form.handleSubmit();
  }, []);

  const onSubmit = () => {
    console.log(form.errors);
    form.handleSubmit();
    setErrorList({
      ...form.errors,
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={onSubmit}
      onReset={() => {
        setErrorList({});
        form.handleReset();
        form.handleSubmit(); // Hack to trigger validation on reset
      }}
    >
      {showErrorList && (
        <div className="mt-2" tabIndex={0} id="error-list">
          <ErrorList errors={errorList} />
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <KolInputDate
          id="field-date"
          _label="Datum"
          _required
          _error={form.errors.date ?? ""}
          _on={createOnChange("date")}
          _touched={showErrorList}
          _value={form.values.date}
        />
        <KolInputDate
          id="field-time"
          _label="Uhrzeit"
          _required
          _type="time"
          _error={form.errors.time ?? ""}
          _on={createOnChange("time")}
          _touched={showErrorList}
          _value={form.values.time}
        />
        <KolInputNumber
          id="field-numberOfPersons"
          _label="Anzahl Personen"
          _min={1}
          _required
          _error={form.errors.numberOfPersons ?? ""}
          _on={createOnChange("numberOfPersons")}
          _touched={showErrorList}
          _value={form.values.numberOfPersons}
        />
        <span />
        <KolInputText
          id="field-name"
          _label="Name"
          _required
          _error={form.errors.name ?? ""}
          _on={createOnChange("name")}
          _touched={showErrorList}
          _value={form.values.name}
        />
        <KolInputText
          id="field-phone"
          _label="Telefon"
          _required
          _type="tel"
          _error={form.errors.phone ?? ""}
          _on={createOnChange("phone")}
          _touched={showErrorList}
          _value={form.values.phone}
        />
        <hr className="col-span-2 w-full" />
        <KolButton
          _label="Anfrage absenden"
          _type="submit"
          _variant="primary"
        />
        <KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" />
      </div>
    </form>
  );
}

const validationSchema = Yup.object().shape({
  ...terminSchema,
  ...contactSchema,
});

function App() {
  const onSubmit = (values: FormValues) => {
    console.log("Valid form to sumbit", values);
  };

  return (
    <div className="flex flex-col gap-4">
      <KolHeading _label="Tischreservierung" />
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form />
      </Formik>
    </div>
  );
}

export default App;
```

<details>
<summary>Geänderte Code-Stellen hervorheben</summary>

```diff
// src/App.tsx
+ import { InputTypeOnDefault, Iso8601 } from "@public-ui/components";
import {
  KolButton,
  KolHeading,
  KolInputDate,
  KolInputNumber,
  KolInputText,
} from "@public-ui/react";
import { Formik, useFormikContext } from "formik";
+ import { useEffect, useMemo, useState } from "react";
+ import * as Yup from "yup";
import "./App.css";
import { ErrorList } from "./ErrorList";

type FormValues = {
  date: Iso8601 | null;
  time: Iso8601 | null;
  numberOfPersons: number;
  name: string;
  phone: string;
};

const initialValues: FormValues = {
  date: "2021-10-10",
  time: "10:10",
  numberOfPersons: 2,
  name: "",
  phone: "",
};

+ const terminSchema = {
+  date: Yup.string().required("Bitte Datum wählen."),
+  time: Yup.string().required("Bitte Zeit wählen."),
+  numberOfPersons: Yup.number()
+    .required("Bitte Personenanzahl wählen.")
+    .max(8, "Maximal 8 Personen."),
+ };

+ const contactSchema = {
+  name: Yup.string().required("Bitte Nachname eingeben."),
+  phone: Yup.string().required("Bitte Telefon eingeben."),
+ };

function Form() {
  const form = useFormikContext<FormValues>();
+ const [errorList, setErrorList] = useState({
+   ...form.errors,
+ });

+ const showErrorList = useMemo(
+   () => Object.keys(errorList).length > 0,
+   [errorList]
+ );

+ useEffect(() => {
+   if (errorList) {
+     const errorList = document.getElementById("error-list");
+     if (errorList) {
+       errorList.focus();
+     }
+   }
+ }, [errorList]);

  const createOnChange = (name: keyof FormValues): InputTypeOnDefault => {
    return {
      onChange: (event: Event, value: unknown) => {
        if (event.target) {
          void form.setFieldValue(name, value, true);
        }
      },
    };
  };

+ // Hack to trigger validation on mount
+ useEffect(() => {
+   form.handleSubmit();
+ }, []);

+ const onSubmit = () => {
+   console.log(form.errors);
+   form.handleSubmit();
+   setErrorList({
+     ...form.errors,
+   });
+  };

  return (
    <form
      className="flex flex-col gap-4"
+     onSubmit={onSubmit}
      onReset={() => {
+       setErrorList({});
        form.handleReset();
+       form.handleSubmit(); // Hack to trigger validation on reset
      }}
    >
      {showErrorList && (
        <div className="mt-2" tabIndex={0} id="error-list">
+         <ErrorList errors={errorList} />
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <KolInputDate
+         id="field-date"
          _label="Datum"
          _required
+         _error={form.errors.date ?? ""}
          _on={createOnChange("date")}
+         _touched={showErrorList}
          _value={form.values.date}
        />
        <KolInputDate
+         id="field-time"
          _label="Uhrzeit"
          _required
          _type="time"
+         _error={form.errors.time ?? ""}
          _on={createOnChange("time")}
+         _touched={showErrorList}
          _value={form.values.time}
        />
        <KolInputNumber
+         id="field-numberOfPersons"
          _label="Anzahl Personen"
          _min={1}
          _required
+         _error={form.errors.numberOfPersons ?? ""}
          _on={createOnChange("numberOfPersons")}
+         _touched={showErrorList}
          _value={form.values.numberOfPersons}
        />
        <span />
        <KolInputText
+         id="field-name"
          _label="Name"
          _required
+         _error={form.errors.name ?? ""}
          _on={createOnChange("name")}
+         _touched={showErrorList}
          _value={form.values.name}
        />
        <KolInputText
+         id="field-phone"
          _label="Telefon"
          _required
          _type="tel"
+         _error={form.errors.phone ?? ""}
          _on={createOnChange("phone")}
+         _touched={showErrorList}
          _value={form.values.phone}
        />
        <hr className="col-span-2 w-full" />
        <KolButton
          _label="Anfrage absenden"
          _type="submit"
          _variant="primary"
        />
        <KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" />
      </div>
    </form>
  );
}

+ const validationSchema = Yup.object().shape({
+  ...terminSchema,
+  ...contactSchema,
+ });

function App() {
+ const onSubmit = (values: FormValues) => {
+   console.log("Valid form to sumbit", values);
+ };

  return (
    <div className="flex flex-col gap-4">
      <KolHeading _label="Tischreservierung" />
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form />
      </Formik>
    </div>
  );
}

export default App;
```

</details>
