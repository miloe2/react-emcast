import { useGetPosts } from "../hooks/queries/useGetPosts";

function PostList() {
  const { data: posts } = useGetPosts();

  return (
    <>
      {posts?.pages.map((page, i) => (
        <div key={i}>
          {page.posts.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default PostList;
