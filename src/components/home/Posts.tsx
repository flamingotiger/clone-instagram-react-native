import React from 'react';
import {FlatList, Text} from 'react-native';
import {useQuery} from 'react-query';
import {getListPosts, PostType} from '../../services/post.servies';
import Post from './Post';

const Posts = () => {
  const {data, isLoading} = useQuery('posts', () => getListPosts());
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={e => e.title}
      renderItem={({item}: {item: PostType}) => (
        <Post key={item.id} post={item} />
      )}
    />
  );
};

export default Posts;
