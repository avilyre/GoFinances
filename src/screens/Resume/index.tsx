import React from "react";

import { ResumeCard } from "../../components/ResumeCard";
import { ScreenDetailsTemplate } from "../../components/templates/ScreenDetailsTemplate";

export function Resume(): JSX.Element {
  return (
    <ScreenDetailsTemplate
      title="Resumo"
    >
      <ResumeCard
        title="Casa"
        amount="R$ 150,00"
        color="red"
      />
    </ScreenDetailsTemplate>
  );
}
