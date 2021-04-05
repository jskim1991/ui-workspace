import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { observer } from "mobx-react";
import { PureComponent } from "react";

@observer
class EmployeeListView extends PureComponent {

    render() {

        const employees = [
            {
                "id": "1",
                "firstName": "J",
                "lastName": "K",
                "email": "email"
            }
        ];

        return (
            <TableContainer component={Paper} >
                <Table m={3}>
                    <TableHead>
                        <TableRow>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align='center'>First Name</TableCell>
                        <TableCell align='center'>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(employees) && employees.length ? 
                            employees.map( (emp) => (
                                <TableRow key={emp.id} hover >
                                <TableCell align='center'>{emp.id}</TableCell>
                                <TableCell align='center'>{emp.firstName}</TableCell>
                                <TableCell align='center'>{emp.lastName}</TableCell>
                                <TableCell align='center'>{emp.email}</TableCell>
                                </TableRow> 
                            )) : <TableRow>Empty</TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default EmployeeListView;