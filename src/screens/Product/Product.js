import React from 'react';
import { withNavigation } from 'react-navigation';
import { graphql, createFragmentContainer } from 'react-relay';
import { View, Text } from 'react-native';
import ListItem from '../../components/ListItem';

const Product = props => {
  const { product, navigation } = props;
  const onPress = () =>
    navigation.navigate('ProductDetail', {
      id: product.id,
      name: product.name
    });

  return <ListItem item={product} onPress={onPress} />;
};

const ProductFragmentContainer = createFragmentContainer(Product, {
  product: graphql`
    fragment Product_product on ProductType {
      id
      name
      image
      price
      description
    }
  `
});

export default withNavigation(ProductFragmentContainer);
