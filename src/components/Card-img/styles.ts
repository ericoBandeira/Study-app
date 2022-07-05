import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
    disabled?: boolean;
}

export const CardContainer = styled(RectButton)<ButtonProps>`
    width: ${RFValue(175)}px;

    background: ${({theme, disabled}) => disabled ? theme.colors.disabled : theme.colors.primary_light};
    box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
    border-radius: 16px;
    padding: 30px 42px;
    align-items: center;
    margin: 4px;
`;

export const TitleCard = styled.Text`
    font-family: ${({theme}) => theme.fonts.mid};
    font-size: 14px;

    color: ${({theme}) => theme.colors.text};
    margin-bottom: 11px;
`;

export const CardIcon = styled(Ionicons)`
`;