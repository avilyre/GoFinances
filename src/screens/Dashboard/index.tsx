import React, { useEffect, useState, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCardType } from "../../components/HighlightCard/interface";
import { HistoryCard } from "../../components/HistoryCard";
import { DataProps, HighlightData } from "./interface";

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
import { TransactionType } from "../../global/interface";

export function Dashboard(): JSX.Element {
  const [historyData, setHistoryData] = useState<DataProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({
    entries: { amount: currencyFormatter(0) },
    expensives: { amount: currencyFormatter(0) },
    total: { amount: currencyFormatter(0) }
  });
  
  async function loadHistory() {
    const response = await AsyncStorage.getItem(dataKeys.transactions);
    const history = response ? JSON.parse(response) : [];

    let entries = 0;
    let expensives = 0;

    const historyFormatted = history.map((item: DataProps) => {
      const amount = currencyFormatter(Number(item.amount));
      const date = dateFormatter(new Date(item.date));

      if (item.type === TransactionType.income) {
        entries += Number(item.amount);
      }

      if (item.type === TransactionType.outcome) {
        expensives += Number(item.amount);
      }

      return { ...item, amount, date };
    });

    const total = entries - expensives;

    setHistoryData(historyFormatted);
    setHighlightData({
      entries: {
        amount: currencyFormatter(entries),
      },
      expensives: {
        amount: currencyFormatter(expensives)
      },
      total: {
        amount: currencyFormatter(total)
      }
    });
  }


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
          amount={highlightData.entries.amount}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type={HighlightCardType.down}
          title="Saídas"
          amount={highlightData.expensives.amount}
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard
          type={HighlightCardType.total}
          title="Disponível"
          amount={highlightData.total.amount}
          lastTransaction="01 à 16 de Abril"
        />
      </HighlightCardsContainer>

      <HistoryTransactionsContainer>
        <Title>Histórico</Title>

        <HistoryTransactionsList
          data={historyData}
          renderItem={({ item }) => (
            <HistoryCard data={item} />
          )}
        />
      </HistoryTransactionsContainer>
    </Container>
  )
}