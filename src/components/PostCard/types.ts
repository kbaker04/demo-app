import { User, UserPost } from '../../lib/types/types';

export interface PostCardProps {
  post: UserPost;
  user?: User;
  onSelectPost: (post: UserPost) => void;
  onDeletePost: (post: UserPost) => void;
  selectedPost?: UserPost | null;
}

export interface SelectedStyleProps {
  selected: boolean;
}
