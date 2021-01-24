import { observable, action, makeObservable } from 'mobx';

class CounterStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _count = 0;

    get getCount() {
        return this._count;
    }

    @action
    increment() {
        this._count++;
        console.log(this._count);
    }

    @action
    decrement() {
        this._count--;
        console.log(this._count);
    }
}

export default new CounterStore();