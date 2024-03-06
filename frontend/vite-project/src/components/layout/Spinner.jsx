import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Spinner = () => {
  const [count, setCount] = useState(5);
  const Navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevVal) => --prevVal);
    }, 1000);
    count === 0 &&
      Navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, Navigate, location]);

  return (
    <>
      <div
        className="d-flex  flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} seconds</h1>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Loading...</span>
        </button>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    </>
  );
};
