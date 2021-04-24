import MainScreen from "./components/MainScreen";
import BookRepository from "./components/BookRepository";
import {Route, Switch} from "react-router";
import BookListView from "./views/BookListView";
import {BrowserRouter, Link} from "react-router-dom";
import BookDetailView from "./views/BookDetailView";

const bookRepository = BookRepository;

function App() {
    return (
        <div>
            <BrowserRouter>
                {/*<Link to='/'>Home</Link>*/}

                {/*<Link to='/:id'>About</Link>*/}

                <Switch>
                    <Route exact path='/'>
                        <MainScreen bookRepository={bookRepository}/>
                    </Route>
                    <Route path='/:id'>
                        <BookDetailView/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
