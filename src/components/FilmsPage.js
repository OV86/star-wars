/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const FilmsPage = ({ films }) => {
    const items = films.map((film) => {
        const {
            id,
            title,
        } = film;

        return (
            <Link key={id} className="list-item" to={`/films/${id}`}>
                <div className="list-item__data">
                    <div>{title}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars Films" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
};

export default connect(mapStateToProps)(FilmsPage);
