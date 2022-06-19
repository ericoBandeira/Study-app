import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title, Icon } from "./styles";

interface TitleProps{
    title: string;
    type: 'quest' | 'invesment' | 'market' | 'notice';
}

const icon = {
    quest: "md-school-outline",
    invesment: "md-bar-chart-outline",
    market: "ios-wallet-outline",
    notice: "notifications-outline",
}


export function PageTitle({title, type}: TitleProps) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Icon name={icon[type]} size={RFValue(46)}/>
        </Container>
    );
}