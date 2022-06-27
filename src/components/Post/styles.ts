import styled from "styled-components";

export const PostContainer = styled.div<{ $loading: boolean }>`
  pointer-events: ${(props) => (props.$loading ? "none" : "unset")};
  opacity: ${(props) => (props.$loading ? "0.5" : "1")};

  background-color: rgb(229, 251, 255, 0.2);
  color: #212121;

  outline: rgb(229, 251, 255, 1) solid 2px;
  border-radius: 8px;

  text-align: left;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  transition: 0.3s;

  &:hover {
    background-color: rgb(229, 251, 255, 1);
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Body = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;
