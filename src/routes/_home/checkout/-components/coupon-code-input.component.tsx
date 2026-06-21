import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const CouponCodeInput = () => {
    // const [couponCode] = useState('')
    const [isApplied] = useState(false)

    const couponUi = () => {
        if (isApplied) {
            return (
                <span className="bg-accent px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                    <p className="text-primary">Coupon Applied </p>
                    <span className="text-primary font-bold text-right">
                        FIRST20
                    </span>
                </span>
            )
        }

        return (
            <div className="flex flex-row items-start justify-end">
                <Input
                    // ref={couponRef}
                    type="text"
                    placeholder="Coupon Code"
                    className="px-4 py-2 h-10 mr-1 border border-border rounded-md focus:outline-none"
                    // value={couponCode}
                    // className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-background border-border focus:ring-0 focus:outline-none focus:border-primary placeholder-muted-foreground placeholder-opacity-75"
                />
                <Button
                    // onClick={handleCouponCode}
                    className="h-10 rounded-sm"
                    // variant="create"
                    // className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-border rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-primary h-12 text-sm lg:text-base w-full sm:w-auto"
                >
                    Apply
                </Button>
            </div>
        )
    }
    return (
        <form className="w-full">
            {couponUi()}
        </form>
    )
}

export default CouponCodeInput