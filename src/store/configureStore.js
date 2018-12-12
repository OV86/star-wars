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
            films: filmsReducer,
            people: peopleReducer,
            planets: planetsReducer,
            species: speciesReducer,
            starships: starshipsReducer,
            vehicles: vehiclesReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
