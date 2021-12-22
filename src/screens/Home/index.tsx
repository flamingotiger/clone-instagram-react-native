import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Button, StatusBar, Text, useColorScheme, View} from 'react-native';
import {StackParamList} from '../../navigators';
import {ROUTE_NAMES_TYPE} from '../../utils/constants/route.constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface HomeScreenProps {
  navigation: any;
}
const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Text>Home</Text>
      <Button onPress={() => navigation.push('Dummy')} title="이동" />
    </View>
  );
};

export default Home;
