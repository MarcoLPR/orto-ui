import React from "react";
import { Route, Routes } from "react-router-dom";

const Swap = React.lazy(() => import("../views/Swap"));
const Referral = React.lazy(() => import("../views/Referral"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/swap"
      element={
        <React.Suspense fallback={<></>}>
          <Swap />
        </React.Suspense>
      }
    />
    <Route
      path="/referral"
      element={
        <React.Suspense fallback={<></>}>
          <Referral />
        </React.Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
