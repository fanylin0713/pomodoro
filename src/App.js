import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomePage from './components/HomePage';
import reducers from './redux/reducer';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
