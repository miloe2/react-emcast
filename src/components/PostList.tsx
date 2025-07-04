import PostItem from "./PostItem";
import type { Post } from "../types";

export default function PostList({
  posts,
  onClick,
}: {
  posts: Post[];
  onClick: (id: number) => void;
}) {
  return (
    <>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onClick={() => onClick(post.id)}
        />
      ))}
    </>
  );
}

