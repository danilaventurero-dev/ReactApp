import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './componentes/privateRoute/privateRoute';
import store from './store';
import Home from './views/home' ;
import registro from './views/registro' ;
import userList from './views/userList' ;
import articulos from './views/articulos' ;
//import Login from './views/login' ;


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/registro" exact component={registro} />
        <Route path="/articulo" exact component={articulos} />
        <PrivateRoute path="/userList" exact component={userList} />
      </Router>
    </Provider>
  );
}

export default App;