import React, { useMemo, useState } from 'react';
import { Button } from '@react-md/button';
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
} from '@react-md/card';
import { Typography } from '@react-md/typography';
import { useDispatch } from 'react-redux';

import CartContents from '../components/CartContents';
import { currencyFormatter } from '../utils/formatters';
import { updateCart } from '../redux/cartSlice';

import type { Delivery, Event } from './types';

type Props = {
    delivery: Delivery,
    items: Array<{event: Event, quantity: number}>,
    onPlaceOrderClick: any,
}

const Total = (props: Props) => {
    const dispatch = useDispatch();
    const {delivery, items, onPlaceOrderClick} = props;

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveCartClick = () => {
        dispatch(updateCart());
        setIsEditing(false);
    }

    const total = useMemo(() => {
        let sum = items.reduce((a, b) => a + (b.event.price * b.quantity), 0);
        return currencyFormatter(sum);
    }, [items]);

    const isCartEmpty = useMemo(() => !(items && items.length > 0), [items]);

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
                <CartContents items={items} isEditing={isEditing} />
                <Typography type="headline-6">
                    Delivery
                </Typography>
                <div className="flex-h-between">
                    <Typography>{delivery.name}</Typography>
                    <Typography>{delivery.price === 0 ? 'Free' : `$${delivery.price}`}</Typography>
                </div>
                {isEditing
                    ? <>
                        <Button className="full-width margin-top-2em" theme="primary" themeType="contained" onClick={handleSaveCartClick}>
                            Update Cart
                        </Button>
                    </>
                    : <>
                        <Button className="full-width margin-top-2em" theme="primary" themeType="outline" onClick={handleEditClick}>
                            Edit Cart
                        </Button>
                        <Button className="full-width margin-top-1em" theme="primary" themeType="contained" onClick={onPlaceOrderClick} disabled={isCartEmpty}>
                            Place Order
                        </Button>
                    </>
                }
            </CardContent>
        </Card>
    </>
}

export default Total;