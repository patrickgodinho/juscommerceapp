import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import CartIcon from '../CartIcon';

const emptyCart = {
  list: [],
  setList: jest.fn()
};

const oneItemCart = {
  list: [
    {
      product: {
        id: 1,
        name: 'test product1',
        description: 'test description 1',
        image:
          'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681',
        price: 123
      },
      amount: 10
    }
  ],
  setList: jest.fn()
};

test('test empty cart icon', () => {
  const wrapper = renderer.create(<CartIcon cart={emptyCart} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

test('test one item cart', () => {
  const wrapper = renderer.create(<CartIcon cart={oneItemCart} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
