import { COUNTER } from "./redux";
const initialState = {
  counter: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    default:
      return state;
  }
};
