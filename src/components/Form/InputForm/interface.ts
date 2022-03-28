import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface InputFormProps extends TextInputProps {
  name: string;
  control: Control<any, object>;
}
