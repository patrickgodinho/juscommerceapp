import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator, View } from 'react-native';

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Loading>
      <ActivityIndicator size='large' color='#ff685f' />
    </Loading>
  );
};
