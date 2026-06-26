import CheckoutForm from "./-components/checkout-form.component";
import CheckoutCartSection from "./-components/checkout-cart-section.component";

const CheckoutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-7xl flex flex-col md:flex-row lg:flex-row gap-0">
          {/* checkout form */}
          <CheckoutForm />

          {/* cart section */}
          <CheckoutCartSection />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
