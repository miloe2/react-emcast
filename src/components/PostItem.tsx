import { Box, Stack, Card, CardContent, Typography, Chip } from "@mui/material";
import type { Post } from "../types";
import { MoreMenu } from "./MoreMenu";
import { useStore } from "../stores";
import { useDeletePost } from "../hooks/queries/useDeletePost";
import toast from "react-hot-toast";
import { throttle } from "lodash";

interface PostItemProps {
  post: Post;
  isDetail?: boolean;
  onClick?: () => void;
}
export default function PostItem({
  post,
  isDetail = false,
  onClick,
}: PostItemProps) {
  const { user } = useStore();
  const deletePost = useDeletePost();
  const setLoading = useStore((state) => state.setLoading);
  const showErrorToast = throttle((msg) => toast.success(msg), 2000);
  const onDelete = async (postId: number) => {
    setLoading(true);
    try {
      await deletePost.mutateAsync(postId);
      showErrorToast("Post deleted!");
    } catch (e) {
      console.error("삭제 실패:", e);
      toast.error("Delete failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ mb: 2, px: 2 }}>
      <CardContent>
        <Box
          onClick={!isDetail ? onClick : undefined}
          sx={!isDetail ? { cursor: "pointer" } : undefined}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {post.title}
            </Typography>
            {user?.role === "admin" && (
              <MoreMenu onDelete={() => onDelete(post.id)} />
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              my: 2,
              textAlign: "left",
              ...(isDetail
                ? {}
                : {
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }),
            }}
          >
            {post.body}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {post.tags?.map((tag, idx) => (
            <Chip key={idx} label={`# ${tag}`} size="small" />
          ))}
        </Stack>

        <Box sx={{ mt: 1 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              variant="caption"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "error.main",
              }}
            >
              ❤️ {post.reactions.likes}
            </Typography>
            <Typography
              variant="caption"
              sx={{ display: "flex", alignItems: "center", color: "grey.600" }}
            >
              💔 {post.reactions.dislikes}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              👁 {post.views}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
