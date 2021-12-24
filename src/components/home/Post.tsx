import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
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
import Swiper from 'react-native-swiper';

const PostHeader: React.FC<PostProps> = ({post}) => {
  const navigation = useNavigation();
  const onPressProfile = () => Alert.alert('Profile');
  const onPressMore = () => Alert.alert('more');
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressProfile} style={styles.headerAvatar}>
        <Image
          source={require('../../assets/avatar.jpg')}
          style={styles.headerAvaterImage}
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
    <View style={styles.postFooter}>
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

const Like: React.FC<PostProps> = ({post}) => {
  const onPressLike = () => Alert.alert('like');
  return (
    <TouchableOpacity onPress={onPressLike}>
      <View style={styles.likeContainer}>
        <Image
          source={require('../../assets/avatar.jpg')}
          style={styles.likeAvatar}
        />
        <Text style={styles.boldText}>
          flamingotiger {post.userId} 님 외 200명이 좋아합니다.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Contents: React.FC<PostProps> = ({post}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const onPress = () => setIsShowMore(prevState => !prevState);
  const [contents, setContents] = useState(post.body);

  const onTextLayout = useCallback(
    e => {
      // 처음 실행시
      if (!isShowMore) {
        if (e.nativeEvent.lines.length > 2) {
          // 두줄 넘는다면 첫줄 두줄만 나온다.
          const [firstLine, secondLine] = e.nativeEvent.lines;
          const line = `${firstLine.text}${secondLine.text}`.slice(0, -10);
          setContents(line);
          return;
        }
      }
      // 더보기
      if (isShowMore) {
        setContents(post.body);
      }
    },
    [isShowMore],
  );

  return (
    <View style={styles.contents}>
      <Text
        style={[styles.text, styles.contentsText]}
        onPress={onPress}
        onTextLayout={onTextLayout}>
        <Text style={styles.boldText}>flamingotiger {post.userId}</Text>
        <Text>{contents}</Text>
        {!isShowMore && <Text style={styles.textGrey}> 더 보기</Text>}
      </Text>
    </View>
  );
};

const Comments = () => {
  const onPress = () => Alert.alert('comment');
  return (
    <TouchableOpacity onPress={onPress} style={styles.comments}>
      <Text style={[styles.text, styles.textGrey]}>댓글 81개 모두 보기</Text>
    </TouchableOpacity>
  );
};

const SwiperImages = () => {
  return (
    <View style={styles.swiperContainer}>
      <Swiper
        style={styles.swiper}
        loop={false}
        paginationStyle={{
          position: 'absolute',
          bottom: -30,
        }}
        dotColor={Colors.dark}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/dummy_image-0.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/dummy_image-4.jpg')}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
};
interface PostProps {
  post: PostType;
}
const Post: React.FC<PostProps> = ({post}) => {
  return (
    <View>
      <PostHeader post={post} />
      <SwiperImages />
      <View style={styles.body}>
        <PostFooter post={post} />
        <Like post={post} />
        <Contents post={post} />
        <Comments />
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
  headerAvaterImage: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 364,
    marginRight: 10,
  },
  // swiper
  swiperContainer: {
    position: 'relative',
  },
  swiper: {
    height: Dimensions.get('window').width,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  body: {
    marginHorizontal: 10,
  },
  // comments
  comments: {
    marginTop: 8,
  },
  // link
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  likeAvatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 6,
  },
  // postHeader
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 64,
  },
  headerAvatar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // Contents
  contents: {},
  contentsText: {width: Dimensions.get('window').width - 20},
  textGrey: {color: Colors.light},
  // postFooter
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 90,
  },
  icon: {width: 20, height: 20, resizeMode: 'contain'},
});

export default Post;
