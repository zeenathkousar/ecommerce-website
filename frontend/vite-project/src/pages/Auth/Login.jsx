import React, { useState } from "react";
import { Layout } from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const Navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, address, phone);
    // toast.success("registered successfully");
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log("login success");
        console.log(res.data.success);
        localStorage.setItem("auth", JSON.stringify(res.data));
        // var var1 = window.localStorage.setItem("auth", "ghyg");
        // res.cookie("auth", "jhuyfr");
        // console.log(`var1 is `, var1);
        Navigate(location.state || "/");
      } else {
        console.log(err);
        toast.success(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong ");
    }
  };

  return (
    <Layout title={"Login - Ecommerce App"}>
      <div className="register">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3 ">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Navigate("/forget-password")}
            >
              Forget Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
