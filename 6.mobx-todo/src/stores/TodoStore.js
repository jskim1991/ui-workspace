import { observable, action, computed, makeObservable, toJS} from "mobx";

class TodoStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _todo = {}; // id, title, date


    @observable
    _todos = [];

    @observable
    _searchText = '';

    get todo() {
        return this._todo;
    }

    @computed
    get todos() {
        // return this._todos;
        // return this._todos ? this._todos.slice() : [];
        return toJS(this._todos); // to get java script object because mobX automatically wraps @observable objects
    }

    get searchText() {
        return this._searchText;
    }

    @action
    setTodoProps(name, value) {

        if (name === 'date' && value) {
            value = value.valueOf();
        }

        this._todo = {
            ...this._todo,
            [name] : value
        }
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
    }

    @action
    selectedTodo(todo) {
        this._todo = todo;
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find( (t) => t.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {}; // 초기화
    }

    @action
    removeTodo() {
        let index = this._todos.findIndex( t => t.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }

        this._todo = {};
    }

    @action
    setSearchText(searchText) {
        this._searchText = searchText;
    }

    @action
    toggleCompleteStatus(checked) {
        console.log("input " + checked);
        let foundTodo = this._todos.find(t => t.id === this._todo.id);
        foundTodo.complete = checked;

        // this._todo.complete = checked;
        console.log("after " +  foundTodo.complete);
    }
}

export default new TodoStore();
