import React, { Component } from 'react';
import { compose, withState, withHandlers } from "recompose";

const Test = ({ state, setState, increment }) => (
    <div>
        <div>{state.text}</div>
        <div><span>{state.counter || 0}</span></div>
        <button onClick={increment}>Add 1</button>
        <button onClick={e => setState({ counter: (state.counter || 0) + 2 })}>Add 2</button>
    </div>
)

export default compose(
    withState('state', 'setInnerState', { text:'Hello' }),
    withHandlers({
        setState: ({ state, setInnerState }) => newState => setInnerState({ ...state, ...newState }),
        increment: ({ state, setInnerState }) => e => setInnerState({ ...state, counter: (state.counter || 0) + 1 })
    })
)(Test);