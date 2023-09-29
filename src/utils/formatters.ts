export const currencyFormatter = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export const cardNumberFormatter = (value: string) => {
    let sanitizedValue = value.replace(/\D/g, '');
    if (sanitizedValue.length > 16) {
        sanitizedValue = sanitizedValue.substring(0, 16);
    }

    return sanitizedValue;
}