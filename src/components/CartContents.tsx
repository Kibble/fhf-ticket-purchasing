import React from 'react';
import { Typography } from '@react-md/typography';
import { useDispatch, useSelector } from 'react-redux';

import QtySelector from './QtySelector';
import { decrementCartItem, incrementCartItem } from '../redux/cartSlice';
import { currencyFormatter } from '../utils/formatters';

import type { Event } from './types';

type Props = {
    isEditing: boolean,
    items: Array<{
        event: Event,
        quantity: number,
    }>,
};

const CartContents = ({isEditing, items}: Props) => {
    const dispatch = useDispatch();

    const handleQtyIncrement = (event: Event) => () => {
        dispatch(incrementCartItem(event));
    }

    const handleQtyDecrement = (event: Event) => () => {
        dispatch(decrementCartItem(event));
    }

    return <>
        {(items || []).map((item) => <div key={`cart-${item.event.title}`} className="cart-item flex-h-between">
            <div>
                <Typography type="body-1">
                    {item.event.title}{': '}
                </Typography>
                <Typography type="body-1">
                    {currencyFormatter(item.event.price)} x {item.quantity}
                </Typography>
                {isEditing &&
                    <QtySelector
                        value={item.quantity}
                        onDecrement={handleQtyDecrement(item.event)}
                        onIncrement={handleQtyIncrement(item.event)}
                    />
                }
            </div>
            <Typography>
                {currencyFormatter(item.event.price * item.quantity)}
            </Typography>
        </div>)}
    </>
}

export default CartContents;