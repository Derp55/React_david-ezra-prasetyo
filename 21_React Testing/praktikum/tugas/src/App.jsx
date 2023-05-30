import React from 'react';
import store from './component/config/redux/store';
import { Provider } from 'react-redux';
import ReactRouter from './component/config/router/ReactRouter';

function App() {
  return (
    <Provider store={store}>
      <ReactRouter/>
    </Provider>
  );
}

export default App;

