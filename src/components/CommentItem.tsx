import { Box, Typography, Divider, Stack } from "@mui/material";

import type { Comments } from "../types";

interface CommentItemProps {
  comment: Comments;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <>
      <Box sx={{ mb: 1.5, textAlign: "left" }}>
        <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
          <Box sx={{ minWidth: "15%" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              {comment.user.username}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {comment.body}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ❤️ {comment.likes}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ mb: 2 }} />
      </Box>
    </>
  );
}
