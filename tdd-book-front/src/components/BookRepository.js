class BookRepository {

    getBooks() {
        return [
            {
                id: '1',
                title: 'Thinking Java'
            },
            {
                id: '2',
                title: 'TDD by example'
            }
        ];
    }
}

export default new BookRepository();