import React, { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, StarContainer, Title, StarIcon, Icon, ContainerStars } from "./styles";

interface TitleListProductsProps{
    title: string;
    numberStars: number;
}


export function TitleListProducts({ title, numberStars }: TitleListProductsProps) {
    return (
        <Container>
            <StarContainer>
                <Title>
                    {title}
                </Title>
                <ContainerStars>
                    {Array.from(Array(numberStars), () => {
                        return <StarIcon name="md-star-outline" size={RFValue(18)} color="#E83A14"/>
                    })}
                </ContainerStars>
            </StarContainer>
            <Icon name="md-bar-chart-outline" size={RFValue(32)} />
        </Container>
    );
}