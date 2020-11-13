import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timer = setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h2>Hello world!</h2>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}

export default Clock;