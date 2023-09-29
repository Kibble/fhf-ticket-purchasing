import React from 'react';
import { TextField } from "@react-md/form";
import { Grid, GridCell } from "@react-md/utils";

const CardEntry = () => {
    return <div>
        <Grid>
            <GridCell colSpan={12}>
                <TextField id="cardholder-name" label="Name on Card" placeholder="e.g. John Smith" />
            </GridCell>
            <GridCell colSpan={12}> 
                <TextField id="card-number" label="Card Number" placeholder="0000 0000 0000 0000" />
            </GridCell>
            <GridCell colSpan={6}>
                <TextField id="card-expiration-date" label="Expiration Date" />
            </GridCell>
            <GridCell colSpan={6}>
                <TextField id="card-cvv" label="CVV Code" />
            </GridCell>
        </Grid>
    </div>
}

export default CardEntry;
