import React, { useState } from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Form/Button";
import { CategorySelectorButton } from "../../components/Form/CategorySelectorButton";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { ScreenDetailsTemplate } from "../../components/templates/ScreenDetailsTemplate";
import { TransactionType } from "../../global/interface";
import { categories } from "../../utils/categories";
import { Category } from "../../utils/categories/interface";
import { CategorySelect } from "../CategorySelect";

import { Form, Fields, TransactionTypes } from "./styles";

export function Register(): JSX.Element {
  const defaultCategory = categories[0];

  const [category, setCategory] = useState<Category>(defaultCategory);
  const [transactionType, setTransactionType] = useState<TransactionType | undefined>();
  const [isCategorySelectModalEnabled, setIsCategorySelectModalEnabled] = useState(false);

  const handleTransactionType = (type: TransactionType) => {
    setTransactionType(type);
  }

  const handleToggleCategorySelect = () => {
    setIsCategorySelectModalEnabled(!isCategorySelectModalEnabled);
  }

  return (
    <ScreenDetailsTemplate title="Registrar" >
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

          <CategorySelectorButton
            title={category.title}
            onPress={handleToggleCategorySelect}
          />
        </Fields>

        <Button title="Cadastrar" />
      </Form>

      <Modal
        animationType="slide"
        visible={isCategorySelectModalEnabled}
        onRequestClose={handleToggleCategorySelect}
      >
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleToggleCategorySelect}
        />
      </Modal>
    </ScreenDetailsTemplate>
  );
}