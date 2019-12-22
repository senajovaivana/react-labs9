import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Login page</h1>
                <label> Enter login: &nbsp;
                <input type='text'/>
                </label>
            </div>
        );

    }

}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)
(withRouter(Login));

