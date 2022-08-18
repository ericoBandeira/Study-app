import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AppContext } from "../../context/contextapi";
import { InvestmentProps } from "../../screens/InvestmentPage";
import { Button } from "../Button";
import {
  Container,
  InvestmentContainer,
  InvestmentText,
  StarIcon,
  PercentContainer,
  InvestmentPercent,
  InvestmentIcon,
  StarContainer,
  ButtonContainer,
  BuyContainer,
  BuyButtonContainer,
  ModalTitle,
  ModalInput,
  ModalButtonContainer,
  ModalInvest,
  ModalContainer,
} from "./styles";

interface InvestProps {
  ArrayInvestments: any;
  FixedIncome: boolean;
}

export function InvestmentList({ ArrayInvestments, FixedIncome }: InvestProps) {
  const [buy, setBuy] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [auxValueInvest, setAuxValueInvest] = useState("");

  const { token, setUserMoney } = useContext(AppContext);

  async function addInvestment(id: number) {
    const responseGet = await axios.get(
      `https://study-api-deno.herokuapp.com/auth/user`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    await axios
      .post(
        `https://study-api-deno.herokuapp.com/user/investment`,
        {
          investment_id: id,
          value: Number(auxValueInvest),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(
          res,
          Number(auxValueInvest),
          responseGet.data.data.user.balance
        );
        setModalVisible(false);
        Alert.alert("Compra efetuada com sucesso!");
        setUserMoney(responseGet.data.data.user.balance);
        setAuxValueInvest("");
      })
      .catch((err) => {
        Alert.alert(
          "Erro",
          "Verifique se há saldo ou tente novamente mais tarde"
        );
        setAuxValueInvest("");
      });
  }

  return (
    <Container>
      {ArrayInvestments.map(
        (investment: InvestmentProps, index: number) =>
          investment.fixed_income === FixedIncome && (
            <InvestmentContainer key={index} index={index}>
              <InvestmentText>{investment.name}</InvestmentText>

              <StarContainer>
                {buy ? (
                  <BuyContainer>
                    <Button
                      title="adquirir"
                      type="text"
                      onPress={() => setModalVisible(true)}
                    />
                  </BuyContainer>
                ) : (
                  Array.from(Array(investment.stars), () => {
                    return (
                      <StarIcon
                        name="md-star-outline"
                        size={RFValue(18)}
                        color="#E83A14"
                      />
                    );
                  })
                )}
              </StarContainer>

              <PercentContainer>
                {investment.percentage !== null && (
                  <InvestmentPercent>
                    {investment.percentage}%
                  </InvestmentPercent>
                )}
                <InvestmentIcon
                  name="md-bar-chart-outline"
                  size={RFValue(24)}
                />
              </PercentContainer>
              <ModalInvest
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <ModalContainer>
                  <ModalTitle>
                    Insira aqui a quantidade que deseja investir
                  </ModalTitle>
                  <ModalInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Insira aqui!"
                    keyboardType="numeric"
                    placeholderTextColor="#827F9B"
                    onChangeText={setAuxValueInvest}
                  />
                  <ModalButtonContainer>
                    <Button
                      title="Cancelar"
                      type="button"
                      size="sm"
                      cancel
                      onPress={() => setModalVisible(false)}
                    />
                    <Button
                      title="Comprar"
                      type="button"
                      size="sm"
                      onPress={() => {
                        addInvestment(investment.id);
                      }}
                      style={{ marginLeft: 10 }}
                    />
                  </ModalButtonContainer>
                </ModalContainer>
              </ModalInvest>
            </InvestmentContainer>
          )
      )}
      <ButtonContainer>
        {buy ? (
          <BuyButtonContainer>
            <Button
              title="Cancelar"
              type="button"
              size="sm"
              cancel
              onPress={() => setBuy(!buy)}
            />
            <Button
              title="Comprar"
              type="button"
              size="sm"
              onPress={() => setBuy(!buy)}
              style={{ marginLeft: 10 }}
            />
          </BuyButtonContainer>
        ) : (
          <Button
            title="Adquirir"
            type="button"
            size="sm"
            onPress={() => setBuy(!buy)}
          />
        )}
      </ButtonContainer>
    </Container>
  );
}
