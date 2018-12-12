import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange }) => (
    <div className="input-group__item search">
        <input
            type="text"
            className="text-input search"
            placeholder="Search for a film, planet, vehicle etc..."
            value={searchTerm}
            onChange={onSearchTermChange}
        />
    </div>
);

export default SearchBar;
