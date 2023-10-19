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
