import React from "react";
import { TransactionType } from "../../global/interface";
import { categories } from "../../utils/categories";
import { HistoryCardProps } from "./interface";

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
  const [category] = categories.filter(item => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount transactionType={data.type}>
        {data.type === TransactionType.outcome && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.title}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}