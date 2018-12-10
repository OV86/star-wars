import React from 'react';

const ItemsList = ({ header, children }) => (
    <div className="content-container">
        <div className="list-header">{header}</div>
        <div className="list-body">
            {children}
        </div>
    </div>
);

export default ItemsList;
