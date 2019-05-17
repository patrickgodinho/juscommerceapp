import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../ListItem';

const product = {
  id: 1,
  name: 'test product1',
  description: 'test description 1',
  image:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681',
  price: 123
};

test('test list item', () => {
  const wrapper = renderer.create(<ListItem item={product} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
