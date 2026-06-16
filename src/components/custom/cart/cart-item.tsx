import { Link } from "@tanstack/react-router"
import ImageWithFallback from "../image-with-fallback.component"
import type { CartItemType } from "./temp.data"
import { formatPriceString } from "@/app-utils/string-utils"
import { Minus, Plus, Trash2 } from "lucide-react"

const CartItem = ({item}: {item: CartItemType}) => {
    return (
        <div className="group w-full h-auto flex justify-start items-center py-4 transition-all relative border-b border-border/60 last:border-b-0">
        <div className="relative flex overflow-hidden shrink-0 cursor-pointer mr-4">
            {/* <Link href={`/product/${item.slug || item.id}`}> */}
            <Link to='/'>
                <ImageWithFallback
                    // img
                    width={40}
                    height={40}
                    src={item.image[0]}
                    alt={item.title}
                    className="size-20 flex-none rounded-lg bg-muted object-cover border border-border/50"
                />
            </Link>
        </div>
        <div className="flex flex-col w-full overflow-hidden">
            <div className="flex">
                <div className="min-w-0 flex-1">
                    <Link
                        to='/'
                        className="truncate text-sm font-medium text-foreground line-clamp-1 hover:text-primary transition-colors"
                    >
                        {item.title}
                    </Link>
                    <span className="text-xs text-muted-foreground mb-1">
                        Item Price {formatPriceString(item.price.toString())}
                    </span>
                </div>
                <div className="ml-4 flow-root shrink-0">
                    <button
                        // onClick={() => removeItem(item.id)}
                        className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                    >
                        <Trash2 className="size-4" />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="font-semibold text-primary text-sm md:text-base leading-5">
                <span>{formatPriceString((item.price * item.quantity).toString())}</span>
            </div>

            <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-border bg-muted/50 text-foreground rounded-full">
                <button>
                    <span className="text-foreground text-base cursor-pointer hover:text-primary">
                        <Minus className="size-4" />
                    </span>
                </button>
                <p className="text-xs font-semibold text-foreground px-1">
                    {item.quantity}
                </p>
                <button>
                    <span className="text-foreground text-base cursor-pointer hover:text-primary">
                        <Plus className="size-4" />
                    </span>
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CartItem