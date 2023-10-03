import React, { useMemo } from 'react';

import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
  } from "@react-md/card";
  import { Typography } from "@react-md/typography";

const Delivery = () => {
    const tomorrow = useMemo(() => {
        let d = new Date();
        d = new Date(d.setDate(d.getDate() + 1));
        return d.toDateString();
    }, []);

    return <>
        <Card fullWidth>
            <CardHeader>
                <CardTitle>Delivery</CardTitle>
                <CardSubtitle>Mobile Entry - Free</CardSubtitle>
            </CardHeader>
            <CardContent>
                <Typography>
                    Tickets Available by {tomorrow}
                </Typography>
                <Typography>
                    These mobile tickets will be transferred directly to you from a trusted seller.
                    We'll email you instructions on how to accept them on the original ticket provider's mobile app.
                </Typography>
            </CardContent>
        </Card>
    </>
}

export default Delivery;