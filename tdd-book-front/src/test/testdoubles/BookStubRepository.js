

class BookStubRepository {

    constructor() {
        this.getAllBooks_return_value = [];
    }

    setGetAllBooks_return_value(books) {
        this.getAllBooks_return_value = books;
    }

    getBooks() {
        return this.getAllBooks_return_value;
    }
}

export default BookStubRepository;