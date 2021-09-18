import styled from 'styled-components/macro';

export const PageContainer = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #F8F8F8;
  flex-direction: column;
`;

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background-color: #8D8D8D;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
     display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`