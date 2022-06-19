import styled from "styled-components/native";
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`

`;

export const Icon = styled(FontAwesome5)`

`;

export const MsgContainer = styled.View`
    background: #C4C4C4;
    border-radius: 14px;
    padding: 9px 12px;
`;

export const TextContainer = styled.Text`
    font-family: ${({theme}) => theme.fonts.mid};
    font-size: 15px;
    line-height: 25px;
    margin-bottom: ${RFValue(18)}px;

    color: ${({theme}) => theme.colors.text};
`;

export const NextButton = styled.TouchableOpacity`
    align-items: flex-end;
`;

export const NextIcon = styled(AntDesign)``;