import React from "react";
import UserService from "../services/UserService";
import { Table } from 'react-bootstrap';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    "id": 1,
                    "firstName": "Hao",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                },
                {
                    "id": 2,
                    "firstName": " HAO",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                },
                {
                    "id": 3,
                    "firstName": " HAO",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                },
                {
                    "id": 4,
                    "firstName": " HAO",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                },
                {
                    "id": 5,
                    "firstName": " HAO",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                },
                {
                    "id": 6,
                    "firstName": " HAO1",
                    "lastName": "Dep Trai",
                    "email": "haodeptrai@gmail.com"
                }
            ]
        }
    }

    // componentDidMount() {
    //     UserService.getUser().then((response) => {
    //         this.setState({ users: response.data })
    //     });
    // }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td> User Id </td>
                            <td> User First Name </td>
                            <td> User Last Name </td>
                            <td> User Email ID </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default UserComponent