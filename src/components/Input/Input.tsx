import React from "react";
import { Link } from "react-router-dom";
import { IFormInput } from "../Form/Form";
import * as S from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  formInput: IFormInput;
  label?: React.ReactNode;
}

const Input: React.FC<IInput> = (props) => {
  const { label, formInput, ...inputProps } = props;
  return (
    <>
      <S.InputContainer>
        {label && <S.Label htmlFor={inputProps.id}>{label}</S.Label>}
        <S.Input
          {...inputProps}
          name={formInput.name}
          value={formInput.value}
        />
        {formInput.hasError ? <S.Error>{formInput.error}</S.Error> : <> </>}
      </S.InputContainer>
    </>
  );
};

export default Input;
