import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Story: React.FC = () => {
  return (
    <View style={styles.story}>
      <View style={styles.avatarBorder}>
        <LinearGradient
          colors={['#FFB049', '#FB7D49', '#FF4B50', '#FC2356', '#EB005C']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.avatarBorder}>
          <Image
            style={styles.avatar}
            source={require('../../assets/dummy_image-2.jpg')}
          />
        </LinearGradient>
      </View>
      <Text style={styles.text} numberOfLines={1}>
        flamingotiger
      </Text>
    </View>
  );
};

const MyStory = () => {
  const onPress = () => Alert.alert('내 스토리 생성');
  return (
    <TouchableNativeFeedback style={styles.story} onPress={onPress}>
      <View>
        <View style={styles.avatarBorder}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.jpg')}
          />
          <View></View>
        </View>
        <Text style={styles.text} numberOfLines={1}>
          내 스토리
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView
        style={styles.stories}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {/* 스크롤 숨기기 */}
        <MyStory />
        {new Array(4).fill(null).map((_, i) => (
          <Story key={i} />
        ))}
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
    borderRadius: 74,
    width: 84,
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story: {marginRight: 10},
  avatar: {
    width: 74,
    height: 74,
    resizeMode: 'cover',
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
    marginTop: 4,
    width: 84,
  },
});
export default Stories;
