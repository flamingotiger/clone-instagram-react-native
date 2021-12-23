import React from 'react';
import HomeScreen from '../screens/Home';
import DummyScreen from '../screens/Dummy';
import {RootStack} from '.';

const Main = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <RootStack.Screen
        name="Dummy"
        component={DummyScreen}
        options={{title: 'Dummy'}}
      />
    </RootStack.Navigator>
  );
};

export default Main;
