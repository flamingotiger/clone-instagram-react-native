import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/shop/Header';

const Shop = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView
      style={[
        styles.shop,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <Header />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shop: {position: 'relative', flex: 1},
  safeAreaView: {position: 'relative', flex: 1},
  reelsList: {flex: 1},
});

export default Shop;
