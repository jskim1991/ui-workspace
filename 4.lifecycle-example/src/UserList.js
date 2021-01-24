import React, { Component } from 'react';
import { Button, List, ListItemText } from '@material-ui/core';
import axios from 'axios';

class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{
                id : '',
                name: '',
            }],
            title : '',

        }
    }

    loadUsers() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users: response.data,
                })
            })
    }

    // 특정 props값으로 state를 동기화하고 싶을때 사용
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.title !== prevState.title) {
            return { title : nextProps.title }
        }
        return null;
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {

        const userList = this.state.users.map(user => {
            return <ListItemText primary={user.name} key={user.id} />
        });

        return(
            <div>
                <h1>{this.state.title}</h1>
                {/*<Button*/}
                {/*    onClick = { () => this.loadUsers() }*/}
                {/*    variant='contained' color='primary'> Load */}
                {/*</Button>*/}
                <List>
                    {userList}
                </List>
            </div>
        )
    }
}

export default UserList;
