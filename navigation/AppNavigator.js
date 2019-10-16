import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { SignInStackNavigator, SignUpNavigator, TransactionInfo } from './StackNavigator';
import { TransactionStackNavigator } from './DrawerNavigation';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    SignUp: SignUpNavigator,
    SignIn: SignInStackNavigator,
    Main: TransactionStackNavigator, 
    TransactionInformation: TransactionInfo 
  },
  {
    initialRouteName: 'SignIn'
  })
);
