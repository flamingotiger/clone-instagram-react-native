import React from 'react';
import {
  Button,
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/home/Header';
import Posts from '../../components/home/Posts';
import {NavigatorProps} from '../../navigators';

interface HomeScreenProps extends NavigatorProps {}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView
      style={[
        styles.home,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Posts />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({home: {flex: 1}});

export default HomeScreen;
