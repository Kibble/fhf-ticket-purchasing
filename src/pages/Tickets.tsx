import React, { useState } from 'react';
import { Button } from "@react-md/button";
import { TextField } from "@react-md/form";
import { Grid, GridCell } from "@react-md/utils";
import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
} from "@react-md/card";
import { Typography } from "@react-md/typography";

import { events } from '../data/events';
import EventListing from '../components/EventListing';
import { currencyFormatter } from '../utils/formatters';

import type { Delivery as DeliveryType, Event, Item } from '../components/types';

const Tickets = () => {
    // TODO -- Use Redux instead of component state
    const [cartItems, setCartItems] = useState<Array<{event: Event, quantity: number}>>([]);

    // TODO -- dispatch Redux action instead
    const addToCart = (event: Event) => () => {
        if (cartItems.find((x: {event: Event, quantity: number}) => x.event.title === event.title)) {

            let updatedItems = [...cartItems];
            let eventToUpdate = updatedItems.find((x) => x.event.title === event.title);
            if (eventToUpdate) {
                eventToUpdate.quantity++;
            }
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, {event, quantity: 1}])
        }
    }

    return <Grid >
        <GridCell colSpan={12}>
            <Typography type="headline-3">Events and Tickets</Typography>
        </GridCell>
        <GridCell colSpan={8}>
            {
                events.map((t) => <EventListing title={t.title} date={t.date} price={t.price} onAdd={addToCart(t)} />)
            }
        </GridCell>
        <GridCell colSpan={4}>
            <Card fullWidth>
                <CardHeader>
                    <CardTitle>Cart:</CardTitle>
                </CardHeader>
                <CardContent>
                    {cartItems.map((item) => <div className="flex-h-between">
                        <Typography>
                            {item.event.title}: {currencyFormatter(item.event.price)} x {item.quantity}
                        </Typography>
                        <Typography>
                            {currencyFormatter(item.event.price * item.quantity)}
                        </Typography>
                    </div>)}
                    <div className="flex-h-end">
                        <Button theme="primary" themeType="contained">Checkout</Button>
                    </div>
                </CardContent>
            </Card>
        </GridCell>
    </Grid>
}

export default Tickets;