import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppProvider from 'app/provider';
import App from './app';

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const hotRenderApp = Component => render(
    <AppContainer>
        <AppProvider>
            <Component />
        </AppProvider>
    </AppContainer>, root
)

hotRenderApp(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        const updatedAppModule = require('./app').default;        
        hotRenderApp(updatedAppModule)
    })
}