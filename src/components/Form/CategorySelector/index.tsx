import React from "react";

import { CategorySelectorProps } from "./interface";
import {
  Container,
  Category,
  Icon
} from "./styles";

export function CategorySelector({ title }: CategorySelectorProps): JSX.Element {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
