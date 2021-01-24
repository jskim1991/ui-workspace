import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Books from "./static_data/Books";
import BookDetail from "./components/BookDetail";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books : Books,
      selectedBook : Books[0],
    }

    /* option 1: bind in constructor */
    // this.onSearchTitle = this.onSearchTitle.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
  }

  onSearchTitle(title) {
    // let updateList = Books;
    let updateList = Books.filter(book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });

    if (updateList.length > 0) {
      this.setState({
        books: updateList,
        selectedBook : updateList[0]
      });
    } else {
      this.setState({
        books: updateList,
      })
    }
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook : book,
    });
  }


  render(){
    return(
        <Container>
          {/* option 2: use arrow function */}
          {/*<SearchBar onSearchTitle = { this.onSearchTitle }/>*/}
          <SearchBar onSearchTitle = { () =>  this.onSearchTitle() } />
          <Grid container spacing={2}>
            <Grid item>
              <BookList books = { this.state.books } onSelectedBook = { this.onSelectedBook } />
              {/*option 3: bind when using it*/}
              {/*<BookList books = { this.state.books } onSelectedBook = { this.onSelectedBook.bind(this) } />*/}
            </Grid>
            <Grid item>
              <BookDetail book = { this.state.selectedBook } />
            </Grid>
          </Grid>
        </Container>
    )
  }
}

export default App;
