import React, { Component } from 'react';
import { Button, Box, Stack } from "@chakra-ui/react";
class Users extends Component {

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.age.value);
    }

    render() {

        const { allUsers, pressEditBtn, pressDelete } = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (

                <tr key={index}>
                    <td><input type="text" ref={(val) => { this.name = val }} required defaultValue={user.name} /></td>
                    <td><input type="number" ref={(val) => { this.age = val }} required defaultValue={user.age} /></td>
                    <td>
                        <input type="button" value="Update" onClick={this.handleUpdate} ref={() => { this.indexNum = index }} className="btn green" />
                    </td>
                </tr>

            ) : (
                    <tr key={index}>
                        <td><Box>{user.name}</Box></td>
                        <td><Box>{user.age}</Box></td>
                        <td><Stack direction="row" spacing="5">
                            <Button colorScheme="blue" size="sm" onClick={() => pressEditBtn(index)}>Edit</Button>  |
                        <Button colorScheme="red" size="sm" onClick={() => pressDelete(index)}>Delete</Button>
                        </Stack>
                        </td>
                    </tr>
                );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;