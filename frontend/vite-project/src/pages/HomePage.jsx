import React from "react";
import { Layout } from "../components/layout/Layout";
import { useAuth } from "../context/auth";

export const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Best Offers"}>
      <h2>Home Page </h2>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};
