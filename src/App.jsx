import React from 'react';
//import './App.css';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store='store'>
      <Home />
    </Provider>
  );
}

export default App;
