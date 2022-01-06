import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import faker from 'faker';

const Profile = () => {
  return (
    <View>
      <View style={styles.profileArea}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/dummy_image-0.jpg')}
        />
        <View style={styles.total}>
          <TouchableOpacity>
            <View style={styles.textButton}>
              <Text style={styles.number}>18</Text>
              <Text style={styles.text}>게시물</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.textButton}>
              <Text style={styles.number}>29</Text>
              <Text style={styles.text}>팔로워</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.textButton}>
              <Text style={styles.number}>44</Text>
              <Text style={styles.text}>팔로잉</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text numberOfLines={1} style={styles.description}>
        {faker.lorem.text()}
      </Text>
      <Text numberOfLines={1} style={styles.description}>
        {faker.lorem.text()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'contain',
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
  },
  description: {
    fontSize: 16,
    color: Colors.white,
    paddingHorizontal: 10,
  },
});

export default Profile;
