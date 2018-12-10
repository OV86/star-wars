import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filmsReducer from '../reducers/films';
import peopleReducer from '../reducers/people';
import planetsReducer from '../reducers/planets';
import speciesReducer from '../reducers/species';
import starshipsReducer from '../reducers/starships';
import vehiclesReducer from '../reducers/vehicles';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            people: peopleReducer,
            films: filmsReducer,
            starships: starshipsReducer,
            vehicles: vehiclesReducer,
            species: speciesReducer,
            planets: planetsReducer,

        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
