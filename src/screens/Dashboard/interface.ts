import { HistoryCardDataProps } from "../../components/HistoryCard/interface";
import { TransactionType } from "../../global/interface";

export interface DataProps extends HistoryCardDataProps {
  id: string;
}

export interface HighlightProps {
  amount: string;
  lastUpdate: string;
}

export interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

export interface HistoryGetters {
  collection: DataProps[];
  typeHistory?: TransactionType;
}
