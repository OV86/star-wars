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
            manufacturer,
            passengers,
        } = vehicle;

        return (
            <div key={id} className="list-item">
                <div className="list-item__data">
                    <div>{name}</div>
                    <div>{manufacturer}</div>
                    <div>{passengers}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList header="All Star Wars Vehicles" >
                    {items}
                </ItemsList>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicles
    };
};

export default connect(mapStateToProps)(VehiclesPage);
