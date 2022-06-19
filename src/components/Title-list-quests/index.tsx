import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, TitleContainer, Title, MoneyIcon, Icon, MoneyContainer, Money } from "./styles";

interface TitleListQuestsProps{
    title: string;
    numberMoney: number;
    type: 'quest' | 'invesment' | 'market' | 'notice';
}

const icon = {
    quest: "md-school-outline",
    invesment: "md-bar-chart-outline",
    market: "ios-wallet-outline",
    notice: "notifications-outline",
}


export function TitleListQuests({ title, numberMoney, type}: TitleListQuestsProps) {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    {title}
                </Title>
                <MoneyContainer>
                    <Money>{numberMoney}</Money>
                    <MoneyIcon name="coins" size={RFValue(24)} color="#FFD54F" />
                </MoneyContainer>
            </TitleContainer>
            <Icon name={icon[type]} size={RFValue(32)} />
        </Container>
    );
}