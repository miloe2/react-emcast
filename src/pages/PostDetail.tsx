import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,

} from "@mui/material";
import { useGetPost } from "../hooks/queries/useGetPost";
import PostItem from "../components/PostItem";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  // const [loading, setLoading] = useState(true);
  const { data: post } = useGetPost(Number(id));

  return (
    <>
      {post && <PostItem post={post} isDetail />}
      펔ㅍㅋ
    </>
  );
}
