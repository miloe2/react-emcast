import { deletePost } from "../../api/posts";
import queryClient from "../../api/queryClient";
import { queryKeys } from "../../constants";
import { useMutation, type InfiniteData } from "@tanstack/react-query";
import type { PostsResponse } from "../../types";

function useDeletePost() {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: (_, postId) => {
      queryClient.setQueryData<InfiniteData<PostsResponse>>(
        [queryKeys.POST, queryKeys.GET_POSTS],
        (old) => {
          if (!old) return old;

          const newPages = old.pages.map((page) => ({
            ...page,
            posts: page.posts.filter((post) => post.id !== postId),
            total: page.total - 1,
          }));

          return {
            ...old,
            pages: newPages,
          };
        }
      );
    },
  });
}

export { useDeletePost };
