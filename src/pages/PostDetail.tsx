import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/queries/useGetPost";
import PostItem from "../components/PostItem";
import CommentItem from "../components/CommentItem";
import { useGetComments } from "../hooks/queries/useGetComments";
import { Box } from "@mui/material";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: post } = useGetPost(Number(id));
  const { data: comments } = useGetComments(Number(id));
  const allPosts = comments?.pages.flatMap((page) => page.comments) ?? [];
  return (
    <Box sx={{ mt: 4 }}>
      {post && <PostItem post={post} isDetail />}
      {allPosts?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
