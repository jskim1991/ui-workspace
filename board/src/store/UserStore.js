import {makeObservable, action, observable, toJS} from "mobx";

class UserStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _user = {
        'username': '',
        'password': ''
    };

    @observable
    _authenticationHeader = '';

    @observable
    _loggedIn = false;

    get user() {
        console.log(toJS(this._user));
        return this._user;
    }

    get loggedIn() {
        console.log(this._loggedIn);
        return this._loggedIn;
    }

    @action
    setUser(name, value) {
        this._user = {
            ...this._user,
            [name] : value
        }
        console.log(toJS(this._user));
    }

    get authenticationHeader() {
        return this._authenticationHeader;
    }

    @action
    setAuthenticationHeader(header) {
        this._authenticationHeader = header;
        console.log(toJS(this._authenticationHeader));
        this._loggedIn = true;
    }
}

export default new UserStore();