import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const FilmsPage = ({ films }) => {
    const {
        title,
        episode_id,
        release_date,
    } = films;

    const items = films.map((film) => {
        return (
            <div>
                <div>{title}</div>
                <div>{episode_id}</div>
                <div>{release_date}</div>
            </div>
        );
    });

    return (
        <div className="page-header">
            <div className="content-container">
                <ItemsList>
                    {allFilms}
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
