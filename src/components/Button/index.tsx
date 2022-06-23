import React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    type: 'text' | 'button';
    size?: 'sm' | 'lg';
}

export function Button({title, type, size='sm', ...rest}: ButtonProps) {
    return (
        <ButtonContainer type={type} size={size} activeOpacity={.7} {...rest}>
            <ButtonText type={type} size={size}>{title}</ButtonText>
        </ButtonContainer>
    ); 
}