import styled from "styled-components";

export const PostUpdateOverlay = styled.div`
  min-height: 100vh;
  width: 100vw;

  position: fixed;
  left: 0;
  top: 0;

  background-color: rgba(0 0 0 /0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    height: fit-content;
    width: 90vw;
    padding: 0 2rem 2rem 2rem;

    @media (min-width: 768px) {
      width: 60vw;
    }
  }
`;

export const CloseDiv = styled.div`
  width: 100%;
  background-color: white;
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem 0 0;

  @media (min-width: 768px) {
    width: 60vw;
  }
`;
