import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Image
        style={styles.searchIcon}
        source={require('../../assets/icon_search.png')}
      />
      <TextInput style={styles.input} 
      placeholderTextColor='rgba(255,255,255,0.6)'
      placeholder="검색" />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.searchHeader}>
      <SearchBar />
      <Image
        style={styles.mapIcon}
        source={require('../../assets/icon_map.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 4
  },
  searchBar: {
    backgroundColor: 'rgb(42,42,42)',
    height: 42,
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    borderRadius: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    opacity: 0.6,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: Colors.white,
  },
  mapIcon: {
    width: 20,
    height: 20,
  },
});

export default Header;
