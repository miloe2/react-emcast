import type { PostsResponse } from '../types';
import { axiosInstance } from './axios';

async function getPosts({
  skip = 0,
  limit = 10,
}: {
  skip?: number;
  limit?: number;
}): Promise<PostsResponse> {
  const { data } = await axiosInstance.get(`/posts?limit=${limit}&skip=${skip}`);
  return data;
}

async function getPostSearch({
  keyword,
  skip = 0,
  limit = 10,
}: {
  keyword: string;
  skip?: number;
  limit?: number;
}): Promise<PostsResponse> {
  const { data } = await axiosInstance.get(`/posts/search`, {
    params: { q: keyword, skip, limit },
  });
  return data;
}

export { getPosts, getPostSearch };
