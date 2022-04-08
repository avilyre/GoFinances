import { TransactionType } from "../../global/interface";
import { DataProps, HistoryGetters } from "./interface";

export function getLastDate({ collection, typeHistory }: HistoryGetters): Date {
  const date = new Date(
    typeHistory ?
      Math.max.apply(
        Math,
        collection
          .filter((item) => item.type === typeHistory)
          .map((item) => new Date(item.date).getTime())
      )
    :
      Math.max.apply(
        Math,
        collection.map((item) => new Date(item.date).getTime())
      )
  );

  return date;
}

export function getLastHistoryDate({ collection, typeHistory }: HistoryGetters): string {
  const date = getLastDate({ collection, typeHistory });

  return `Última atualização dia ${date.getDate()} de ${date.toLocaleString("pt-BR", { month: "long" })}`;
}

export function getLastHistoryUpdate({ collection }: HistoryGetters): string {
  const date = getLastDate({ collection });

  return `1 à ${date.getDate()} de ${date.toLocaleString("pt-BR", { month: "long" })}`
}
