import React from "react";
import { TransactionTypeButtonProps } from "./interface";

import {
  Button,
  Container,
  Icon,
  Title
} from "./styles";

import { icon } from "./constants";

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: TransactionTypeButtonProps): JSX.Element {
  return (
    <Container
        isActive={isActive}
        type={type}
        >
      <Button
        isActive={isActive}
        type={type}
        {...rest}
      >
        <Icon
          isActive={isActive}
          name={icon[type]}
          type={type}
        />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
