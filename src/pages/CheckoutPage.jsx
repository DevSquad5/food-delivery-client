import React, { Suspense } from "react";
import LazyLoader from "../Layout/LazyLoader";
const Checkout = React.lazy(() => import("../components/Checkout/Checkout"));

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <Suspense fallback={<LazyLoader />}>
        <Checkout />
      </Suspense>
    </div>
  );
};

export default CheckoutPage;
