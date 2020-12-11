import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input } from "@chakra-ui/react";

import { USER_LOGIN } from "../../components/dataObject";
import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import { loginFlagAction } from "./actions";
import ReduxCounterExample from "../../components/counter/counterRedux";

const LoginPage = (props) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [userLogin, setUserLogin] = useState(false);

    const mySubmitHandler = () => {
        if (USER_LOGIN.name === name && USER_LOGIN.email === email) {
            debugger
            setUserLogin(true);
            props.loginFlagAction(props.reducerValue = true);
            // alert('successfully Logged in!!')
        }
        else {
            debugger
            setUserLogin(false);
            props.loginFlagAction(props.reducerValue = false);
            alert('Please enter correct details.');
        }
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const { reducerValue } = props;
    return (
        <SideMenu
            content={
                <div style={{ display: 'flex' }}>
                    <form style={{ flexDirection: 'column', display: 'flex' }}>
                        <h1>Hello {name}</h1>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleName}
                            value={name}
                            required
                            width="50"
                        />
                        <Input
                            type='email'
                            placeholder="Enter your email address, and submit"
                            onChange={handleEmail}
                            value={email}
                            width="50"
                            required
                        />
                        <input
                            type='submit'
                            onClick={mySubmitHandler}
                        />
                        <p>{reducerValue}</p>
                    </form>
                    <div style={{marginLeft:50}}>
                        <ReduxCounterExample />
                    </div>
                </div>
            }
        />
    )
}

const mapStateToProps = state => ({
    reducerValue: state.loginFlagReducer.loginCheck,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loginFlagAction,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
