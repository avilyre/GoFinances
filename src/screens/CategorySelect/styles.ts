import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import { Category } from "../../utils/categories/interface";
import { CategoryItemProps } from "./interface";

export const Header = styled.View`
  height: ${RFValue(113)}px;
  width: 100%;
  padding-bottom: 19px;

  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const CategoryList = styled(
  FlatList as new (
    props: FlatListProps<Category>
  ) => FlatList<Category>
)``;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.colors.text_light};
  `}
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  background: ${({ theme }) => theme.colors.text_light};
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`
