import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const jwt = !!useSelector(store => store.auth.logueo.data);
    return (
        <Route {...rest} render={props => (
            jwt ? <Component {...props} /> : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;