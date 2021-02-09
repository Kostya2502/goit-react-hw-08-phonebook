import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ path, exact, component, restricted, isAuth }) => {
    return isAuth && restricted ? (<Redirect to='/' />)
        : (<Route path={path} exact={exact} component={component} />)
}

export default PublicRoute;