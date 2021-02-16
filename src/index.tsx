import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleProvider } from './theme/theme';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <StyleProvider>
        <App />
      </StyleProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
