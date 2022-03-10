import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  LogoutIcon,
  HighlightCardsContainer
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCardType } from "../../components/HighlightCard/interface";

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
    </Container>
  )
}