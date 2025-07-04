import { getComments } from "../../api/comments";
import { queryKeys } from "../../constants/index";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetComments(postId: number) {
  return useInfiniteQuery({
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS, postId],
    queryFn: ({ pageParam = 0 }) => getComments({ postId, skip: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    enabled: !!postId,
  });
}
export { useGetComments };
