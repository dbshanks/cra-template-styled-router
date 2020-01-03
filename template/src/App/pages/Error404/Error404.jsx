import React from "react";
import Error404Style from "./Error404.styles";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Error404Style>
      <h1>404</h1>
      <h2>Page not found.</h2>
      <Link to="/">Return to Home</Link>
    </Error404Style>
  );
};

export default Error404;
