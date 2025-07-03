import { Card, CardContent, Typography } from "@mui/material";
import type { Post } from "../types";
// @ts-nocheck
function PostItem({ post }: { post: Post }) {
  const { title, body } = post;
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostItem;
