/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const SpeciesPage = ({ species }) => {
    const items = species.map((speciesItem) => {
        const {
            id,
            name,
            classification,
            average_lifespan,
        } = speciesItem;

        return (
            <div key={id} className="list-item">
                <div className="list-item__data">
                    <div>{name}</div>
                    <div>{classification}</div>
                    <div>{average_lifespan}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList header="All Star Wars Species" >
                    {items}
                </ItemsList>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        species: state.species
    };
};

export default connect(mapStateToProps)(SpeciesPage);
