import React from 'react';
import { connect } from 'react-redux';
import { getById } from '../selectors/starships';

export const StarshipDetailsPage = ({ starship }) => {
    const {
        name,
        model,
        manufacturer,
        cost_in_credits,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
    } = starship;

    return (
        <div className="content-container">
            <div><span className="details-item">Name:</span> {name}</div>
            <div><span className="details-item">Model:</span> {model}</div>
            <div><span className="details-item">Manufacturer:</span> {manufacturer}</div>
            <div><span className="details-item">Cost in credits:</span> {cost_in_credits}</div>
            <div><span className="details-item">Max atmosfering speed:</span> {max_atmosphering_speed}</div>
            <div><span className="details-item">Crew:</span> {crew}</div>
            <div><span className="details-item">Passengers:</span> {passengers}</div>
            <div><span className="details-item">Cargo capacity:</span> {cargo_capacity}</div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        starship: getById(state.starships, props.match.params.id)
    };
};

export default connect(mapStateToProps, undefined)(StarshipDetailsPage);
