import React from 'react';
import { connect } from 'react-redux';
import { getById } from '../selectors/planets';

export const PlanetDetailsPage = ({ planet }) => {
    const {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        population,
    } = planet;

    return (
        <div className="content-container">
            <div><span className="details-item">Name:</span> {name}</div>
            <div><span className="details-item">Rotation period:</span> {rotation_period}</div>
            <div><span className="details-item">Orbital period:</span> {orbital_period}</div>
            <div><span className="details-item">Diameter:</span> {diameter}</div>
            <div><span className="details-item">Climate:</span> {climate}</div>
            <div><span className="details-item">Gravity:</span> {gravity}</div>
            <div><span className="details-item">Terrain:</span> {terrain}</div>
            <div><span className="details-item">Population:</span> {population}</div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        planet: getById(state.planets, props.match.params.id)
    };
};

export default connect(mapStateToProps, undefined)(PlanetDetailsPage);
