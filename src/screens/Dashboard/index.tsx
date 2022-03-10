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
  LogoutIcon
} from "./styles";

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
    </Container>
  )
}