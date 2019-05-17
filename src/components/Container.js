import React from 'react';
import styled from 'styled-components';

export default styled.View`
  padding-horizontal: 16;
  padding-vertical: 16;
  background-color: ${props => (props.white ? `#fff` : `#f5f5f7`)};
`;
