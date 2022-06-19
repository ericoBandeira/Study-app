import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { InputContainer, InputText, TitleInput } from "./styles";

interface InputProps extends TextInputProps{
    title: string;
    password?: boolean;
}

export function Input({ title, onChangeText, password}: InputProps) {
    return (
        <InputContainer>
            <TitleInput>
                {title}
            </TitleInput>
            <InputText
                placeholder={title}
                placeholderTextColor="#827F9B"
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputContainer>
    );
}