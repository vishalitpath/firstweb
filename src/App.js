import React from 'react';
import { Provider } from 'react-redux';

import Routes from "./routes/routes";
import store from "./store";
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    </div>
  );
}

export default App;

