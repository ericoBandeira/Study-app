import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends BorderlessButtonProps {
  title: string;
  type: "text" | "button";
  size?: "sm" | "lg";
}

export function Button({ title, type, size = "sm", ...rest }: ButtonProps) {
  return (
    <ButtonContainer type={type} size={size} activeOpacity={0.7} {...rest}>
      <ButtonText type={type} size={size}>
        {title}
      </ButtonText>
    </ButtonContainer>
  );
}
