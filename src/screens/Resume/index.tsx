import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { VictoryPie } from "victory-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

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
  const theme = useTheme();
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
    const expensivesTotal = expensives.reduce((acumullator, expensive) => {
      return acumullator + Number(expensive.amount);
    }, 0);

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach(historyItem => {
        if (historyItem.category === category.key) {
          categorySum += Number(historyItem.amount);
        }
      });

      if (categorySum !== 0) {
        const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`

        totalByCategory.push({
          id: uuid.v4() as string,
          title: category.title,
          total: categorySum,
          amount: currencyFormatter(categorySum),
          color: category.color,
          percent
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
      <VictoryPie
        data={resumeCategories}
        colorScale={resumeCategories.map(category => category.color)}
        style={{
          labels: {
            fill: theme.colors.shape,
            fontWeight: "bold",
            fontSize: RFValue(18)
          }
        }}
        labelRadius={60}
        x="percent"
        y="total"
      />

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
