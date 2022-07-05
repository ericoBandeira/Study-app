import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardImg } from '../../components/Card-img';
import { Logo } from '../Loading/styles';
import {
    Container,
    Header,
    Body,
    UserButton,
    UserIcon,
    GraphIcon,
    MoneyView,
    MoneyIcon,
    Amount,
    ButtonsContainer,
    RowContainer,
    CardButton,
    Footer,
    CardIcon
} from './styles';

export function Home() {
    return (
        <Container>
            <Header>
                <Logo source={require('../../global/imgs/logo-sm.png')} />
                <UserButton>
                    <UserIcon name="user" size={RFValue(28)}/>
                </UserButton>
                <GraphIcon name="bar-graph" size={RFValue(28)} color="#85C88A"/>
                <MoneyView>
                    <Amount>
                        1205
                    </Amount>
                    <MoneyIcon name="coins" size={RFValue(28)} color="#FFD54F"/>
                </MoneyView>
            </Header>
            <Body>
                <ButtonsContainer>
                    <View>
                        <RowContainer>
                            <CardButton>
                                <CardImg title="Quests" type="quest"/>
                            </CardButton>
                            <CardButton>
                                <CardImg title="Investimentos" type="invesment"/>
                            </CardButton>
                        </RowContainer>
                        <RowContainer>
                            <CardButton>
                                <CardImg title="Loja" type="market"/>
                            </CardButton>
                            <CardButton>
                                <CardImg title="Noticias" type="notice"/>
                            </CardButton>
                        </RowContainer>
                    </View>
                    <Footer>
                        <UserButton>
                            <CardIcon name="home-outline" size={RFValue(28)}/>
                        </UserButton>
                        <UserButton>
                            <CardIcon name="md-school-outline" size={RFValue(28)}/>
                        </UserButton>
                        <UserButton>
                            <GraphIcon name="bar-graph" size={RFValue(28)}/>
                        </UserButton>
                        <UserButton>
                            <CardIcon name="ios-wallet-outline" size={RFValue(28)}/>
                        </UserButton>
                        <UserButton>
                            <CardIcon name="notifications-outline" size={RFValue(28)}/>
                        </UserButton>
                    </Footer>
                </ButtonsContainer>
            </Body>
        </Container>
    )
}
