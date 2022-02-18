import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import * as serviceWorker from './serviceWorker';



const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
