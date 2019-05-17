import React from 'react';

import NavigationService from './navigator/NavigationService';
import AppContainer from './navigator/Navigator';

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
