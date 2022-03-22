import React from "react";

import { CategorySelectorButtonProps } from "./interface";
import {
  Container,
  Category,
  Icon
} from "./styles";

export function CategorySelectorButton({
  title,
  onPress
}: CategorySelectorButtonProps): JSX.Element {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
