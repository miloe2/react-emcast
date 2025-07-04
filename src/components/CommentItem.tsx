import { Box, Typography, Stack } from "@mui/material";
import type { Comments } from "../types";

interface CommentItemProps {
  comment: Comments;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 2,
        mb: 2,
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="subtitle2">
          {comment.user.fullName} (@{comment.user.username})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {comment.body}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          ❤️ {comment.likes}
        </Typography>
      </Stack>
    </Box>
  );
}
