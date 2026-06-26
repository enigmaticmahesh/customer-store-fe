import { dashboard, data } from "./-temp.data";
import {
  Truck,
  RefreshCcw,
  Check,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const Card = ({
  title,
  Icon,
  quantity,
  className,
}: {
  title: string;
  Icon: LucideIcon;
  quantity: number;
  className: string;
}) => {
  return (
    <div className="flex h-full">
      <div className="flex items-center border border-border w-full rounded-xl p-5 bg-muted/30">
        <div
          className={`flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 ${className}`}
        >
          <Icon />
        </div>
        <div>
          <h5 className="leading-none mb-2 text-base font-medium text-muted-foreground">
            {title}
          </h5>
          <p className="text-xl font-bold leading-none text-foreground">
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="overflow-hidden border-0">
      <h2 className="text-xl font-semibold mb-5">
        {/* {showingTranslateValue(dashboard?.dashboard_title)} */}
        {dashboard?.dashboard_title.en}
      </h2>
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Card
          // title={showingTranslateValue(dashboard?.total_order)}
          title={dashboard?.total_order.en}
          Icon={ShoppingCart}
          quantity={data?.totalDoc}
          className="text-red-600  bg-red-200"
        />
        <Card
          // title={showingTranslateValue(dashboard?.pending_order)}
          title={dashboard?.pending_order.en}
          Icon={RefreshCcw}
          quantity={data?.pending}
          className="text-orange-600 bg-orange-200"
        />
        <Card
          // title={showingTranslateValue(dashboard?.processing_order)}
          title={dashboard?.processing_order.en}
          Icon={Truck}
          quantity={data?.processing}
          className="text-indigo-600 bg-indigo-200"
        />
        <Card
          // title={showingTranslateValue(dashboard?.complete_order)}
          title={dashboard?.complete_order.en}
          Icon={Check}
          quantity={data?.delivered}
          className="text-primary bg-accent"
        />
      </div>
    </div>
  );
};

export default UserDashboard;
