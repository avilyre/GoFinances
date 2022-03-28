import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name:
    Yup.string()
    .required("O campo Nome é obrigatório"),
  amount:
    Yup.number()
    .typeError("Insira um valor numério no campo preço")
    .positive("O valor do preço precisa ser positivo")
    .required("O campo preço é obriatório")
});
