import React from 'react';
import styled from 'styled-components';
import { Image, View } from 'react-native';

import Button from './Button';

const Title = styled.Text`
  font-size: 18;
  color: #202020;
  letter-spacing: 0.5;
`;

const SubTitle = styled.Text`
  font-size: 14;
  color: #444444;
  font-weight: 200;
  letter-spacing: 1;
`;

const DetailsView = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  color: #ff685f;
  font-size: 26;
  font-weight: 500;
  padding-bottom: 12;
`;

const AmountText = styled.Text`
  font-size: 12;
`;
const DetailField = styled.Text`
  font-size: 12;
  color: #444444;
  font-weight: 200;
`;
const DetailText = styled.Text`
  font-size: 16;
  color: #444444;
  line-height: 20;
`;
const ItemImageView = styled.View`
  padding-vertical: 16;
`;
const ItemImage = styled(Image)`
  width: 250;
  height: 200;
  border-radius: 5;
  align-self: center;
`;

const ButtonView = styled.View`
  align-self: center;
  padding-top: 16;
`;

export default ({ item, onSelect }) => (
  <View>
    <Title>{item.name}</Title>
    <SubTitle>{item.description}</SubTitle>
    <ItemImageView>
      <ItemImage source={{ uri: item.image }} />
    </ItemImageView>
    <DetailsView>
      <PriceText>{`R$${item.price}`}</PriceText>
      <AmountText>{item.amount}</AmountText>
    </DetailsView>
    <DetailField>Descrição</DetailField>
    <DetailText>{item.description}</DetailText>
    <ButtonView>
      <Button label='Adicionar ao carrinho' onPress={onSelect} />
    </ButtonView>
  </View>
);
