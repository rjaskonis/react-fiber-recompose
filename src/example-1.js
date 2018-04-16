import React, { Component } from 'react';
import { withState } from "recompose";

const Test = ({ counter, setCounter }) => (
    <div>
        <div><span>{counter}</span></div>
        <button onClick={e => setCounter(counter => counter + 1)}>Add 1</button>
    </div>
)

export default withState('counter', 'setCounter', 0)(Test);