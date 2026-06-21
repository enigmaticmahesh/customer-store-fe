
const ProductStock = ({stock}: {stock: number}) => {
    if (stock <= 0) {
        return (
            <span className="text-red-700 inline-flex items-center justify-center text-xs">
                Stock out
            </span>
        )
    }
    return (
        <span className="inline-flex items-center justify-center text-xs text-muted-foreground">
            In stock:
            <span className="text-green-600 pl-1 font-normal">{stock} </span>
        </span>
    )
}

export default ProductStock