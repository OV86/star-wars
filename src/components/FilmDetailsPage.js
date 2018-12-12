import React from 'react';
import { connect } from 'react-redux';
import { getById } from '../selectors/films';

export const FilmDetailsPage = ({ film }) => {
    const {
        director,
        episode_id,
        opening_crawl,
        producer,
        release_date,
        title,
    } = film;

    return (
        <div className="content-container">
            <div><span className="details-item">Title:</span> {title}</div>
            <div><span className="details-item">Episode:</span> {episode_id}</div>
            <div><span className="details-item">Director:</span> {director}</div>
            <div><span className="details-item">Producer:</span> {producer}</div>
            <div><span className="details-item">Description:</span> {opening_crawl}</div>
            <div><span className="details-item">Release date:</span> {release_date}</div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        film: getById(state.films, props.match.params.id)
    };
};

export default connect(mapStateToProps, undefined)(FilmDetailsPage);
