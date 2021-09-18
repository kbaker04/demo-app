export interface User {
  id: number;
  name: string;
  profileImage?: string;
}

export interface UserPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}