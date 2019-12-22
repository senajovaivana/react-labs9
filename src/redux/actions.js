import * as constants from "./constants";

export const employeeAdded = employee => {
  return {
    type: constants.EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
};

function fetchData() {
  return fetch("http://localhost:3004/employees")
      .then(data => data.json())
}

export function fetchEmployees() {
  return dispatch => {
    dispatch(fetchEmployeesBegin());
    return fetchData()
        .then(json => {
          dispatch(fetchEmployeesSuccess(json));
          return json;
        })
        .catch(error =>
            dispatch(fetchEmployeesFailure(error))
        );
  };
}

export const fetchEmployeesBegin = () => ({
  type: constants.FETCH_EMPLOYEES_BEGIN
});

export const fetchEmployeesSuccess = employees => ({
  type: constants.FETCH_EMPLOYEES_SUCCESS,
  payload: { employees }
});

export const fetchEmployeesFailure = error => ({
  type: constants.FETCH_EMPLOYEES_FAILURE,
  payload: { error }
});