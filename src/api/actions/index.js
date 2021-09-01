import axios from "axios";
import { BASE_URL } from "../../Constants";
import { CREATE_EMPLOYEE, FETCH_EMPLOYEES, UPDATE_EMPLOYEE } from "./types";
import _ from "underscore";

const get_config = {
  method: "get",
  "Access-Control-Allow-Headers": "Accept",
  "Access-Control-Allow-Origin": "*",
  headers: {
    "Content-Type": "application/x-www-urlencoded",
  },
};

export function getEmployees(employee_id) {
  let employeeId = employee_id || "";
  return (dispatch) => {
    axios(`${BASE_URL}/employees/${employeeId}`, get_config)
      .then((res) => {
        dispatch({
          type: FETCH_EMPLOYEES,
          payload: { employees: res.data.employees },
        });
      })
      .catch((err) => console.log("ERROR! ACTION: getEmployees", err));
  };
}

export function createEmployee(employee) {
  let args = {
    ...employee,
    created_at: new Date().getDate(),
  };
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/employees`, args)
      .then((res) => {
        dispatch({
          type: CREATE_EMPLOYEE,
          payload: { employees: res.data.employees },
        });

        console.log(`USER: ${res.data.name} has been created successfully!`);
      })
      .catch((err) => console.log("ERROR! ACTION: createEmployee", err));
  };
}

export function updateStatus(employee_id, updates) {
  if (!_.isEmpty(updates)) {
    return (dispatch) => {
      axios
        .patch(`${BASE_URL}/employees/${employee_id}`, updates)
        .then((res) => {
          dispatch({
            type: UPDATE_EMPLOYEE,
            payload: { employees: res.data.employees },
          });

          console.log(`USER: ${res.data.name} has been created successfully!`);
        })
        .catch((err) => console.log("ERROR! ACTION: createEmployee", err));
    };
  }
}
