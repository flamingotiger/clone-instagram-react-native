import {ROUTE_NAMES_TYPE} from './../utils/constants/route.constants';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// Stack의 Route 및 Param 관리
export type RootStackParamList = {
  Home: undefined;
  Dummy: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

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
