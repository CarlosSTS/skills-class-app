import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
