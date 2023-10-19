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
