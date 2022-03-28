import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { ScreenDetailsTemplateProps } from "./interface";
import { Container, Header, Title } from "./styles";

export function ScreenDetailsTemplate({
  title,
  isModal = false,
  children
}: ScreenDetailsTemplateProps): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header isModal={isModal}>
          <Title>{title}</Title>
        </Header>
        
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}