import apiGetRequest from './utils';
import { User } from '../types/types';

export const getUsers = async (): Promise<User[] | undefined> => (
  apiGetRequest<User[] | undefined>('/users')
);