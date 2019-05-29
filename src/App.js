import React from 'react';
import Chart from './components/charts/Chart';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <Chart />
      </div>
    </Provider>
  );
};

export default App;
