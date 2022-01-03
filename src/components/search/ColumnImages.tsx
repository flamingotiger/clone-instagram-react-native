import React from 'react';
import {ScrollView} from 'react-native';
import ColumnItem from './ColumnItem';

const ColumnImages = () => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {new Array(10).fill(null).map((_, index) => (
        <ColumnItem key={index} />
      ))}
    </ScrollView>
  );
};

export default ColumnImages;
