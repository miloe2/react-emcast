import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/queries/useGetPost";
import PostItem from "../components/PostItem";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: post } = useGetPost(Number(id));

  return (
    <>
      {post && <PostItem post={post} isDetail />}
    </>
  );
}
