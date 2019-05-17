import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native-paper';

const SelectButton = styled(Button)`
  width: 250;
  height: 45;
  background-color: #ff685f;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const SelectButtonText = styled.Text`
  width: 100%;
  color: #fff;
  font-size: 16;
  font-weight: 300;
`;

export default ({ label, onPress }) => (
  <SelectButton onPress={onPress}>
    <SelectButtonText>{label}</SelectButtonText>
  </SelectButton>
);
