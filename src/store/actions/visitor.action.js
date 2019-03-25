import RequestService from "../../restUtils";

/*
 * action types
 */
export const ADD_VISITOR = "ADD_VISITOR";
export const OUT_VISITOR = "OUT_VISITOR";
export const SET_VISITORS = "SET_VISITORS";

/*
 * action creators
 */

export function addVisitor(visitor) {
  return { type: ADD_VISITOR, payload: visitor };
}

export const saveVisitor = visitor => {
  return dispatch => {
    return RequestService.save("http://localhost:5000/visitors", visitor)
      .then(visitor => {
        dispatch(addVisitor(visitor.data));
      })
      .catch(e => console.log("error", e));
  };
};

export const setVisitors = visitors => ({
  type: SET_VISITORS,
  visitors
});
export const getVisitors = () => {
  return dispatch => {
    return RequestService.fetch("http://localhost:5000/visitors")
      .then(visitors => {
        dispatch(setVisitors(visitors.data || []));
      })
      .catch(e => console.log(e));
  };
};

export function outVisitor(id) {
  return { type: OUT_VISITOR, payload: { id } };
}
