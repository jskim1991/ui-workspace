import {cleanup, render} from '@testing-library/react';
import MainScreen from "../components/MainScreen";
import BookStubRepository from "./testdoubles/BookStubRepository";

describe('MainScreen Unit Test', () => {

    let bookStubRepository;

    beforeEach(() => {
        bookStubRepository = new BookStubRepository();
    })

    afterEach(cleanup);

    test('shows a book title', () => {
        bookStubRepository.setGetAllBooks_return_value([
            {
                title: 'Book Title1'
            }
        ]);
        const {getByText} = render(<MainScreen bookRepository={bookStubRepository}/>);
        expect(getByText('Book Title1')).toBeInTheDocument();
    });

    test('shows a book id', () => {
        bookStubRepository.setGetAllBooks_return_value([{id: 'special id 1'}]);
        const {getByText} = render(<MainScreen bookRepository={bookStubRepository} />);
        expect(getByText('special id 1')).toBeInTheDocument();
    });

    test('shows nothing when empty', () => {
        const {queryAllByText} = render(<MainScreen bookRepository={bookStubRepository}/>);
        expect(queryAllByText('Book Title1').length).toBe(0);
    });

    test('shows multiple books dynamically', () => {
        bookStubRepository.setGetAllBooks_return_value([
            {
                title: 'TDD values'
            },
            {
                title: 'XP values'
            }
        ]);
        const {getAllByText} = render(<MainScreen bookRepository={bookStubRepository}/>);
        expect(getAllByText(/values/).length).toBe(2);
    });
})
