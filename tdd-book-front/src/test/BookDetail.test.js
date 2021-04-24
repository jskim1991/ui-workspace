import {cleanup, render, screen} from '@testing-library/react';
import BookDetailView from "../views/BookDetailView";

describe('', () => {
    it('BookDetail should show title', () => {
        render(<BookDetailView />)
        expect(screen.getByText('Sample title')).toBeInTheDocument()
    });

    it('BookDetail should show id', () => {
        render(<BookDetailView />)
        expect(screen.getByText('12345')).toBeInTheDocument();
    });

    it('BookDetail should show given inputs', () => {
        render(<BookDetailView />)
        expect(screen.getByText('1')).toHaveTextContent('1');
        expect(screen.getByText('TDD Book')).toHaveTextContent('TDD Book')
    })

})