import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Button', () => {
  const wrapper = renderer.create(<Button />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
