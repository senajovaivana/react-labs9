import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchEmployees} from "../redux/actions";

const EmployeeLine = ({ employee }) => (
  <div>
    {employee.name} ({employee.age} yrs old): {employee.company}
  </div>
);

class PageEmployeesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.employeesLoading();
  }

  render() {
    const { error, loading, employees, user } = this.props;
    if (loading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    const style = {
      textAlign: 'right'
    };
    return (
      <div>
        {user && <div style={style}>{user.full_name}</div>}
        <h1>Employees List:</h1>
        {employees &&
          employees.map(employee => (
            <EmployeeLine key={employee._id} employee={employee} />
          ))}
        <Link to="/new">
          {/* eslint-disable-next-line react/button-has-type */}
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
    loading: state.loading,
    error: state.error,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({
  employeesLoading: () => dispatch(fetchEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageEmployeesList);
