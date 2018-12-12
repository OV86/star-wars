import React from 'react';

const ItemsList = ({ header, children }) => {
    const headerComp = children.every(element => element === null) ? null : (
        <div className="list-header">{header}</div>
    );
    return (
        <div>
            {headerComp}
            <div className="list-body">
                {children}
            </div>
        </div>
    );
};


export default ItemsList;

