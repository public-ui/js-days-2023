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
