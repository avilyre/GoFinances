import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFPercentage(42)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;