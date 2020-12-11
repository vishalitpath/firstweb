import React, { Component } from 'react';
import { Button, Text } from "@chakra-ui/react";
import { connect } from 'react-redux';

class ReduxCounterExample extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.increaseCounter()}>increment</Button>
                <Text>{this.props.count}</Text>
                <Button onClick={() => this.props.decreaseCounter()}>decrement</Button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        count: state.counterReducer.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterExample);