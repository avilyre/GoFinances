import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7
})`
  background: ${({ theme }) => theme.colors.shape};

  width: 100%;
  padding: 18px 16px;
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

