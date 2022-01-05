import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../common/searchBar';

const ScrollShop = () => {
  return (
    <ScrollView style={styles.scroll}>
      <SearchBar style={styles.searchBar} />
      <ScrollView horizontal>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, paddingTop: 48},
  searchBar: {marginHorizontal: 10, marginBottom: 10},
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
});
export default ScrollShop;
