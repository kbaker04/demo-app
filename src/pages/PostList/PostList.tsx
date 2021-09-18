import React, { FC, useState, useEffect, useCallback } from 'react';

import { getPosts } from '../../lib/api/posts';
import { getUsers } from '../../lib/api/users';

import PostCard from '../../components/PostCard';

import { PageContainer, PostListContainer } from './Styles';

import { User, UserPost } from '../../lib/types/types';
import { PostListProps } from './types';

const PostList: FC<PostListProps> = () => {
  const [posts, setPosts] = useState<UserPost[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedPost, setSelectedPost] = useState<UserPost | null>(null);

  const getUserPosts = useCallback(async () => {
    const postList = await getPosts();
    if (postList) setPosts(postList);
  }, []);

  const getUserList = useCallback(async () => {
    const userList = await getUsers();
    if (userList) setUsers(userList);
  }, []);

  useEffect(() => {
    (async () => {
      await getUserPosts();
      await getUserList();
    })();
  }, [getUserList, getUserPosts]);

  const onSelectPost = (post: UserPost) => {
    setSelectedPost(post);
  };

  const onDeletePost = (post: UserPost) => {
    const updatedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(updatedPosts);
  };

  return posts.length > 0 ? (
    <PageContainer>
      <PostListContainer>
        {
          posts.map((p) => { 
            return (
            <PostCard 
              key={p.id}
              post={p} 
              user={users.find((u) => u.id === p.userId)}
              onSelectPost={onSelectPost}
              onDeletePost={onDeletePost}
              selectedPost={selectedPost}
            />
          )})
        }
      </PostListContainer>
    </PageContainer>
  ) : <></> // TODO: Loading Spinner
}

export default PostList;