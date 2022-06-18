import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardContainer, TitleCard, CardIcon } from "./styles";

interface CardProps extends TouchableOpacityProps{
    title: string;
    type: 'quest' | 'invesment' | 'market' | 'notice';
}

const icon = {
    quest: "md-school-outline",
    invesment: "md-bar-chart-outline",
    market: "ios-wallet-outline",
    notice: "notifications-outline",
}

export function CardImg({title, type}: CardProps) {
    return (
        <CardContainer>
            <TitleCard>
                {title}
            </TitleCard>
            <CardIcon name={icon[type]} size={RFValue(36)} color="black" />
        </CardContainer>
    );
}