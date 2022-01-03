import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/search/Header';

const Search = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView
      style={[
        styles.home,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({home: {flex: 1}});

export default Search;
