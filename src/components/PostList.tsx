import PostItem from "./PostItem";
import { useGetPosts } from "../hooks/queries/useGetPosts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { CircularProgress } from "@mui/material";
import { useRef } from "react";

function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPosts();
  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
      {allPosts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <div ref={loadMoreRef} style={{ minHeight: 20, marginTop: 10 }}>
        {!isFetchingNextPage && (
          <CircularProgress size={40} color="info" thickness={5} />
        )}
      </div>
    </>
  );
}

export default PostList;
