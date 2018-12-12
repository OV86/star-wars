import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FilmsPage from '../components/FilmsPage';
import FilmDetailsPage from '../components/FilmDetailsPage';
import PeoplePage from '../components/PeoplePage';
import PeopleDetailsPage from '../components/PeopleDetailsPage';
import PlanetsPage from '../components/PlanetsPage';
import PlanetDetailsPage from '../components/PlanetDetailsPage';
import SpeciesPage from '../components/SpeciesPage';
import SpeciesDetailsPage from '../components/SpeciesDetailsPage';
import StarshipsPage from '../components/StarshipsPage';
import StarshipDetailsPage from '../components/StarshipDetailsPage';
import VehiclesPage from '../components/VehiclesPage';
import VehicleDetailsPage from '../components/VehicleDetailsPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/films/:id" component={FilmDetailsPage} />
                <PrivateRoute path="/films" component={FilmsPage} />
                <PrivateRoute path="/people/:id" component={PeopleDetailsPage} />
                <PrivateRoute path="/people" component={PeoplePage} />
                <PrivateRoute path="/planets/:id" component={PlanetDetailsPage} />
                <PrivateRoute path="/planets" component={PlanetsPage} />
                <PrivateRoute path="/species/:id" component={SpeciesDetailsPage} />
                <PrivateRoute path="/species" component={SpeciesPage} />
                <PrivateRoute path="/starships/:id" component={StarshipDetailsPage} />
                <PrivateRoute path="/starships" component={StarshipsPage} />
                <PrivateRoute path="/vehicles/:id" component={VehicleDetailsPage} />
                <PrivateRoute path="/vehicles" component={VehiclesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
