import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';

const Wrapper = styled.TouchableOpacity`
  width: 25;
  height: 25;
  right: 16;
`;

const Counter = styled(Badge)`
  position: absolute;
  top: -10;
  right: -10;
  background-color: black;
`;

const CartIcon = ({ cart }) => (
  <Wrapper onPress={() => cart.setVisible(!cart.visible)}>
    <Icon name='shopping-cart' color='#FFF' size={25} />
    <Counter size={18}>{cart.quantity}</Counter>
  </Wrapper>
);

export default CartIcon;
