import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ButtonProps {
  type: "text" | "button";
  size: "sm" | "lg";
  cancel?: boolean;
}

export const ButtonContainer = styled(BorderlessButton)<ButtonProps>`
  background-color: ${({ type, cancel, theme }) =>
    type === "text"
      ? "transparent"
      : cancel
      ? theme.colors.attention
      : theme.colors.primary};
  border-radius: 4px;
  padding: ${({ size, type }) =>
    size === "lg" ? "13px 30px" : type === "text" ? "0" : "4px 19px"};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${({ theme, size }) =>
    size === "lg" ? theme.fonts.regular : theme.fonts.mid};
  font-size: ${({ size }) => (size === "lg" ? "14px" : "12px")};
  text-decoration: ${({ type }) => type === "text" && "underline"};
  color: ${({ cancel, theme }) =>
    cancel ? theme.colors.shape : theme.colors.text};
`;
