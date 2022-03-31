import { RectButtonProps } from "react-native-gesture-handler";
import { TransactionType } from "../../../global/interface";

export interface TransactionTypeButtonProps extends RectButtonProps {
  title: string;
  type: TransactionType;
  isActive: boolean;
};

export interface ButtonProps extends Pick<TransactionTypeButtonProps, "type" | "isActive"> {}

export type ContainerProps = Pick<TransactionTypeButtonProps, "type" | "isActive">;

export type IconProps = Pick<TransactionTypeButtonProps, "type">;

