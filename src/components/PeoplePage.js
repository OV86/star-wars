/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from './ItemsList';

export const PeoplePage = ({ people }) => {
    const items = people.map((person) => {
        const {
            id,
            name,
        } = person;

        return (
            <Link key={id} className="list-item" to={`/people/${id}`}>
                <div className="list-item__data">
                    <div>{name}</div>
                </div>
            </Link>
        );
    });

    return (
        <div className="content-container">
            <ItemsList header="All Star Wars People" >
                {items}
            </ItemsList>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        people: state.people
    };
};

export default connect(mapStateToProps)(PeoplePage);
