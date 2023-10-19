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
        <div className="flex place-center gap-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <KolButton
            _label={`count is ${count}`}
            _on={{
              onClick: () => setCount((count) => count + 1),
            }}
          />
          <KolButton
            _hideLabel
            _label={`count is ${count}`}
            _icons="codicon codicon-thumbsup"
            _on={{
              onClick: () => setCount((count) => count + 1),
            }}
            _variant="danger"
          />
        </div>
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
