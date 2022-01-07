import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Feed = () => {
  return (
    <TouchableOpacity style={styles.feed}>
      <Image
        style={styles.feedImage}
        source={require('../../assets/dummy_image-3.jpg')}
      />
    </TouchableOpacity>
  );
};

const Feeds = () => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
      {new Array(30).fill(null).map((_, index) => (
        <Feed key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feed: {
    width: Dimensions.get('window').width * 0.333,
    height: Dimensions.get('window').width * 0.333,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  feedImage: {
    width: Dimensions.get('window').width * 0.333,
    height: Dimensions.get('window').width * 0.333,
    resizeMode: 'cover',
  },
});

export default Feeds;
