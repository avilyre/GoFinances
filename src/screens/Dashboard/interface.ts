import { HistoryCardDataProps } from "../../components/HistoryCard/interface";

export interface DataProps extends HistoryCardDataProps {
  id: string;
}

export interface HighlightProps {
  amount: string;
}

export interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}
