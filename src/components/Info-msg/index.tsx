import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Icon, MsgContainer, TextContainer, NextButton, NextIcon } from './styles';

interface InfoMsgProps extends TouchableOpacityProps{
    text: string;
}

export function InfoMsg({ text, onPress }: InfoMsgProps) {
    return (
        <Container>
            <Icon name="user-circle" size={RFValue(68)}/>
            <MsgContainer>
                <TextContainer>
                    {text}
                </TextContainer>
                <NextButton onPress={onPress}>
                    <NextIcon name="arrowright" size={RFValue(25)}/>
                </NextButton>
            </MsgContainer>
        </Container>
    );
}