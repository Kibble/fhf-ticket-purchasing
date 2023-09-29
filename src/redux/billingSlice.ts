import { createSlice } from '@reduxjs/toolkit';

export type BillingStore = {
    billingAddress: {
        addr1: string,
        addr2: string,
        city: string,
        state: string,
        zip: string,
    },
    card: {
        name: string,
        number: string,
        expiry: string,
        cvv: string,
    },
}

export const billingSlice = createSlice({
    name: 'billing',
    initialState: {
        billingAddress: {
            addr1: '',
            addr2: '',
            city: '',
            state: '',
            zip: '',
        },
        card: {
            name: '',
            number: '',
            expiry: '',
            cvv: '',
        }
    } as BillingStore,
    reducers: {
        setBillingAddr1: (state, action) => {},
        setBillingAddr2: (state, action) => {},
        setBillingCity: (state, action) => {},
        setBillingState: (state, action) => {},
        setBillingZip: (state, action) => {},
        setCardName: (state, action) => {},
        setCardNumber: (state, action) => {},
        setCardExpiry: (state, action) => {},
        setCardCvv: (state, action) => {},
    },
});
  
// Action creators are generated for each case reducer function
export const {
    setBillingAddr1, 
    setBillingAddr2,
    setBillingCity,
    setBillingState,
    setBillingZip,
    setCardName,
    setCardNumber,
    setCardExpiry,
    setCardCvv
} = billingSlice.actions;
  
export default billingSlice.reducer;