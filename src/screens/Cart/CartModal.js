import React from 'react';
import { Modal, Text } from 'react-native';
import styled from 'styled-components';
import { Appbar } from 'react-native-paper';

import CartModalItem from '../../components/CartModalItem';
import Button from '../../components/Button';
import Empty from '../../components/Empty';
import NavigationService from '../../navigator/NavigationService';

const AppbarHeader = styled(Appbar.Header)`
  background-color: #ff685f;
  color: #fff;
`;

const Content = styled.View`
  flex: 1;
  background-color: #f5f5f7;
  padding-horizontal: 16;
  padding-vertical: 16;
  border-radius: 5;
`;

const Footer = styled.View`
  flex: 1;
  padding-horizontal: 16;
  align-items: center;
`;

const onPress = setVisible => {
  NavigationService.navigate('Checkout');
  setVisible(false);
};

const CartModal = ({ cart }) => {
  return (
    <Modal
      visible={cart.visible}
      presentationStyle={'fullScreen'}
      transparent={false}
    >
      <AppbarHeader>
        <Appbar.Content
          title='Carrinho de compras'
          titleStyle={{ color: '#FFF', fontSize: 16 }}
        />
        <Appbar.Action
          icon='clear'
          color='#fff'
          size={36}
          onPress={() => cart.setVisible(false)}
        />
      </AppbarHeader>
      <Content>
        {cart.list.length > 0 ? (
          cart.list.map(el => {
            return (
              <CartModalItem
                product={el.product}
                key={el.product.id}
                quantity={el.amount}
                onAdd={() => cart.add(el.product)}
                onRemove={() => cart.remove(el.product)}
                change={value => cart.change(el.product, value)}
              />
            );
          })
        ) : (
          <Empty />
        )}
        <Footer>
          {cart.list.length > 0 && (
            <Button
              label='Concluir compra'
              onPress={() => onPress(cart.setVisible)}
            />
          )}
        </Footer>
      </Content>
    </Modal>
  );
};

export default CartModal;
