import { Box, Stack, Card, CardContent, Typography, Chip } from "@mui/material";
import type { Post } from "../types";
interface PostItemProps {
  post: Post;
  onClick: () => void;
}
function PostItem({ post, onClick }: PostItemProps) {
  return (
    <Card
      sx={{ mb: 2, transition: "0.3s", "&:hover": { boxShadow: 6 }, px: 2 }}
    >
      <CardContent>
        <Box onClick={onClick} sx={{ cursor: "pointer" }}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              my: 2,
              textAlign: "left",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
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

export default PostItem;
