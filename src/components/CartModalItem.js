import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TextInput } from 'react-native-paper';

import Container from './Container';

const ItemContainer = styled(Container)`
  margin-bottom: 12;
  border-radius: 5;
`;
const Item = styled.View`
  flex-direction: row;
  border-radius: 5;
  background-color: #fff;
`;

const ImageView = styled.View``;

const ImageItem = styled.Image`
  width: 100;
  height: 80;
  border-radius: 5;
`;

const DetailsView = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 8;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 14;
  color: #202020;
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: #444444;
  font-weight: 200;
`;

const FooterView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const PriceText = styled.Text`
  flex: 2;
  color: #ff685f;
  font-size: 14;
  font-weight: 500;
`;

const CounterView = styled.View`
  flex: 2;
  align-self: flex-end;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const CounterButton = styled.TouchableOpacity`
  flex: 1;
  height: 15;
  align-items: center;
`;

export default ({ product, quantity, onAdd, onRemove, change }) => {
  return (
    <ItemContainer white>
      <Item>
        <ImageView>
          <ImageItem source={{ uri: product.image }} />
        </ImageView>
        <DetailsView>
          <Title>{product.name}</Title>
          <SubTitle>{product.description}</SubTitle>
          <FooterView>
            <PriceText>{`R$ ${product.price}`}</PriceText>
            <CounterView>
              <CounterButton onPress={quantity > 1 ? onRemove : null}>
                {quantity > 1 && (
                  <Icon name='remove' color='#ff685f' size={15} />
                )}
              </CounterButton>
              <TextInput
                underlineColor='#ff685f'
                selectionColor='#ff685f'
                value={quantity.toString()}
                onChangeText={change}
                keyboardType='numeric'
                style={{
                  backgroundColor: '#fff',
                  fontSize: 12,
                  flex: 2,
                  textAlign: 'right',
                  height: 50
                }}
                maxLength={2}
              />
              <CounterButton onPress={onAdd}>
                <Icon name='add' color='#ff685f' size={15} />
              </CounterButton>
            </CounterView>
          </FooterView>
        </DetailsView>
      </Item>
    </ItemContainer>
  );
};
