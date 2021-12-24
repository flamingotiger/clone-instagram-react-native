import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Stack의 Route 및 Param 관리
export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Reels: undefined;
  Shop: undefined;
  MyPage: undefined;
};

export const RootStack = createBottomTabNavigator<RootStackParamList>();

// Route 및 Navigation 기본 props 타입 설정
export type ScreenRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>;
export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export type NavigatorProps = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
