import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Header from '../components/Header';

import ProductList from '../screens/Product/ProductList';
import ProductDetail from '../screens/Product/ProductDetail';
import Checkout from '../screens/Checkout/Checkout';
import CartModal from '../screens/Cart/CartModal';

const navigationOptions = color => ({
  headerMode: 'screen',
  header: headerProps => <Header headerProps={headerProps} color={color} />
});

const AppNavigator = createStackNavigator({
  Product: {
    screen: ProductList,
    navigationOptions: navigationOptions()
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: navigationOptions()
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: navigationOptions()
  }
});

export default createAppContainer(AppNavigator);
