import React, { useMemo } from 'react';
import { Button } from '@react-md/button';
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
} from '@react-md/card';
import { Typography } from '@react-md/typography';

import CartContents from '../components/CartContents';
import { currencyFormatter } from '../utils/formatters';

import type { Delivery, Event } from './types';

type Props = {
    delivery: Delivery,
    items: Array<{event: Event, quantity: number}>,
    onPlaceOrderClick: any,
}

const Total = (props: Props) => {
    const {delivery, items, onPlaceOrderClick} = props;

    const total = useMemo(() => {
        let sum = items.reduce((a, b) => a + (b.event.price * b.quantity), 0);
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
                <Button className="full-width margin-top-2em" theme="primary" themeType="contained" onClick={onPlaceOrderClick}>Place Order</Button>
            </CardContent>
        </Card>
    </>
}

export default Total;