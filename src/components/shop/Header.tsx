import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../common/searchBar';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Shop</Text>
      {false && <SearchBar />}
      <View style={styles.iconGroup}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => Alert.alert('comment')}>
          <Image
            source={require('../../assets/icon_comment.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => Alert.alert('comment')}>
          <Image
            source={require('../../assets/icon_comment.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {fontSize: 28, fontWeight: 'bold', color: Colors.white},
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
export default Header;
