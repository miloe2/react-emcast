import { useRef } from "react";
import { CircularProgress } from "@mui/material";
import PostItem from "./PostItem";
import { useGetPosts } from "../hooks/queries/useGetPosts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

function PostSearchResult() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPosts();
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
      {allPosts?.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onClick={() => {
            console.log(post.id);
            handleClickPost(post.id);
          }}
        />
      ))}
      <div ref={loadMoreRef} style={{ minHeight: 20, marginTop: 10 }}>
        {!isFetchingNextPage && (
          <CircularProgress size={40} color="info" thickness={5} />
        )}
      </div>
    </>
  );
}

export default PostSearchResult;
