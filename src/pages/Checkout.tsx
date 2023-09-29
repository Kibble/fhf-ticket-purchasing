import React from 'react';
import { Grid, GridCell } from "@react-md/utils";
import { Typography } from "@react-md/typography";

import Delivery from '../components/Delivery';
import Payment from '../components/Payment';
import Total from '../components/Total';

import type { Delivery as DeliveryType, Item } from '../components/types';

const Checkout = () => {
    const items: Array<Item> = [
        {
            name: 'Resale Tickets',
            price: 229,
            quantity: 2,
        }
    ];

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
            <Total items={items} delivery={delivery} />
        </GridCell>
    </Grid>
}

export default Checkout;