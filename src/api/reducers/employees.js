import {
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "../actions/types";

let initialState = {
  employees: [],
};

export default function employees(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return { ...action.payload };
    case CREATE_EMPLOYEE:
      return { ...action.payload };
    case UPDATE_EMPLOYEE:
      return { ...action.payload };
    default:
      return state;
  }
}
