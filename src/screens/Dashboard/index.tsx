import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCardType } from "../../components/HighlightCard/interface";
import { HistoryCard } from "../../components/HistoryCard";
import { HistoryCardDataProps } from "../../components/HistoryCard/interface";
import { historyTransactionsMock } from "../../mocks/historyCardMocks";
import {
  Container,
  Header,
  HighlightCardsContainer,
  LogoutIcon,
  Photo,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper,
  Title,
  HistoryTransactionsContainer,
  HistoryTransactionsList
} from "./styles";

export interface DataProps extends HistoryCardDataProps {
  id: string;
}

export function Dashboard(): JSX.Element {
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
          <LogoutIcon name="power" />
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
          data={historyTransactionsMock}
          renderItem={({ item }) => (
              <HistoryCard data={item} />
            )
          }
        />
      </HistoryTransactionsContainer>
    </Container>
  )
}