interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}


interface CommentsResponse {
  comments: Comments[];
  total: number;
  skip: number;
  limit: number;
}

export type { Post, PostsResponse, Comments, CommentsResponse };
