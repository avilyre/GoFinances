import React from "react";
import { ScreenDetailsTemplateProps } from "./interface";

import { Container, Header, Title } from "./styles";

export function ScreenDetailsTemplate({
  title,
  isModal = false,
  children
}: ScreenDetailsTemplateProps): JSX.Element {
  return (
    <Container>
      <Header isModal={isModal}>
        <Title>{title}</Title>
      </Header>
      
      {children}
    </Container>
  );
}