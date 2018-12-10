/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const StarshipsPage = ({ starships }) => {
    const items = starships.map((starship) => {
        const {
            id,
            name,
            cost_in_credits,
            crew,
        } = starship;

        return (
            <div key={id} className="list-item">
                <div className="list-item__data">
                    <div>{name}</div>
                    <div>{cost_in_credits}</div>
                    <div>{crew}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList header="All Star Wars Starships" >
                    {items}
                </ItemsList>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        starships: state.starships
    };
};

export default connect(mapStateToProps)(StarshipsPage);
