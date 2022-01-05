import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../common/SearchBar';

const MapIcon = () => {
  const onPress = () => {
    Alert.alert('map');
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.mapIcon}
        source={require('../../assets/icon_map.png')}
      />
    </TouchableOpacity>
  );
};
const Header = () => {
  return (
    <View style={styles.searchHeader}>
      <SearchBar style={styles.searchBar}/>
      <MapIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  searchBar: {
    marginHorizontal: 10
  },
  mapIcon: {
    width: 20,
    height: 20,
  },
});

export default Header;
