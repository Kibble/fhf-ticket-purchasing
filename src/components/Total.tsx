import React, { useMemo } from 'react';
import { Button } from '@react-md/button';
import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
  } from "@react-md/card";
import { Typography } from "@react-md/typography";

import CartContents from '../components/CartContents';
import { currencyFormatter } from '../utils/formatters';

import type { Delivery, Event } from './types';

type Props = {
    items: Array<{event: Event, quantity: number}>,
    delivery: Delivery,
}

const Total = (props: Props) => {
    const {delivery, items} = props;

    const total = useMemo(() => {
        let sum = items.reduce((a, b) => {
            return a + (b.event.price * b.quantity)
        }, 0);
        return currencyFormatter(sum);
    }, [items]);

    return <>
        <Card fullWidth>
            <CardHeader>
                <CardTitle>
                    <div className="flex-h-between">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Typography type="headline-6">
                    Tickets
                </Typography>
                <CartContents items={items} />
                <Typography type="headline-6">
                    Delivery
                </Typography>
                <Typography>
                    <div className="flex-h-between">
                        <span>{delivery.name}</span>
                        <span>{delivery.price === 0 ? 'Free' : `$${delivery.price}`}</span>
                    </div>
                </Typography>
                <Button className="full-width" theme="primary" themeType="contained">Place Order</Button>
            </CardContent>
        </Card>
    </>
}

export default Total;