import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default RootLayout;
