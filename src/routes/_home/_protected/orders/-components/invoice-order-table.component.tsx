import { formatPriceString } from "@/core/app-utils/string-utils"
import { orderDetails as data } from "../-temp.data"

const InvoiceOrderTableBody = () => {
    const tablerowsUi = data?.cart?.map((item, i) => (
        <tr key={i}>
            <th className="px-6 py-2 text-sm font-normal text-muted-foreground text-left">
                {i + 1}&nbsp;
            </th>
            {/* {drawer && (
                <td className="px-6 py-2 text-sm font-normal text-muted-foreground">
                <ImageWithFallback
                    img
                    width={40}
                    height={40}
                    src={item?.image}
                    alt={item.title}
                />
                </td>
            )} */}
            <td className="px-6 py-2 text-sm font-normal text-muted-foreground">
                {item.title}
            </td>
            <td className="px-6 py-2 text-sm text-center text-muted-foreground">
                {item.quantity}{" "}
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-muted-foreground">
                {formatPriceString(item.price.toString())}
            </td>

            <td className="px-6 py-2 text-sm text-right font-semibold text-muted-foreground">
                {formatPriceString(item.itemTotal.toString())}
            </td>
        </tr>
    ))
    return (
        <tbody className="divide-y divide-border">
            {tablerowsUi}
        </tbody>
    )
}

export default InvoiceOrderTableBody
