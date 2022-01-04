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
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const reelsPostHeight = Dimensions.get('window').height - 82;

const Infomation = () => {
  return (
    <View style={styles.infomation}>
      <View>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require('../../assets/dummy_image-0.jpg')}
          />
          <Text
            style={
              styles.name
            }>{`${faker.name.firstName()} ${faker.name.lastName()}`}</Text>
          <TouchableOpacity onPress={() => Alert.alert('follow')}>
            <Text style={styles.followButton}>팔로우</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profileContents} numberOfLines={1}>
          {faker.lorem.text()}
        </Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
    </View>
  );
};
const Tools = () => {
  return (
    <View style={styles.tools}>
      <TouchableOpacity
        style={styles.toolIcon}
        onPress={() => Alert.alert('heart')}>
        <Image
          source={require('../../assets/icon_heart.png')}
          style={styles.toolIconImage}
        />
        <Text style={styles.toolCount}>2,031</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toolIcon}
        onPress={() => Alert.alert('comment')}>
        <Image
          source={require('../../assets/icon_comment.png')}
          style={styles.toolIconImage}
        />
        <Text style={styles.toolCount}>1,131</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toolIcon}
        onPress={() => Alert.alert('airplane')}>
        <Image
          source={require('../../assets/icon_airplane.png')}
          style={styles.toolIconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toolIcon}
        onPress={() => Alert.alert('more')}>
        <Image
          source={require('../../assets/icon_more.png')}
          style={styles.toolIconImage}
        />
      </TouchableOpacity>
    </View>
  );
};

interface ReelsVideoProps {}

const ReelsPost: React.FC<ReelsVideoProps> = () => {
  return (
    <View style={styles.post}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://stackhouse.s3.amazonaws.com/98f9b6d75ad15ee9fed82719e4044dfa_image.png',
        }}
      />
      <LinearGradient
        style={styles.linearGradient}
        colors={[
          'rgba(0,0,0,0.6)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0.6)',
        ]}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
      />
      <View style={styles.contents}>
        <Infomation />
        <Tools />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    height: reelsPostHeight,
    backgroundColor: Colors.black,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  linearGradient: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
  },
  contents: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 14,
  },
  infomation: {
    width: Dimensions.get('window').width * 0.9 - 28,
    paddingBottom: 20,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.white,
    marginRight: 10,
  },
  profileContents: {fontWeight: 'bold', fontSize: 14, color: Colors.white},
  followButton: {
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  profile: {flexDirection: 'row', alignItems: 'center'},
  tools: {width: Dimensions.get('window').width * 0.1},
  toolIcon: {
    marginBottom: 14,
    alignContent: 'center',
    justifyContent: 'center',
  },
  toolIconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  toolCount: {
    fontSize: 14,
    color: Colors.white,
    marginTop: 4,
  },
});

export default ReelsPost;
