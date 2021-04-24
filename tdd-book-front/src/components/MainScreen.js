import React, {useEffect, useState} from 'react';
import BookListView from '../views/BookListView';

const MainScreen = (props) => {

    const [books, setBooks] = useState([]);

    function getBooksFromRepository() {
        const books = props.bookRepository.getBooks();
        setBooks(books);
        console.log(books);
    }

    useEffect(() => {
        getBooksFromRepository()
    }, []);

    return (
        <div>
            <BookListView books={books} />
        </div>
    )
};

export default MainScreen;