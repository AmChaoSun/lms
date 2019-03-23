import { BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../BasicLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
};
export default Router;
