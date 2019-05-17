import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Header from './components/Header';

import ProductList from './screens/Product/ProductList';
import ProductDetail from './screens/Product/ProductDetail';
import Checkout from './screens/Checkout/Checkout';
import CartModal from './screens/Cart/CartModal';

import NavigationService from './NavigationService';

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
  },
  CartModal: {
    screen: CartModal,
    navigationOptions: navigationOptions()
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
