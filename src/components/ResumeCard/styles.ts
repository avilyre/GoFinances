import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ContainerProps } from "./interface";

export const Container = styled.View<ContainerProps>`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: 13px 24px;
  border-radius: 5px;

  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  background: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
