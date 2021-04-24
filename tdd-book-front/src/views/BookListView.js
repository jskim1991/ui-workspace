import React from 'react';

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const BookListView = (props) => {

    return (
        <TableContainer component={Paper} >
            <Table m={3}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Book ID</TableCell>
                        <TableCell align='center'>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Array.isArray(props.books) && props.books.length ?
                            props.books.map(book => (
                                <TableRow key={book.id}>
                                    <TableCell align='right'>{book.id}</TableCell>
                                    <TableCell align='right'>{book.title}</TableCell>
                                </TableRow>
                            )) : null
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BookListView;