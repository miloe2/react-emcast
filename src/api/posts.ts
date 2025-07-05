import type { PostsResponse, Post, PostDto } from "../types";
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
    `/posts?limit=${limit}&skip=${skip}&sortBy=id&order=desc`
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

// 게시물 추가
async function createPost(body: PostDto) {
  try {
    const { data } = await axiosInstance.post("/posts/add", {
      title: body.title,
      body: body.body,
      userId: body.userId,
    });
    console.log("응답:", data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 게시물 삭제
async function deletePost(postId: number) {
  try {
    const { data } = await axiosInstance.delete(`posts/${postId}`);
    console.log("응답:", data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export { getPosts, getPostSearch, getPostDetail, createPost, deletePost };
