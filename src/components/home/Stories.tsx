import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Story = () => {
  return (
    <View style={styles.story}>
      <View style={styles.avatarBorder}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
          }}
        />
      </View>
      <Text style={styles.text} numberOfLines={1}>
        flamfdflamfdflamfdflamfdflamfdflamfdflamfdflamfdflamfdflamfdflamfdflamfd
      </Text>
    </View>
  );
};

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal style={styles.stories}>
        <Story />
        <Story />
        <Story />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  storiesContainer: {
    height: 118,
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stories: {
    marginHorizontal: 10,
  },
  avatarBorder: {
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 74,
  },
  story: {marginRight: 20},
  avatar: {
    width: 74,
    height: 74,
    resizeMode: 'contain',
    borderRadius: 74,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  text: {
    lineHeight: 14,
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    width: 74,
  },
});
export default Stories;
