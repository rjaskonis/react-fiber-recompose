import React, { Component } from 'react';
import Context from 'app/context';

const connect = Component => props => (
    <Context.Consumer>
        { context => (
            <Component {...props} context={context} />
        )}
    </Context.Consumer>
)

export default connect;