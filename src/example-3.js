import React, { Component } from 'react';
// import { compose } from "recompose";
// import connect from "app/HOC/connect";
// import withState from "app/HOC/withState";
import { default as stateful } from "app/HOC/stateful";

const Test = ({ state, setState, context }) => (
    <div>
        <div>{state.text}</div>
        <div><span>State {state.counter || 0}</span></div>
        <button onClick={e => setState({ counter: (state.counter || 0) + 1 })}>State Add 1</button>
        <button onClick={e => setState({ counter: (state.counter || 0) - 1 })}>State Subtract 1</button>
        <br/><br/>

        <div><span>Context {context.state.counter || 0}</span></div>
        <button onClick={e => context.setState({ counter: (context.state.counter || 0) + 1 })}>context Add 1</button>
        <button onClick={e => context.setState({ counter: (context.state.counter || 0) - 1 })}>context Subtract 1</button>
    </div>
)


// export default connect(withState(Test));
// export default compose(withState, connect)(Test); // same thing as the above line
export default stateful(Test);