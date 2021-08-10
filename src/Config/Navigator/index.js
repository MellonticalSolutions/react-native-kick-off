import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../../Pages';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Navigator;
