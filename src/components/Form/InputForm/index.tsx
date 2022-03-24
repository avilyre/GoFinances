import React from "react";
import { Controller } from "react-hook-form";

import { Input } from "../Input";
import { InputFormProps } from "./interface";
import { Container } from "./styles";

export function InputForm({ name, control, ...rest }: InputFormProps): JSX.Element {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  )
}
