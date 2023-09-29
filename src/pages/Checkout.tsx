import React from 'react';
import { Grid, GridCell } from "@react-md/utils";
import { Typography } from "@react-md/typography";
import { useSelector } from 'react-redux';

import Delivery from '../components/Delivery';
import Payment from '../components/Payment';
import Total from '../components/Total';

import type { Delivery as DeliveryType } from '../components/types';
import type { CartStore } from '../redux/cartSlice';

const Checkout = () => {
    const cartItems = useSelector((state: {cart: CartStore}) => state.cart.items);
    const delivery: DeliveryType = {
        name: 'Mobile Entry',
        price: 0,
    }

    return <Grid>
        <GridCell colSpan={12}>
            <Typography type="headline-3">Checkout</Typography>
        </GridCell>
        <GridCell colSpan={8}>
            <Delivery />
            <Payment />
        </GridCell>
        <GridCell colSpan={4}>
            <Total items={cartItems} delivery={delivery} />
        </GridCell>
    </Grid>;
}

export default Checkout;