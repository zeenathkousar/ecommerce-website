import React from "react";
import { Layout } from "../components/layout/Layout";
import { NavLink, Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Layout title={"Go back- Page Not found"}>
      <div className="pnf">
        <h1>404</h1>
        <p>Oops! Page Not found</p>
        <NavLink to="/">
          <button>Go back</button>
        </NavLink>
      </div>
    </Layout>
  );
};
