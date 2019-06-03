import React from 'react';

// imported components
import MainSection from './components/layout/MainSection';
import CustomNav from './components/layout/CustomNav';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <CustomNav />
      <MainSection />
    </Provider>
  );
};

export default App;
