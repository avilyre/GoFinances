interface Category {
  icon: string;
  name: string;
}

export interface HistoryCardProps {
  data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
  }
}