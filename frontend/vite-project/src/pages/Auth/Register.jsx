import React, { useState } from "react";
import { Layout } from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  const Navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, address, phone);
    console.log("question is:", question);
    // toast.success("registered successfully");
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          question,
        }
      );
      if (res.data.success) {
        toast(res.data && res.data.message);
        console.log("navigating to login page");
        console.log("question is :", question);

        Navigate("/login");
      } else {
        toast(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast("Something went wrong ");
    }
  };

  // console.log(process.env.REACT_APP_API);

  return (
    <Layout title={"Register - Ecommerce App"}>
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Name"
              required
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your PhoneNo"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="exampleInputAddress"
              placeholder="Enter Your Address"
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
              placeholder="What  is your favourite movie"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};
