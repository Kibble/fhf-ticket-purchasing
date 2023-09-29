import React from 'react';
import { Typography } from '@react-md/typography';

import { currencyFormatter } from '../utils/formatters';

import type { Event } from './types';

type Props = {
    items: Array<{
        event: Event,
        quantity: number,
    }>,
};

const CartContents = ({items}: Props) => {
    return <>
        {(items || []).map((item) => <div key={`cart-${item.event.title}`} className="cart-item flex-h-between">
            <div>
                <Typography type="body-1">
                    {item.event.title}{': '}
                </Typography>
                <Typography type="body-1">
                    {currencyFormatter(item.event.price)} x {item.quantity}
                </Typography>
            </div>
            <Typography>
                {currencyFormatter(item.event.price * item.quantity)}
            </Typography>
        </div>)}
    </>
}

export default CartContents;