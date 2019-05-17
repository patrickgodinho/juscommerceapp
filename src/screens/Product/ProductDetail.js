import React, { useReducer } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { View, Text, FlatList } from 'react-native';

import environment from '../../environment';
import Container from '../../components/Container';
import ItemDetail from '../../components/ItemDetail';

import { withCart } from '../../contexts/Cart';

const query = graphql`
  query ProductDetailQuery($id: ID!) {
    product(id: $id) {
      id
      name
      image
      price
      description
    }
  }
`;

const ProductDetailRendered = ({ error, props, cart }) => {
  if (!props) return <Text>Loading</Text>;

  return (
    <Container white>
      <ItemDetail
        item={props.product}
        onSelect={() => cart.add(props.product)}
      />
    </Container>
  );
};

const ProductDetail = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ id: navigation.state.params.id }}
      render={withCart(ProductDetailRendered)}
    />
  );
};

ProductDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.name,
    backRoute: 'Product'
  };
};

export default ProductDetail;
