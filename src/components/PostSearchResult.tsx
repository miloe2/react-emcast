import { useRef } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import { useGetPostSearch } from '../hooks/queries/useGetPostSearch';
import PostList from './PostList';
interface PostSearchResultProps {
  keyword: string;
}

function PostSearchResult({ keyword }: PostSearchResultProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPostSearch(keyword);
  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const handleClickPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const loadMoreRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          fetchNextPage();
        }, 1000);
      }
    },
    enabled: hasNextPage,
    threshold: 0.1,
  });

  return (
    <>
      <PostList posts={allPosts} onClick={handleClickPost} />
      <Box ref={loadMoreRef} sx={{ minHeight: 100, marginTop: 10 }}>
        {hasNextPage ? (
          <CircularProgress size={40} color="info" thickness={5} />
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>더 이상 게시물이 없습니다.</p>
        )}
      </Box>
    </>
  );
}
export default PostSearchResult;
