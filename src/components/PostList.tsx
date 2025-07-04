import PostItem from "./PostItem";
import type { Post } from "../types";

function PostList({
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

export default PostList;
