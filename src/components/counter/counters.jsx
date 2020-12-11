import React, { Component } from 'react';

import CounterApp from "./";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }
    handleDelete = counterId => {
        console.log("delete", counterId);
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    }
    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
        console.log("c", counters);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                <button style={{ width: 50 }} onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <CounterApp
                        key={counter.id}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />))}
            </div>
        );
    }
}

export default Counters;