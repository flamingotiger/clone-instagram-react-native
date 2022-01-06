import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const RecommendPersonItem = () => {
  return (
    <View style={styles.recommendPersonItem}>
      <Image
        style={styles.recommendPersonImage}
        source={require('../../assets/dummy_image-1.jpg')}
      />
      <Text style={styles.name} numberOfLines={1}>
        name
      </Text>
      <Text style={styles.recommendDescription} numberOfLines={2}>
        follow
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>맞팔로우 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const RecommendPerson = () => {
  return (
    <View>
      <View style={styles.profileEditDirection}>
        <TouchableOpacity style={styles.profileEditButton}>
          <Text style={styles.profileEditText}>프로필 편집</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileRecommend}>
          <Text>AA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendPersonTitle}>
        <Text style={styles.title}>사람 찾아보기</Text>
        <TouchableOpacity>
          <Text style={styles.more}>모두 보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <RecommendPersonItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileRecommend: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 6,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.1,
  },
  profileEditDirection: {flexDirection: 'row'},
  profileEditButton: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 6,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.9 - 4,
    marginRight: 4,
  },
  profileEditText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  recommendPersonTitle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 14
  },
  title: {fontSize: 16, fontWeight: 'bold', color: Colors.white},
  more: {fontSize: 16, fontWeight: 'bold', color: 'rgb(0,140,250)'},
  recommendPersonItem: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendPersonImage: {width: 80, height: 80, borderRadius: 80},
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  recommendDescription: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,140,250)',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default RecommendPerson;
