import { SAVE_LIST_POST } from "../type";

const initialState = {
  listPost: [],
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_LIST_POST:
      return {
        ...state,
        listPost: payload,
      };

    default:
      return state;
  }
};

export default postReducer;
