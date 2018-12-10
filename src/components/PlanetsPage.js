/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const PlanetsPage = ({ planets }) => {
    const items = planets.map((planet) => {
        const {
            id,
            name,
            population,
            climate,
        } = planet;

        return (
            <div key={id} className="list-item">
                <div className="list-item__data">
                    <div>{name}</div>
                    <div>{population}</div>
                    <div>{climate}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList header="All Star Wars Planets" >
                    {items}
                </ItemsList>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        planets: state.planets
    };
};

export default connect(mapStateToProps)(PlanetsPage);
