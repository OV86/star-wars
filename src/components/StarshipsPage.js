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
        } = starship;

        return (
            <Link key={id} className="list-item" to={`/starships/${id}`}>
                <div className="list-item__data">
                    <div>{name}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars Starships" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        starships: state.starships
    };
};

export default connect(mapStateToProps)(StarshipsPage);
