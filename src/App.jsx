import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './componentes/privateRoute/privateRoute';
import store from './store';
import Home from './views/home' ;
import login from './views/login' ;
import registro from './views/Registro' ;
import userList from './views/userList' ;
import articulos from './views/articulos' ;
import Menu from './componentes/nav' ;
//import Login from './views/login' ;


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={login} />
        <PrivateRoute path="/registro" exact component={registro} />
        <Route path="/articulo" exact component={articulos} />
        <PrivateRoute path="/userList" exact component={userList} />
      </Router>
    </Provider>
  );
}

export default App;