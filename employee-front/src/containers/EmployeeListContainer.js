import { inject, observer } from "mobx-react";
import { Component } from "react";
import EmployeeListView from "../views/EmployeeListView";

@inject('employeeStore')
@observer
class EmployeeListContainer extends Component {

    render() {
        return (
            <EmployeeListView />
        )
    }
}

export default EmployeeListContainer;