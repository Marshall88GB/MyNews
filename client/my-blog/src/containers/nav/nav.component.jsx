import React from "react";

import { NavWrapper, NavLInks } from "./nav.styles";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavLInks to="/">Home</NavLInks>

      <NavLInks to="/it_news">IT News</NavLInks>

      <NavLInks to="/my_thoughts">My thoughts</NavLInks>
      <NavLInks to="/big_changes">Big changes</NavLInks>

      <NavLInks to="/contact_me">Contact me</NavLInks>
    </NavWrapper>
  );
};

export default Navigation;
