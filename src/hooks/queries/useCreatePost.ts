import { createPost } from "../../api/posts";
import queryClient from "../../api/queryClient";
import { queryKeys } from "../../constants";
import { useMutation, type InfiniteData } from "@tanstack/react-query";
import type { Post, PostDto, PostsResponse } from "../../types";

function useCreatePost() {
  return useMutation({
    mutationFn: (postDto: PostDto) => createPost(postDto),
    onSuccess: (newPost) => {
      const completePost: Post = {
        id: newPost.id,
        title: newPost.title,
        body: newPost.body ?? "",
        tags: newPost.tags ?? [],
        reactions: newPost.reactions ?? { likes: 0, dislikes: 0 },
        views: newPost.views ?? 0,
        userId: newPost.userId,
        uid: newPost.uid,
      };
      queryClient.setQueryData<InfiniteData<PostsResponse>>(
        [queryKeys.POST, queryKeys.GET_POSTS],
        (old) => {
          if (!old) {
            return {
              pageParams: [0],
              pages: [
                {
                  posts: [completePost],
                  total: 1,
                  skip: 0,
                  limit: 10,
                },
              ],
            };
          }

          // 첫 페이지만 업데이트
          const newPages = [...old.pages];
          newPages[0] = {
            ...newPages[0],
            posts: [completePost, ...newPages[0].posts],
            total: newPages[0].total + 1,
          };

          return {
            ...old,
            pages: newPages,
          };
        }
      );
    },
  });
}

export { useCreatePost };
