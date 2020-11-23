import BikeMap from '../map/bike_map';
import RideIndex from './ride_index';
import React from 'react';

const RideSearch = ({rides, updateFilter}) => {
    return (
        <div>
            <RideIndex rides={rides}/>
            <div className="bike-map-index">
                <BikeMap rides={rides} updateFilter={updateFilter} zoom={10}/>
            </div>
        </div>
    )
}

export default RideSearch;