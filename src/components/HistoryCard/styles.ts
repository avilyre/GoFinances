import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { AmountTransactionType } from "./interface";
import { TransactionType } from "../../global/interface";

export const Container = styled.View`
  background-color: ${({ theme } ) => theme.colors.shape};

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text<AmountTransactionType>`
  color: ${({ theme, transactionType }) => 
    transactionType === TransactionType.outcome
    ? theme.colors.attention
    : theme.colors.success
    };

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(20)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  margin-left: 17px;

  font-size: ${RFValue(14)}px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(14)}px;
`;
