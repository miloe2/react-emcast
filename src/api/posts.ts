import type { PostsResponse, Post } from "../types";
import { axiosInstance } from "./axios";

// 게시물 전체 조회
async function getPosts({
  skip = 0,
  limit = 10,
}: {
  skip?: number;
  limit?: number;
}): Promise<PostsResponse> {
  const { data } = await axiosInstance.get(
    `/posts?limit=${limit}&skip=${skip}`
  );
  return data;
}

// 게시물 검색
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

// 상세보기
async function getPostDetail(id: number): Promise<Post> {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
}

export { getPosts, getPostSearch, getPostDetail };
