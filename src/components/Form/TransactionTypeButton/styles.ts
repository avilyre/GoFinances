import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TransactionType } from "../../../global/interface";
import { ButtonProps, ContainerProps, IconProps } from "./interface";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View<ContainerProps>`
  /* Flex 1 will work too in another situation */
  width: 48%; 

  border-radius: 5px;
  ${({ isActive }) => !isActive && css`
    border-width: 1.5px;
    border: solid ${({ theme }) => theme.colors.text_light};
  `}

  ${({ isActive, type }) => isActive && type === TransactionType.income && css`
    background: ${({ theme }) => theme.colors.successLight};
    border: none;
  `}

  ${({ isActive, type }) => isActive && type === TransactionType.outcome && css`
    background: ${({ theme }) => theme.colors.attentionLight};
  `}
`;

export const Button = styled(RectButton)<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 18px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(20)}px;

  ${({ type }) => type === TransactionType.income && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === TransactionType.outcome && css`
    color: ${({ theme }) => theme.colors.attention};
  `}

  margin-right: 14px;

`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

