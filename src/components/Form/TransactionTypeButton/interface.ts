import { TouchableOpacityProps } from "react-native";
import { TransactionType } from "../../../global/interface";

export interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: TransactionType;
  isActive: boolean;
};

export type ContainerProps = Pick<TransactionTypeButtonProps, "type" | "isActive">;

export type IconProps = Pick<TransactionTypeButtonProps, "type">;

