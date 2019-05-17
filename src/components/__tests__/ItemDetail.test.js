import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetail from '../ItemDetail';

const product = {
  id: 1,
  name: 'test product1',
  description: 'test description 1',
  image:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681',
  price: 123
};

test('test product detail', () => {
  const wrapper = renderer.create(<ItemDetail item={product} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
