import { Button } from '@/components/ui/button'
import { Field, FieldContent, FieldLabel, FieldTitle } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Link } from '@tanstack/react-router'

const CheckoutForm = () => {
    return (
        <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
            <div className="mt-5 md:mt-0 md:col-span-2">
                {/* <Elements stripe={stripePromise}> */}
                <form>
                {/* {isGuest && (
                    <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                        🛒 You are checking out as a guest. Only Cash on Delivery is
                        available for guest orders. An account will be created for
                        you to track your order.
                    </p>
                    </div>
                )} */}
                {/* {!isGuest && hasShippingAddress && (
                    <div className="flex justify-end my-2">
                    <SwitchToggle
                        id="shipping-address"
                        title="Use Default Shipping Address"
                        processOption={useExistingAddress}
                        handleProcess={handleDefaultShippingAddress}
                    />
                    </div>
                )} */}
                    <div className="form-group">
                        <h2 className="font-semibold text-base text-muted-foreground pb-3">
                            01. Personal Details
                        </h2>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.first_name)}
                                name="firstName"
                                type="text"
                                placeholder="John"
                                /> */}
                                {/* <Error errorMessage={errors.firstName} /> */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.last_name)}
                                name="lastName"
                                type="text"
                                placeholder="Doe"
                                />
                                <Error errorMessage={errors.lastName} /> */}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.email_address)}
                                name="email"
                                type="email"
                                placeholder="youremail@gmail.com"
                                />
                                <Error errorMessage={errors.email} /> */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.checkout_phone)}
                                name="contact"
                                type="tel"
                                placeholder="+062-6532956"
                                />

                                <Error errorMessage={errors.contact} /> */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="phone"
                                            type="text"
                                            name="phone"
                                            placeholder="+062-6532956"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* {isGuest && (
                                <div className="col-span-6">
                                <div className="space-y-2">
                                    <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-muted-foreground"
                                    >
                                    Password (for your new account)
                                    </label>
                                    <div className="relative">
                                    <Input
                                        {...register("password")}
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Min. 8 characters with letters & numbers"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={
                                        showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                        <IoEyeOffOutline className="h-5 w-5" />
                                        ) : (
                                        <IoEyeOutline className="h-5 w-5" />
                                        )}
                                    </button>
                                    </div>
                                </div>
                                <Error errorMessage={errors.password} />
                                <p className="text-xs text-muted-foreground mt-1">
                                    An account will be created with this email and password
                                    so you can track your order and manage future purchases.
                                </p>
                                </div>
                            )} */}
                        </div>
                    </div>

                    <div className="form-group mt-12">
                        <h2 className="font-semibold text-base text-muted-foreground pb-3">
                            02. Shipping Details
                        </h2>

                        <div className="grid grid-cols-6 gap-6 mb-8">
                            <div className="col-span-6">
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.street_address)}
                                name="address"
                                type="text"
                                placeholder="123 Boulevard Rd, Beverley Hills"
                                />
                                <Error errorMessage={errors.address} /> */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Street Address
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="address"
                                            type="text"
                                            name="address"
                                            placeholder="123 Boulevard Rd, Beverley Hills"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        City
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="city"
                                            type="text"
                                            name="city"
                                            placeholder="Los Angeles"
                                        />
                                    </div>
                                </div>
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.city)}
                                name="city"
                                type="text"
                                placeholder="Los Angeles"
                                />
                                <Error errorMessage={errors.city} /> */}
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Country
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="country"
                                            type="text"
                                            name="country"
                                            placeholder="United States"
                                        />
                                    </div>
                                </div>
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.country)}
                                name="country"
                                type="text"
                                placeholder="United States"
                                />
                                <Error errorMessage={errors.country} /> */}
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="zipCode"
                                        className="block text-sm font-medium text-muted-foreground"
                                    >
                                        Zip code
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="zipCode"
                                            type="text"
                                            name="zipCode"
                                            placeholder="2345"
                                        />
                                    </div>
                                </div>
                                {/* <InputArea
                                register={register}
                                label={showingTranslateValue(checkout?.zip_code)}
                                name="zipCode"
                                type="text"
                                placeholder="2345"
                                />
                                <Error errorMessage={errors.zipCode} /> */}
                            </div>
                        </div>

                        {/* <Label label={showingTranslateValue(checkout?.shipping_cost)} />
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <InputShipping
                                register={register}
                                handleShippingCost={handleShippingCost}
                                name={showingTranslateValue(checkout?.shipping_name_two)}
                                description={showingTranslateValue(
                                    checkout?.shipping_one_desc,
                                )}
                                value={Number(checkout?.shipping_one_cost) || 60}
                                />
                                <Error errorMessage={errors.shippingOption} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputShipping
                                register={register}
                                handleShippingCost={handleShippingCost}
                                name={showingTranslateValue(checkout?.shipping_name_two)}
                                description={showingTranslateValue(
                                    checkout?.shipping_two_desc,
                                )}
                                value={Number(checkout?.shipping_two_cost) || 20}
                                />
                                <Error errorMessage={errors.shippingOption} />
                            </div>
                        </div> */}
                    </div>

                    <div className="form-group mt-12">
                        <h2 className="font-semibold text-base text-muted-foreground pb-3">
                            03. Payment Method
                        </h2>
                        {/* {!isGuest && showCard && (
                        <div className="mb-3">
                            <CardElement />{" "}
                            <p className="text-red-400 text-sm mt-1">{error}</p>
                        </div>
                        )} */}
                        <div>
                            {/* {storeSetting?.cod_status && (
                                <div className="">
                                <InputPayment
                                    setShowCard={setShowCard}
                                    register={register}
                                    name={t("common:cashOnDelivery")}
                                    value="Cash"
                                    Icon={IoWalletSharp}
                                />
                                <Error errorMessage={errors.paymentMethod} />
                                </div>
                            )}

                            {!isGuest && storeSetting?.stripe_status && (
                                <div className="">
                                <InputPayment
                                    setShowCard={setShowCard}
                                    register={register}
                                    name={t("common:creditCard")}
                                    value="Card"
                                    Icon={ImCreditCard}
                                />
                                <Error errorMessage={errors.paymentMethod} />
                                </div>
                            )}

                            {!isGuest && (
                                <div className="">
                                <InputPayment
                                    setShowCard={setShowCard}
                                    register={register}
                                    name="RazorPay"
                                    value="RazorPay"
                                    Icon={ImCreditCard}
                                />
                                <Error errorMessage={errors.paymentMethod} />
                                </div>
                            )} */}
                            <RadioGroup defaultValue="plus" className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                                <FieldLabel htmlFor="plus-plan">
                                    <Field orientation="horizontal">
                                        <FieldContent>
                                            <FieldTitle>Cash on delivery</FieldTitle>
                                            {/* <FieldDescription>
                                                For individuals and small teams.
                                            </FieldDescription> */}
                                        </FieldContent>
                                        <RadioGroupItem value="plus" id="plus-plan" />
                                    </Field>
                                </FieldLabel>
                                <FieldLabel htmlFor="pro-plan">
                                    <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Card</FieldTitle>
                                        {/* <FieldDescription>For growing businesses.</FieldDescription> */}
                                    </FieldContent>
                                    <RadioGroupItem value="pro" id="pro-plan" />
                                    </Field>
                                </FieldLabel>
                                <FieldLabel htmlFor="enterprise-plan">
                                    <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Razorpay</FieldTitle>
                                        {/* <FieldDescription>
                                        For large teams and enterprises.
                                        </FieldDescription> */}
                                    </FieldContent>
                                    <RadioGroupItem value="enterprise" id="enterprise-plan" />
                                    </Field>
                                </FieldLabel>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                        <div className="col-span-6 sm:col-span-3">
                            <Button className="w-full h-10 rounded-sm" variant="outline">
                                <Link
                                    to="/"
                                    rel="preload"
                                    className="flex justify-center text-center"
                                    viewTransition
                                >
                                    {/* <span className="text-xl mr-2">
                                        <IoReturnUpBackOutline />
                                    </span> */}
                                    Continue Shipping
                                </Link>
                            </Button>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <Button
                                type="submit"
                                // variant="create"
                                // disabled={
                                // isEmpty || (!isGuest && !stripe) || isCheckoutSubmit
                                // }
                                // isLoading={isCheckoutSubmit}
                                className="w-full h-10 rounded-sm"
                            >
                                {/* {isCheckoutSubmit ? (
                                "Processing"
                                ) : (
                                <span className="flex justify-center text-center">
                                    {showingTranslateValue(checkout?.confirm_button)}
                                    <span className="text-xl ml-2">
                                    {" "}
                                    <IoArrowForward />
                                    </span>
                                </span>
                                )} */}
                                Confirm Order
                            </Button>
                        </div>
                    </div>
                </form>
                {/* </Elements> */}
            </div>
        </div>
    )
}

export default CheckoutForm