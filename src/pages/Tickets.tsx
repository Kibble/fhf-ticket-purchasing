import React, { useMemo } from 'react';
import { Button } from "@react-md/button";
import { Grid, GridCell } from '@react-md/utils';
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
} from "@react-md/card";
import { Typography } from "@react-md/typography";
// @ts-ignore
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import { events } from '../data/events';
import CartContents from '../components/CartContents';
import EventListing from '../components/EventListing';

import type { Event } from '../components/types';
import type { CartStore } from '../redux/cartSlice';

const Tickets = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: {cart: CartStore}) => state.cart.items);
    const isCartEmpty = useMemo(() => !(cartItems && cartItems.length > 0), [cartItems]);

    const handleAddClick = (event: Event) => () => dispatch(addToCart(event));
    const handleCheckoutClick = () => navigate('/checkout');

    return <Grid >
        <GridCell colSpan={12}>
            <Typography type="headline-3">Events and Tickets</Typography>
        </GridCell>
        <GridCell colSpan={8}>
            {
                events.map((t) => <EventListing key={t.title} title={t.title} date={t.date} price={t.price} image={t.image} onAdd={handleAddClick(t)} />)
            }
        </GridCell>
        <GridCell colSpan={4}>
            <Card fullWidth>
                <CardHeader>
                    <CardTitle>Cart:</CardTitle>
                </CardHeader>
                <CardContent>
                    <CartContents isEditing={false} items={cartItems || []} />
                    <div className="flex-h-end">
                        <Button theme="primary" themeType="contained" onClick={handleCheckoutClick} disabled={isCartEmpty}>
                            Checkout
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </GridCell>
    </Grid>
}

export default Tickets;