import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PostType} from '../../services/post.servies';

interface PostProps {
  post: PostType;
}
const Post: React.FC<PostProps> = ({post}) => {
  const onPress = () => {};
  return (
    <View>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPress} style={styles.postUser}>
            <Image
              source={require('../../assets/dummy_image-1.png')}
              style={styles.profileImage}
            />
            <Text style={styles.boldText}>flamingotiger {post.userId}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icon_more.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require('../../assets/dummy_image-0.jpg')}
          style={styles.image}
        />
      </View>
      <View>
        <View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../../assets/icon_heart.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../../assets/icon_comment.png')}
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
          <View></View>
          <View>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../../assets/icon_bookmark.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.boldText}>
            flamingotiger {post.userId} 님 외 200명이 좋아합니다.
          </Text>
          <Text style={styles.text}>님 외</Text>
          <Text style={styles.boldText}>200</Text>
          <Text style={styles.text}>명이 좋아합니다.</Text>
        </View>
        <View>
          <Text style={styles.boldText}>
            flamingotiger {post.userId} {post.body}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {lineHeight: 14, fontSize: 14, color: Colors.white},
  boldText: {
    lineHeight: 14,
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    borderRadius: 364,
    marginRight: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 64,
  },
  postUser: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 40,
  },
  icon: {width: 20, height: 20, resizeMode: 'contain'},
});

export default Post;
