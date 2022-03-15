import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};

  flex: 1;
`;


export const Header = styled.View`
  background: ${({  theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  height: ${RFValue(113)}px;
  width: 100%;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({  theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Form = styled.View`
  flex: 1;

  width: 100%;

  padding: 24px;
`;

export const Fields = styled.View`
  flex: 1;
`;
