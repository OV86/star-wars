import React from 'react';
import { connect } from 'react-redux';
import { getById } from '../selectors/species';

export const SpeciesDetailsPage = ({ species }) => {
    const {
        name,
        classification,
        designation,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors,
        average_lifespan,
        language,
    } = species;

    return (
        <div className="content-container">
            <div><span className="details-item">Name:</span> {name}</div>
            <div><span className="details-item">Classification:</span> {classification}</div>
            <div><span className="details-item">Designation:</span> {designation}</div>
            <div><span className="details-item">Average height:</span> {average_height}</div>
            <div><span className="details-item">Skin colors:</span> {skin_colors}</div>
            <div><span className="details-item">Hair colors:</span> {hair_colors}</div>
            <div><span className="details-item">Eye colors:</span> {eye_colors}</div>
            <div><span className="details-item">Average lifespan:</span> {average_lifespan}</div>
            <div><span className="details-item">Language:</span> {language}</div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        species: getById(state.species, props.match.params.id)
    };
};

export default connect(mapStateToProps, undefined)(SpeciesDetailsPage);
