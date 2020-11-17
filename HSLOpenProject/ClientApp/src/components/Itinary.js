import React from 'react';
import { randomDestination, myLocation } from '../selectors';
import { fetchItinaries } from '../helpers/DataFetchHelper';
import { useRecoilValue, useRecoilState } from 'recoil';
import { itinerariesState } from '../atoms';



const TripPart = (props) => {
    
    return (props.legs.map(({ distance, duration, mode }) => (
        <div>
            {distance.toFixed(0)} meters of travel in {(duration / 60).toFixed(0)} minutes by {mode} 
        </div>)))
}

export function Itinary() {

    const [itineraries, setItineraries] = useRecoilState(itinerariesState);
    const destination = useRecoilValue(randomDestination);
    const location = useRecoilValue(myLocation);
    
    function handleRandomTrip(destination, location) {

        fetchItinaries(location, destination).then(items => {
            
            setItineraries(items.data.plan.itineraries)
        });          
    }
    
    return (<>
            <button onClick={() => handleRandomTrip(destination, location)}>Plan trip</button>
            {itineraries.length !== 0 &&
            <TripPart legs={itineraries[0].legs} />}
            </>  
            );
}