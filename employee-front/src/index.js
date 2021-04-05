import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import employeeStore from './stores/EmployeeStore';

ReactDOM.render(
  <Provider employeeStore = { employeeStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
