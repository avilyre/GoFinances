import React from "react";

import { HighlightCardProps } from "./interface";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from "./styles";

export function HighlightCard({
  title,
  amount,
  lastTransaction,
  type
}: HighlightCardProps): JSX.Element {
  
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}