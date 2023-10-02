import React, { useMemo } from 'react';
import { Button } from '@react-md/button';
import { TextField } from '@react-md/form';

type Props = {
    onDecrement: any,
    onIncrement: any,
    value: number,
}

const QtySelector = (props: Props) => {
    const { onDecrement, onIncrement, value } = props;

    const qtyString = useMemo(() => value.toString(), [value]);

    return <div className="flex-h small">
        <Button themeType="outline" onClick={onDecrement} style={{fontSize: '28px'}}>
            -
        </Button>
        <div style={{width: '75px'}}>
            <TextField id="qty" value={qtyString} />
        </div>
        <Button themeType="outline" onClick={onIncrement} style={{fontSize: '24px'}}>+</Button>
    </div>;
}

export default QtySelector;
