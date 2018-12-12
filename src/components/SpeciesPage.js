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
        } = speciesItem;

        return (
            <Link key={id} className="list-item" to={`/species/${id}`}>
                <div className="list-item__data">
                    <div>{name}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars Species" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        species: state.species
    };
};

export default connect(mapStateToProps)(SpeciesPage);
