import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    /**
     * Check if the user is logged in an return the component to render
     * @param {props} props 
     */
    const renderComponent = (props) => {
        return isAuthenticated ? (
            <div>
                <Header />
                <NavMenu />
                <Component {...props} />
            </div>
        ) :
            (
                <Redirect to="/" />
            );
    };

    return (
        <Route {...rest} component={renderComponent} />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
