import {action, makeObservable, observable, toJS} from "mobx";

class BoardStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _boards = [];

    @observable
    _board = {};

    get board() {
        return this._board;
    }

    get boards() {
        return this._boards;
    }

    @action
    setBoards(boards) {
        this._boards = boards;
        console.log(toJS(this._boards));
    }

    @action
    setBoard(board) {
        this._board = board;
    }

}

export default new BoardStore();