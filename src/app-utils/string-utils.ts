export function formatPriceString(price: string) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
        +price,
    );
};