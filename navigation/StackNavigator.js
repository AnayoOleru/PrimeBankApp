import { createStackNavigator } from 'react-navigation';
import SignUp from '../screens/SignUpScreen';
import SignIn from '../screens/SigninScreen';

export const SignUpNavigator = createStackNavigator(
  {
    SignUp: SignUp
  }
);

export const SignInStackNavigator = createStackNavigator(
    {
      SignIn: SignIn
    }
  );
