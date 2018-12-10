import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FilmsPage from '../components/FilmsPage';
import PeoplePage from '../components/PeoplePage';
import PlanetsPage from '../components/PlanetsPage';
import SpeciesPage from '../components/SpeciesPage';
import StarshipsPage from '../components/StarshipsPage';
import VehiclesPage from '../components/VehiclesPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/films" component={FilmsPage} />
                <PrivateRoute path="/people" component={PeoplePage} />
                <PrivateRoute path="/planets" component={PlanetsPage} />
                <PrivateRoute path="/species" component={SpeciesPage} />
                <PrivateRoute path="/starships" component={StarshipsPage} />
                <PrivateRoute path="/vehicles" component={VehiclesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
