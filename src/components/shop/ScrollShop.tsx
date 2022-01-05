import React from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../common/searchBar';
import ShopItem from './ShopItem';

const ScrollShop = () => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View>
        <SearchBar style={styles.searchBar} />
        <ScrollView horizontal style={styles.hashTags}>
          <TouchableOpacity
            style={styles.hash}
            onPress={() => Alert.alert('shop')}>
            <Text style={styles.hashName}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hash}
            onPress={() => Alert.alert('shop')}>
            <Text style={styles.hashName}>동영상</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hash}
            onPress={() => Alert.alert('shop')}>
            <Text style={styles.hashName}>에디터 추천</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hash}
            onPress={() => Alert.alert('shop')}>
            <Text style={styles.hashName}>컬렉션</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.shopItem}>
        {new Array(40).fill(null).map((_, index) => (
          <ShopItem key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {paddingTop: 48},
  searchBar: {flex: 1, marginHorizontal: 10, marginBottom: 10},
  hashTags: {
    flex: 1,
    marginBottom: 10,
  },
  hash: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  hashName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  shopItem: {flexDirection: 'row', flexWrap: 'wrap'},
});
export default ScrollShop;
