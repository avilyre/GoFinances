import React from "react";

import { ButtonProps } from "./interface";
import { Container, Title } from "./styles";

export function Button({ title, ...rest }: ButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}