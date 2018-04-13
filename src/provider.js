import React, { Component } from 'react';
import Context from 'app/context';

export default class Provider extends Component {
    constructor (props) {
        super(props);
        this.state = {  }
        this.dispatch = {
            http: async (event, responseSet) => {
                const httpResponseMessageDisplayTime = 2000;
                try {
                    const { status, statusText, data } = await event;                    

                    this.setState({ httpResponseStatusCode: status, httpResponseShowMessage:!!responseSet[status], httpResponseMessage: responseSet[status] }, () => setTimeout(() => this.setState({ httpResponseShowMessage: false }), httpResponseMessageDisplayTime));
                    
                    return { status, statusText, data };
                }
                catch (error) {   
                    if(!error.response) { return error; }

                    const  { response: { status, statusText, data }, message } = error;

                    this.setState({ 
                        httpResponseStatusCode: status, 
                        httpResponseShowMessage: true,
                        httpResponseMessage: responseSet[status] || (status === 403 ? 'Sem permissão' : 'Houve algum erro. Contate o administrador') }, () => setTimeout(() => this.setState({ httpResponseShowMessage: false }), httpResponseMessageDisplayTime));
                    return { status, statusText, data };
                }
            }
        }
    }    

    render () {
        return (
            <Context.Provider value={{
                setState: state => this.setState(state),
                state: this.state,
                dispatch:  this.dispatch
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }          
}