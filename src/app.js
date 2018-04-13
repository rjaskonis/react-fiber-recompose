import React, { Component } from 'react';
import connect from "app/HOC/connect";

@connect
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.props.context.setState({ message:" and be awesome!" })
        }, 2000);
    }
    

    render() {
        return (
            <div style={{ textAlign:'center', padding:'26px' }}>
                <span>Edit src/app.js {this.props.context.state.message} =})</span> 
                <br/>
                <span>Counter: { this.props.context.state.counter } </span>
                <button onClick={e => this.props.context.setState({ counter: (this.props.context.state.counter || 0) + 1 })}>Increment</button>
            </div>
        );
    }
}