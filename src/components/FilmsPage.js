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
            episode_id,
            release_date,
        } = film;

        return (
            <div key={id} className="list-item">
                <div className="list-item__data">
                    <div>{title}</div>
                    <div>{episode_id}</div>
                    <div>{release_date}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList header="All Star Wars Films" >
                    {items}
                </ItemsList>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
};

export default connect(mapStateToProps)(FilmsPage);
