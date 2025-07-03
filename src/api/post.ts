import type { Post } from "../types";
import { axiosInstance } from "./axios";

async function getPosts(): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts`);
  return data;
}

export { getPosts };
