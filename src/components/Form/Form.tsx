import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  IForm,
  formReducer,
  createInitialState,
  handleSubmit,
  handleChange,
} from "./formUtils";
import * as S from "./styles";

const Form: React.FC<IForm> = ({ initialState }) => {
  const [formState, dispatch] = useReducer(
    formReducer,
    initialState || createInitialState
  );

  console.log("formState", formState);

  return (
    <>
      <S.Form onSubmit={(e) => handleSubmit(e, formState, dispatch)}>
        <Input
          formInput={formState.title}
          onChange={(e) => handleChange(e, dispatch)}
          label="Title"
        />
        <Input
          formInput={formState.body}
          onChange={(e) => handleChange(e, dispatch)}
          label="Body"
        />

        <Button text="Submit Form" type="submit" fullWidth />
      </S.Form>
    </>
  );
};

export default Form;
