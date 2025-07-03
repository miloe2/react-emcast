import type { PostsResponse } from "../types";
import { axiosInstance } from "./axios";

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
export { getPosts };
