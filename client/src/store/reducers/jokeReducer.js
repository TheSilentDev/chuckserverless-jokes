import { GET_JOKE } from "../actions/types";

const initialState = {
  joke: "Click a category for a joke"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_JOKE:
      return {
        ...state,
        joke: action.payload
      };
    default:
      return state;
  }
}
