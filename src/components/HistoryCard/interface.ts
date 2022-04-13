import { TransactionType } from "../../global/interface"

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
