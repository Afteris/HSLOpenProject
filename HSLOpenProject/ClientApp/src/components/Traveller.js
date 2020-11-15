import React, { useState, useEffect, Fragment } from 'react';
import { atom, useRecoilValue, useRecoilState } from 'recoil';
import { itinaryState } from '../atoms';
import { fetchData } from '../helpers/DataFetchHelper';


const URL = "https://api.digitransit.fi/geocoding/v1/autocomplete?text=";
const URLSearch = "http://api.digitransit.fi/geocoding/v1/search";

export function Traveller() {
    const itinaryModel = useRecoilValue(itinaryState);
    const [trip, setTrip] = useRecoilState(itinaryState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTrip({ ...trip, [name]: value })
        if (value.length > 4) {

            console.log(value);
            const text = fetchData(value);
            console.log(text);
        }
    }    
    return (
        <Fragment>
            <label htmlFor="origin" id="1">Start point:</label>
            <input
                type="text"
                name="origin"
                value={itinaryModel.origin}
                onChange={handleInputChange}
             />
            <label htmlFor="destination" id="2">End point:</label>
            <input
                type="text"
                name="destination"
                value={itinaryModel.destination}
                onChange={handleInputChange}
            />   
        </Fragment>
    );
}