import { atom, selector  } from "recoil"

export const itinaryState = atom({
    key: "itinaryState",
    default: {
        origin: '',
        originSearchList: [{address: ''}],
        destination: '',
        destinationSearchList: [{address: ''}]
    },
});
export const unfinishedItinariesState = selector({
    key: 'unfinishedItinariesState',
    get: ({ get }) => {
        const items = get(itinaryState);

        return items.filter(item => item.done === false);
    }
});
const unfinishedItinariesCountState = selector({
    key: 'unfinishedItinariesCountState',
    get: ({ get }) => {
        const items = get(unfinishedItinariesState);

        return items.length;
    }
});