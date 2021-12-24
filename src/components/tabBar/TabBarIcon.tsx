import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {ScreenRouteProp} from '../../navigators';

interface TabBarIconProps {
  focused: boolean;
  route: ScreenRouteProp;
}
const TabBarIcon: React.FC<TabBarIconProps> = ({focused, route}) => {
  let iconPath: ImageSourcePropType | undefined;
  const {name} = route;
  if (name === 'Home') {
    focused
      ? (iconPath = require('../../assets/icon_home-focused.png'))
      : (iconPath = require('../../assets/icon_home.png'));
  } else if (name === 'Search') {
    focused
      ? (iconPath = require('../../assets/icon_search-focused.png'))
      : (iconPath = require('../../assets/icon_search.png'));
  } else if (name === 'Reels') {
    focused
      ? (iconPath = require('../../assets/icon_reels-focused.png'))
      : (iconPath = require('../../assets/icon_reels.png'));
  } else if (name === 'Shop') {
    focused
      ? (iconPath = require('../../assets/icon_shop-focused.png'))
      : (iconPath = require('../../assets/icon_shop.png'));
  }

  if (!iconPath) return null;
  return <Image source={iconPath} />;
};

export default TabBarIcon;
