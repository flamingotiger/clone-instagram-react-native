import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useQuery} from 'react-query';
import {getListPosts, PostType} from '../../services/post.servies';
import Post from './Post';
import Stories from './Stories';

const Posts = () => {
  const {data, isLoading} = useQuery('posts', () => getListPosts());
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <FlatList
      style={styles.posts}
      ListHeaderComponent={<Stories />}
      data={data}
      numColumns={2}
      keyExtractor={e => e.title}
      renderItem={({item}: {item: PostType}) => (
        <Post key={item.id} post={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  posts: {flex: 1},
});
export default Posts;
