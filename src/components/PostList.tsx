import { useGetPosts } from "../hooks/queries/useGetPosts";
import PostItem from "./PostItem";

function PostList() {
  const { data } = useGetPosts();
  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <>
      {allPosts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
