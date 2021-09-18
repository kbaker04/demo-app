import React, { FC } from 'react';
import { profilePhotoIcon, trashCanIcon } from '../../assets/Icons';

import RoundedImage from '../RoundedImage';

import {
  Container,
  ImageWrapper,
  PostContainer,
  UserWrapper,
  UserName,
  PostBody
} from './Styles';

import { PostCardProps } from './types';

const PostCard: FC<PostCardProps> = ({
  post,
  user,
  onSelectPost,
  onDeletePost,
  selectedPost
}) => (
  <Container 
    selected={selectedPost?.id === post.id}
    onClick={() => onSelectPost(post)}
  >
    <ImageWrapper>
      <RoundedImage
        width="50px"
        alt="staff-profile-image"
        src={user?.profileImage|| profilePhotoIcon}
      /> 
    </ImageWrapper>
    <PostContainer selected={false}>
      <UserWrapper>
        <UserName>{user?.name}</UserName>
      </UserWrapper>
      <PostBody>{post.body}</PostBody>
    </PostContainer>
    <ImageWrapper onClick={() => onDeletePost(post)}>
      <RoundedImage
        width="50px"
        alt="staff-profile-image"
        src={trashCanIcon}
      /> 
    </ImageWrapper>
  </Container>
);

export default PostCard;
