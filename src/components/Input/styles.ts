import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InputContainer = styled.View`
    justify-content: space-between;
    align-items: flex-start;
`;

export const TitleInput = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
    margin-bottom: 6px;

    color: ${({theme}) => theme.colors.blue};
`;

export const InputText = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(332)}px;
    padding: 8px 12px;

    border: 1px solid #CDCCD7;
    border-radius: 4px;
    margin-bottom: 10px;
`;