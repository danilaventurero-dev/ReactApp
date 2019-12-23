import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './componentes/privateRoute/privateRoute';
import store from './store';
import Home from './views/home' ;
import UserList from './views/userList' ;
//import Login from './views/login' ;


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={UserList} />
        <PrivateRoute path="/UserList" exact component={UserList} />
      </Router>
    </Provider>
  );
}

export default App;