import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>릴스</Text>
      <Image source={require('../../assets/icon_camera.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    top: 40,
    zIndex: 10
  },
  title: {fontSize: 24, fontWeight: 'bold', color: Colors.white},
});

export default Header;
