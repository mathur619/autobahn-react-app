import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;

  border: 1px solid rgb(104, 197, 214);
  border-radius: 4px;
  background-color: white;
`;

export const Label = styled.label`
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Error = styled.div`
  color: #f63535;
  font-size: 0.9rem;
  font-weight: 500;
`;
