import { Card, CardContent, Typography } from "@mui/material";
import type { Post } from "../types";
interface PostItemProps {
  post: Post;
  onClick: () => void;
}
function PostDetail() {
  return (
    <Card  sx={{ marginBottom: 5, cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          여기가 새로운거야!!!!!!!!!!
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostDetail;
