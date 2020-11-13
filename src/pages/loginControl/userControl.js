import React from 'react';

function User() {
    return (
        <h5>user</h5>
    )
}
function Guest() {
    return (
        <h5>guest</h5>
    )
}
function Greeting(props) {
    const flag = props.flag;

    if (flag) {
        return <User />
    }
    else {
        return <Guest />
    }
}
function CommonButton(props) {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}
class UsersControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleUser = this.handleUser.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.state = { flag: false }
    }

    handleUser() {
        this.setState({ flag: true })
    }

    handleGuest() {
        this.setState({ flag: false })
    }

    render() {
        const flag = this.state.flag;
       
        let button;
        if (flag) {
            button = <CommonButton name="Guest" onClick={this.handleGuest} />
        }
        else {
            button = <CommonButton name="user" onClick={this.handleUser} />
         }
        return (
            <div>
                <Greeting flag={flag} />
                {button}
            </div>
        );

    }
}

export default UsersControl;