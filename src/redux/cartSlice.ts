import { createSlice } from '@reduxjs/toolkit';

import type { Event } from '../components/types';

export type CartStore = {
    items: Array<{event: Event, quantity: number}>
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    } as CartStore,
    reducers: {
        addToCart: (state, action) => {
            // Add ticket in action.payload to the cart
            let event = action.payload;

            if (state.items.find((x: {event: Event, quantity: number}) => x.event.title === event.title)) {

                let updatedItems = [...state.items];
                let eventToUpdate = updatedItems.find((x) => x.event.title === event.title);
                if (eventToUpdate) {
                    eventToUpdate.quantity++;
                }
                state.items = updatedItems;
            } else {
                state.items = [...state.items, {event, quantity: 1}];
            }
        },
        incrementCartItem: (state, action) => {
            let event = action.payload;
            // TODO -- Error handling for when the cart item is not found
            let updatedItems = [...state.items];
            let eventToUpdate = updatedItems.find((x) => x.event.title === event.title);
            if (eventToUpdate) {
                eventToUpdate.quantity++;
            }
            state.items = updatedItems;
        },
        decrementCartItem: (state, action) => {
            let event = action.payload;
            // TODO -- Error handling for when the cart item is not found
            let updatedItems = [...state.items];
            let eventToUpdate = updatedItems.find((x) => x.event.title === event.title);
            if (eventToUpdate && eventToUpdate.quantity > 0) {
                eventToUpdate.quantity--;
            }
            state.items = updatedItems;
        },
        updateCart: (state) => {
            let updatedItems = state.items.filter((x) => x.quantity > 0);
            state.items = updatedItems;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart, decrementCartItem, incrementCartItem, updateCart } = cartSlice.actions;
  
  export default cartSlice.reducer;