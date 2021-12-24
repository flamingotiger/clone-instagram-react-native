import React from 'react';
import HomeScreen from '../screens/Home';
import DummyScreen from '../screens/Search';
import {RootStack} from '.';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabBarIcon from '../components/tabBar/TabBarIcon';

const Main = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
          alignItems: 'center',
          height: 80
        },
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} route={route} />
        ),
      })}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen
        name="Search"
        component={DummyScreen}
        options={{title: 'Search'}}
      />
      <RootStack.Screen
        name="Reels"
        component={DummyScreen}
        options={{title: 'Reels'}}
      />
      <RootStack.Screen
        name="Shop"
        component={DummyScreen}
        options={{title: 'Shop'}}
      />
      <RootStack.Screen
        name="MyPage"
        component={DummyScreen}
        options={{title: 'MyPage'}}
      />
    </RootStack.Navigator>
  );
};

export default Main;
