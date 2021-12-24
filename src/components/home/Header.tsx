import React, {forwardRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface HeaderProps {}

const Header = forwardRef<ScrollView, HeaderProps>((props, scrollViewRef) => {
  const isDarkMode = useColorScheme() === 'light';
  const onPress = () => {};
  return (
    <View
      style={[
        styles.header,
        {backgroundColor: isDarkMode ? Colors.black : Colors.white},
      ]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../assets/Instagram_logo.png')}
            style={[styles.logo]}
          />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icon_plus.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icon_heart.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icon_airplane.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: 52,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 52,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
  },
  logo: {width: 120, height: 50, resizeMode: 'contain'},
  icon: {width: 24, height: 24, marginLeft: 20, resizeMode: 'contain'},
});
export default Header;
