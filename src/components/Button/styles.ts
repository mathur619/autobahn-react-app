import styled from "styled-components";

export const Button = styled.button<{ $fullWidth: boolean }>`
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};
  padding: 1rem;
  background-color: white;
  border: 1px solid rgb(229, 251, 255, 1);
  background-color: rgb(229, 251, 255, 1);
  border-radius: 4px;
  font-weight: 600;
  font-size: inherit;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background-color: rgba(198, 246, 255, 1);
    cursor: pointer;
  }
  &:active {
    background-color: rgba(164, 234, 247, 1);
    cursor: pointer;

    color: rgba(0, 0, 0, 0.8);
  }
`;
