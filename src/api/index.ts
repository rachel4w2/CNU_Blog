import axios from 'axios';
import { IPostWithAd, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: '',
});

// todo (6) api 작성

export const getPostList = () => {
  return null;
};

export const createPost = () => {
  return null;
};

export const getPostById = () => {
  return null;
};

export const updatePostById = () => {
  return null;
};

export const deletePostById = () => {
  return null;
};