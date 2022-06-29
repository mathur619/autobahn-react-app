import { toast } from "react-toastify";

export enum FormActionTypes {
  INPUT_CHANGE = "input-change",
  UPDATE = "update",
  CREATE = "create",
  RESET = "reset",
}

export enum FormNames {
  TITLE = "title",
  BODY = "body",
  ID = "id",
}

export interface IFormInput {
  name: FormNames;
  value: string | number;
  touched: boolean;
  hasError: boolean;
  error: string;
}

export interface IFormInitialState {
  id?: IFormInput;
  title: IFormInput;
  body: IFormInput;
  isFormValid: boolean;
  type: FormActionTypes;
}

export type FormStateKeys = "title" | "body";

export interface IReducerAction {
  type: FormActionTypes;
  payload?: any;
}

export interface IForm {
  initialState?: IFormInitialState;
}

export const createInitialState: IFormInitialState = {
  title: {
    name: FormNames.TITLE,
    value: "",
    touched: false,
    hasError: true,
    error: "",
  },
  body: {
    name: FormNames.BODY,
    value: "",
    touched: false,
    hasError: true,
    error: "",
  },
  type: FormActionTypes.CREATE,
  isFormValid: false,
};

export const validateInput = (value: string, name: FormNames) => {
  let hasError = false,
    error = "";

  switch (name) {
    case FormNames.TITLE: {
      if (value.trim() === "") {
        hasError = true;
        error = "Title cannot be empty";
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        error = "Invalid Title. Avoid Special characters";
      } else if (value.trim().length < 3) {
        hasError = true;
        error = "Invalid Title. Must be atleast 3 characters long";
      } else {
        hasError = false;
        error = "";
      }
      break;
    }
    case FormNames.BODY: {
      if (value.trim() === "") {
        hasError = true;
        error = "Title cannot be empty";
      } else if (value.trim().length < 10) {
        hasError = true;
        error = "Invalid Title. Must be atleast 10 characters long";
      } else {
        hasError = false;
        error = "";
      }
      break;
    }
  }
  return { hasError, error };
};

export const formReducer = (
  state: IFormInitialState,
  action: IReducerAction
): IFormInitialState => {
  console.count("formReducer");

  switch (action.type) {
    case FormActionTypes.INPUT_CHANGE: {
      const { value, name } = action.payload;
      if (state.hasOwnProperty(name)) {
        const { hasError, error } = validateInput(value, name);

        let isFormValid = true;

        for (const key in state) {
          const item = state[key as FormStateKeys];

          if (key === name && hasError) {
            isFormValid = false;
            break;
          } else if (key !== name && item.hasError) {
            isFormValid = false;
            break;
          }
        }

        const newState: IFormInitialState = {
          ...state,
          [name]: {
            name,
            value,
            touched: true,
            hasError,
            error,
          },
          isFormValid,
        };
        return newState;
      } else {
        return state;
      }
    }
    case FormActionTypes.CREATE: {
      console.count("CREATE");

      if (state.isFormValid) {
        const createPost = async () => {
          console.count("createPost");
          try {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts",
              {
                method: "POST",
                body: JSON.stringify({
                  title: state.title.value,
                  body: state.body.value,
                  userId: 1,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            );

            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            toast.success(`New Post Created!`);
          } catch (err) {
            if (err instanceof Error) {
              toast.error(err.message);
            }
          } finally {
            // setLoading(false);
          }
        };
        createPost();
      }
      return createInitialState;
    }
    case FormActionTypes.UPDATE: {
      if (state.isFormValid) {
        const updatePost = async () => {
          console.count("updatePost");
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${state.id?.value}`,
              {
                method: "PUT",
                body: JSON.stringify({
                  id: state.id?.value,
                  title: state.title.value,
                  body: state.body.value,
                  userId: 1,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            );

            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            toast.success(`Post ${state.id?.value} Updated!`);
          } catch (err) {
            if (err instanceof Error) {
              toast.error(err.message);
            }
          } finally {
            // setLoading(false);
          }
        };
        updatePost();
      }

      return state;
    }
    case FormActionTypes.RESET: {
      return createInitialState;
    }
    default: {
      return state;
    }
  }
};

export const handleSubmit = (
  e: any,
  formState: IFormInitialState,
  dispatch: React.Dispatch<IReducerAction>
) => {
  e.preventDefault();

  for (const name in formState) {
    dispatch({
      type: FormActionTypes.INPUT_CHANGE,
      payload: {
        value: formState[name as FormNames]?.value,
        name: formState[name as FormNames]?.name,
      },
    });
  }

  if (formState.isFormValid) {
    dispatch({ type: formState.type });
  }
};

export const handleChange = (
  e: any,
  dispatch: React.Dispatch<IReducerAction>
) => {
  const { value, name } = e.target;

  dispatch({
    type: FormActionTypes.INPUT_CHANGE,
    payload: { value, name },
  });
};
