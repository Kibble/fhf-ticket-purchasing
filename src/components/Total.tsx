import React from 'react';

import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
  } from "@react-md/card";
  import { Typography } from "@react-md/typography";

import type { Delivery, Item } from './types';

type Props = {
    items: Array<Item>,
    delivery: Delivery,
}

const Total = (props: Props) => {
    const {delivery, items} = props;

    return <>
        <Card fullWidth>
            <CardHeader>
                <CardTitle>
                    <div className="flex-h-between">
                        <span>Total</span>
                        <span>$999</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Typography>
                    Tickets
                </Typography>
                <Typography>
                    {
                        items.map((item) => <div className="flex-h-between">
                            <span>
                                {item.name}: ${item.price} x {item.quantity}
                            </span>
                            <span>
                                ${item.price * item.quantity}
                            </span>
                        </div>)
                    }

                </Typography>
                <Typography>
                    Delivery
                </Typography>
                <Typography>
                    <div className="flex-h-between">
                        <span>{delivery.name}</span>
                        <span>{delivery.price === 0 ? 'Free' : `$${delivery.price}`}</span>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    </>
}

export default Total;