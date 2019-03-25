import { ADD_VISITOR, OUT_VISITOR, SET_VISITORS } from "../actions/visitor.action";

function visitorReducer(state = [], action) {
  switch (action.type) {
    case ADD_VISITOR:
      return [...state, action.payload];
    case OUT_VISITOR:
      return state.filter(visitor => visitor.id !== action.payload.id);
    case SET_VISITORS:
       return action.visitors;
    default:
      return state;
  }
}

export default visitorReducer;
