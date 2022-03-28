import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-native";

import { Button } from "../../components/Form/Button";
import { CategorySelectorButton } from "../../components/Form/CategorySelectorButton";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { ScreenDetailsTemplate } from "../../components/templates/ScreenDetailsTemplate";
import { TransactionType } from "../../global/interface";
import { categories } from "../../utils/categories";
import { Category } from "../../utils/categories/interface";
import { CategorySelect } from "../CategorySelect";
import { FormProps } from "./interface";

import { Form, Fields, TransactionTypes } from "./styles";

export function Register(): JSX.Element {
  const defaultCategory = categories[0];

  const [category, setCategory] = useState<Category>(defaultCategory);
  const [transactionType, setTransactionType] = useState<TransactionType | undefined>();
  const [isCategorySelectModalEnabled, setIsCategorySelectModalEnabled] = useState(false);
  const { control, handleSubmit } = useForm<FormProps>();

  const handleTransactionType = (type: TransactionType) => {
    setTransactionType(type);
  }

  const handleToggleCategorySelect = () => {
    setIsCategorySelectModalEnabled(!isCategorySelectModalEnabled);
  }

  const handleSubmitRegister = ({ name, amount }: FormProps) => {
    const data = {
      name,
      amount,
      transactionType,
      category: category.key
    };

    console.log(data);
  }

  return (
    <ScreenDetailsTemplate title="Registrar" >
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
          />

          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
            keyboardType="numeric"
          />

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

        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleSubmitRegister)}
        />
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