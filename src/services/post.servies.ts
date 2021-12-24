import axios from './common.service';

export interface PostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const getListPosts = (): Promise<PostType[]> =>
  axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20');
