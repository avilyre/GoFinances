import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { ResumeCategoryData } from "./interface";

export const ResumeCardsList = styled(
  FlatList as new (props: FlatListProps<ResumeCategoryData>) => FlatList<ResumeCategoryData>
)`
  flex: 1;
  
  width: 100%;
`;
