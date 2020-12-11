import React, { Component } from 'react';

class CounterApp extends Component {
   
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
                <span>count : {this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }


}

export default CounterApp;