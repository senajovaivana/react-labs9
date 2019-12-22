import * as constants from "./constants";

export const initialState = {
  employees: [],
  loading: false,
  error: null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      return { ...state, employees: [...state.employees, employee]};
    }
    case constants.FETCH_EMPLOYEES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case constants.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload.employees
      };

    case constants.FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        employees: []
      };

    default:
      return state;
  }
};

export default appReducer;
