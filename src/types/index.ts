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
  uid?: string;
}

interface PostDto {
  title: string;
  body: string;
  userId: number;
  uid?: string; // 우리 앱용 (필요하면)
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

export type { Post, PostDto, PostsResponse, Comments, CommentsResponse };
