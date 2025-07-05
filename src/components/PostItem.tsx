import { Box, Stack, Card, CardContent, Typography, Chip } from "@mui/material";
import type { Post } from "../types";
import { MoreMenu } from "./MoreMenu";

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
  const onDelete = (postId: number) => {
    console.log("delete", postId);
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
            <MoreMenu onDelete={() => onDelete(post.id)} />
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
          {post.tags.map((tag, idx) => (
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
