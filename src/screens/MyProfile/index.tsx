import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Feeds from '../../components/myProfile/Feeds';
import Header from '../../components/myProfile/Header';
import Profile from '../../components/myProfile/Profile';
import RecommendPerson from '../../components/myProfile/RecommendPerson';

const MyProfile = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView
      style={[
        styles.myProfile,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.area}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Profile />
          <RecommendPerson />
          <Feeds />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myProfile: {flex: 1},
  area: {position: 'relative', flex: 1, paddingTop: 48},
});

export default MyProfile;
