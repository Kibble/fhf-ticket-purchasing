import React, { useMemo, useState } from 'react';
import { NativeSelect, TextField } from "@react-md/form";
import { Grid, GridCell } from "@react-md/utils";
import { Typography } from '@react-md/typography';

import states from '../data/states';

const AddressEntry = ({isBilling}: {isBilling?: boolean}) => {
    // TODO -- Move this data into redux store
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [addr1, setAddr1] = useState<string>('');
    const [addr2, setAddr2] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [addrState, setAddrState] = useState<string>('');
    const [zip, setZip] = useState<string>('');

    const headerText = useMemo(() => isBilling ? 'Billing Address' : 'Shipping Address', [isBilling]);

    const handleFirstNameChange = (e: any) => setFirstName(e.target.value.trim());
    const handleLastNameChange = (e: any) => setLastName(e.target.value.trim());
    const handleAddr1Change = (e: any) => setAddr1(e.target.value.trim());
    const handleAddr2Change = (e: any) => setAddr2(e.target.value.trim());
    const handleCityChange = (e: any) => setCity(e.target.value.trim());
    const handleAddrStateChange = (e: any) => setAddrState(e.currentTarget.value);
    const handleZipChange = (e: any) => setZip(e.target.value.replace(/\D/g, ''));

    return <Grid>
        <GridCell colSpan={12}>
            <Typography type="headline-6">{headerText}</Typography>
        </GridCell>
        <GridCell colSpan={6}>
            <TextField id="first-name" label="First Name" value={firstName} onChange={handleFirstNameChange} />
        </GridCell>
        <GridCell colSpan={6}>
            <TextField id="last-name" label="Last Name" value={lastName} onChange={handleLastNameChange} />
        </GridCell>
        <GridCell colSpan={12}>
            <TextField id="cardholder-name" label="Street Address 1" value={addr1} onChange={handleAddr1Change} />
        </GridCell>
        <GridCell colSpan={12}>
            <TextField id="cardholder-name" label="Street Address 2" value={addr2} onChange={handleAddr2Change} />
        </GridCell>
        <GridCell colSpan={6}>
            <TextField id="city" label="City" value={city} onChange={handleCityChange} />
        </GridCell>
        <GridCell colSpan={3}>
            <NativeSelect id="state" label="State" value={addrState} onChange={handleAddrStateChange}>
                <option value="" disabled hidden />
                {states.map((abbrev) => (
                    <option key={abbrev} value={abbrev}>
                        {abbrev}
                    </option>
                ))}
            </NativeSelect>
        </GridCell>
        <GridCell colSpan={3}>
            <TextField id="zip" label="Zip Code" value={zip} pattern="\d{5}" maxLength={5} onChange={handleZipChange} />
        </GridCell>
    </Grid>;
}

export default AddressEntry;
