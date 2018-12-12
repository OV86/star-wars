/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';
import { getFilms } from '../selectors/films';
import { getPeople } from '../selectors/people';
import { getPlanets } from '../selectors/planets';
import { getSpecies } from '../selectors/species';
import { getStarships } from '../selectors/starships';
import { getVehicles } from '../selectors/vehicles';

function generateFilmResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                title,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/films/${id}`}>
                    <div className="list-item__data">
                        <div>{title}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

function generatePeopleResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                name,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/people/${id}`}>
                    <div className="list-item__data">
                        <div>{name}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

function generatePlanetsResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                name,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/planets/${id}`}>
                    <div className="list-item__data">
                        <div>{name}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

function generateStarshipsResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                name,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/starships/${id}`}>
                    <div className="list-item__data">
                        <div>{name}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

function generateVehicleResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                name,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/vehicles/${id}`}>
                    <div className="list-item__data">
                        <div>{name}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

function generateSpeciesResults(results) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!results) {
        return results.map((result) => {
            const {
                id,
                name,
            } = result;

            return (
                <Link key={id} className="list-item" to={`/species/${id}`}>
                    <div className="list-item__data">
                        <div>{name}</div>
                    </div>
                </Link>
            );
        });
    }
    return null;
}

export const SearchResults = (props) => {
    const {
        films,
        people,
        planets,
        species,
        starships,
        vehicles
    } = props;

    const filmsResults = generateFilmResults(films);
    const peopleResults = generatePeopleResults(people);
    const planetsResults = generatePlanetsResults(planets);
    const speciesResults = generateSpeciesResults(species);
    const starshipsResults = generateStarshipsResults(starships);
    const vehiclesResults = generateVehicleResults(vehicles);

    return (
        <ItemsList header="Search results" >
            {filmsResults}
            {peopleResults}
            {planetsResults}
            {speciesResults}
            {starshipsResults}
            {vehiclesResults}
        </ItemsList>
    );
};

const mapStateToProps = (state, props) => {
    return {
        films: getFilms(state.films, props.searchTerm),
        people: getPeople(state.people, props.searchTerm),
        planets: getPlanets(state.planets, props.searchTerm),
        starships: getStarships(state.starships, props.searchTerm),
        species: getSpecies(state.species, props.searchTerm),
        vehicles: getVehicles(state.vehicles, props.searchTerm),
    };
};

export default connect(mapStateToProps)(SearchResults);
