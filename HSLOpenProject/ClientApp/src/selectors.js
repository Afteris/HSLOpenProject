import React from 'react';
import { atom, selector } from 'recoil';

const unfinishedItemsState = selector({
    key: 'unfinishedItemsState',
    get: ({ get }) => {
        const items = get(itemsState);

        return items.filter(item => item.done === false);
    }
});