import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps {
    type: 'text' | 'button';
    size: 'sm' | 'lg';
}

export const ButtonContainer = styled(BorderlessButton)<ButtonProps>`
    background-color: ${({ type }) => type === 'text' ? 'transparent' : '#85C88A' };
    border-radius: 4px;
    padding: ${({ size, type }) => size === 'lg' ? '13px 30px' : type === 'text' ? '0' : '4px 19px' };
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-family: ${({ theme, size }) => size === 'lg' ? theme.fonts.regular : theme.fonts.mid};
    font-size:  ${({ size }) => size === 'lg' ? '14px' : '12px' };
    text-decoration: ${({ type }) => type === 'text' && 'underline' };
`;