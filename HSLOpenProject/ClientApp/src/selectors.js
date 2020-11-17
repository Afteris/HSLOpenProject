import { selector } from 'recoil';
import { allStopsState, locationState  } from './atoms';

export const randomDestination = selector({
    key: 'randomDestination',
    get: ({ get }) => {
        const items = get(allStopsState);
        const item = items.[Math.floor(Math.random() * items.length)];
       
        if (items.length !== 0) return item;
        else return null;
    }
});
export const stopsCount = selector({
    key: 'stopsCount',
    get: ({ get }) => {
        const items = get(allStopsState);
        return items.length;
    }
});
export const myLocation = selector({
    key: 'myLocation',
    get: ({ get }) => {
        const item = get(locationState);
        if (item.length !== 0) return item;
        else return null;
    }
});