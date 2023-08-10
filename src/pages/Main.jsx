import React, { Fragment, Suspense } from "react";
import LazyLoader from "../Layout/LazyLoader";
import Hero from "../components/Hero/Hero";
import LetsConnect from "../components/LetsConnect/LetsConnect";
import MenuItems from "../components/MenuItems/MenuItems";

const Main = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Hero />
        <MenuItems />
        <LetsConnect />
      </Suspense>
    </Fragment>
  );
};

export default Main;
