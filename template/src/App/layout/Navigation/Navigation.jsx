import React from "react";
import { Link } from "react-router-dom";
import NavigationBarStyle from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavigationBarStyle>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavigationBarStyle>
  );
};

export default Navigation;
