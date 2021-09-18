import styled, { css } from 'styled-components/macro';
import { SelectedStyleProps } from './types';

export const Container = styled.div<SelectedStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  height: 200px;
  width: 100%;
  cursor: pointer;
  margin: 1rem 0rem;
  background-color: ${({ selected = false }) => (selected ? '#359EEA' : null)};
  &:active {
    transform: scale(.99);
  }
  border: 1px solid #000000;
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  padding: 1.5rem;
`;

export const PostContainer = styled.div<SelectedStyleProps>`
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  color: ${({ selected = false, }) => (selected ? '#FFFFFF' : null)};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const textSharedStyles = () => css`
  font-weight: 400;
  font-size: 0.829rem;
  text-align: left;
`;

export const UserName = styled.h2`
  ${textSharedStyles}
`;

export const PostBody = styled.h3`
  ${textSharedStyles}
  line-height: 1.5rem;
`;