import React, { useEffect, useState, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCardType } from "../../components/HighlightCard/interface";
import { HistoryCard } from "../../components/HistoryCard";
import { DataProps } from "./interface";

import {
  Container,
  Header,
  HighlightCardsContainer,
  Icon,
  Photo,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper,
  Title,
  HistoryTransactionsContainer,
  HistoryTransactionsList,
  LogoutButton
} from "./styles";
import { dataKeys } from "../../constants/dataKeys";
import { currencyFormatter, dateFormatter } from "../../utils/formatters";

export function Dashboard(): JSX.Element {
  const [data, setData] = useState<DataProps[]>([]);
  
  async function loadHistory() {
    const response = await AsyncStorage.getItem(dataKeys.transactions);
    const history = response ? JSON.parse(response) : [];

    const historyFormatted = history.map((item: DataProps) => {
      const amount = currencyFormatter(Number(item.amount));
      const date = dateFormatter(new Date(item.date));
      
      return { ...item, amount, date };
    });

    setData(historyFormatted);
  }

  useEffect(() => {
    loadHistory();
  }, []);

  useFocusEffect(useCallback(() => {
    loadHistory();
  }, []));

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{
              uri: "https://avatars.githubusercontent.com/u/66757451?v=4",
            }} />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Avily Silva</UserName>
            </User>
          </UserInfo>
          <LogoutButton>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCardsContainer>
        <HighlightCard
          type={HighlightCardType.up}
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type={HighlightCardType.down}
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard
          type={HighlightCardType.total}
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de Abril"
        />
      </HighlightCardsContainer>

      <HistoryTransactionsContainer>
        <Title>Histórico</Title>

        <HistoryTransactionsList
          data={data}
          renderItem={({ item }) => (
            <HistoryCard data={item} />
          )}
        />
      </HistoryTransactionsContainer>
    </Container>
  )
}