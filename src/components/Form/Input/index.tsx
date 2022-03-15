import React from "react";
import { InputProps } from "./interface";
import { Container } from "./styles";

export function Input({ ...rest }: InputProps): JSX.Element {
  return (
    <Container {...rest}>

    </Container>
  );
}