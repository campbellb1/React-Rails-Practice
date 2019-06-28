import React from 'react';
const List = ({plant}) =>
    <div className="single-list" key={plant.scientific_name}>
        <h4>{plant.scientific_name}</h4>
        <hr/>
    </div>
export default List;