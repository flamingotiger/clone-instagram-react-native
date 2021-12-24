import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PostType} from '../../services/post.servies';

const PostHeader: React.FC<PostProps> = ({post}) => {
  const navigation = useNavigation();
  const onPressProfile = () => Alert.alert('Profile');
  const onPressMore = () => Alert.alert('more');
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressProfile} style={styles.postUser}>
        <Image
          source={require('../../assets/avatar.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.boldText}>flamingotiger {post.userId}</Text>
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={onPressMore}>
        <Image
          source={require('../../assets/icon_more.png')}
          style={styles.icon}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

const PostFooter: React.FC<PostProps> = ({post}) => {
  const onPressheart = () => Alert.alert('heart');
  const onPresscomment = () => Alert.alert('comment');
  const onPressairplane = () => Alert.alert('airplane');
  const onPressbookmark = () => Alert.alert('bookmark');
  return (
    <View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPressheart}>
          <Image
            source={require('../../assets/icon_heart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresscomment}>
          <Image
            source={require('../../assets/icon_comment.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressairplane}>
          <Image
            source={require('../../assets/icon_airplane.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View></View>
      <View>
        <TouchableOpacity onPress={onPressbookmark}>
          <Image
            source={require('../../assets/icon_bookmark.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface PostProps {
  post: PostType;
}
const Post: React.FC<PostProps> = ({post}) => {
  const onPress = () => {};
  return (
    <View>
      <PostHeader post={post} />
      <View>
        <Image
          source={require('../../assets/dummy_image-0.jpg')}
          style={styles.image}
        />
      </View>
      <View>
        <PostFooter post={post} />
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
    resizeMode: 'cover',
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
