import React, { Fragment } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { itinaryState, allStopsState } from '../atoms';
import { LeafletMap } from './LeafletMap';
import { Stops } from '../helpers/GraphQLQueries';
import { randomDestination, myLocation } from '../selectors';
import { Itinary } from './Itinary';

export function Traveller() {
    const [, setStops ]= useRecoilState(allStopsState)
    const [trip, setTrip] = useRecoilState(itinaryState);
    const destination = useRecoilValue(randomDestination);
    const location = useRecoilValue(myLocation);
    
    const addStops = (stops) => {
        setStops(stops);
    }
    return (
        <Fragment>
            <Stops addStops={addStops} />
            {destination != null &&
                <p>
                Random trip traveller selected your stop to be: {destination.name}
                </p>
            }     
            <LeafletMap id="leaflet-container" />
            <Itinary />
            
        </Fragment>
    );
}