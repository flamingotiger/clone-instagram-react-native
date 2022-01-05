import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/shop/Header';
import ScrollShop from '../../components/shop/ScrollShop';

const Shop = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView
      style={[
        styles.shop,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <View style={styles.area}>
        <Header />
        <ScrollShop />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shop: {flex: 1},
  area: {position: 'relative', flex: 1},
});

export default Shop;
