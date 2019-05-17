import React from 'react';
import { Appbar } from 'react-native-paper';
import styled from 'styled-components';

import CartIcon from './CartIcon';
import { withCart } from '../contexts/Cart';

const AppbarHeader = styled(Appbar.Header)`
  background-color: ${props => props.color || `#ff685f`};
  color: #fff;
`;

const EnhancedCartIcon = withCart(CartIcon);

export default ({ headerProps }) => {
  const { title, backRoute, color } = headerProps.scene.descriptor.options;
  return (
    <AppbarHeader color={color}>
      {headerProps.index > 0 && (
        <Appbar.BackAction
          color={'#FFF'}
          onPress={() => headerProps.navigation.navigate(backRoute)}
        />
      )}
      <Appbar.Content
        title={title}
        titleStyle={{ color: '#FFF', fontSize: 16 }}
        style={{ left: -16 }}
      />
      <EnhancedCartIcon />
    </AppbarHeader>
  );
};
