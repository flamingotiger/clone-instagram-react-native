import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/reels/Header';
import ReelsPost from '../../components/reels/ReelsPost';

const Reels = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View
      style={[
        styles.reels,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.safeAreaView}>
        <Header />
        <FlatList
          style={styles.reelsList}
          data={new Array(4).fill(null)}
          renderItem={({item}) => <ReelsPost key={item} />}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reels: {position: 'relative', flex: 1},
  safeAreaView: {position: 'relative', flex: 1},
  reelsList: {flex: 1},
});

export default Reels;
