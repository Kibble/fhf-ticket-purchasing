import React, { useState } from 'react';
import { TextField } from "@react-md/form";
import { Grid, GridCell } from "@react-md/utils";
import { Typography } from '@react-md/typography';

import { cardNumberFormatter } from '../utils/formatters';
import VisaIcon from '../images/visa-icon.svg';

const CardEntry = () => {
    // TODO -- Move this data into redux store
    const [name, setName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const handleCardNumberChange = (e: any) => setCardNumber(cardNumberFormatter(e.target.value));
    const handleCvvChange = (e: any) => setCvv(e.target.value.replace(/\D/g, ''));
    const handleNameChange = (e: any) => setName(e.target.value.trim());

    return <div>
        <Grid>
            <GridCell colSpan={12}>
                <Typography type="headline-6">Credit Card</Typography>
            </GridCell>
            <GridCell colSpan={12}>
                <img src={VisaIcon} alt="Visa Icon" />
            </GridCell>
            <GridCell colSpan={12}>
                <TextField id="cardholder-name" label="Name on Card" placeholder="e.g. John Smith" value={name} onChange={handleNameChange} />
            </GridCell>
            <GridCell colSpan={12}>
                <TextField id="card-number" label="Card Number" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={handleCardNumberChange} />
            </GridCell>
            <GridCell colSpan={6}>
                <TextField id="card-expiration-date" label="Expiration Date" placeholder="MM/YY" />
            </GridCell>
            <GridCell colSpan={6}>
                <TextField id="card-cvv" label="CVV Code" value={cvv} pattern="\d{3}" maxLength={3} onChange={handleCvvChange} />
            </GridCell>
        </Grid>
    </div>
}

export default CardEntry;
