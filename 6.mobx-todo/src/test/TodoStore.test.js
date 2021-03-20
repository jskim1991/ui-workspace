import TodoStore from "../stores/TodoStore";

describe('TodoStore test', () => {

    let todoStore;
    let newTodo;

    beforeEach(() => {
        todoStore = TodoStore;
        newTodo = ({
            "id": 1,
            "title": "new todo",
            "date": new Date(),
            "complete": false
        });
    });

    afterEach(() => {
        todoStore._todos = [];
        todoStore._todo = {};
    });

    test('addTodo test', () => {
        todoStore.addTodo(newTodo);
        const { todos } = todoStore;
        expect(todos.length).toBe(1);
        expect(todos[0].title).toContain("new todo");
    });

    test('updateTodo test', () => {
       todoStore.addTodo(newTodo);

       let updatedTodo = newTodo;
       updatedTodo.title = "updated todo";

       todoStore._todo = updatedTodo;
       todoStore.updateTodo();
       const { todos } = todoStore;
       expect(todos.length).toBe(1);
       expect(todos[0].title).toContain("updated todo");
    });

    test('removeTodo test', () => {
        todoStore.addTodo(newTodo);
        todoStore._todo = newTodo;
        todoStore.removeTodo();
        const { todos } = todoStore;
        expect(todos.length).toBe(0);
    })

    test('toggleCompleteStatus test', () => {
        todoStore.addTodo(newTodo);
        todoStore._todo = newTodo;
        todoStore.toggleCompleteStatus(true);
        expect(todoStore._todos[0].complete).toBe(true);
        todoStore.toggleCompleteStatus(false);
        expect(todoStore._todos[0].complete).toBe(false);
    });

})