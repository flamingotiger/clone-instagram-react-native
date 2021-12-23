import React from 'react';
import {Button, StatusBar, Text, useColorScheme, View} from 'react-native';
import {NavigatorProps} from '../../navigators';

interface HomeScreenProps extends NavigatorProps {}
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
