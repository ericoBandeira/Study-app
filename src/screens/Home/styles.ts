import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({theme})=>theme.fonts.semiBold};
    font-size: 48px;
`;