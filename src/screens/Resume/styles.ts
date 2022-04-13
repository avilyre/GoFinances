import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

import { ResumeCategoryData } from "./interface";

export const ResumeCardsList = styled(
  FlatList as new (props: FlatListProps<ResumeCategoryData>) => FlatList<ResumeCategoryData>
).attrs({
  contentContainerStyle: {
    padding: 24
  }
})`
  flex: 1;
  
  width: 100%;
`;
