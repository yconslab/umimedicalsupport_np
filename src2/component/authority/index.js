import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthorityScreen from './allowAccess';

const Stack = createStackNavigator();

const AuthorityStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthorityScreen">
      <Stack.Screen name="AuthorityScreen" component={AuthorityScreen} />
    </Stack.Navigator>
  );
};
export default AuthorityStack;
