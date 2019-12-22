import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedIn} from "../redux/actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : ""
        };
        this.onChangeLogin = this.onChangeLogin.bind(this);
    }

    render() {
    console.log(this.state.username)
        return (
            <div>
                <h1>Login page</h1>
                <label> Enter login: &nbsp;
                <input type='text' value={this.state.username} onChange={this.onChangeLogin}/>
                <button onClick={() => this.checkUser()}>Submit</button>
                </label>
            </div>
        );

    }

    checkUser() {
        return fetch("http://localhost:3004/users")
            .then(data => data.json())
            .then(json => {
                json.map(user => {
                    if (user.username === this.state.username) {
                        this.props.saveUserToStore(user);
                        this.props.history.push("/list");
                    }
                })
            })
    }

    onChangeLogin(e) {
        this.setState({username: e.target.value});
    }

}

const mapDispatchToProps = dispatch => ({
    saveUserToStore: (user) => dispatch(userLoggedIn(user))
});

export default connect(null, mapDispatchToProps)
(withRouter(Login));

