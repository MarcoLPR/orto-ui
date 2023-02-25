import React from "react";
import AppRoutes from "./routes";
import Providers from "./Providers";
import NavigationBar from "./components/layout/NavigationBar";

const App = () => (
  <Providers>
    <NavigationBar />
    <AppRoutes />
  </Providers>
);

export default App;
