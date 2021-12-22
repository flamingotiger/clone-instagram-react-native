import React from 'react';
import HomeScreen from '../screens/Home';
import DummyScreen from '../screens/Dummy';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_NAMES} from '../utils/constants/route.constants';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.HOME}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Dummy"
        component={DummyScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default Main;
