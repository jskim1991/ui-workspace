import React, {Component} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import {observer} from "mobx-react";

@observer
class BoardListView extends Component {

    render() {
        const { boards, onSelectBoard } = this.props;

        return (
            <TableContainer component={Paper} >
                <Table m={3}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Id</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(boards) && boards.length ?
                                boards.map( b => (
                                    <TableRow key={b.id} hover onClick={() => onSelectBoard(b.id)}>
                                        <TableCell>{b.id}</TableCell>
                                        <TableCell>{b.name}</TableCell>
                                        <TableCell>{b.description}</TableCell>
                                    </TableRow>
                                )) : <TableRow>Empty</TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default BoardListView;