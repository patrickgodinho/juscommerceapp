import React, { useState } from 'react';
import { RadioButton, Card } from 'react-native-paper';
import styled from 'styled-components';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { withCart } from '../../contexts/Cart';
import { addOrder } from '../../mutations/addOrder';

const ButtonCard = styled.TouchableOpacity`
  padding-vertical: 12;
`;

const TitleCards = styled.Text`
  font-size: 24;
  font-weight: 600;
  color: #444444;
  letter-spacing: 0.7;
`;

const View = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4;
  width: 100%;
  height: 60;
`;

const Text = styled.Text`
  align-self: center;
`;

const Checkout = ({ cart }) => {
  const [checked, setChecked] = useState(1);
  return (
    <Container white>
      <TitleCards>Escolha seu cartão</TitleCards>
      <RadioButton.Group onValueChange={setChecked} value={checked}>
        <ButtonCard onPress={() => setChecked(1)}>
          <Card>
            <View>
              <RadioButton value={1} />
              <Text>Final 4423</Text>
            </View>
          </Card>
        </ButtonCard>
        <ButtonCard onPress={() => setChecked(2)}>
          <Card>
            <View>
              <RadioButton value={2} />
              <Text>Final 2212</Text>
            </View>
          </Card>
        </ButtonCard>
      </RadioButton.Group>
      <Button
        onPress={() => addOrder({ items: cart.list, card: checked })}
        label='Finalizar'
      />
    </Container>
  );
};

Checkout.navigationOptions = {
  title: 'Pagamento',
  backRoute: 'Product'
};

export default withCart(Checkout);
