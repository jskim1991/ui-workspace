// import {cleanup, render, screen, waitForElement} from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import {MemoryRouter, Route, Router} from "react-router";
// import App from "../App";
// import userEvent from '@testing-library/user-event'
// import BookStubRepository from "./testdoubles/BookStubRepository";
// import BookDetailView from "../views/BookDetailView";
//
// describe('React Router Unit Test', () => {
//     test('MainScreen should appear by default', () => {
//         const history = createMemoryHistory();
//         render(
//             <Router history={history}>
//                 <App />
//             </Router>
//         )
//         expect(screen.getByText(/Book/)).toBeInTheDocument();
//         expect(screen.getByText(/Title/)).toBeInTheDocument();
//     });
//
//
//     const renderComponent = ({bookId}) => {
//         render(
//             <MemoryRouter initialEntries={[`/${bookId}`]}>
//                 {/*<Route path="/:bookId">*/}
//                     <App />
//                 {/*</Route>*/}
//             </MemoryRouter>
//         )
//     }
//
//     test('/{id} should render BookDetail', async () => {
//
//         renderComponent({ bookId: 1 });
//
//         await(() => screen.getByText(/user #5/i));
//
//         // const leftClick = { button: 0 }
//         // userEvent.click(screen.getByText(/about/i), leftClick)
//
//         // check that the content changed to the new page
//         expect(screen.getByTestId('book-detail-view')).toBeInTheDocument();
//     });
//
//     test('landing on a bad page', () => {
//
//     });
// })