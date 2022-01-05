import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
}
const SearchBar: React.FC<SearchBarProps> = ({style}) => {
  return (
    <View style={[styles.searchBar, style]}>
      <Image
        style={styles.searchIcon}
        source={require('../../assets/icon_search.png')}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.6)"
        placeholder="검색"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: 'rgb(42,42,42)',
    height: 42,
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
});

export default SearchBar;
