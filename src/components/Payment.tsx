import React from 'react';

import {
    Card,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardHeader,
  } from "@react-md/card";
  import { Typography } from "@react-md/typography";

const Payment = () => {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent>
                <Typography>
                    Duis lacinia lectus sed enim placerat, non consequat arcu tincidunt.
                    Pellentesque vel condimentum lorem. Cras et arcu nibh. Cras euismod
                    lectus commodo finibus facilisis. Sed ullamcorper odio sed
                    scelerisque semper. Donec sollicitudin lorem eget tincidunt
                    efficitur. Aenean sit amet tempus lacus, sit amet semper justo. Sed
                    quis suscipit ante. Etiam aliquam risus eu laoreet placerat.
                </Typography>
            </CardContent>
        </Card>
    </>
}

export default Payment;