import { getPostSearch } from '../../api/posts';
import { queryKeys } from '../../constants/index';
import { useInfiniteQuery } from '@tanstack/react-query';

function useGetPostsSearch(keyword: string) {
  return useInfiniteQuery({
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS, keyword],
    queryFn: ({ pageParam = 0 }) => getPostSearch({ skip: pageParam, keyword }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    enabled: !!keyword,
  });
}
export { useGetPostsSearch };
