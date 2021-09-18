import apiGetRequest from './utils';
import { UserPost } from '../types/types';

export const getPosts = async (): Promise<UserPost[] | undefined> => (
  apiGetRequest<UserPost[] | undefined>('/posts')
);