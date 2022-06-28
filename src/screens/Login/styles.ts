import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: "position",
    enabled: true,
    contentContainerStyle: {
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        justifyContent: "space-around",
        height: "100%"
    }
})``;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.mid};
    font-size: 32px;

    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${RFValue(50)}px;
    align-self: center;
`;

export const Logo = styled.Image`
    margin-top: ${RFValue(30)}px;
`;

export const LoginContainer = styled.View`
    background-color: ${({theme}) => theme.colors.primary_light};
    box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
    border-radius: 16px;
    padding: 35px 12px;
    padding-bottom: 60px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(20)}px;
`;

export const ForgetPasswordContainer = styled.View`
    align-items: flex-end;
    margin-top: ${RFValue(8)}px;
`;

export const Error = styled.Text`
    font-family: ${({theme}) => theme.fonts.mid};
    color: ${({ theme }) => theme.colors.attention};
    font-size: 12px;

`;