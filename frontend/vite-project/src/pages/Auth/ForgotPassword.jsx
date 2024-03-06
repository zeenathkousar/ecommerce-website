import React, { useState } from "react";
import { Layout } from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");

  const Navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("forget worked")

    // toast.success("registered successfully");
    // try {
    //   const res = await fetch(
    //     "http://localhost:4000/api/v1/auth/forgotpassword",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: "email",
    //         newPassword: "newPassword",
    //         question: "question",
    //       }),
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       if (result) {
    //         toast.success(result.data && result.data.message);
    //         console.log("navigating to login page");
    //         Navigate("/login");
    //       } else {
    //         console.log(err);
    //         toast.success(res.data.message);
    //       }
    //     });

    // {
    //   email,
    //   newPassword,
    //   question,
    // }

    //   if (res && res.data.success) {
    //     toast.success(res.data && res.data.message);
    //     console.log("navigating to login page");
    //     Navigate("/login");
    //   } else {
    //     console.log(err);
    //     toast.success(res.data.message);
    //   }
    //   } catch (e) {
    //     console.log(e);
    //     toast.error("Something went wrong ");
    //   }
    // };

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          question,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        Navigate("/login");
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
    <Layout title={"Forget Password - Ecommerce App"}>
      <h1>forget password page</h1>
      <div className="register">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit} method="post">
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
              type="text"
              className="form-control"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              id="exampleInputQuestion"
              placeholder="Enter Your favourite movie"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your new Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};
