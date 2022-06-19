import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 12px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.mid};
    font-size: 20px;

    color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Ionicons)`
`;