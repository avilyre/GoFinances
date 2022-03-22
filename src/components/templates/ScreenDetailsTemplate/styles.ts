import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { HeaderProps } from "./interface";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View<HeaderProps>`
  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  height: ${({ isModal }) => isModal
  ? RFValue(113 - getStatusBarHeight())
  : RFValue(113)}px;
  
  width: 100%;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({  theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
