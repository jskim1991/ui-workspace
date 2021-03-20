import {observable} from "mobx";

describe('Todo test', () => {

    let store;

    beforeEach(() => {
        store = observable({
            _todos: [],
            _todo: {}
        });
    })

    test('sample', () => {

    });
})