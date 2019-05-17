import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { View, Text, FlatList } from 'react-native';

import environment from '../../environment';
import Product from './ProductItem';
import Container from '../../components/Container';
import Loading from '../../components/Loading';

const query = graphql`
  query ProductListQuery {
    products {
      id
      ...ProductItem_product
    }
  }
`;

export const ProductListRendered = ({ error, props }) => {
  if (!props) return <Loading>Loading</Loading>;
  return (
    <Container>
      <FlatList
        data={props.products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Product product={item} />
            </View>
          );
        }}
      />
    </Container>
  );
};

const ProductList = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={ProductListRendered}
    />
  );
};

ProductList.navigationOptions = {
  title: 'Produtos'
};

export default ProductList;
