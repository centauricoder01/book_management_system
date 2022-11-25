import * as types from "./Action-type";

const InitialData = { books: [], isLoading: false, iserror: false };

const Reducer = (oldstate = InitialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BOOK_REQUEST:
      return { ...oldstate, isLoading: true };
    case types.GET_BOOK_SUCCESS:
      return { ...oldstate, isLoading: false, books: payload };
    case types.GET_BOOK_SUCCESS:
      return { ...oldstate, isLoading: false, iserror: true };
    default:
      return oldstate;
  }
};

export { Reducer };
