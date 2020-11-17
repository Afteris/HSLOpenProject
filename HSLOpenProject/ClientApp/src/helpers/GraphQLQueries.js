import { useQuery, gql } from '@apollo/client';
import React from 'react';

const ALL_HELSINKI_STOPS = gql`
  query GetAllStops {
  stops {
    gtfsId
    name
    lat
    lon
    zoneId
  }
}`;

export function Stops(props) {
        
        const { loading, error, data } = useQuery(ALL_HELSINKI_STOPS);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        props.addStops(data.stops);
  
        return <>      
        </>
       
}
