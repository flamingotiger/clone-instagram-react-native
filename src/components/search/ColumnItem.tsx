import React from 'react';
import faker from 'faker';
import {
    Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ColumnItem = () => {
  const randomImages = [
    'https://static.shoeprize.kr/open_raffle/main_carousel/24126/555088-701-shoeprize-AIR-JORDAN-1-RETRO-HIGH-OG-POLLE-19759-1628390577029.jpeg',
    'https://image.msscdn.net/images/goods_img/20201218/1726707/1726707_1_500.jpg',
    'https://www.street.co.kr/wp-content/uploads/2021/04/https___kr.hypebeast.com_files_2020_12_air-jordan-1-ko-chicago-da9089-100-release-info-3.jpg',
    'https://cdn.eyesmag.com/content/uploads/sliderImages/2019/12/04/dior-jordan-brand-air-jordan-1-high-og-01-ba996dc2-148f-4277-bfd8-12d1b1a75168.jpg',
    'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F07%2Fair-jordan-1-high-handcrafted-release-date-ft.jpg?w=960&cbr=1&q=90&fit=max',
    'https://nikenews.net/wp-content/uploads/2021/06/Air-Jordan-1-High-Patent-Bred-Photos-2.jpg',
    'https://eomisae.co.kr/files/attach/images/2540/299/760/068/30f503d9d12f201cc861f123e262ec65.jpg',
  ];

  const onPress = () => {
      Alert.alert('Search')
  }
  return (
    <TouchableOpacity style={styles.columnItem} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: randomImages[Math.floor(Math.random() * randomImages.length)],
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  columnItem: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {width: '100%', height: '100%', resizeMode: 'cover'},
});

export default ColumnItem;
