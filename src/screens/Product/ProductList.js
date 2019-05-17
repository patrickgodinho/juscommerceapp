import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { View, Text, FlatList } from 'react-native';

import environment from '../../environment';
import Product from './Product';
import Container from '../../components/Container';

const query = graphql`
  query ProductListQuery {
    products {
      id
      ...Product_product
    }
  }
`;

const ProductListRendered = ({ error, props }) => {
  if (!props) return <Text>Loading</Text>;
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
