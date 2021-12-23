import {useScrollToTop} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface HeaderProps {
  scrollViewRef: any;
}
const Header: React.FC<HeaderProps> = ({scrollViewRef}) => {
  const isDarkMode = useColorScheme() === 'light';
  const onPress = () => {
    console.log(scrollViewRef);
    // useScrollToTop(scrollViewRef)
  };
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
};

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
    marginHorizontal: 20,
    height: 52,
  },
  logo: {width: 100, height: 50, resizeMode: 'contain'},
  icon: {width: 24, height: 24, marginLeft: 20, resizeMode: 'contain'},
});
export default Header;
