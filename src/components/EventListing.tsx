import React, { useState } from 'react';
import { Button } from "@react-md/button";
import { TextField } from "@react-md/form";
import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
} from "@react-md/card";
import { Typography } from "@react-md/typography";

import { currencyFormatter } from '../utils/formatters';

type Props = {
    title: string,
    date: string,
    onAdd: any,
    // description: string,
    price: number,
};

const EventListing = (props: Props) => {
    const {date, onAdd, price, title} = props;

    return <Card fullWidth>
        <CardHeader>
            <CardTitle>
                <div className="flex-h-between">
                    <span>{title}</span>
                    <span>{currencyFormatter(price)}</span>
                </div>
            </CardTitle>
            <CardSubtitle>{date}</CardSubtitle>
        </CardHeader>
        <CardContent>
            <div className="flex-h-end">
                {/* <TextField id={title + '-qty'} style={{marginRight: '1em', width: '3em'}} value="1"></TextField> */}
                <Button theme="primary" themeType="outline" onClick={onAdd}>Add to Cart</Button>
            </div>
        </CardContent>
    </Card>
}

export default EventListing;
