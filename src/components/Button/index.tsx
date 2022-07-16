import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends BorderlessButtonProps {
  title: string;
  type: "text" | "button";
  size?: "sm" | "lg";
  cancel?: boolean;
}

export function Button({
  title,
  type,
  size = "sm",
  cancel = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      cancel={cancel}
      type={type}
      size={size}
      activeOpacity={0.7}
      {...rest}
    >
      <ButtonText type={type} size={size}>
        {title}
      </ButtonText>
    </ButtonContainer>
  );
}
