import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div
        style={{
          marginTop: 50,
          marginBottom: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
        >
          Goto Home
        </Link>
      </div>
      <h1 style={{ color: "red", textAlign: "center" }}>404 Page Not Found</h1>
    </div>
  );
};

export { Error };
