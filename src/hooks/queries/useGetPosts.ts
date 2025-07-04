import { getPosts } from "../../api/posts";
import { queryKeys } from "../../constants/index";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetPosts() {
  return useInfiniteQuery({
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
    queryFn: ({ pageParam = 0 }) => getPosts({ skip: pageParam, limit: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });
}
export { useGetPosts };
