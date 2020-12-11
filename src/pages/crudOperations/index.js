import React, { Component } from 'react';
import Users from '../users';
import AddUser from '../addUsers';

class CrudOperations extends Component{

    // Default dummy data
    state = {
        users:[
          {name:"Travis Jackson", age:18, isEditing:false},
          {name:"Linda MoorHouse", age:22, isEditing:false},
          {name:"Jeffrey Delgado", age:21, isEditing:false}
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, age) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].age = age;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div>
                <h1>CRUD with React CLI</h1>
                <Users allUsers={this.state.users}
                 updateUser={this.updateUser} pressEditBtn={this.pressEditBtn} pressDelete={this.pressDelete}/>
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default CrudOperations;