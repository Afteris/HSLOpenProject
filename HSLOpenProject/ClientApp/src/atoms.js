import { atom } from "recoil"

export const itinaryState = atom({
    key: "itinaryState",
    default: {
        origin: '',
        mylat: '',
        mylng: '',
        originSearchList: [{address: ''}],
        destination: '',
        destinationSearchList: [{address: ''}]
    },
});
export const allStopsState = atom({
    key: "allStopsState",
    default: [],
});
export const itinerariesState = atom({
    key: "itinerariesState",
    default: [],
});
export const locationState = atom({
    key: "locationState",
    default: {
        lat: 60.192059,
        lng: 24.945831,
        destlat: 0,
        destlng: 0
    },
});
