import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { Cart as CartProvider, withCart } from './src/contexts/Cart';
import CartModal from './src/screens/Cart/CartModal';

const EnhancedCartModal = withCart(CartModal);

const Main = () => {
  return (
    <PaperProvider>
      <CartProvider>
        <App />
        <EnhancedCartModal />
      </CartProvider>
    </PaperProvider>
  );
};
AppRegistry.registerComponent(appName, () => Main);
