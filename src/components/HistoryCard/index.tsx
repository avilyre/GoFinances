import React from "react";
import { HistoryCardProps, TransactionType } from "./interface";

import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date
} from "./styles";

export function HistoryCard({ data }: HistoryCardProps): JSX.Element {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount transactionType={data.type}>
        {data.type === TransactionType.outcome && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}