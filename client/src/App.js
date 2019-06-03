import React from 'react';
import MainSection from './components/layout/MainSection';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <MainSection />
      </div>
    </Provider>
  );
};

export default App;
