import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const RecommendPersonItem = () => {
  return (
    <View>
      <Text>name</Text>
      <Text>follow</Text>
      <TouchableOpacity>
        <Text>맞팔로우 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const RecommendPerson = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <View>
            <Text>test</Text>
            <Text>test</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text>test</Text>
            <Text>test</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <RecommendPersonItem />
      </ScrollView>
    </View>
  );
};

export default RecommendPerson;
