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
  LogoutButton,
  LoadingContainer
} from "./styles";
import { dataKeys } from "../../constants/dataKeys";
import { currencyFormatter, dateFormatter } from "../../utils/formatters";
import { TransactionType } from "../../global/interface";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { getLastDate, getLastHistoryDate, getLastHistoryUpdate } from "./utils";

export function Dashboard(): JSX.Element {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [historyData, setHistoryData] = useState<DataProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);
  
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

    const lastEntriesDate = getLastHistoryDate({
      collection: history as DataProps[],
      typeHistory: TransactionType.income
    });

    const lastExpensivesDate = getLastHistoryDate({
      collection: history as DataProps[],
      typeHistory: TransactionType.outcome
    });
    
    const lastUpdateDate = getLastHistoryUpdate({
      collection: history as DataProps[]
    });

    setHistoryData(historyFormatted);
    setHighlightData({
      entries: {
        amount: currencyFormatter(entries),
        lastUpdate: lastEntriesDate
      },
      expensives: {
        amount: currencyFormatter(expensives),
        lastUpdate: lastExpensivesDate
      },
      total: {
        amount: currencyFormatter(total),
        lastUpdate: lastUpdateDate
      }
    });
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadHistory();
  }, []));

  return (
    <Container>
      {isLoading? 
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      :
        <>
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
              lastTransaction={highlightData.entries.lastUpdate}
            />
            <HighlightCard
              type={HighlightCardType.down}
              title="Saídas"
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastUpdate}
            />
            <HighlightCard
              type={HighlightCardType.total}
              title="Disponível"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastUpdate}
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
        </>
      }
    </Container>
  )
}