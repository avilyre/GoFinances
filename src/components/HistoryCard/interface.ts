import { TransactionType } from "../../global/interface";

interface Category {
  icon: string;
  name: string;
}

export interface HistoryCardDataProps {
  type: TransactionType;
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export interface HistoryCardProps {
  data: HistoryCardDataProps
}

export interface AmountTransactionType {
  transactionType: TransactionType;
}
