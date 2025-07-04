import { useRef } from 'react';
import { Box, CircularProgress } from '@mui/material';
import PostList from './PostList';
import { useGetPosts } from '../hooks/queries/useGetPosts';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';

function PostListContainer() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPosts();
  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const handleClickPost = (id: number) => {
    navigate(`/post/${id}`);
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

export default PostListContainer;
