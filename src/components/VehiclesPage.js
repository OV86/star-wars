/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const VehiclesPage = ({ vehicles }) => {
    const items = vehicles.map((vehicle) => {
        const {
            id,
            name,
        } = vehicle;

        return (
            <Link key={id} className="list-item" to={`/vehicles/${id}`}>
                <div className="list-item__data">
                    <div>{name}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars Vehicles" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicles
    };
};

export default connect(mapStateToProps)(VehiclesPage);
