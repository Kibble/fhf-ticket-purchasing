import React from 'react';
import { Button } from "@react-md/button";
import { Grid, GridCell } from '@react-md/utils';
import {
    Card,
    CardContent,
} from "@react-md/card";
import { Typography } from "@react-md/typography";

import { currencyFormatter } from '../utils/formatters';

type Props = {
    title: string,
    date: string,
    onAdd: any,
    image: string,
    price: number,
};

const EventListing = (props: Props) => {
    const {date, image, onAdd, price, title} = props;

    return <Card fullWidth>
        <CardContent>
            <Grid>
                <GridCell colSpan={4}>
                    <img src={image} className="event-image" />
                </GridCell>
                <GridCell colSpan={8}>
                    <div className="flex-h-between">
                        <Typography type="headline-6">{title}</Typography>
                        <Typography type="headline-6">{currencyFormatter(price)}</Typography>
                    </div>
                    <div>
                        <Typography>{date}</Typography>
                    </div>
                    <div className="flex-h-end">
                        <Button theme="primary" themeType="outline" onClick={onAdd}>Add to Cart</Button>
                    </div>
                </GridCell>
            </Grid>
        </CardContent>
    </Card>;
}

export default EventListing;
