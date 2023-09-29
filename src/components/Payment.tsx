import React from 'react';

import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
} from "@react-md/card";

import AddressEntry from './AddressEntry';
import CardEntry from './CardEntry';

const Payment = () => {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent>
                <CardEntry />
                <AddressEntry isBilling />
            </CardContent>
        </Card>
    </>
}

export default Payment;