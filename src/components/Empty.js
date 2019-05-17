import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 16;
`;

const EmptyText = styled.Text`
  color: #444444;
  font-size: 18;
  font-weight: 300;
`;

export default () => {
  return (
    <Empty>
      <Icon name='sentiment-dissatisfied' color='#ff685f' size={50} />
      <EmptyText>Adicione itens no seu carrinho!</EmptyText>
    </Empty>
  );
};
