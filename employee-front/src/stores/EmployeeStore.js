import { action, computed, makeObservable, observable, toJS } from "mobx";

class EmployeeStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _employee = {};

    @observable
    _employees = [];

    get employee() {
        return this._employee;
    }

    @computed
    get employees() {
        return toJS(this.employees);
    }

    @action
    setEmployeeProps(name, value) {
        this._employee = {
            ...this.employee,
            [name]: value
        }
    }

    @action
    addEmployee(employee) {
        this._employees.push(employee);
    }

    @action
    selectedEmployee(employee) {
        this._employee = employee;
    }

    @action
    updateEmployee() {
        let employee = this._employees.find(emp => emp.id === this._employee.id);
        employee.firstName = this._employee.firstName;
        employee.lastName = this._employee.lastName;
        employee.email = this._employee.email;

        this._employee = {};
    }

    @action
    removeEmployee() {
        let index = this._employees.findIndex(emp => emp.id === this._employee.id);
        if (index > -1) {
            this._employees.splice(index, 1);
        }
        this._employee = {};
    }
}

export default new EmployeeStore();