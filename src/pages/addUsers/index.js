import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        name:null,
        age:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();
    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div style={{display:'flex',flexDirection:'row'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="age" autoComplete="off" type="number" required placeholder="Enter your age" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;