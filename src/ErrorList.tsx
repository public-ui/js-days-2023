import { KolAlert, KolLinkGroup } from "@public-ui/react";
import { useMemo } from "react";

type ErrorListPropType = {
  errors: Record<string, string>;
};

export function ErrorList({ errors }: ErrorListPropType) {
  const links = useMemo(() => {
    return Object.entries(errors).map(([name, error]) => ({
      _href: `#field-${name}`,
      _label: error,
      _on: {
        onClick: () => {
          const field = document.getElementById(`field-${name}`);
          console.log(field);
          if (field) {
            field.focus();
          }
        },
      },
    }));
  }, [errors]);

  return (
    <KolAlert _label="Fehlerliste" _type="error" _variant="card">
      Bitte korrigieren Sie folgende Fehler:
      <KolLinkGroup _label="Fehlerliste" _links={links} />
    </KolAlert>
  );
}
