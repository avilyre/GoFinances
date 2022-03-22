import { TransactionType } from "../global/interface";

export const historyTransactionsMock = [
  {
    id: "1",
    type: TransactionType.income,
    title: "Desenvolvimento de sites",
    amount: "R$ 12.000,00",
    category: {
      icon: "dollar-sign",
      name: "Vendas"
    },
    date: "13/12/2021"
  },
  {
    id: "2",
    type: TransactionType.outcome,
    title: "Hamburgueria pizzy",
    amount: "R$ 59,00",
    category: {
      icon: "coffee",
      name: "Alimentação"
    },
    date: "12/12/2021"
  },
  {
    id: "3",
    type: TransactionType.outcome,
    title: "Aluguel",
    amount: "R$ 250,00",
    category: {
      icon: "shopping-bag",
      name: "Compras"
    },
    date: "12/12/2021"
  },
]