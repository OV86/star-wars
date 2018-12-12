import React from 'react';
import { connect } from 'react-redux';
import { getById } from '../selectors/people';

export const PeopleDetailsPage = ({ person }) => {
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
    } = person;

    return (
        <div className="content-container">
            <div><span className="details-item">Name:</span> {name}</div>
            <div><span className="details-item">Height:</span> {height}</div>
            <div><span className="details-item">Mass:</span> {mass}</div>
            <div><span className="details-item">Hair color:</span> {hair_color}</div>
            <div><span className="details-item">Skin color:</span> {skin_color}</div>
            <div><span className="details-item">Eye color:</span> {eye_color}</div>
            <div><span className="details-item">Birth year:</span> {birth_year}</div>
            <div><span className="details-item">Gender:</span> {gender}</div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        person: getById(state.people, props.match.params.id)
    };
};

export default connect(mapStateToProps, undefined)(PeopleDetailsPage);
