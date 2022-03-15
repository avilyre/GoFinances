import React, { useState } from "react";

import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { TransactionType } from "../../global/interface";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from "./styles";

export function Register(): JSX.Element {
  const [transactionType, setTransactionType] = useState<TransactionType | undefined>();

  const handleTransactionType = (type: TransactionType) => {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton
              title="Entrada"
              type={TransactionType.income}
              onPress={() => handleTransactionType(TransactionType.income)}
              isActive={transactionType === TransactionType.income}
            />
            <TransactionTypeButton
              title="Saída"
              type={TransactionType.outcome}
              onPress={() => handleTransactionType(TransactionType.outcome)}
              isActive={transactionType === TransactionType.outcome}
            />
          </TransactionTypes>
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  );
}