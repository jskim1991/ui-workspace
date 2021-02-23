import './App.css';
import Container from "@material-ui/core/Container";
import React, {Component} from "react";
import BoardContainer from "./containers/BoardContainer";
import Box from "@material-ui/core/Box";
import LoginContainer from "./containers/LoginContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import PostContainer from "./containers/PostContainer";

class App extends Component {
    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={LoginContainer} />
                    <Route path='/boards/' component={BoardContainer} />
                    <Route path='/posts/:id' component={PostContainer} />
                </Switch>
            </div>
        );
    }
}

export default App;
