import * as types from "./Action_type";

const Initalize = {
  Tokens: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

const Auth_Reducer = (oldstate = Initalize, action) => {
  const { type, Token } = action;
  switch (type) {
    case types.GET_AUTH_REQUEST:
      return { ...oldstate, isLoading: true };
    case types.GET_AUTH_TOKEN:
      return { ...oldstate, isAuth: true, Tokens: Token, isLoading: false };
    case types.GET_AUTH_ERROR:
      return { ...oldstate, isLoading: false, isError: true };
    default:
      return oldstate;
  }
};

export { Auth_Reducer };
