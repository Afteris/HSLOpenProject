import React, { Fragment, useEffect } from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
import { useRecoilState } from 'recoil';
import { locationState } from '../atoms';


export function LeafletMap() {
    
    const [currentLocation, setCurrentLocation] = useRecoilState(locationState);
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position =>
                    setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude }))
        }
    }, []);

    return (
        <Fragment>
            <MapContainer center={currentLocation} zoom={15} tileSize={512} zoomOffset={-1} scrollWheelZoom={true}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap Default">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="HSL Map">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                            url="https://cdn.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                <Marker position={currentLocation}>
                    <Popup>You are here</Popup>
                </Marker>
                
            </MapContainer>
        </Fragment>
        );

}
