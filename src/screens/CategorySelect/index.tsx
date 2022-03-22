import React from "react";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";

import { CategorySelectProps } from "./interface";

import {
  Container,
  Header,
  Title,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryName,
  Separator,
  Footer,
} from "./styles";

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: CategorySelectProps): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoryList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <CategoryItem>
            <CategoryIcon name={item.icon} />
            <CategoryName>{item.name}</CategoryName>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}