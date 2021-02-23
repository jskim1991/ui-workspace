import React, { Component } from 'react';
import BoardListView from "../views/BoardListView";
import axios from 'axios';
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";

@inject('boardStore')
@autobind
@observer
class BoardContainer extends Component {

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards() {

        // const { authenticationHeader } = this.props.userStore;

        axios.get('/api/board/all', {
            // withCredentials: true,
            // auth: {
            //     username: 'john',
            //     password: 'root'
            // }
            // headers: {
            //     'Authorization': authenticationHeader
            // }
        }
            )
            .then(response => this.onSetBoards(response.data))
            .catch(error => console.log(error))
    }

    onSetBoards(boards) {
        this.props.boardStore.setBoards(boards);
    }

    onSelectBoard(id) {
        this.props.history.push('/posts/' +  id);
    }

    render() {
        const { boards } = this.props.boardStore;

        return (
            <BoardListView
                boards={boards}
                onSelectBoard={this.onSelectBoard}
            />
        )
    }
}

export default BoardContainer;