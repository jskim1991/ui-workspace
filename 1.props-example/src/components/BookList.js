import React, { Component } from "react";

import { List, ListItem, Container } from "@material-ui/core";
import BookListItem from "./BookListItem";

class BookList extends Component {
    render() {
        const { books } = this.props;
        const bookItems = books.map( b => {
            return (
                <ListItem key={b.ISBN}>
                    <BookListItem book = {b} />
                </ListItem>
            )
        })

        return(
            <Container maxWidth='sm'>
                <List>
                    {bookItems}
                </List>
            </Container>
        )
    }
}

export default BookList;