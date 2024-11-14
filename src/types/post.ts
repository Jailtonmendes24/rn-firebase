export interface Story {
  id: string;
  userName: string;
  userAvatar: string;
  imageUrl: string;
}

export interface Post {
  id: string;
  userName: string;
  userAvatar: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
} 