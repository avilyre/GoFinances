export enum HighlightCardType {
  up = "up",
  down = "down",
  total = "total",
}

export interface HighlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: HighlightCardType;
}

export interface HighlightCardCustomColorTypeProps {
  type: HighlightCardType;
}