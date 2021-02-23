import React, {Component} from "react";
import LoginFormView from "../views/LoginFormView";
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";
import axios from "axios";
import {toJS} from "mobx";

@inject('userStore')
@autobind
@observer
class LoginContainer extends Component {

    onSetUser(name, value) {
        this.props.userStore.setUser(name, value);
    }

    onLogin(user) {

        axios.get('/api/user', {
            auth: {
                username: user.username,
                password: user.password
            }
        })
            .then(response => {
                this.props.userStore.setAuthenticationHeader(response.data);
                this.props.history.push('/boards');
            })
            .catch(error => {
                console.log(error);
            })

    }

    getUser() {
        const { user } = this.props.userStore;
        this.onLogin(user);
    }

    render() {
        return(
            <LoginFormView
                onSetUser = { this.onSetUser }
                getUser = { this.getUser }
            />
        )
    }
}

export default LoginContainer;