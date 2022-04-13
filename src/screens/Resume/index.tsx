import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { ResumeCard } from "../../components/ResumeCard";
import { ScreenDetailsTemplate } from "../../components/templates/ScreenDetailsTemplate";
import { dataKeys } from "../../constants/dataKeys";
import { categories } from "../../constants/categories";
import { DataProps } from "../Dashboard/interface";
import { TransactionType } from "../../global/interface";
import { currencyFormatter } from "../../utils/formatters";
import { ResumeCategoryData } from "./interface";
import { ResumeCardsList } from "./styles";

export function Resume(): JSX.Element {
  const [resumeCategories, setResumeCategories] = useState<ResumeCategoryData[]>(
    [] as ResumeCategoryData[]
  );

  function getExpensives(categoriesData: DataProps[]) {
    const expensives: DataProps[] = categoriesData.filter((historyItem: DataProps) => {
      return historyItem.type === TransactionType.outcome;
    });

    return expensives;
  }

  function getTotalByCategory(categoriesData: DataProps[]): ResumeCategoryData[] {
    let totalByCategory: ResumeCategoryData[] = [];

    const expensives = getExpensives(categoriesData);

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach(historyItem => {
        if (historyItem.category === category.key) {
          categorySum += Number(historyItem.amount);
        }
      });

      if (categorySum !== 0) {
        totalByCategory.push({
          id: uuid.v4() as string,
          title: category.title,
          amount: currencyFormatter(categorySum),
          color: category.color
        });
      }
    });

    return totalByCategory;
  }

  async function loadData() {
    const response = await AsyncStorage.getItem(dataKeys.transactions);
    const responseFormatted = response ? JSON.parse(response) : [];

    const totalByCategory = getTotalByCategory(responseFormatted);

    setResumeCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenDetailsTemplate
      title="Resumo"
    >
      <ResumeCardsList
        data={resumeCategories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ResumeCard
            title={item.title}
            amount={item.amount}
            color={item.color}
          />
        )}
      />
    </ScreenDetailsTemplate>
  );
}
