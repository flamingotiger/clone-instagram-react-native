import React from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/home/Header';
import {NavigatorProps} from '../../navigators';

interface HomeScreenProps extends NavigatorProps {}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'light';
  const scrollViewRef = React.useRef(null);
  return (
    <View
      style={[
        styles.home,
        {backgroundColor: isDarkMode ? Colors.black : Colors.light},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.body}>
        {/* header */}
        <Header scrollViewRef={scrollViewRef} />
        {/* section */}
        <ScrollView ref={scrollViewRef}>
          <Text>Home</Text>
          <Button onPress={() => navigation.push('Dummy')} title="이동" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({home: {flex: 1}, body: {flex: 1}});

export default HomeScreen;
