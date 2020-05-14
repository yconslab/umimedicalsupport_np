import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AuthorityStack from './component/authority';

const Stack = createStackNavigator();

const Main = () => {
  //   const { login } = useSelector(
  //     state => ({
  //       login: state.authorizationReducer.login,
  //     }),
  //     [],
  //   );
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthorityStack"
          headerMode="none"
          gestureEnabled={false}>
          <Stack.Screen name="AuthorityStack" component={AuthorityStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Main;
