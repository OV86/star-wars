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
        } = planet;

        return (
            <Link key={id} className="list-item" to={`/planets/${id}`}>
                <div className="list-item__data">
                    <div>{name}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars Planets" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        planets: state.planets
    };
};

export default connect(mapStateToProps)(PlanetsPage);
