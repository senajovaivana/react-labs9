import { EMPLOYEES_LOADED, EMPLOYEE_ADDED } from "./constants";

// eslint-disable-next-line import/prefer-default-export
export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeeAdded = employee => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
};
