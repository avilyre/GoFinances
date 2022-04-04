import React, { useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import uuid from "react-native-uuid";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yupResolver } from "@hookform/resolvers/yup";

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

import { formSchema } from "./utils";
import { dataKeys } from "../../constants/dataKeys";
import { ScreenNames } from "../../routes/constants";

import { RootView, Form, Fields, TransactionTypes } from "./styles";

export function Register(): JSX.Element {
  const defaultCategory = categories[0];

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [category, setCategory] = useState<Category>(defaultCategory);
  const [transactionType, setTransactionType] = useState<TransactionType | undefined>();
  const [isCategorySelectModalEnabled, setIsCategorySelectModalEnabled] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormProps>({
    resolver: yupResolver(formSchema)
  });

  const handleTransactionType = (type: TransactionType) => {
    setTransactionType(type);
  }

  const handleToggleCategorySelect = () => {
    setIsCategorySelectModalEnabled(!isCategorySelectModalEnabled);
  }

  const handleSubmitRegister = async ({ name, amount }: FormProps) => {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo de transação");
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name,
      amount,
      type: transactionType,
      category: category.key,
      date: new Date()
    };

    try {
      const data = await AsyncStorage.getItem(dataKeys.transactions);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ];

      await AsyncStorage.setItem(dataKeys.transactions, JSON.stringify(dataFormatted));

      setCategory(defaultCategory);
      setTransactionType(undefined);
      reset();

      navigation.navigate(ScreenNames.Dashboard);
    } catch(error) {
      console.error(error);
      Alert.alert("Não foi possível salvar");
    };
  }

  async function loadData() {
    const result =  await AsyncStorage.getItem(dataKeys.transactions);
  }

  useEffect(() => {
    loadData();
  });

  return (
    <ScreenDetailsTemplate title="Registrar" >
      <RootView>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount?.message}
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
      </RootView>
    </ScreenDetailsTemplate>
  );
}