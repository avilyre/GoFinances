import React from "react";

import { ResumeCardProps } from "./interface";
import { Container, Title, Amount } from "./styles";

export function ResumeCard({ title, amount, color }: ResumeCardProps): JSX.Element {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
