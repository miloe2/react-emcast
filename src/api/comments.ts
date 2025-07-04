import { axiosInstance } from "./axios";
import type { CommentsResponse } from "../types";

async function getComments({
  postId,
  skip = 0,
  limit = 10,
}: {
  postId: number;
  skip?: number;
  limit?: number;
}): Promise<CommentsResponse> {
  const { data } = await axiosInstance.get(`/comments/post/${postId}`, {
    params: { skip, limit },
  });
  return data;
}

export { getComments };
