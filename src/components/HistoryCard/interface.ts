import { TransactionType } from "../../global/interface";

interface Category {
  icon: string;
  name: string;
}

export interface HistoryCardDataProps {
  type: TransactionType;
  name: string;
  amount: string;
  category: string;
  date: string;
}

export interface HistoryCardProps {
  data: HistoryCardDataProps
}

export interface AmountTransactionType {
  transactionType: TransactionType;
}
